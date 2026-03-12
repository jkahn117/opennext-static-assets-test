import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page177Page() {
  return (
    <div>
      <h1>page-177</h1>
      <LikeButton label="page-177" />
      <p>
        This is a static page for <em>page-177</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
