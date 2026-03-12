import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page049Page() {
  return (
    <div>
      <h1>page-049</h1>
      <LikeButton label="page-049" />
      <p>
        This is a static page for <em>page-049</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
