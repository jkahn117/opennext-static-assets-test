import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page257Page() {
  return (
    <div>
      <h1>page-257</h1>
      <LikeButton label="page-257" />
      <p>
        This is a static page for <em>page-257</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
