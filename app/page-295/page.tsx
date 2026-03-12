import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page295Page() {
  return (
    <div>
      <h1>page-295</h1>
      <LikeButton label="page-295" />
      <p>
        This is a static page for <em>page-295</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
