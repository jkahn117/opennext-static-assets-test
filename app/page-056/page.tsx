import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page056Page() {
  return (
    <div>
      <h1>page-056</h1>
      <LikeButton label="page-056" />
      <p>
        This is a static page for <em>page-056</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
