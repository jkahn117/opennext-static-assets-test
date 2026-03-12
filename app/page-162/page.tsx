import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page162Page() {
  return (
    <div>
      <h1>page-162</h1>
      <LikeButton label="page-162" />
      <p>
        This is a static page for <em>page-162</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
