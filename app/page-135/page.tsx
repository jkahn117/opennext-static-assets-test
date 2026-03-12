import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page135Page() {
  return (
    <div>
      <h1>page-135</h1>
      <LikeButton label="page-135" />
      <p>
        This is a static page for <em>page-135</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
