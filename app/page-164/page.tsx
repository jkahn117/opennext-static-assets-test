import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page164Page() {
  return (
    <div>
      <h1>page-164</h1>
      <LikeButton label="page-164" />
      <p>
        This is a static page for <em>page-164</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
