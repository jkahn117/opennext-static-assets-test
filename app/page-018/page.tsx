import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page018Page() {
  return (
    <div>
      <h1>page-018</h1>
      <LikeButton label="page-018" />
      <p>
        This is a static page for <em>page-018</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
