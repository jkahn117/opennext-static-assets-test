import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page243Page() {
  return (
    <div>
      <h1>page-243</h1>
      <LikeButton label="page-243" />
      <p>
        This is a static page for <em>page-243</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
