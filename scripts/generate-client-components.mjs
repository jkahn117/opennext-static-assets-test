/**
 * Generates:
 *   1. app/components/shared/label-01.ts – label-10.ts  (10 shared utility modules, no "use client")
 *   2. app/components/client/badge-001.tsx – badge-100.tsx  (100 client components, each importing 2 labels)
 *   3. app/components/ClientBadges.tsx  (barrel server component that renders all 100 badges)
 *
 * Staggering pattern: badge N imports from label-((N-1)%10)+1 and label-(N%10)+1
 *
 * Run: node scripts/generate-client-components.mjs
 */

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const LABEL_COUNT = 10;
const BADGE_COUNT = 100;

const LABEL_NAMES = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa"];

// ── 1. Shared label modules ────────────────────────────────────────────────

mkdirSync(path.join("app", "components", "shared"), { recursive: true });

for (let i = 1; i <= LABEL_COUNT; i++) {
  const num = String(i).padStart(2, "0");
  const name = LABEL_NAMES[i - 1];
  const content = `export const LABEL_${num} = "${name}";
export function formatLabel${num}(suffix: string) {
  return \`\${LABEL_${num}}-\${suffix}\`;
}
`;
  writeFileSync(path.join("app", "components", "shared", `label-${num}.ts`), content);
}

console.log(`Generated ${LABEL_COUNT} shared label modules`);

// ── 2. Client badge components ─────────────────────────────────────────────

mkdirSync(path.join("app", "components", "client"), { recursive: true });

for (let i = 1; i <= BADGE_COUNT; i++) {
  const num = String(i).padStart(3, "0");

  // Staggered import pair: ((i-1)%10)+1 and (i%10)+1
  const labelA = String(((i - 1) % LABEL_COUNT) + 1).padStart(2, "0");
  const labelB = String((i % LABEL_COUNT) + 1).padStart(2, "0");

  const content = `"use client";
import { LABEL_${labelA}, formatLabel${labelA} } from "../shared/label-${labelA}";
import { LABEL_${labelB}, formatLabel${labelB} } from "../shared/label-${labelB}";

export default function ClientBadge${num}() {
  return <span className="rounded border px-2 py-1 text-xs">{formatLabel${labelA}(LABEL_${labelB})}</span>;
}
`;
  writeFileSync(path.join("app", "components", "client", `badge-${num}.tsx`), content);
}

console.log(`Generated ${BADGE_COUNT} client badge components`);

// ── 3. ClientBadges barrel component ──────────────────────────────────────

const imports = Array.from(
  { length: BADGE_COUNT },
  (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `import ClientBadge${num} from "./client/badge-${num}";`;
  }
).join("\n");

const renders = Array.from(
  { length: BADGE_COUNT },
  (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `      <ClientBadge${num} />`;
  }
).join("\n");

const barrel = `${imports}

export default function ClientBadges() {
  return (
    <div>
${renders}
    </div>
  );
}
`;

writeFileSync(path.join("app", "components", "ClientBadges.tsx"), barrel);
console.log("Generated app/components/ClientBadges.tsx");
