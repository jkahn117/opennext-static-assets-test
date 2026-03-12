import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page141Page() {
  return (
    <div>
      <h1>page-141</h1>
      <LikeButton label="page-141" />
      <p>
        This is a static page for <em>page-141</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
