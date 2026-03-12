import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page170Page() {
  return (
    <div>
      <h1>page-170</h1>
      <LikeButton label="page-170" />
      <p>
        This is a static page for <em>page-170</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
