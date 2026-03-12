import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page197Page() {
  return (
    <div>
      <h1>page-197</h1>
      <LikeButton label="page-197" />
      <p>
        This is a static page for <em>page-197</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
