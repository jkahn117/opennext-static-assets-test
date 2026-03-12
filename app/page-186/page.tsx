import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page186Page() {
  return (
    <div>
      <h1>page-186</h1>
      <LikeButton label="page-186" />
      <p>
        This is a static page for <em>page-186</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
