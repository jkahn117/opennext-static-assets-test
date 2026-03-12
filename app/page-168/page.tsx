import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page168Page() {
  return (
    <div>
      <h1>page-168</h1>
      <LikeButton label="page-168" />
      <p>
        This is a static page for <em>page-168</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
