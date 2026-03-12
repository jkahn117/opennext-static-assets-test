import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page202Page() {
  return (
    <div>
      <h1>page-202</h1>
      <LikeButton label="page-202" />
      <p>
        This is a static page for <em>page-202</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
