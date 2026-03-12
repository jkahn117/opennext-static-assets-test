import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page139Page() {
  return (
    <div>
      <h1>page-139</h1>
      <LikeButton label="page-139" />
      <p>
        This is a static page for <em>page-139</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
