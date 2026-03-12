import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page089Page() {
  return (
    <div>
      <h1>page-089</h1>
      <LikeButton label="page-089" />
      <p>
        This is a static page for <em>page-089</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
