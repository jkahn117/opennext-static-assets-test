import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page274Page() {
  return (
    <div>
      <h1>page-274</h1>
      <LikeButton label="page-274" />
      <p>
        This is a static page for <em>page-274</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
