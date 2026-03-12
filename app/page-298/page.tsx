import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page298Page() {
  return (
    <div>
      <h1>page-298</h1>
      <LikeButton label="page-298" />
      <p>
        This is a static page for <em>page-298</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
