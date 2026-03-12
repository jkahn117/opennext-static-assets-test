import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page216Page() {
  return (
    <div>
      <h1>page-216</h1>
      <LikeButton label="page-216" />
      <p>
        This is a static page for <em>page-216</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
