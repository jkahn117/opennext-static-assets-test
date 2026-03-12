import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page242Page() {
  return (
    <div>
      <h1>page-242</h1>
      <LikeButton label="page-242" />
      <p>
        This is a static page for <em>page-242</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
