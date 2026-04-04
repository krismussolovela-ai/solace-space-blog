import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";

export default async function HomePage() {
  const posts = await getAllPosts();
  const featured = posts[0];
  const recent = posts.slice(1, 4);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
          <p
            style={{ fontFamily: "var(--font-jost)" }}
            className="text-sm tracking-[0.2em] uppercase text-clay mb-6"
          >
            a conscious lifestyle journal
          </p>
          <h1
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-deep-brown leading-[1.05] max-w-4xl"
          >
            a space to feel at home,<br />
            <em>wherever you are</em>
          </h1>
          <p
            style={{ fontFamily: "var(--font-jost)" }}
            className="mt-8 text-base md:text-lg text-brown-muted max-w-xl font-light leading-relaxed"
          >
            Rituals, reflections, and honest guides for the perpetually in-between.
          </p>
          <div className="mt-10">
            <Link
              href="/blog"
              style={{ fontFamily: "var(--font-jost)" }}
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-deep-brown border-b border-clay pb-1 hover:text-clay transition-colors"
            >
              Read the journal
              <span className="text-clay">→</span>
            </Link>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-clay-light" />
        </div>

        {/* Featured post */}
        {featured && (
          <section className="py-20 px-6 max-w-5xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-10"
            >
              Featured
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href={`/blog/category/${featured.category.toLowerCase().replace(/ /g, "-")}`}
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="inline-block text-xs tracking-[0.15em] uppercase text-clay mb-4 hover:text-brown-muted transition-colors"
                >
                  {featured.category}
                </Link>
                <Link href={`/blog/${featured.slug}`}>
                  <h2
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-4xl md:text-5xl font-light text-deep-brown leading-tight hover:text-brown-muted transition-colors"
                  >
                    {featured.title}
                  </h2>
                </Link>
                <p
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="mt-4 text-brown-muted font-light leading-relaxed"
                >
                  {featured.description}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span
                    style={{ fontFamily: "var(--font-jost)" }}
                    className="text-xs text-clay"
                  >
                    {featured.readingTime}
                  </span>
                  <span className="text-clay-light">·</span>
                  <span
                    style={{ fontFamily: "var(--font-jost)" }}
                    className="text-xs text-clay"
                  >
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-deep-brown border-b border-clay pb-0.5 hover:text-clay transition-colors"
                >
                  Read essay <span>→</span>
                </Link>
              </div>
              <div className="aspect-[4/5] bg-clay-light rounded-sm overflow-hidden">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.imageAlt || featured.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-clay-light to-clay opacity-40" />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Recent posts */}
        {recent.length > 0 && (
          <section className="py-16 px-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <p
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-[0.2em] uppercase text-clay"
              >
                Recent
              </p>
              <Link
                href="/blog"
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-deep-brown border-b border-clay pb-0.5 hover:text-clay transition-colors"
              >
                All posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recent.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Dark section */}
        <section
          className="py-24 px-6 mt-8"
          style={{ backgroundColor: "#2C3519" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="text-xs tracking-[0.2em] uppercase mb-6"
            >
              The journal
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", color: "#FAF7F2" }}
              className="text-4xl md:text-5xl font-light leading-tight"
            >
              Home is not a place.<br />
              <em>It&apos;s a practice.</em>
            </h2>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="mt-6 text-sm font-light leading-relaxed opacity-80"
            >
              Five categories. One thread: learning to arrive, wherever you land.
            </p>
            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-jost)",
                color: "#FAF7F2",
                borderColor: "#C4A882",
              }}
              className="mt-10 inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b pb-1 hover:opacity-70 transition-opacity"
            >
              Browse the journal →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
