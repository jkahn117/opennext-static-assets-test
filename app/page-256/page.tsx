import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page256Page() {
  return (
    <div>
      <h1>page-256</h1>
      <LikeButton label="page-256" />
      <p>
        This is a static page for <em>page-256</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
