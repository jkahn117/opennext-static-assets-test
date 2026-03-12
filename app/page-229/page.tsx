import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page229Page() {
  return (
    <div>
      <h1>page-229</h1>
      <LikeButton label="page-229" />
      <p>
        This is a static page for <em>page-229</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
