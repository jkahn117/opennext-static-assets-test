import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page174Page() {
  return (
    <div>
      <h1>page-174</h1>
      <LikeButton label="page-174" />
      <p>
        This is a static page for <em>page-174</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
