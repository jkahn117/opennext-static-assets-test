import Link from "next/link";
import { LikeButton } from "../../../components/like-button";

const LANGUAGES = ["en", "fr", "de", "es", "ja"] as const;

const TOPICS = [
  "introduction",
  "installation",
  "configuration",
  "authentication",
  "authorization",
  "routing",
  "middleware",
  "caching",
  "deployment",
  "monitoring",
  "testing",
  "debugging",
  "performance",
  "security",
  "api-reference",
  "migration",
  "troubleshooting",
  "faq",
  "changelog",
  "contributing",
] as const;

// 5 languages x 20 topics = 100 static pages
export function generateStaticParams() {
  const params: { lang: string; topic: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const topic of TOPICS) {
      params.push({ lang, topic });
    }
  }
  return params;
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ lang: string; topic: string }>;
}) {
  const { lang, topic } = await params;

  return (
    <div>
      <h1>
        Docs: {topic} ({lang})
      </h1>
      <LikeButton label={`${topic} (${lang})`} />
      <p>
        <strong>Language:</strong> {lang}
      </p>
      <p>
        <strong>Topic:</strong> {topic}
      </p>
      <p>
        This documentation page for <em>{topic}</em> in <em>{lang}</em> was
        pre-rendered at build time using generateStaticParams with nested dynamic
        route segments [lang]/[topic].
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante.
      </p>
      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href={`/docs/${lang}/introduction`}>
          {lang} docs index
        </Link>
      </nav>
    </div>
  );
}
