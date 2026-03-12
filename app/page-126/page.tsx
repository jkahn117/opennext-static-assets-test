import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page126Page() {
  return (
    <div>
      <h1>page-126</h1>
      <LikeButton label="page-126" />
      <p>
        This is a static page for <em>page-126</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
