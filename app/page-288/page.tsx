import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page288Page() {
  return (
    <div>
      <h1>page-288</h1>
      <LikeButton label="page-288" />
      <p>
        This is a static page for <em>page-288</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
