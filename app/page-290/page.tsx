import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page290Page() {
  return (
    <div>
      <h1>page-290</h1>
      <LikeButton label="page-290" />
      <p>
        This is a static page for <em>page-290</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
