import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page043Page() {
  return (
    <div>
      <h1>page-043</h1>
      <LikeButton label="page-043" />
      <p>
        This is a static page for <em>page-043</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
