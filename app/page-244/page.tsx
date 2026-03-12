import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page244Page() {
  return (
    <div>
      <h1>page-244</h1>
      <LikeButton label="page-244" />
      <p>
        This is a static page for <em>page-244</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
