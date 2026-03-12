import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page016Page() {
  return (
    <div>
      <h1>page-016</h1>
      <LikeButton label="page-016" />
      <p>
        This is a static page for <em>page-016</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
