import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page282Page() {
  return (
    <div>
      <h1>page-282</h1>
      <LikeButton label="page-282" />
      <p>
        This is a static page for <em>page-282</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
