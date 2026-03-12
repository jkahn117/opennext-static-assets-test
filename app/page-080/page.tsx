import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page080Page() {
  return (
    <div>
      <h1>page-080</h1>
      <LikeButton label="page-080" />
      <p>
        This is a static page for <em>page-080</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
