import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page012Page() {
  return (
    <div>
      <h1>page-012</h1>
      <LikeButton label="page-012" />
      <p>
        This is a static page for <em>page-012</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
