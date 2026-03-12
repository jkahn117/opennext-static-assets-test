import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page240Page() {
  return (
    <div>
      <h1>page-240</h1>
      <LikeButton label="page-240" />
      <p>
        This is a static page for <em>page-240</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
