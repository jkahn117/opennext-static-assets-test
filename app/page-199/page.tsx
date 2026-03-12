import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page199Page() {
  return (
    <div>
      <h1>page-199</h1>
      <LikeButton label="page-199" />
      <p>
        This is a static page for <em>page-199</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
