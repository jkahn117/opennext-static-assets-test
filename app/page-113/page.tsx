import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page113Page() {
  return (
    <div>
      <h1>page-113</h1>
      <LikeButton label="page-113" />
      <p>
        This is a static page for <em>page-113</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
