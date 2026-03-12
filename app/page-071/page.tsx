import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page071Page() {
  return (
    <div>
      <h1>page-071</h1>
      <LikeButton label="page-071" />
      <p>
        This is a static page for <em>page-071</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
