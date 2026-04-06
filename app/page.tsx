import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { TextMaskHero } from "@/components/TextMaskHero";
import { StickyPostCards } from "@/components/StickyPostCards";
import { ScrollColorShift } from "@/components/ScrollColorShift";

export default async function HomePage() {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 3);

  return (
    <>
      <Nav />

      {/* Cinematic Module 09 — mounts once, watches data-shift-bg sections */}
      <ScrollColorShift />

      <main>
        {/* ── 1. Hero — Text Mask Reveal (Module 01) ── */}
        {/* data-shift-bg restores cream on back-scroll */}
        <div data-shift-bg="#FAF7F2">
          <TextMaskHero />
        </div>

        {/* ── 2. Divider ── */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-clay-light" />
        </div>

        {/* ── 3. Recent posts — Sticky Card Stack (Module 05) ── */}
        {recent.length > 0 && (
          <section
            className="pt-16 px-0"
            data-shift-bg="#FAF7F2"
          >
            <div className="max-w-5xl mx-auto px-6 mb-10 flex items-center justify-between">
              <p
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-[0.2em] uppercase text-clay"
              >
                From the journal
              </p>
              <Link
                href="/blog"
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-deep-brown border-b border-clay pb-0.5 hover:text-clay transition-colors"
              >
                All essays →
              </Link>
            </div>

            <StickyPostCards posts={recent} />
          </section>
        )}

        {/* ── 4. Newsletter — warm amber shift ── */}
        <section
          className="py-20 px-6 max-w-5xl mx-auto"
          data-shift-bg="#F5EDE0"
        >
          <div
            className="p-8 md:p-12"
            style={{
              backgroundColor: "rgba(196,168,130,0.08)",
              border: "1px solid #E8D9C4",
            }}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="text-xs tracking-[0.2em] uppercase text-clay mb-4"
                >
                  Free guide
                </p>
                <h2
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-3xl md:text-4xl font-light text-deep-brown leading-tight mb-4"
                >
                  Seven rituals for arriving.
                </h2>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                  className="text-sm font-light leading-relaxed"
                >
                  A free guide for anyone who&apos;s felt unmoored in a new
                  place. Practical, specific, and written from the road.
                </p>
              </div>
              <div>
                <NewsletterSignup variant="inline" buttonText="Send me the guide" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Work with me — neutral warm shift ── */}
        <section
          className="py-20 px-6 max-w-5xl mx-auto"
          data-shift-bg="#F0EBE3"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-[0.2em] uppercase text-clay mb-4"
              >
                One-to-one
              </p>
              <h2
                style={{ fontFamily: "var(--font-cormorant)" }}
                className="text-3xl md:text-4xl font-light text-deep-brown leading-tight mb-5"
              >
                A conversation that helps you see what&apos;s next.
              </h2>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                className="text-sm font-light leading-relaxed mb-7"
              >
                A single 90-minute session — no packages, no programme. You
                talk, I listen, we think together. Good for anyone navigating a
                move, a shift in direction, or a season they can&apos;t quite
                name. You leave with one clear thing.
              </p>
              <Link
                href="/work-with-me"
                style={{ fontFamily: "var(--font-jost)" }}
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-deep-brown border-b border-clay pb-1 hover:text-clay transition-colors"
              >
                Learn more about working together →
              </Link>
            </div>
            <div
              className="aspect-[4/5] rounded-sm"
              style={{ backgroundColor: "#E8D9C4" }}
            />
          </div>
        </section>

        {/* ── 6. Dark closing — forest green, overrides body bg via inline style ── */}
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
              Home is not a place.
              <br />
              <em>It&apos;s a practice.</em>
            </h2>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="mt-6 text-sm font-light leading-relaxed opacity-80"
            >
              Five categories. One thread: learning to arrive, wherever you
              land.
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
