import Link from "next/link";
import { LikeButton } from "../components/like-button";

export default function Page293Page() {
  return (
    <div>
      <h1>page-293</h1>
      <LikeButton label="page-293" />
      <p>
        This is a static page for <em>page-293</em>,
        pre-rendered at build time.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
