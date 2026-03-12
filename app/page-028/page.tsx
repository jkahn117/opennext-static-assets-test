import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page028Page() {
  return (
    <div>
      <h1>page-028</h1>
      <LikeButton label="page-028" />
      <p>
        This is a static page for <em>page-028</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
