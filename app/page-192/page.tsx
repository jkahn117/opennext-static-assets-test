import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page192Page() {
  return (
    <div>
      <h1>page-192</h1>
      <LikeButton label="page-192" />
      <p>
        This is a static page for <em>page-192</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
