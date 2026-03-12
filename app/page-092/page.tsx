import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page092Page() {
  return (
    <div>
      <h1>page-092</h1>
      <LikeButton label="page-092" />
      <p>
        This is a static page for <em>page-092</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
