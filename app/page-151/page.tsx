import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page151Page() {
  return (
    <div>
      <h1>page-151</h1>
      <LikeButton label="page-151" />
      <p>
        This is a static page for <em>page-151</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
