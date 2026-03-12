import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page245Page() {
  return (
    <div>
      <h1>page-245</h1>
      <LikeButton label="page-245" />
      <p>
        This is a static page for <em>page-245</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
