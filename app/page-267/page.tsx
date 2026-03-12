import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page267Page() {
  return (
    <div>
      <h1>page-267</h1>
      <LikeButton label="page-267" />
      <p>
        This is a static page for <em>page-267</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
