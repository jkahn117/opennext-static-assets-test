import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page190Page() {
  return (
    <div>
      <h1>page-190</h1>
      <LikeButton label="page-190" />
      <p>
        This is a static page for <em>page-190</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
