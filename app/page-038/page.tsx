import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page038Page() {
  return (
    <div>
      <h1>page-038</h1>
      <LikeButton label="page-038" />
      <p>
        This is a static page for <em>page-038</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
