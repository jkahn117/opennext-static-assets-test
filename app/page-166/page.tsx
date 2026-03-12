import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page166Page() {
  return (
    <div>
      <h1>page-166</h1>
      <LikeButton label="page-166" />
      <p>
        This is a static page for <em>page-166</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
