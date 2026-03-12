import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page277Page() {
  return (
    <div>
      <h1>page-277</h1>
      <LikeButton label="page-277" />
      <p>
        This is a static page for <em>page-277</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
