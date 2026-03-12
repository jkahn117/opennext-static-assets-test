import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page130Page() {
  return (
    <div>
      <h1>page-130</h1>
      <LikeButton label="page-130" />
      <p>
        This is a static page for <em>page-130</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
