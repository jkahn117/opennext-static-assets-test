import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page147Page() {
  return (
    <div>
      <h1>page-147</h1>
      <LikeButton label="page-147" />
      <p>
        This is a static page for <em>page-147</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
