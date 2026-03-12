import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page076Page() {
  return (
    <div>
      <h1>page-076</h1>
      <LikeButton label="page-076" />
      <p>
        This is a static page for <em>page-076</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
