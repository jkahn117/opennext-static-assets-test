# Serving Pre-rendered Pages as Static Assets on Cloudflare

## Problem

When deploying a Next.js app to Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`), **all page requests go through the Worker** — even for pages that were statically generated at build time.

Next.js generates HTML for static/SSG pages during `next build` (300 pages in our test app). OpenNext's default build bundles these into JSON `.cache` files inside `.open-next/cache/`, which the Worker reads at runtime. The `.open-next/assets/` directory — the only part uploaded to Cloudflare's edge CDN — contains only JS chunks, CSS, and public files. No HTML.

This means every request, static or dynamic, invokes the Worker.

## The Test App

A Next.js 16 app with a deliberate mix of rendering strategies:

| Route | Type | Count |
|---|---|---|
| `/`, `/about` | Static (SSG) | 2 |
| `/blog/[slug]` | Static via `generateStaticParams` | 196 |
| `/docs/[lang]/[topic]` | Static via `generateStaticParams` | 100 |
| `/dashboard` | Dynamic SSR (`force-dynamic`) | 1 |

**~300 static pages, 1 dynamic page.**

## Before: Default Configuration

### `open-next.config.ts`

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
```

### `wrangler.jsonc`

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "opennext-static-assets-test",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-03-10",
  "compatibility_flags": ["nodejs_compat"],

  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}
```

### `package.json` scripts

```json
{
  "build:worker": "opennextjs-cloudflare build",
  "preview": "opennextjs-cloudflare build && wrangler dev",
  "deploy": "opennextjs-cloudflare build && wrangler deploy"
}
```

### Before: Build Output

| Directory | Size | Contents |
|---|---|---|
| `.open-next/` (total) | **35 MB** | |
| `assets/` | 776 KB | JS chunks, public SVGs, favicon, BUILD_ID |
| `cache/` | 8.7 MB | 300 pre-rendered pages as `.cache` JSON |
| `server-functions/` | 25 MB | Worker code + bundled node_modules |
| `middleware/` | 244 KB | Edge middleware |

**0 HTML files in `assets/`.** All 300 static pages served through the Worker.

## After: Static Assets Incremental Cache

OpenNext includes a `static-assets-incremental-cache` override that reads cached pages from the `ASSETS` binding (Cloudflare's edge CDN) instead of processing them in the Worker. The cache entries are placed under `cdn-cgi/_next_cache/` in the assets directory — a path only accessible to the Worker internally, not publicly routable.

### How It Works

1. **Build** — `opennextjs-cloudflare build` runs the Next.js build and produces `.open-next/cache/` with all pre-rendered pages as `.cache` files (JSON containing HTML, RSC payload, metadata).

2. **Populate** — `opennextjs-cloudflare populateCache` copies `.open-next/cache/` into `.open-next/assets/cdn-cgi/_next_cache/`. This puts the cached pages alongside the JS/CSS assets.

3. **Deploy** — `wrangler deploy` uploads everything in `.open-next/assets/` to Cloudflare's edge CDN.

4. **Runtime** — When a request hits a static page, the Worker calls `env.ASSETS.fetch()` to read the cached page from the edge CDN instead of re-rendering it. The ASSETS binding serves it directly from Cloudflare's network.

### `open-next.config.ts`

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  tagCache: "dummy",
});
```

Two config options changed:

- **`incrementalCache: staticAssetsIncrementalCache`** — Replaces the default cache with one that reads from `env.ASSETS`. It fetches cache entries at `cdn-cgi/_next_cache/{buildId}/{path}.cache`. This cache is **read-only** — `set()` and `delete()` are no-ops that log errors.

- **`tagCache: "dummy"`** — Disables tag-based revalidation tracking. Required because the static assets cache cannot be invalidated at runtime. No D1, KV, or Durable Object bindings are needed for the tag cache.

### `wrangler.jsonc`

No changes. The existing `assets.directory` and `ASSETS` binding already point to `.open-next/assets/`, which is where `populateCache` writes the cache files.

### `package.json` scripts

```json
{
  "build:worker": "opennextjs-cloudflare build && opennextjs-cloudflare populateCache local",
  "preview": "opennextjs-cloudflare build && opennextjs-cloudflare populateCache local && wrangler dev",
  "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare populateCache remote && wrangler deploy"
}
```

The `populateCache` command is added after every build:
- **`local`** — for local development with `wrangler dev`
- **`remote`** — for production deployment (populates remote KV/R2/D1 if used; for static assets it behaves the same as `local` since it just copies files)

### After: Build Output

| Directory | Size | Contents |
|---|---|---|
| `.open-next/` (total) | **44 MB** | |
| `assets/` | **9.5 MB** | JS chunks, public files, **+ 301 `.cache` files** |
| `assets/cdn-cgi/_next_cache/` | 8.7 MB | Pre-rendered pages for edge serving |
| `cache/` | 8.7 MB | Source cache (not deployed) |
| `server-functions/` | 25 MB | Worker code (unchanged) |

**301 cache files now in `assets/`.** Static pages served from Cloudflare's edge CDN.

## Tradeoffs

| | Default | Static Assets Cache |
|---|---|---|
| Static page serving | Through Worker | Edge CDN via ASSETS binding |
| ISR / revalidation | Supported | Not supported (read-only) |
| On-demand revalidation | Supported | Not supported |
| Required bindings | KV/R2/D1 + Durable Objects | ASSETS only |
| Assets upload size | ~776 KB | ~9.5 MB |
| Infrastructure complexity | Higher (cache stores + DOs) | Lower (just static files) |

This approach is best suited for apps where static pages are truly static — rebuilt and redeployed when content changes, with no runtime revalidation needed.
