import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page086Page() {
  return (
    <div>
      <h1>page-086</h1>
      <LikeButton label="page-086" />
      <p>
        This is a static page for <em>page-086</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
