import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page093Page() {
  return (
    <div>
      <h1>page-093</h1>
      <LikeButton label="page-093" />
      <p>
        This is a static page for <em>page-093</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
