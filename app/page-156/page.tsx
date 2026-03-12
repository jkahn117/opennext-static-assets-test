import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page156Page() {
  return (
    <div>
      <h1>page-156</h1>
      <LikeButton label="page-156" />
      <p>
        This is a static page for <em>page-156</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
