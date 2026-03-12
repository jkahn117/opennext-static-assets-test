import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page068Page() {
  return (
    <div>
      <h1>page-068</h1>
      <LikeButton label="page-068" />
      <p>
        This is a static page for <em>page-068</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
