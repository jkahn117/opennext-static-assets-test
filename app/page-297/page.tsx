import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page297Page() {
  return (
    <div>
      <h1>page-297</h1>
      <LikeButton label="page-297" />
      <p>
        This is a static page for <em>page-297</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
