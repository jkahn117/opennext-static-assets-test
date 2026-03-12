import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page058Page() {
  return (
    <div>
      <h1>page-058</h1>
      <LikeButton label="page-058" />
      <p>
        This is a static page for <em>page-058</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
