import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page006Page() {
  return (
    <div>
      <h1>page-006</h1>
      <LikeButton label="page-006" />
      <p>
        This is a static page for <em>page-006</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
