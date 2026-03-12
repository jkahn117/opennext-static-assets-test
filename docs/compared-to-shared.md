# Client Reference Manifest Analysis: Test App vs. Customer App

A comparison of `page_client-reference-manifest.js` files between our minimal test app and a real-world production app (Cboe/Chroma website), with recommendations for reducing bundle size.

## What is a Client Reference Manifest?

Each route in a Next.js App Router project generates a `page_client-reference-manifest.js` file. This file tells the Next.js server:

- **`ssrModuleMapping`** — How to map client module IDs to their SSR equivalents for server-side rendering.
- **`clientModules`** — Every `"use client"` module reachable from this route, along with the JS chunks needed to load it in the browser.

The manifest is a server-side file — it's never sent to the browser. But it's bundled into the Worker, and **one copy exists per route**. In our Stage 5 test (300 routes), 303 manifest files totaled 2.6 MB.

## Side-by-Side Comparison

| Metric | Test app (`/page`) | Customer app (`/[lang]/page`) | Factor |
|---|---|---|---|
| **File size** | 8.6 KB | **134 KB** | **16x** |
| SSR module mappings | 0 | 178 | — |
| Client module entries | ~20 | 409 | **~20x** |
| Unique chunk files referenced | ~5 | 38 | **8x** |
| Total chunk path references | 35 | 1,041 | **30x** |
| Entries with non-empty chunk lists | ~10 | 58 | 6x |
| Avg chunks per entry (non-zero) | 1-2 | 17.9 | **~12x** |
| Max chunks in a single entry | 2 | 27 | 14x |

The customer's manifest for a single route is **134 KB** — roughly the same size as **16 of our manifests combined**. Across many routes, this difference compounds significantly.

## Why the Customer Manifest is 16x Larger

Three factors compound to produce the size difference.

### 1. Many Client Components (~409 entries vs. ~20)

The manifest includes an entry for every `"use client"` module reachable from the route — not just components used directly on the page, but everything reachable through the component tree, including layout components and third-party libraries.

The customer's home page pulls in:

| Source | Module count | Examples |
|---|---|---|
| Card components | 13 | Various Card variants in `app/components/chroma/Card/` |
| @tanstack/react-query | 13 | HydrationBoundary, QueryClientProvider, useQuery, useMutation, useInfiniteQuery, useQueries, useMutationState, useIsFetching, IsRestoringProvider, QueryErrorResetBoundary |
| Google Fonts | 10 | Inter, Open Sans, Montserrat, Hanken Grotesk, Noto Sans (+ JP, TC, SC, KR variants), Ubuntu Mono |
| SingleSecurity widgets | 8 | Market data display components |
| FX market components | 7 | `/[lang]/markets/fx/_components` |
| Form components | 6 | `app/components/common/forms/` |
| Layout components | ~9 | Header, Footer, LinguiClientProvider, react-query-provider, request-headers-provider, error/not-found pages |
| Next.js internals | ~10 | client-page, client-segment, error-boundary, layout-router, metadata, link, script |
| Other page components | ~30+ | Various market, trading, data, and index components |

Our test app has **1 client component** (`LikeButton`) plus ~10 Next.js framework internals.

The key contributor here is **@tanstack/react-query**: it exposes 13 individual `"use client"` module entry points. Even if the page only uses `useQuery`, the manifest includes every exported hook because Next.js traces the full module graph from the provider components used in layouts.

### 2. Deep Chunk Dependency Chains (avg 18 vs. 1-2 chunks per entry)

This is the **single biggest size multiplier**. Each client module entry includes the full ordered list of JS chunks needed to load it in the browser. In the customer's app, a single component like `next/dist/client/app-dir/link.js` requires **27 chunks**:

```
7bf36345-7a2223be8ea02988.js, 7261-0c70c13f8ec9ca67.js,
9487-b4ecf5f78cba720f.js, 3970-90ae97b00cd502b3.js,
8903-c28af0a83d14487a.js, 7933-a5ee9af06334490c.js,
4068-8673990223a5907a.js, 496-7037c0ec548bb262.js,
8864-f92a1892cd60baee.js, 1675-20c689f556c348c9.js,
3981-75564a1500f521a8.js, 5067-ccc198844757ab68.js,
3605-1cb687e458b0b8a3.js, 8144-3bf8e8b8c1f4238c.js,
102-9980f612626d8dcd.js, 7653-9058a8345f97e503.js,
1124-299ae05fee649b3c.js, 7988-7eabe2125f53eb5e.js,
4673-1814915eb1b8a833.js, 1186-200c153ef6a82c8b.js,
4492-950ddec54fac4fea.js, 9721-fb81629fe2d11db5.js,
1509-5f97b083678c256a.js, 6051-bcbc2b5ff767a034.js,
181-0f41a3c3ee6f4a3b.js, 4854-e45445364872546a.js,
app/%5Blang%5D/page-a1abc4c8a900de66.js
```

This happens because the app uses **webpack**, which aggressively splits code into many small shared chunks. Each chunk list is the full transitive dependency chain needed at runtime.

Our test app uses **Turbopack**, which produces fewer, larger chunks — so each entry references only 1-2 chunks.

### 3. Chunk Lists Are Repeated Verbatim (No Deduplication)

The same 27-chunk array for the page's dependency chain is copied in full into **every module entry that shares those dependencies**. There's no structural deduplication within the manifest format.

In the customer's manifest:

- The `@tanstack/react-query` modules (HydrationBoundary, QueryClientProvider, useQuery, useMutation, etc.) each carry an **identical 27-chunk array**.
- The layout components (Header, Footer, LinguiClientProvider, etc.) each carry an **identical 14-chunk array**.
- That's `~10 entries × 27 chunks × ~55 bytes` + `~6 entries × 14 chunks × ~55 bytes` = **~20 KB** just from repeated chunk lists for those two groups.

