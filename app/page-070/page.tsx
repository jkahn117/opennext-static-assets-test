import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page070Page() {
  return (
    <div>
      <h1>page-070</h1>
      <LikeButton label="page-070" />
      <p>
        This is a static page for <em>page-070</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
