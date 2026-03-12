import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page205Page() {
  return (
    <div>
      <h1>page-205</h1>
      <LikeButton label="page-205" />
      <p>
        This is a static page for <em>page-205</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
