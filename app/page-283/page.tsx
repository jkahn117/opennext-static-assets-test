import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page283Page() {
  return (
    <div>
      <h1>page-283</h1>
      <LikeButton label="page-283" />
      <p>
        This is a static page for <em>page-283</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
