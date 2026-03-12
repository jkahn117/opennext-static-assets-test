import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page039Page() {
  return (
    <div>
      <h1>page-039</h1>
      <LikeButton label="page-039" />
      <p>
        This is a static page for <em>page-039</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
