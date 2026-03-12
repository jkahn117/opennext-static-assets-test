import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page251Page() {
  return (
    <div>
      <h1>page-251</h1>
      <LikeButton label="page-251" />
      <p>
        This is a static page for <em>page-251</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
