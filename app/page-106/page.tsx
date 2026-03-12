import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page106Page() {
  return (
    <div>
      <h1>page-106</h1>
      <LikeButton label="page-106" />
      <p>
        This is a static page for <em>page-106</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
