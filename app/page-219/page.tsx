import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page219Page() {
  return (
    <div>
      <h1>page-219</h1>
      <LikeButton label="page-219" />
      <p>
        This is a static page for <em>page-219</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
