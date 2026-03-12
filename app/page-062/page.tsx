import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page062Page() {
  return (
    <div>
      <h1>page-062</h1>
      <LikeButton label="page-062" />
      <p>
        This is a static page for <em>page-062</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
