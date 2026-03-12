import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page238Page() {
  return (
    <div>
      <h1>page-238</h1>
      <LikeButton label="page-238" />
      <p>
        This is a static page for <em>page-238</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
