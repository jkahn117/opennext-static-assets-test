import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page144Page() {
  return (
    <div>
      <h1>page-144</h1>
      <LikeButton label="page-144" />
      <p>
        This is a static page for <em>page-144</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
