import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page146Page() {
  return (
    <div>
      <h1>page-146</h1>
      <LikeButton label="page-146" />
      <p>
        This is a static page for <em>page-146</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
