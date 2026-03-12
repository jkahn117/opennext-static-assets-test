import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page269Page() {
  return (
    <div>
      <h1>page-269</h1>
      <LikeButton label="page-269" />
      <p>
        This is a static page for <em>page-269</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
