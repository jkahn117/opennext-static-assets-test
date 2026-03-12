import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page120Page() {
  return (
    <div>
      <h1>page-120</h1>
      <LikeButton label="page-120" />
      <p>
        This is a static page for <em>page-120</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
