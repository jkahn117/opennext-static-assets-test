import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page030Page() {
  return (
    <div>
      <h1>page-030</h1>
      <LikeButton label="page-030" />
      <p>
        This is a static page for <em>page-030</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
