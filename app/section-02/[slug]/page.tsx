import Link from "next/link";
import { LikeButton } from "../../components/like-button";

const SLUGS = ["overview","details","reference"] as const;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function Section02Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>section-02: {slug}</h1>
      <LikeButton label={`section-02/${slug}`} />
      <p>
        This is the <strong>{slug}</strong> page for <em>section-02</em>,
        pre-rendered at build time via generateStaticParams.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
