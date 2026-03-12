import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page072Page() {
  return (
    <div>
      <h1>page-072</h1>
      <LikeButton label="page-072" />
      <p>
        This is a static page for <em>page-072</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
