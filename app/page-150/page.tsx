import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page150Page() {
  return (
    <div>
      <h1>page-150</h1>
      <LikeButton label="page-150" />
      <p>
        This is a static page for <em>page-150</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
