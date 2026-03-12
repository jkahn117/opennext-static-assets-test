import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page231Page() {
  return (
    <div>
      <h1>page-231</h1>
      <LikeButton label="page-231" />
      <p>
        This is a static page for <em>page-231</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
