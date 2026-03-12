import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page061Page() {
  return (
    <div>
      <h1>page-061</h1>
      <LikeButton label="page-061" />
      <p>
        This is a static page for <em>page-061</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
