import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page287Page() {
  return (
    <div>
      <h1>page-287</h1>
      <LikeButton label="page-287" />
      <p>
        This is a static page for <em>page-287</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
