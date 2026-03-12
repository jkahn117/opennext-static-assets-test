/**
 * Generates route directories, each as a simple static page.
 * 299 unique routes + home + dashboard = 301 total pages, ~300 unique routes.
 *
 * Run: npx tsx scripts/generate-routes.ts
 */

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROUTE_COUNT = 299;

const ROUTES = Array.from({ length: ROUTE_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `page-${num}`;
});

for (const route of ROUTES) {
  const dir = path.join("app", route);
  mkdirSync(dir, { recursive: true });

  const pageContent = `import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function ${toPascalCase(route)}Page() {
  return (
    <div>
      <h1>${route}</h1>
      <LikeButton label="${route}" />
      <p>
        This is a static page for <em>${route}</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
`;

  writeFileSync(path.join(dir, "page.tsx"), pageContent);
}

console.log(`Generated ${ROUTES.length} route directories (1 page each)`);
console.log(`+ home + dashboard = ${ROUTES.length + 2} total pages`);
console.log(`Total unique routes: ${ROUTES.length + 1} (+ dashboard)`);

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
