import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page261Page() {
  return (
    <div>
      <h1>page-261</h1>
      <LikeButton label="page-261" />
      <p>
        This is a static page for <em>page-261</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
