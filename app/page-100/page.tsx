import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page100Page() {
  return (
    <div>
      <h1>page-100</h1>
      <LikeButton label="page-100" />
      <p>
        This is a static page for <em>page-100</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
