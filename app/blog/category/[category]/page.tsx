import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/BlogListing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const CATEGORIES = ["Rituals", "Reflections", "Guides", "Field Notes", "Objects"];

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/ /g, "-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryName = CATEGORIES.find(
    (c) => c.toLowerCase().replace(/ /g, "-") === category
  );
  if (!categoryName) return {};
  return {
    title: `${categoryName} — Journal`,
    description: `Essays and guides in the ${categoryName} category.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryName = CATEGORIES.find(
    (c) => c.toLowerCase().replace(/ /g, "-") === category
  );
  if (!categoryName) notFound();

  const allPosts = await getAllPosts();
  const posts = allPosts.filter((p) => p.category === categoryName);

  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "var(--font-jost)" }}
            className="text-xs tracking-[0.2em] uppercase text-clay mb-4"
          >
            Category
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-5xl md:text-6xl font-light text-deep-brown"
          >
            {categoryName}
          </h1>
        </section>
        <BlogListing posts={posts} initialCategory={categoryName} />
      </main>
      <Footer />
    </>
  );
}
