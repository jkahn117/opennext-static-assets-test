import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page036Page() {
  return (
    <div>
      <h1>page-036</h1>
      <LikeButton label="page-036" />
      <p>
        This is a static page for <em>page-036</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
