import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page045Page() {
  return (
    <div>
      <h1>page-045</h1>
      <LikeButton label="page-045" />
      <p>
        This is a static page for <em>page-045</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
