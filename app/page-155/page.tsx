import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page155Page() {
  return (
    <div>
      <h1>page-155</h1>
      <LikeButton label="page-155" />
      <p>
        This is a static page for <em>page-155</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
