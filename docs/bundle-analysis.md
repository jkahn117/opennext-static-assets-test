# Bundle Size Analysis: OpenNext Static Assets on Cloudflare

An analysis of how bundle size changes across three configurations of a Next.js 16 app deployed to Cloudflare Workers via `@opennextjs/cloudflare`.

## Test App

A Next.js 16.1.6 App Router project with ~300 statically generated pages and 1 dynamic page:

| Route | Rendering | Count |
|---|---|---|
| `/`, `/about` | Static (SSG) | 2 |
| `/blog/[slug]` | SSG via `generateStaticParams` | 196 |
| `/docs/[lang]/[topic]` | SSG via `generateStaticParams` (nested) | 100 |
| `/dashboard` | Dynamic SSR (`force-dynamic`) | 1 |

## The Three Stages

| Stage | Description |
|---|---|
| **1. Default** | Server-only pages, default OpenNext config — Worker serves everything |
| **2. Static assets cache** | Same pages, switched to `staticAssetsIncrementalCache` — pre-rendered pages served from edge CDN |
| **3. With client component** | Added a `"use client"` `LikeButton` (uses `useState`) to all static page templates |

---

## Stage 1: Default Configuration (Server-Only Pages)

Default `defineCloudflareConfig({})`. No cache overrides. All requests — static and dynamic — route through the Worker.

### Build Output

| Directory | Size | Files | Contents |
|---|---|---|---|
| **`.open-next/` total** | **35 MB** | | |
| `assets/` | 776 KB | 21 | JS chunks, public SVGs, favicon, `BUILD_ID` |
| `assets/_next/static/` | 724 KB | 14 | Hashed JS chunks + manifests |
| `cache/` | 8.7 MB | 301 | Pre-rendered pages as `.cache` JSON |
| `server-functions/` | 25 MB | — | Worker code + bundled `node_modules` |
| `middleware/` | 244 KB | — | Edge middleware |
| `worker.js` | 4 KB | 1 | Entry point |

**Key observation:** The 300 static pages exist only as `.cache` files in `cache/`, which is not part of the deployed assets. The `assets/` directory contains no HTML — only JS, public files, and build metadata. Every page request invokes the Worker.

---

## Stage 2: Static Assets Incremental Cache (Server-Only Pages)

Switched to `staticAssetsIncrementalCache` + `tagCache: "dummy"`. Added `populateCache` step to build scripts, which copies cached pages into `assets/cdn-cgi/_next_cache/`.

### Config Changes

```ts
// open-next.config.ts
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  tagCache: "dummy",
});
```

### Build Output

| Directory | Size | Files | Contents |
|---|---|---|---|
| **`.open-next/` total** | **42 MB** | | |
| `assets/` | **9.5 MB** | **322** | JS chunks, public files, **+ 301 cached pages** |
| `assets/_next/static/` | 724 KB | 14 | Hashed JS chunks (unchanged) |
| `assets/cdn-cgi/_next_cache/` | **8.7 MB** | **301** | Pre-rendered pages for edge serving |
| `cache/` | 8.7 MB | 301 | Source cache (not deployed, duplicated) |
| `server-functions/` | 23 MB | — | Worker code |
| `middleware/` | 248 KB | — | Edge middleware |

### Delta from Stage 1

| Metric | Stage 1 | Stage 2 | Change |
|---|---|---|---|
| Total `.open-next/` | 35 MB | 42 MB | **+7 MB** |
| `assets/` deployed to CDN | 776 KB | 9.5 MB | **+8.7 MB** |
| JS chunks | 724 KB (14 files) | 724 KB (14 files) | No change |
| Static pages in assets | 0 | 301 files | **+301 files** |
| Server functions | 25 MB | 23 MB | -2 MB |

The total build directory grows by ~7 MB because the cache is now duplicated — once in `cache/` (build artifact) and once in `assets/cdn-cgi/` (for deployment). Only `assets/` is uploaded to Cloudflare, so the deployed payload increases from 776 KB to 9.5 MB. The server functions actually shrank slightly between builds (minor build variance).

---

## Stage 3: Adding a Client Component

Added a `LikeButton` component with `"use client"`, `useState`, and an `onClick` handler to every static page template (home, about, blog `[slug]`, docs `[lang]/[topic]`). The component renders a like counter with a button.