Across all 58 entries with non-empty chunk lists, the total is roughly **57 KB of chunk path strings** — nearly half the file's 134 KB size.

## Impact at Scale

The customer's manifest is for a single route (`/[lang]/page`). The impact multiplies with route count:

| Routes | Test app (8.6 KB/manifest) | Customer app (134 KB/manifest) |
|---|---|---|
| 10 | 86 KB | 1.3 MB |
| 50 | 430 KB | 6.5 MB |
| 100 | 860 KB | **13 MB** |
| 300 | 2.6 MB | **39 MB** |

At 100 routes, manifests alone would add **13 MB** to the server functions — before accounting for `handler.mjs` growth and other per-route metadata. This is a significant contributor to Worker bundle size.

Note: Not every route will have a manifest this large. Routes with fewer client components in their tree will have smaller manifests. The home page is often one of the heaviest because it tends to import the most components.

## Recommendations

Based on our testing across five stages (4 to 300 routes, with and without client components), here are concrete steps to reduce bundle size.

### 1. Consolidate Routes Where Possible

**Impact: High (server functions)**

This is the single most effective lever. From our testing:

| Routes | Server functions | Manifests |
|---|---|---|
| 4 routes, ~300 pages | 25 MB | 7 files / 57 KB |
| 100 routes, ~300 pages | 34 MB | 103 files / 892 KB |
| 300 routes, ~300 pages | 50 MB | 303 files / 2.6 MB |

Same page count, dramatically different server bundle sizes. Where possible:

- **Use dynamic route segments** (`/[slug]`, `/[lang]/[topic]`) instead of individual route directories. One route with `generateStaticParams` producing 100 pages generates 1 manifest. 100 separate routes generate 100 manifests.
- **Group related pages under shared dynamic segments.** The customer's `[lang]` segment is already good — but if sub-routes under it could share a dynamic segment instead of being separate routes, the manifest count drops.

### 2. Reduce Client Component Surface Area

**Impact: High (manifest size per route)**

Each `"use client"` module reachable from a route adds an entry to every manifest in that route's tree. Steps to reduce this:

- **Audit barrel exports.** If a component library re-exports everything from an index file, importing one component may pull the entire library's client modules into the manifest. Use direct imports (`import { Card } from './Card/Card'`) instead of barrel imports (`import { Card } from './components'`).
- **Move provider wrapping to the lowest necessary layout.** The customer's root layout includes `react-query-provider`, `LinguiClientProvider`, `request-headers-provider`, Header, and Footer — all client components. Every route under that layout inherits all of these in its manifest. If some routes don't need react-query, consider moving that provider to a nested layout.
- **Evaluate @tanstack/react-query's footprint.** It contributes 13 module entries to every manifest. If only `useQuery` and `QueryClientProvider` are used on most pages, the other 11 entries (useInfiniteQuery, useMutation, useMutationState, useQueries, useIsFetching, etc.) are dead weight in the manifest. This is a library design issue — the library exports many `"use client"` entry points. Consider whether a lighter alternative could work for simpler pages.

### 3. Consider Turbopack for Production Builds

**Impact: Medium (chunk chain depth)**

The customer's app uses webpack, which produces many small shared chunks — resulting in dependency chains of 14-27 chunks per module entry. Our test app uses Turbopack, which produces fewer, larger chunks with chains of 1-2.

This directly affects manifest size: 27 chunk references per entry × 55 bytes each = ~1.5 KB per module entry vs. ~110 bytes with Turbopack. Across 409 entries, that's a significant difference.

Turbopack is the default for `next dev` in Next.js 15+ and available for production builds in Next.js 16. If the customer is on a compatible version, switching to Turbopack would reduce manifest sizes substantially.

### 4. Reduce Font Count

**Impact: Low-Medium (10 entries per manifest)**

The customer loads 10 Google Fonts (Inter, Open Sans, Montserrat, Hanken Grotesk, Noto Sans, Noto Sans JP/TC/SC/KR, Ubuntu Mono). Each font generates a client module entry in the manifest with chunk references.

If all 10 are genuinely needed for internationalization (the Noto Sans variants suggest CJK language support), this is unavoidable. But if some fonts are unused or could be consolidated, removing them would trim ~10 entries per manifest.

### 5. Use Static Assets Incremental Cache

**Impact: None on manifest size, but reduces overall deployment complexity**

From our testing, switching to `staticAssetsIncrementalCache` moves pre-rendered pages to the edge CDN. This doesn't reduce manifest or server function size, but it does:

- Eliminate the need for KV/R2/D1 cache bindings
- Serve static pages without invoking the Worker
- Reduce the infrastructure required for deployment

For the customer's app, this is a complementary optimization — it won't fix the manifest size issue, but it reduces the load on the Worker for static content.

### Summary of Expected Impact

| Recommendation | Manifest size impact | Server function impact | Effort |
|---|---|---|---|
| Consolidate routes (dynamic segments) | Fewer manifests | **Major reduction** | Medium |
| Reduce client component surface | Smaller per manifest | Moderate reduction | Medium |
| Switch to Turbopack | ~50-70% smaller per manifest | Moderate reduction | Low |
| Reduce font count | Minor (~10 entries) | Minor | Low |
| Static assets cache | None | None (edge CDN benefit) | Low |

The highest-impact combination is **consolidating routes + reducing client component reach**. For the customer's app, if 100 routes could be collapsed to 20-30 using dynamic segments, and the provider/layout component tree could be thinned, the manifest overhead could drop from tens of megabytes to low single digits.
