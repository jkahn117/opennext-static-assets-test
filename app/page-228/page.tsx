import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page228Page() {
  return (
    <div>
      <h1>page-228</h1>
      <LikeButton label="page-228" />
      <p>
        This is a static page for <em>page-228</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
