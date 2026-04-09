import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Start Here | Solace Space",
  description:
    "New to Solace Space? This is where to begin. What this journal is, who it's for, and which five essays to read first.",
};

export default async function StartHerePage() {
  const allPosts = await getAllPosts();

  const cornerstone = allPosts.slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Welcome
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl font-light text-deep-brown leading-tight mb-6"
            >
              You&apos;re in the right place.
              <br />
              <em>Here&apos;s where to begin.</em>
            </h1>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base font-light leading-relaxed"
            >
              Solace Space is a journal by Kristina Muss for people living between places — the ones who feel at home everywhere and nowhere. This page is the orientation.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* What this is */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              What this is
            </p>
            <div
              style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
              className="text-base font-light leading-[1.9] space-y-5"
            >
              <p>
                This is not a wellness blog. Not a travel account. Not a productivity system for remote workers. It&apos;s a journal about the interior life of a life in motion — the rituals that keep you grounded when nothing around you is familiar, the objects worth carrying across borders, the particular quality of attention that living between places teaches you.
              </p>
              <p>
                There are five themes: <Link href="/blog/category/rituals" className="text-clay hover:opacity-70 transition-opacity">Rituals</Link>, <Link href="/blog/category/reflections" className="text-clay hover:opacity-70 transition-opacity">Reflections</Link>, <Link href="/blog/category/guides" className="text-clay hover:opacity-70 transition-opacity">Guides</Link>, <Link href="/blog/category/field-notes" className="text-clay hover:opacity-70 transition-opacity">Field Notes</Link>, and <Link href="/blog/category/objects" className="text-clay hover:opacity-70 transition-opacity">Objects</Link>. One thread running through all of them: learning to arrive.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Who it's for */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Who it&apos;s for
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "People who have lived in more than one place and carry bits of all of them",
                "Anyone mid-move, mid-transition, or mid-becoming something they can't quite name yet",
                "People who take the small domestic things seriously — morning sequences, kitchen rituals, the weight of a bowl",
                "Readers, slow thinkers, the ones who prefer depth to content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span style={{ color: "#2AADA4" }} className="mt-1 flex-shrink-0 text-sm">◦</span>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
                    className="text-base font-light leading-relaxed"
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Start here posts */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              Read these first
            </p>
            <div className="flex flex-col gap-8">
              {cornerstone.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 border-b pb-8"
                  style={{ borderColor: "#E8D9C4" }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      style={{ fontFamily: "var(--font-cormorant)", color: "#2AADA4" }}
                      className="text-2xl font-light"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                      className="text-xs tracking-widest uppercase"
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-2xl font-light text-deep-brown leading-tight group-hover:text-clay transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-sm font-light leading-relaxed"
                  >
                    {post.description}
                  </p>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
                    className="text-xs tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Read →
                  </span>
                </Link>
              ))}

              {cornerstone.length === 0 && (
                <p style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }} className="text-sm font-light">
                  Essays coming soon. Subscribe to be notified.
                </p>
              )}
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #E8D9C4" }}
                className="text-xs tracking-widest uppercase text-deep-brown pb-0.5 hover:text-clay hover:border-clay transition-colors"
              >
                Browse all essays →
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Subscribe */}
        <section
          className="py-16 px-6"
          style={{ backgroundColor: "rgba(42, 173, 164, 0.04)" }}
        >
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              The best way to follow along
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-3xl font-light text-deep-brown leading-tight mb-4"
            >
              Get the free guide and stay in the loop.
            </h2>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-sm font-light leading-relaxed mb-8"
            >
              Subscribe and get the Grounding Guide immediately — seven rituals for the first 48 hours in a new place. New essays and objects arrive by email when there&apos;s something worth saying.
            </p>
            <NewsletterSignup variant="inline" buttonText="Subscribe + get the guide" />
          </div>
        </section>

        {/* Explore */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              Explore by theme
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Rituals", href: "/blog/category/rituals" },
                { name: "Field Notes", href: "/blog/category/field-notes" },
                { name: "Objects", href: "/objects" },
                { name: "Guides", href: "/blog/category/guides" },
                { name: "Reflections", href: "/blog/category/reflections" },
                { name: "About Kristina", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-4 flex flex-col gap-1 transition-colors"
                  style={{ border: "1px solid #E8D9C4" }}
                >
                  <span
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-lg font-light text-deep-brown group-hover:text-clay transition-colors"
                  >
                    {item.name}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
                    className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
