import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page241Page() {
  return (
    <div>
      <h1>page-241</h1>
      <LikeButton label="page-241" />
      <p>
        This is a static page for <em>page-241</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
