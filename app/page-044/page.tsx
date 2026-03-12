import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page044Page() {
  return (
    <div>
      <h1>page-044</h1>
      <LikeButton label="page-044" />
      <p>
        This is a static page for <em>page-044</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
