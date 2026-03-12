import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page002Page() {
  return (
    <div>
      <h1>page-002</h1>
      <LikeButton label="page-002" />
      <p>
        This is a static page for <em>page-002</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
