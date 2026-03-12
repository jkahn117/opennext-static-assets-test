import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page075Page() {
  return (
    <div>
      <h1>page-075</h1>
      <LikeButton label="page-075" />
      <p>
        This is a static page for <em>page-075</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
