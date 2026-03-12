import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page223Page() {
  return (
    <div>
      <h1>page-223</h1>
      <LikeButton label="page-223" />
      <p>
        This is a static page for <em>page-223</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
