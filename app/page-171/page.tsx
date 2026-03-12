import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page171Page() {
  return (
    <div>
      <h1>page-171</h1>
      <LikeButton label="page-171" />
      <p>
        This is a static page for <em>page-171</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
