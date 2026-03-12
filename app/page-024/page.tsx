import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page024Page() {
  return (
    <div>
      <h1>page-024</h1>
      <LikeButton label="page-024" />
      <p>
        This is a static page for <em>page-024</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
