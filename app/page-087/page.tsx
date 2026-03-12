import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page087Page() {
  return (
    <div>
      <h1>page-087</h1>
      <LikeButton label="page-087" />
      <p>
        This is a static page for <em>page-087</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
