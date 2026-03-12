import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page280Page() {
  return (
    <div>
      <h1>page-280</h1>
      <LikeButton label="page-280" />
      <p>
        This is a static page for <em>page-280</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
