import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page032Page() {
  return (
    <div>
      <h1>page-032</h1>
      <LikeButton label="page-032" />
      <p>
        This is a static page for <em>page-032</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