### Build Output

| Directory | Size | Files | Contents |
|---|---|---|---|
| **`.open-next/` total** | **44 MB** | | |
| `assets/` | 9.5 MB | 323 | JS chunks, public files, cached pages |
| `assets/_next/static/` | 736 KB | **15** | Hashed JS chunks (**+1 new chunk**) |
| `assets/cdn-cgi/_next_cache/` | 8.7 MB | 301 | Pre-rendered pages |
| `cache/` | 8.7 MB | 301 | Source cache |
| `server-functions/` | **25 MB** | — | Worker code |
| `middleware/` | 248 KB | — | Edge middleware |

### JS Chunks Breakdown

| Chunk | Size | Purpose |
|---|---|---|
| `8b72cfc40036c827.js` | 219 KB | React runtime |
| `07b9f4a0524f22c2.js` | 128 KB | React DOM |
| `a6dad97d9634a72d.js` | 110 KB | Framework |
| `5faeea72d2e78ff5.js` | 38 KB | Next.js client runtime |
| `c4d90098b4abc498.js` | 30 KB | Shared chunk |
| `turbopack-*.js` | 10 KB | Turbopack runtime |
| Other chunks (5) | ~34 KB | Layout, pages, LikeButton |
| **Total** | **~696 KB** | |

### Cache File Sizes (Per Category)

Each `.cache` file is JSON containing pre-rendered HTML, RSC payload, segment data, and metadata.

| Category | Count | Avg per file | Total |
|---|---|---|---|
| Blog posts | 196 | 25.9 KB | 5.0 MB |
| Docs pages | 100 | 30.3 KB | 3.0 MB |
| Other static (home, about, errors) | 5 | 41.9 KB | 0.2 MB |

### Delta from Stage 2

| Metric | Stage 2 (no client) | Stage 3 (with client) | Change |
|---|---|---|---|
| Total `.open-next/` | 42 MB | 44 MB | +2 MB |
| `assets/` deployed to CDN | 9.5 MB | 9.5 MB | ~same |
| JS chunks | 724 KB (14 files) | 736 KB (15 files) | **+12 KB, +1 file** |
| Cached pages | 8.7 MB (301 files) | 8.7 MB (301 files) | ~same |
| Server functions | 23 MB | 25 MB | +2 MB |

---

## Summary Across All Three Stages

| Metric | Stage 1 (default) | Stage 2 (static cache) | Stage 3 (+ client component) |
|---|---|---|---|
| **Total build** | 35 MB | 42 MB | 44 MB |
| **Deployed assets** | 776 KB | 9.5 MB | 9.5 MB |
| JS chunks (client) | 724 KB / 14 files | 724 KB / 14 files | 736 KB / 15 files |
| Cached pages in assets | 0 | 301 files / 8.7 MB | 301 files / 8.7 MB |
| Server functions | 25 MB | 23 MB | 25 MB |
| Static pages via Worker | All | None (edge CDN) | None (edge CDN) |

### Findings

1. **The biggest size change is the cache migration (Stage 1 to 2), not adding client code (Stage 2 to 3).** Moving pre-rendered pages into static assets added 8.7 MB to the deployed payload. Adding a client component added 12 KB.

2. **Client component JS is deduplicated across pages.** The `LikeButton` ships as a single hashed chunk, referenced by all 300 pages. It does not bloat the per-page cache files — each page's `.cache` file only stores a small serialized component reference, not the component code itself.

3. **Cache files are the dominant cost.** At 8.7 MB for 301 files (avg ~29 KB each), the pre-rendered page cache dwarfs the JS bundle. Each `.cache` file contains full HTML, RSC payload, segment data, and metadata as JSON. For a content-heavy site, this would grow linearly with page count.

4. **Server functions are the largest component regardless of configuration.** At 23-25 MB (dominated by 20 MB of bundled `node_modules`), the Worker code is the heaviest part of the build. This is the Next.js server runtime and doesn't change significantly between configurations.

5. **The deployed payload tradeoff is clear:** 776 KB (default) vs 9.5 MB (static assets cache) for edge serving of static pages. For a site with 300 pages, the ~9 MB increase buys you edge-served static content without Worker invocation. The break-even depends on request volume and whether the latency improvement justifies the larger upload.
