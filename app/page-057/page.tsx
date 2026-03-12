import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page057Page() {
  return (
    <div>
      <h1>page-057</h1>
      <LikeButton label="page-057" />
      <p>
        This is a static page for <em>page-057</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
