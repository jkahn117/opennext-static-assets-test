import Link from "next/link";
import { LikeButton } from "./components/like-button";

// This page is statically generated at build time (SSG by default)
export default function Home() {
  return (
    <div>
      <h1>OpenNext Static Assets Test</h1>
      <LikeButton label="the home page" />
      <p>This page is statically generated at build time (SSG).</p>
      <p>
        <strong>~300 static pages:</strong> 99 sections x 3 pages each + home +
        dashboard
      </p>

      <h2>Sections (99 routes, 3 pages each)</h2>
      <ul>
        {Array.from({ length: 5 }, (_, i) => {
          const section = `section-${String(i + 1).padStart(2, "0")}`;
          return (
            <li key={section}>
              <Link href={`/${section}/overview`}>{section}/overview</Link>
            </li>
          );
        })}
        <li>... and 94 more sections</li>
      </ul>

      <h2>Dynamic Pages</h2>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard (Dynamic — SSR)</Link>
        </li>
      </ul>
    </div>
  );
}
