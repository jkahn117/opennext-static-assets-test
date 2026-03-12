import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page169Page() {
  return (
    <div>
      <h1>page-169</h1>
      <LikeButton label="page-169" />
      <p>
        This is a static page for <em>page-169</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
