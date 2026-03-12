import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page143Page() {
  return (
    <div>
      <h1>page-143</h1>
      <LikeButton label="page-143" />
      <p>
        This is a static page for <em>page-143</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
