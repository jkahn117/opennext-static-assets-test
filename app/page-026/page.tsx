import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page026Page() {
  return (
    <div>
      <h1>page-026</h1>
      <LikeButton label="page-026" />
      <p>
        This is a static page for <em>page-026</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
