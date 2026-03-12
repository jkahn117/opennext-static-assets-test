import Link from "next/link";
import { LikeButton } from "../components/like-button";

// This page is statically generated at build time (SSG by default)
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <LikeButton label="the about page" />
      <p>This is a static page rendered at build time.</p>
      <p>
        It has no dynamic data fetching, so Next.js will pre-render it as a
        static HTML file that gets uploaded to Cloudflare as a static asset.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
