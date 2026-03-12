import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page252Page() {
  return (
    <div>
      <h1>page-252</h1>
      <LikeButton label="page-252" />
      <p>
        This is a static page for <em>page-252</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
