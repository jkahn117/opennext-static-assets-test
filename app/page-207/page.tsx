import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page207Page() {
  return (
    <div>
      <h1>page-207</h1>
      <LikeButton label="page-207" />
      <p>
        This is a static page for <em>page-207</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
