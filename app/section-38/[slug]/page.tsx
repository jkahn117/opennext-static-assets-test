import Link from "next/link";
import { LikeButton } from "../../components/like-button";

const SLUGS = ["overview","details","reference"] as const;

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function Section38Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>section-38: {slug}</h1>
      <LikeButton label={`section-38/${slug}`} />
      <p>
        This is the <strong>{slug}</strong> page for <em>section-38</em>,
        pre-rendered at build time via generateStaticParams.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
