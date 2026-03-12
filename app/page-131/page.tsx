import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page131Page() {
  return (
    <div>
      <h1>page-131</h1>
      <LikeButton label="page-131" />
      <p>
        This is a static page for <em>page-131</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
