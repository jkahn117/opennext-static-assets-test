import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page173Page() {
  return (
    <div>
      <h1>page-173</h1>
      <LikeButton label="page-173" />
      <p>
        This is a static page for <em>page-173</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
