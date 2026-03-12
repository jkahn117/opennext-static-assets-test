import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page276Page() {
  return (
    <div>
      <h1>page-276</h1>
      <LikeButton label="page-276" />
      <p>
        This is a static page for <em>page-276</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
