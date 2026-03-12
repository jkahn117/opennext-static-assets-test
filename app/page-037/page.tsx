import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page037Page() {
  return (
    <div>
      <h1>page-037</h1>
      <LikeButton label="page-037" />
      <p>
        This is a static page for <em>page-037</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
