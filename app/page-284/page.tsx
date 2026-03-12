import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page284Page() {
  return (
    <div>
      <h1>page-284</h1>
      <LikeButton label="page-284" />
      <p>
        This is a static page for <em>page-284</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
