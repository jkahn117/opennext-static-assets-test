import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page040Page() {
  return (
    <div>
      <h1>page-040</h1>
      <LikeButton label="page-040" />
      <p>
        This is a static page for <em>page-040</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
