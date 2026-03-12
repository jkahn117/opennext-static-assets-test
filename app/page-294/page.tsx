import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page294Page() {
  return (
    <div>
      <h1>page-294</h1>
      <LikeButton label="page-294" />
      <p>
        This is a static page for <em>page-294</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
