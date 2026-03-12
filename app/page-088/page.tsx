import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page088Page() {
  return (
    <div>
      <h1>page-088</h1>
      <LikeButton label="page-088" />
      <p>
        This is a static page for <em>page-088</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
