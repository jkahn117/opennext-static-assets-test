import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page220Page() {
  return (
    <div>
      <h1>page-220</h1>
      <LikeButton label="page-220" />
      <p>
        This is a static page for <em>page-220</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
