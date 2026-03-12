import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page172Page() {
  return (
    <div>
      <h1>page-172</h1>
      <LikeButton label="page-172" />
      <p>
        This is a static page for <em>page-172</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
