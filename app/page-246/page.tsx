import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page246Page() {
  return (
    <div>
      <h1>page-246</h1>
      <LikeButton label="page-246" />
      <p>
        This is a static page for <em>page-246</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
