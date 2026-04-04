import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/BlogListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Rituals, reflections, and guides for feeling at home wherever you are.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "var(--font-jost)" }}
            className="text-xs tracking-[0.2em] uppercase text-clay mb-4"
          >
            The journal
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-5xl md:text-6xl font-light text-deep-brown"
          >
            All essays &amp; guides
          </h1>
        </section>
        <BlogListing posts={posts} />
      </main>
      <Footer />
    </>
  );
}
