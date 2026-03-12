import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page117Page() {
  return (
    <div>
      <h1>page-117</h1>
      <LikeButton label="page-117" />
      <p>
        This is a static page for <em>page-117</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
