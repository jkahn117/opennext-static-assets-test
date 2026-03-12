import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page007Page() {
  return (
    <div>
      <h1>page-007</h1>
      <LikeButton label="page-007" />
      <p>
        This is a static page for <em>page-007</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
