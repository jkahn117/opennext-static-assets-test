import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page203Page() {
  return (
    <div>
      <h1>page-203</h1>
      <LikeButton label="page-203" />
      <p>
        This is a static page for <em>page-203</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
