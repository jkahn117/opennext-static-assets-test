import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page181Page() {
  return (
    <div>
      <h1>page-181</h1>
      <LikeButton label="page-181" />
      <p>
        This is a static page for <em>page-181</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
