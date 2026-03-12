import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page221Page() {
  return (
    <div>
      <h1>page-221</h1>
      <LikeButton label="page-221" />
      <p>
        This is a static page for <em>page-221</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
