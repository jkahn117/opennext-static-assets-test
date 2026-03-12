import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page233Page() {
  return (
    <div>
      <h1>page-233</h1>
      <LikeButton label="page-233" />
      <p>
        This is a static page for <em>page-233</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
