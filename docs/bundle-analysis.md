# Bundle Size Analysis: OpenNext Static Assets on Cloudflare

An analysis of how bundle size changes across five configurations of a Next.js 16 app deployed to Cloudflare Workers via `@opennextjs/cloudflare`.

## Test App

A Next.js 16.1.6 App Router project with ~300 statically generated pages and 1 dynamic page:

| Route | Rendering | Count |
|---|---|---|
| `/`, `/about` | Static (SSG) | 2 |
| `/blog/[slug]` | SSG via `generateStaticParams` | 196 |
| `/docs/[lang]/[topic]` | SSG via `generateStaticParams` (nested) | 100 |
| `/dashboard` | Dynamic SSR (`force-dynamic`) | 1 |

## The Five Stages

| Stage | Routes | Pages | Description |
|---|---|---|---|
| **1. Default** | 4 | ~300 | Server-only pages, default OpenNext config — Worker serves everything |
| **2. Static assets cache** | 4 | ~300 | Same pages, switched to `staticAssetsIncrementalCache` — edge CDN serving |
| **3. With client component** | 4 | ~300 | Added a `"use client"` `LikeButton` to all static page templates |
| **4. Many routes** | 100 | ~300 | Restructured to 99 section routes + home, same ~300 total pages |
| **5. Max routes** | 300 | ~300 | 299 unique routes (1 page each) + home + dashboard |

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

## Stage 4: Many Routes (~100 Routes, ~300 Pages)

Restructured the app from 4 route segments to 100. Replaced `/about`, `/blog/[slug]` (196 pages), and `/docs/[lang]/[topic]` (100 pages) with 99 section routes (`/section-01/[slug]` through `/section-99/[slug]`), each producing 3 pages via `generateStaticParams`. Same client component (`LikeButton`) on every page.

| Route | Rendering | Count |
|---|---|---|
| `/` | Static (SSG) | 1 |
| `/section-01/[slug]` through `/section-99/[slug]` | SSG via `generateStaticParams` | 297 (99 x 3) |
| `/dashboard` | Dynamic SSR (`force-dynamic`) | 1 |

**Total: 100 route segments, 299 pages + error pages.**

### Build Output

| Directory | Size | Files | Contents |
|---|---|---|---|
| **`.open-next/` total** | **52 MB** | | |
| `assets/` | 9.1 MB | ~323 | JS chunks, public files, cached pages |
| `assets/_next/static/` | 736 KB | 15 | Hashed JS chunks (unchanged) |
| `assets/cdn-cgi/_next_cache/` | 8.3 MB | 301 | Pre-rendered pages |
| `cache/` | 8.3 MB | 301 | Source cache |
| `server-functions/` | **34 MB** | — | Worker code (**+9 MB**) |
| `middleware/` | 328 KB | — | Edge middleware |

### Server Functions Breakdown

The server functions directory is where route count has the biggest impact:

| Component | Stage 3 (4 routes) | Stage 4 (100 routes) | Change |
|---|---|---|---|
| `server-functions/` total | 25 MB | **34 MB** | **+9 MB** |
| `handler.mjs` (bundled server) | 3.0 MB | **6.1 MB** | **+3.1 MB** |
| `index.mjs` | 220 KB | **296 KB** | +76 KB |
| `node_modules/` | 20 MB | 20 MB | No change |
| `.next/` (server metadata) | 1.3 MB | **6.1 MB** | **+4.8 MB** |

### Per-Route Server Metadata

Each route generates server-side files in `.next/server/app/`:

| File type | Count (Stage 3) | Count (Stage 4) | Per route |
|---|---|---|---|
| `page_client-reference-manifest.js` | 7 | **103** | 1 per route segment |
| Other server files (manifests, etc.) | 75 | **555** | ~5 per route segment |
| **Total files** | **82** | **658** | |
| **Total size** | **1.3 MB** | **6.1 MB** | ~8.7 KB/manifest, ~60 KB total/route |

The client reference manifests alone grew from 57 KB (7 files) to **892 KB (103 files)** — a 15x increase for a 25x increase in routes. Each manifest is ~8.7 KB.

### Delta from Stage 3

| Metric | Stage 3 (4 routes) | Stage 4 (100 routes) | Change |
|---|---|---|---|
| Total `.open-next/` | 44 MB | **52 MB** | **+8 MB** |
| `assets/` deployed to CDN | 9.5 MB | 9.1 MB | -0.4 MB (fewer pages slightly smaller) |
| JS chunks | 736 KB (15 files) | 736 KB (15 files) | No change |
| Cached pages | 8.7 MB (301 files) | 8.3 MB (301 files) | -0.4 MB (simpler page content) |
| Server functions | 25 MB | **34 MB** | **+9 MB** |
| `handler.mjs` | 3.0 MB | **6.1 MB** | **+3.1 MB** |
| `.next/` server metadata | 1.3 MB | **6.1 MB** | **+4.8 MB** |
| Client reference manifests | 57 KB (7) | **892 KB (103)** | **+835 KB** |

