import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page033Page() {
  return (
    <div>
      <h1>page-033</h1>
      <LikeButton label="page-033" />
      <p>
        This is a static page for <em>page-033</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
