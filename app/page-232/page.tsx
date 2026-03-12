import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page232Page() {
  return (
    <div>
      <h1>page-232</h1>
      <LikeButton label="page-232" />
      <p>
        This is a static page for <em>page-232</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
