import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page193Page() {
  return (
    <div>
      <h1>page-193</h1>
      <LikeButton label="page-193" />
      <p>
        This is a static page for <em>page-193</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
