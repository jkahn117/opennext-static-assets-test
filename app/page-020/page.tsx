import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page020Page() {
  return (
    <div>
      <h1>page-020</h1>
      <LikeButton label="page-020" />
      <p>
        This is a static page for <em>page-020</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
