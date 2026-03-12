import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page152Page() {
  return (
    <div>
      <h1>page-152</h1>
      <LikeButton label="page-152" />
      <p>
        This is a static page for <em>page-152</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
