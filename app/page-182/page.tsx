import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page182Page() {
  return (
    <div>
      <h1>page-182</h1>
      <LikeButton label="page-182" />
      <p>
        This is a static page for <em>page-182</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
