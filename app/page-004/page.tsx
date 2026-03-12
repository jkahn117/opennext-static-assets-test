import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page004Page() {
  return (
    <div>
      <h1>page-004</h1>
      <LikeButton label="page-004" />
      <p>
        This is a static page for <em>page-004</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
