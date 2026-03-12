import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page124Page() {
  return (
    <div>
      <h1>page-124</h1>
      <LikeButton label="page-124" />
      <p>
        This is a static page for <em>page-124</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
