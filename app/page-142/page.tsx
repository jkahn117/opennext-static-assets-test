import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page142Page() {
  return (
    <div>
      <h1>page-142</h1>
      <LikeButton label="page-142" />
      <p>
        This is a static page for <em>page-142</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
