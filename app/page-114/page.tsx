import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page114Page() {
  return (
    <div>
      <h1>page-114</h1>
      <LikeButton label="page-114" />
      <p>
        This is a static page for <em>page-114</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
