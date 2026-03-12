import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page183Page() {
  return (
    <div>
      <h1>page-183</h1>
      <LikeButton label="page-183" />
      <p>
        This is a static page for <em>page-183</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
