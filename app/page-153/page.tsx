import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page153Page() {
  return (
    <div>
      <h1>page-153</h1>
      <LikeButton label="page-153" />
      <p>
        This is a static page for <em>page-153</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
