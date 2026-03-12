import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page066Page() {
  return (
    <div>
      <h1>page-066</h1>
      <LikeButton label="page-066" />
      <p>
        This is a static page for <em>page-066</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
