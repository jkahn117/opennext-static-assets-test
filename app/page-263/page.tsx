import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page263Page() {
  return (
    <div>
      <h1>page-263</h1>
      <LikeButton label="page-263" />
      <p>
        This is a static page for <em>page-263</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
