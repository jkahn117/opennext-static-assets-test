import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page176Page() {
  return (
    <div>
      <h1>page-176</h1>
      <LikeButton label="page-176" />
      <p>
        This is a static page for <em>page-176</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
