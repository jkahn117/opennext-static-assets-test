import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page103Page() {
  return (
    <div>
      <h1>page-103</h1>
      <LikeButton label="page-103" />
      <p>
        This is a static page for <em>page-103</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
