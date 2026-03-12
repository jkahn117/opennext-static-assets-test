import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page090Page() {
  return (
    <div>
      <h1>page-090</h1>
      <LikeButton label="page-090" />
      <p>
        This is a static page for <em>page-090</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
