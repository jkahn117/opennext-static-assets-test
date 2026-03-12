import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page118Page() {
  return (
    <div>
      <h1>page-118</h1>
      <LikeButton label="page-118" />
      <p>
        This is a static page for <em>page-118</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
