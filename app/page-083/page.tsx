import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page083Page() {
  return (
    <div>
      <h1>page-083</h1>
      <LikeButton label="page-083" />
      <p>
        This is a static page for <em>page-083</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
