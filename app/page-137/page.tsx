import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page137Page() {
  return (
    <div>
      <h1>page-137</h1>
      <LikeButton label="page-137" />
      <p>
        This is a static page for <em>page-137</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
