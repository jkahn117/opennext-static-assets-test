import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page180Page() {
  return (
    <div>
      <h1>page-180</h1>
      <LikeButton label="page-180" />
      <p>
        This is a static page for <em>page-180</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
