import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page138Page() {
  return (
    <div>
      <h1>page-138</h1>
      <LikeButton label="page-138" />
      <p>
        This is a static page for <em>page-138</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
