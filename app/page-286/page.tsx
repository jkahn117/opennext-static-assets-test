import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page286Page() {
  return (
    <div>
      <h1>page-286</h1>
      <LikeButton label="page-286" />
      <p>
        This is a static page for <em>page-286</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
