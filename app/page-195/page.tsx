import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page195Page() {
  return (
    <div>
      <h1>page-195</h1>
      <LikeButton label="page-195" />
      <p>
        This is a static page for <em>page-195</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
