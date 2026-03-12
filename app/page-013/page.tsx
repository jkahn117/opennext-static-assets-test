import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page013Page() {
  return (
    <div>
      <h1>page-013</h1>
      <LikeButton label="page-013" />
      <p>
        This is a static page for <em>page-013</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
