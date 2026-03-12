import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page249Page() {
  return (
    <div>
      <h1>page-249</h1>
      <LikeButton label="page-249" />
      <p>
        This is a static page for <em>page-249</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
