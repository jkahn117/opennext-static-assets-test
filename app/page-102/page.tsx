import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page102Page() {
  return (
    <div>
      <h1>page-102</h1>
      <LikeButton label="page-102" />
      <p>
        This is a static page for <em>page-102</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
