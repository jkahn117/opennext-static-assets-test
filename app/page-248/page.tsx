import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page248Page() {
  return (
    <div>
      <h1>page-248</h1>
      <LikeButton label="page-248" />
      <p>
        This is a static page for <em>page-248</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
