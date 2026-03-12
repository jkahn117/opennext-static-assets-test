import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page235Page() {
  return (
    <div>
      <h1>page-235</h1>
      <LikeButton label="page-235" />
      <p>
        This is a static page for <em>page-235</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
