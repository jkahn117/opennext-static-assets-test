import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page005Page() {
  return (
    <div>
      <h1>page-005</h1>
      <LikeButton label="page-005" />
      <p>
        This is a static page for <em>page-005</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
