import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page096Page() {
  return (
    <div>
      <h1>page-096</h1>
      <LikeButton label="page-096" />
      <p>
        This is a static page for <em>page-096</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
