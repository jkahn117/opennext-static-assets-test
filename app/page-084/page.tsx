import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page084Page() {
  return (
    <div>
      <h1>page-084</h1>
      <LikeButton label="page-084" />
      <p>
        This is a static page for <em>page-084</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
