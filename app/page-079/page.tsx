import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page079Page() {
  return (
    <div>
      <h1>page-079</h1>
      <LikeButton label="page-079" />
      <p>
        This is a static page for <em>page-079</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
