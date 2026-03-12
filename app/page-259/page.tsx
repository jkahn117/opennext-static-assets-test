import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page259Page() {
  return (
    <div>
      <h1>page-259</h1>
      <LikeButton label="page-259" />
      <p>
        This is a static page for <em>page-259</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
