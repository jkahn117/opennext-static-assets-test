import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page051Page() {
  return (
    <div>
      <h1>page-051</h1>
      <LikeButton label="page-051" />
      <p>
        This is a static page for <em>page-051</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
