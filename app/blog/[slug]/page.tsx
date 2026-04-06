import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { PostCTA } from "@/components/PostCTA";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solacespace.com";

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solacespace.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        image: post.image
          ? {
              "@type": "ImageObject",
              url: post.image,
              description: post.imageAlt,
            }
          : undefined,
        publisher: {
          "@type": "Organization",
          name: "Solace Space",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Journal",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteUrl}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Post header */}
        <article className="pt-32 pb-24">
          <header className="px-6 max-w-3xl mx-auto mb-12">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2">
              <Link
                href="/blog"
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-clay hover:text-brown-muted transition-colors"
              >
                Journal
              </Link>
              <span className="text-clay-light text-xs">/</span>
              <Link
                href={`/blog/category/${post.category.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-clay hover:text-brown-muted transition-colors"
              >
                {post.category}
              </Link>
            </nav>

            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-deep-brown leading-tight"
            >
              {post.title}
            </h1>

            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="mt-5 text-base text-brown-muted font-light leading-relaxed"
            >
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs text-clay tracking-wide"
              >
                By {post.author}
              </span>
              <span className="text-clay-light">·</span>
              <time
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs text-clay"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-clay-light">·</span>
              <span
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs text-clay"
              >
                {post.readingTime}
              </span>
            </div>

            {post.image && (
              <div className="mt-10 aspect-[16/9] bg-clay-light rounded-sm overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Content + TOC */}
          <div className="px-6 max-w-5xl mx-auto">
            <div className="flex gap-16 items-start">
              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* Post CTA */}
                <PostCTA />

                {/* Post footer */}
                <div className="mt-16 pt-8 border-t border-clay-light">
                  <Link
                    href="/blog"
                    style={{ fontFamily: "var(--font-jost)" }}
                    className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-deep-brown border-b border-clay pb-0.5 hover:text-clay transition-colors"
                  >
                    ← Back to journal
                  </Link>
                </div>
              </div>

              {/* TOC sidebar */}
              <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
                <TableOfContents contentHtml={post.contentHtml} />
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
