import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page055Page() {
  return (
    <div>
      <h1>page-055</h1>
      <LikeButton label="page-055" />
      <p>
        This is a static page for <em>page-055</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