---

## Stage 5: Maximum Routes (300 Unique Routes, ~300 Pages)

Restructured the app so that every page is its own unique route — 299 routes (`/page-001` through `/page-299`) each producing 1 static page, plus home and dashboard. Same `LikeButton` client component on every page. No `generateStaticParams` — each route is a plain static page component.

| Route | Rendering | Count |
|---|---|---|
| `/` | Static (SSG) | 1 |
| `/page-001` through `/page-299` | Static (SSG) | 299 |
| `/dashboard` | Dynamic SSR (`force-dynamic`) | 1 |

**Total: 300 unique route segments, 301 pages.**

### Build Output

| Directory | Size | Files | Contents |
|---|---|---|---|
| **`.open-next/` total** | **66 MB** | | |
| `assets/` | 8.0 MB | 325 | JS chunks, public files, cached pages |
| `assets/_next/static/` | 736 KB | 15 | Hashed JS chunks (unchanged) |
| `assets/cdn-cgi/_next_cache/` | 7.2 MB | 303 | Pre-rendered pages |
| `cache/` | 7.2 MB | 303 | Source cache |
| `server-functions/` | **50 MB** | — | Worker code (**+16 MB from Stage 4**) |
| `middleware/` | 284 KB | — | Edge middleware |

### Server Functions Breakdown

| Component | Stage 3 (4 routes) | Stage 4 (100 routes) | Stage 5 (300 routes) |
|---|---|---|---|
| `server-functions/` total | 25 MB | 34 MB | **50 MB** |
| `handler.mjs` | 3.0 MB | 6.1 MB | **12 MB** |
| `index.mjs` | 220 KB | 296 KB | 256 KB |
| `node_modules/` | 20 MB | 20 MB | 20 MB |
| `.next/` server metadata | 1.3 MB | 6.1 MB | **16 MB** |

### Per-Route Server Metadata

| File type | Stage 3 (4 routes) | Stage 4 (100 routes) | Stage 5 (300 routes) |
|---|---|---|---|
| Client ref manifests | 7 (57 KB) | 103 (892 KB) | **303 (2.6 MB)** |
| Total `.next/` files | 82 | 658 | **1,858** |
| Route dirs in `.next/server/app` | 17 | 305 | **606** |
| **Total `.next/` size** | **1.3 MB** | **6.1 MB** | **16 MB** |

### Delta from Stage 4

| Metric | Stage 4 (100 routes) | Stage 5 (300 routes) | Change |
|---|---|---|---|
| Total `.open-next/` | 52 MB | **66 MB** | **+14 MB** |
| `assets/` deployed to CDN | 9.1 MB | 8.0 MB | -1.1 MB (simpler pages) |
| JS chunks | 736 KB (15 files) | 736 KB (15 files) | No change |
| Cached pages | 8.3 MB (301 files) | 7.2 MB (303 files) | -1.1 MB (simpler content) |
| Server functions | 34 MB | **50 MB** | **+16 MB** |
| `handler.mjs` | 6.1 MB | **12 MB** | **+5.9 MB** |
| `.next/` server metadata | 6.1 MB | **16 MB** | **+9.9 MB** |
| Client ref manifests | 892 KB (103) | **2.6 MB (303)** | **+1.7 MB** |

---

## Worker Upload Size vs. Cloudflare Limits

The `.open-next/` directory sizes reported above represent the full build output on disk. What actually matters for deployment is the **Worker upload size** — the bundled script that Wrangler sends to Cloudflare. This can be measured with `wrangler deploy --dry-run`:

```
$ wrangler deploy --dry-run --outdir bundled/
Total Upload: 18860.44 KiB / gzip: 1838.12 KiB
```

### Cloudflare Worker Size Limits

| Limit | Workers Free | Workers Paid |
|---|---|---|
| After compression (gzip) | 3 MB | 10 MB |
| Before compression | 64 MB | 64 MB |

The **gzip size is the binding constraint.** Wrangler reports both the uncompressed and compressed sizes.

### Results Across Stages

| Metric | Stage 4 (100 routes) | Stage 5 (300 routes) | Limit (Paid) |
|---|---|---|---|
| Uncompressed upload | 10.9 MB | **18.4 MB** | 64 MB |
| **Gzip upload** | **1.7 MB** | **1.8 MB** | **10 MB** |
| Static asset files | 323 | 325 | 100,000 |

Even at 300 unique routes, the gzipped Worker is only **1.8 MB** — well within the 10 MB paid limit and even under the 3 MB free limit. The uncompressed size nearly doubled (10.9 MB to 18.4 MB), but gzip only added ~130 KB because the per-route code is highly repetitive and compresses extremely well.

### Compression Efficiency

| Stage | Routes | Uncompressed | Gzip | Compression ratio |
|---|---|---|---|---|
| 4 | 100 | 10.9 MB | 1.7 MB | 6.4x |
| 5 | 300 | 18.4 MB | 1.8 MB | 10.1x |

