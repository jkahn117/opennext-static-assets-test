import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page198Page() {
  return (
    <div>
      <h1>page-198</h1>
      <LikeButton label="page-198" />
      <p>
        This is a static page for <em>page-198</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
