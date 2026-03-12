import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page127Page() {
  return (
    <div>
      <h1>page-127</h1>
      <LikeButton label="page-127" />
      <p>
        This is a static page for <em>page-127</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
