import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page188Page() {
  return (
    <div>
      <h1>page-188</h1>
      <LikeButton label="page-188" />
      <p>
        This is a static page for <em>page-188</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
