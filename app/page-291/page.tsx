import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page291Page() {
  return (
    <div>
      <h1>page-291</h1>
      <LikeButton label="page-291" />
      <p>
        This is a static page for <em>page-291</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
