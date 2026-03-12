import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page179Page() {
  return (
    <div>
      <h1>page-179</h1>
      <LikeButton label="page-179" />
      <p>
        This is a static page for <em>page-179</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