The compression ratio improves as route count increases — more repetitive route definitions means gzip finds more redundancy. Adding 200 routes added 7.5 MB uncompressed but only 130 KB compressed.

### Projected Limits

At the observed rate of ~0.65 KB gzipped per additional route, an app would need roughly **12,600 routes** to hit the 10 MB gzip limit on the paid plan (assuming the same simple page structure). In practice, real apps with diverse dependencies and complex route handlers would compress less efficiently, but the gzip limit is unlikely to be the bottleneck for most Next.js applications.

The more likely constraint at scale is **Worker startup time** (1 second limit), not upload size. A 50 MB uncompressed bundle (Stage 5) means significantly more JavaScript to parse and evaluate at cold start than a 25 MB bundle (Stage 3).

---

## Summary Across All Five Stages

| Metric | Stage 1 (default) | Stage 2 (static cache) | Stage 3 (+ client) | Stage 4 (100 routes) | Stage 5 (300 routes) |
|---|---|---|---|---|---|
| Routes | 4 | 4 | 4 | 100 | **300** |
| Pages | ~300 | ~300 | ~300 | ~300 | ~300 |
| **Total build** | 35 MB | 42 MB | 44 MB | 52 MB | **66 MB** |
| **Deployed assets** | 776 KB | 9.5 MB | 9.5 MB | 9.1 MB | 8.0 MB |
| JS chunks (client) | 724 KB / 14 | 724 KB / 14 | 736 KB / 15 | 736 KB / 15 | 736 KB / 15 |
| Cached pages in assets | 0 | 8.7 MB / 301 | 8.7 MB / 301 | 8.3 MB / 301 | 7.2 MB / 303 |
| Server functions | 25 MB | 23 MB | 25 MB | 34 MB | **50 MB** |
| `handler.mjs` | — | — | 3.0 MB | 6.1 MB | **12 MB** |
| `.next/` server metadata | — | — | 1.3 MB | 6.1 MB | **16 MB** |
| Client ref manifests | — | — | 7 / 57 KB | 103 / 892 KB | **303 / 2.6 MB** |
| Wrangler upload (gzip) | — | — | — | 1.7 MB | **1.8 MB** |
| Static pages via Worker | All | None (CDN) | None (CDN) | None (CDN) | None (CDN) |

### Findings

1. **The biggest size change is the cache migration (Stage 1 to 2), not adding client code (Stage 2 to 3).** Moving pre-rendered pages into static assets added 8.7 MB to the deployed payload. Adding a client component added 12 KB.

2. **Client component JS is deduplicated across pages.** The `LikeButton` ships as a single hashed chunk, referenced by all 300 pages. It does not bloat the per-page cache files — each page's `.cache` file only stores a small serialized component reference, not the component code itself.

3. **Cache files are the dominant cost in deployed assets.** At 7-9 MB for ~300 files (avg ~25 KB each), the pre-rendered page cache dwarfs the JS bundle. Each `.cache` file contains full HTML, RSC payload, segment data, and metadata as JSON. This grows linearly with page count.

4. **Route count significantly impacts server function size on disk, but not gzip upload size.** Going from 4 to 300 routes doubled the server functions from 25 MB to 50 MB on disk. However, gzip upload only grew from 1.7 MB to 1.8 MB because the per-route code is highly repetitive. The growth on disk comes from:
   - **`handler.mjs`** grew from 3.0 MB to 12 MB — the bundled Next.js server inlines route definitions and rendering logic for each route segment.
   - **`.next/` server metadata** grew from 1.3 MB to 16 MB — each route produces ~5-6 files (client reference manifests, layout manifests, etc.) totaling ~50 KB per route.

5. **Client reference manifests scale linearly with routes, not pages.** 4 routes produced 7 manifests (57 KB). 100 routes produced 103 manifests (892 KB). 300 routes produced 303 manifests (2.6 MB). Each manifest is ~8.7 KB regardless of how many pages that route generates. This means an app with 100 routes producing 3 pages each has a much larger Worker than an app with 4 routes producing 75 pages each — even though the total page count is similar.

6. **Deployed assets (CDN payload) are unaffected by route count.** The `assets/` directory stayed at 8-9 MB across Stages 3, 4, and 5. Route count only affects the server-side bundle, not the client-side or cached assets. This is the key advantage of the static assets cache — the edge-served content doesn't care about routing structure.

7. **Gzip compression makes Worker size limits a non-issue for route scaling.** At 300 routes, the gzipped upload is 1.8 MB — well under the 3 MB free limit and far from the 10 MB paid limit. The compression ratio improves with more routes (6.4x at 100 routes, 10.1x at 300 routes) because the repetitive per-route code is ideal for gzip. The more likely constraint at scale is **Worker startup time** (1 second limit) — a 50 MB uncompressed bundle requires significantly more parsing than a 25 MB one.

8. **The deployed payload tradeoff is clear:** 776 KB (default) vs ~8 MB (static assets cache) for edge serving of static pages. For a site with 300 pages, the ~8 MB increase buys you edge-served static content without Worker invocation. Route count doesn't affect this cost — only page count does.
