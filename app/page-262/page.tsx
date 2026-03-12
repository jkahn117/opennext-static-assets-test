import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page262Page() {
  return (
    <div>
      <h1>page-262</h1>
      <LikeButton label="page-262" />
      <p>
        This is a static page for <em>page-262</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
