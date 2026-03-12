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

      <h2>Pages (299 unique routes)</h2>
      <ul>
        {Array.from({ length: 5 }, (_, i) => {
          const page = `page-${String(i + 1).padStart(3, "0")}`;
          return (
            <li key={page}>
              <Link href={`/${page}`}>{page}</Link>
            </li>
          );
        })}
        <li>... and 294 more pages</li>
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
