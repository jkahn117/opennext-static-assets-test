import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page161Page() {
  return (
    <div>
      <h1>page-161</h1>
      <LikeButton label="page-161" />
      <p>
        This is a static page for <em>page-161</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
