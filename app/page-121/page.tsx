import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page121Page() {
  return (
    <div>
      <h1>page-121</h1>
      <LikeButton label="page-121" />
      <p>
        This is a static page for <em>page-121</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
