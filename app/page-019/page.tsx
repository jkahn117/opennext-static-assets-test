import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page019Page() {
  return (
    <div>
      <h1>page-019</h1>
      <LikeButton label="page-019" />
      <p>
        This is a static page for <em>page-019</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
