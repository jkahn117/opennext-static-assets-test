import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page009Page() {
  return (
    <div>
      <h1>page-009</h1>
      <LikeButton label="page-009" />
      <p>
        This is a static page for <em>page-009</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
