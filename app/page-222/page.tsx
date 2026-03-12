import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page222Page() {
  return (
    <div>
      <h1>page-222</h1>
      <LikeButton label="page-222" />
      <p>
        This is a static page for <em>page-222</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
