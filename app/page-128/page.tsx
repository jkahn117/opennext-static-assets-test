import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page128Page() {
  return (
    <div>
      <h1>page-128</h1>
      <LikeButton label="page-128" />
      <p>
        This is a static page for <em>page-128</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
