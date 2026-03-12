import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page149Page() {
  return (
    <div>
      <h1>page-149</h1>
      <LikeButton label="page-149" />
      <p>
        This is a static page for <em>page-149</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
