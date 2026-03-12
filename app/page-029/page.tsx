import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page029Page() {
  return (
    <div>
      <h1>page-029</h1>
      <LikeButton label="page-029" />
      <p>
        This is a static page for <em>page-029</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
