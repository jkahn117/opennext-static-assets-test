import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page281Page() {
  return (
    <div>
      <h1>page-281</h1>
      <LikeButton label="page-281" />
      <p>
        This is a static page for <em>page-281</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
