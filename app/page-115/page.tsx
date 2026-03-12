import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page115Page() {
  return (
    <div>
      <h1>page-115</h1>
      <LikeButton label="page-115" />
      <p>
        This is a static page for <em>page-115</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
