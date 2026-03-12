import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page224Page() {
  return (
    <div>
      <h1>page-224</h1>
      <LikeButton label="page-224" />
      <p>
        This is a static page for <em>page-224</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
