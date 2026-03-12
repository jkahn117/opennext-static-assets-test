import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page015Page() {
  return (
    <div>
      <h1>page-015</h1>
      <LikeButton label="page-015" />
      <p>
        This is a static page for <em>page-015</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
