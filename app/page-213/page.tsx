import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page213Page() {
  return (
    <div>
      <h1>page-213</h1>
      <LikeButton label="page-213" />
      <p>
        This is a static page for <em>page-213</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
