import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page099Page() {
  return (
    <div>
      <h1>page-099</h1>
      <LikeButton label="page-099" />
      <p>
        This is a static page for <em>page-099</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
