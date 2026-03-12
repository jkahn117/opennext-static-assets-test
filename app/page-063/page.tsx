import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page063Page() {
  return (
    <div>
      <h1>page-063</h1>
      <LikeButton label="page-063" />
      <p>
        This is a static page for <em>page-063</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
