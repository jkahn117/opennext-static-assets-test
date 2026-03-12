import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page234Page() {
  return (
    <div>
      <h1>page-234</h1>
      <LikeButton label="page-234" />
      <p>
        This is a static page for <em>page-234</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
