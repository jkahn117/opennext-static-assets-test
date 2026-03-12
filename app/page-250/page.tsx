import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page250Page() {
  return (
    <div>
      <h1>page-250</h1>
      <LikeButton label="page-250" />
      <p>
        This is a static page for <em>page-250</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
