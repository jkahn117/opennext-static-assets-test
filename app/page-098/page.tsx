import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page098Page() {
  return (
    <div>
      <h1>page-098</h1>
      <LikeButton label="page-098" />
      <p>
        This is a static page for <em>page-098</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
