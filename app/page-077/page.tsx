import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page077Page() {
  return (
    <div>
      <h1>page-077</h1>
      <LikeButton label="page-077" />
      <p>
        This is a static page for <em>page-077</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
