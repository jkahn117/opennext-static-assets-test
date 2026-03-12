import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page116Page() {
  return (
    <div>
      <h1>page-116</h1>
      <LikeButton label="page-116" />
      <p>
        This is a static page for <em>page-116</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
