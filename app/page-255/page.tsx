import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page255Page() {
  return (
    <div>
      <h1>page-255</h1>
      <LikeButton label="page-255" />
      <p>
        This is a static page for <em>page-255</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
