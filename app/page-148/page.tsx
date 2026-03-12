import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page148Page() {
  return (
    <div>
      <h1>page-148</h1>
      <LikeButton label="page-148" />
      <p>
        This is a static page for <em>page-148</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
