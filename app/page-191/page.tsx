import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page191Page() {
  return (
    <div>
      <h1>page-191</h1>
      <LikeButton label="page-191" />
      <p>
        This is a static page for <em>page-191</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
