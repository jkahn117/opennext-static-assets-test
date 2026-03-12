import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page021Page() {
  return (
    <div>
      <h1>page-021</h1>
      <LikeButton label="page-021" />
      <p>
        This is a static page for <em>page-021</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
