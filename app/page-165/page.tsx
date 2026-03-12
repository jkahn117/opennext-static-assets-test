import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page165Page() {
  return (
    <div>
      <h1>page-165</h1>
      <LikeButton label="page-165" />
      <p>
        This is a static page for <em>page-165</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
