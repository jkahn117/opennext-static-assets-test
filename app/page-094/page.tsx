import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page094Page() {
  return (
    <div>
      <h1>page-094</h1>
      <LikeButton label="page-094" />
      <p>
        This is a static page for <em>page-094</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
