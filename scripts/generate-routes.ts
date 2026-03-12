/**
 * Generates 99 route directories, each with a [slug] dynamic segment
 * producing 3 static pages via generateStaticParams.
 *
 * Total: 99 routes x 3 pages + home + dashboard = 299 pages
 * Total route segments: 100 (99 categories + home)
 *
 * Run: npx tsx scripts/generate-routes.ts
 */

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const CATEGORIES = Array.from({ length: 99 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `section-${num}`;
});

const SLUGS = ["overview", "details", "reference"];

for (const category of CATEGORIES) {
  const dir = path.join("app", category, "[slug]");
  mkdirSync(dir, { recursive: true });

  const pageContent = `import Link from "next/link";
import { LikeButton } from "../../components/like-button";

const SLUGS = ${JSON.stringify(SLUGS)} as const;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function ${toPascalCase(category)}Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>${category}: {slug}</h1>
      <LikeButton label={\`${category}/\${slug}\`} />
      <p>
        This is the <strong>{slug}</strong> page for <em>${category}</em>,
        pre-rendered at build time via generateStaticParams.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
`;

  writeFileSync(path.join(dir, "page.tsx"), pageContent);
}

console.log(`Generated ${CATEGORIES.length} route directories`);
console.log(`Each with ${SLUGS.length} static pages = ${CATEGORIES.length * SLUGS.length} pages`);
console.log(`+ home + dashboard = ${CATEGORIES.length * SLUGS.length + 2} total`);

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
