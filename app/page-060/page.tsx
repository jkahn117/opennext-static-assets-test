import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page060Page() {
  return (
    <div>
      <h1>page-060</h1>
      <LikeButton label="page-060" />
      <p>
        This is a static page for <em>page-060</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
