import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page010Page() {
  return (
    <div>
      <h1>page-010</h1>
      <LikeButton label="page-010" />
      <p>
        This is a static page for <em>page-010</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
