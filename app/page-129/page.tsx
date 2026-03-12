import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page129Page() {
  return (
    <div>
      <h1>page-129</h1>
      <LikeButton label="page-129" />
      <p>
        This is a static page for <em>page-129</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
