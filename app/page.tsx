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
        <strong>~300 static pages:</strong> 196 blog posts + 100 docs pages (5
        langs x 20 topics) + home + about + _not-found
      </p>

      <h2>Static Pages</h2>
      <ul>
        <li>
          <Link href="/about">About (Static)</Link>
        </li>
      </ul>

      <h2>Blog Posts (196 pages via generateStaticParams)</h2>
      <ul>
        {Array.from({ length: 5 }, (_, i) => {
          const slug = `post-${String(i + 1).padStart(3, "0")}`;
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{slug}</Link>
            </li>
          );
        })}
        <li>... and 191 more</li>
      </ul>

      <h2>Docs (100 pages — [lang]/[topic])</h2>
      <ul>
        {["en", "fr", "de", "es", "ja"].map((lang) => (
          <li key={lang}>
            <Link href={`/docs/${lang}/introduction`}>
              {lang} — introduction
            </Link>
          </li>
        ))}
        <li>... 20 topics per language</li>
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
