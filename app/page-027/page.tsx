import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page027Page() {
  return (
    <div>
      <h1>page-027</h1>
      <LikeButton label="page-027" />
      <p>
        This is a static page for <em>page-027</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
