import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page247Page() {
  return (
    <div>
      <h1>page-247</h1>
      <LikeButton label="page-247" />
      <p>
        This is a static page for <em>page-247</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
