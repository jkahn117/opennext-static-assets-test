import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page104Page() {
  return (
    <div>
      <h1>page-104</h1>
      <LikeButton label="page-104" />
      <p>
        This is a static page for <em>page-104</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
