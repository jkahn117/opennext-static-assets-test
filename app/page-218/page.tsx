import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page218Page() {
  return (
    <div>
      <h1>page-218</h1>
      <LikeButton label="page-218" />
      <p>
        This is a static page for <em>page-218</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
