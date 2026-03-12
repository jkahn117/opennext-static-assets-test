import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page206Page() {
  return (
    <div>
      <h1>page-206</h1>
      <LikeButton label="page-206" />
      <p>
        This is a static page for <em>page-206</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
