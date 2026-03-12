import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page085Page() {
  return (
    <div>
      <h1>page-085</h1>
      <LikeButton label="page-085" />
      <p>
        This is a static page for <em>page-085</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
