import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page194Page() {
  return (
    <div>
      <h1>page-194</h1>
      <LikeButton label="page-194" />
      <p>
        This is a static page for <em>page-194</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
