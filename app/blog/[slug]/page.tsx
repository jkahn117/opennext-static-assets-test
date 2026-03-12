import Link from "next/link";
import { LikeButton } from "../../components/like-button";

// Generate 196 blog post slugs programmatically
function getBlogSlugs(): string[] {
  const slugs: string[] = [];
  for (let i = 1; i <= 196; i++) {
    slugs.push(`post-${String(i).padStart(3, "0")}`);
  }
  return slugs;
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Blog: {slug}</h1>
      <LikeButton label={slug} />
      <p>
        This is blog post <strong>{slug}</strong>. It was pre-rendered at build
        time using generateStaticParams.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
