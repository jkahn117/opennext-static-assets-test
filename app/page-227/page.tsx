import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page227Page() {
  return (
    <div>
      <h1>page-227</h1>
      <LikeButton label="page-227" />
      <p>
        This is a static page for <em>page-227</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
