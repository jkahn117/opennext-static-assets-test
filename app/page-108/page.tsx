import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page108Page() {
  return (
    <div>
      <h1>page-108</h1>
      <LikeButton label="page-108" />
      <p>
        This is a static page for <em>page-108</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
