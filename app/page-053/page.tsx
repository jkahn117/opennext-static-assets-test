import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page053Page() {
  return (
    <div>
      <h1>page-053</h1>
      <LikeButton label="page-053" />
      <p>
        This is a static page for <em>page-053</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
