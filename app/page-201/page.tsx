import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page201Page() {
  return (
    <div>
      <h1>page-201</h1>
      <LikeButton label="page-201" />
      <p>
        This is a static page for <em>page-201</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
