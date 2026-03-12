import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page258Page() {
  return (
    <div>
      <h1>page-258</h1>
      <LikeButton label="page-258" />
      <p>
        This is a static page for <em>page-258</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
