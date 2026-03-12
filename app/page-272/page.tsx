import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page272Page() {
  return (
    <div>
      <h1>page-272</h1>
      <LikeButton label="page-272" />
      <p>
        This is a static page for <em>page-272</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
