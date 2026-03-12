import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page271Page() {
  return (
    <div>
      <h1>page-271</h1>
      <LikeButton label="page-271" />
      <p>
        This is a static page for <em>page-271</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
