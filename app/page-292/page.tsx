import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page292Page() {
  return (
    <div>
      <h1>page-292</h1>
      <LikeButton label="page-292" />
      <p>
        This is a static page for <em>page-292</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
