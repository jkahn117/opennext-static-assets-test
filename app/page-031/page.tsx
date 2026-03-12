import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page031Page() {
  return (
    <div>
      <h1>page-031</h1>
      <LikeButton label="page-031" />
      <p>
        This is a static page for <em>page-031</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
