import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page001Page() {
  return (
    <div>
      <h1>page-001</h1>
      <LikeButton label="page-001" />
      <p>
        This is a static page for <em>page-001</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
