import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page123Page() {
  return (
    <div>
      <h1>page-123</h1>
      <LikeButton label="page-123" />
      <p>
        This is a static page for <em>page-123</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
