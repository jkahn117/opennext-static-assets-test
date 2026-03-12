import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page160Page() {
  return (
    <div>
      <h1>page-160</h1>
      <LikeButton label="page-160" />
      <p>
        This is a static page for <em>page-160</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
