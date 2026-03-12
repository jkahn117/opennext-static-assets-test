import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page050Page() {
  return (
    <div>
      <h1>page-050</h1>
      <LikeButton label="page-050" />
      <p>
        This is a static page for <em>page-050</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
