import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page047Page() {
  return (
    <div>
      <h1>page-047</h1>
      <LikeButton label="page-047" />
      <p>
        This is a static page for <em>page-047</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
