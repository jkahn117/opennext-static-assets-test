import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page105Page() {
  return (
    <div>
      <h1>page-105</h1>
      <LikeButton label="page-105" />
      <p>
        This is a static page for <em>page-105</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
