import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page017Page() {
  return (
    <div>
      <h1>page-017</h1>
      <LikeButton label="page-017" />
      <p>
        This is a static page for <em>page-017</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
