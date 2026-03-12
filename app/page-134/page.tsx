import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page134Page() {
  return (
    <div>
      <h1>page-134</h1>
      <LikeButton label="page-134" />
      <p>
        This is a static page for <em>page-134</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
