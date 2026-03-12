import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page184Page() {
  return (
    <div>
      <h1>page-184</h1>
      <LikeButton label="page-184" />
      <p>
        This is a static page for <em>page-184</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
