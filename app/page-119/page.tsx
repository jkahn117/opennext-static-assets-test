import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page119Page() {
  return (
    <div>
      <h1>page-119</h1>
      <LikeButton label="page-119" />
      <p>
        This is a static page for <em>page-119</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
