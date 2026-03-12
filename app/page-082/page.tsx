import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page082Page() {
  return (
    <div>
      <h1>page-082</h1>
      <LikeButton label="page-082" />
      <p>
        This is a static page for <em>page-082</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
