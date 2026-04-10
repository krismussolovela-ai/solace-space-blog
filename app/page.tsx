import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { TextMaskHero } from "@/components/TextMaskHero";
import { ScrollColorShift } from "@/components/ScrollColorShift";

export default async function HomePage() {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 3);

  const themes = [
    {
      name: "Rituals",
      slug: "rituals",
      description: "The small repeated things that make a place feel inhabited.",
    },
    {
      name: "Field Notes",
      slug: "field-notes",
      description: "Observations from cities, kitchens, mornings, and moves.",
    },
    {
      name: "Objects",
      slug: "objects",
      description: "Things worth carrying. What survives every move.",
    },
    {
      name: "Guides",
      slug: "guides",
      description: "Practical, specific, tested across many different rooms.",
    },
    {
      name: "Reflections",
      slug: "reflections",
      description: "On living between places and the interior life it produces.",
    },
  ];

  return (
    <>
      <Nav />
      <ScrollColorShift />

      <main>
        {/* ── 1. Hero ── */}
        <div data-shift-bg="#FAF5EC">
          <TextMaskHero />
        </div>

        {/* ── 2. Recent posts — editorial list ── */}
        {recent.length > 0 && (() => {
          const pillarColor: Record<string, { accent: string; bg: string }> = {
            rituals:     { accent: "#C9873A", bg: "rgba(201,135,58,0.06)" },
            reflections: { accent: "#7B9E8B", bg: "rgba(123,158,139,0.06)" },
            guides:      { accent: "#2AADA4", bg: "rgba(42,173,164,0.06)" },
            "field notes": { accent: "#8B6F5E", bg: "rgba(139,111,94,0.06)" },
            objects:     { accent: "#C4A882", bg: "rgba(196,168,130,0.08)" },
          };
          return (
            <section className="py-16 px-6" data-shift-bg="#FAF5EC">
              <div className="max-w-3xl mx-auto">
                {/* Header row */}
                <div className="flex items-center justify-between mb-10" style={{ borderBottom: "1px solid #E8D9C4", paddingBottom: "12px" }}>
                  <p style={{ fontFamily: "var(--font-jost)" }} className="text-xs tracking-[0.2em] uppercase text-clay">
                    From the journal
                  </p>
                  <Link href="/blog" style={{ fontFamily: "var(--font-jost)" }} className="text-xs tracking-widest uppercase text-deep-brown hover:text-clay transition-colors">
                    All essays →
                  </Link>
                </div>

                {/* Post rows */}
                {recent.map((post) => {
                  const key = post.category?.toLowerCase() ?? "";
                  const { accent, bg } = pillarColor[key] ?? { accent: "#2AADA4", bg: "rgba(42,173,164,0.06)" };
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col gap-2 py-7 px-5 hover:opacity-90 transition-opacity"
                      style={{
                        borderBottom: "1px solid #E8D9C4",
                        borderLeft: `3px solid ${accent}`,
                        backgroundColor: bg,
                        marginBottom: "2px",
                      }}
                    >
                      <p style={{ fontFamily: "var(--font-jost)", color: accent }} className="text-xs tracking-[0.18em] uppercase">
                        {post.category}
                      </p>
                      <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#2A2016" }} className="text-2xl md:text-3xl font-light leading-snug">
                        {post.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }} className="text-sm font-light leading-relaxed">
                        {post.description}
                      </p>
                      <p style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }} className="text-xs tracking-widest uppercase mt-1 opacity-60">
                        {post.readingTime} · Read →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* ── 3. Editorial image break ── */}
        <section data-shift-bg="#FAF5EC" className="py-16 px-16">
          <div className="max-w-3xl mx-auto">
            <img
              src="/images/banner-mirror.png"
              alt="A hand holds a vintage oval mirror reflecting green mountains and coastline at golden hour"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-xs tracking-[0.15em] uppercase pt-3 opacity-60"
            >
              Kauaʻi, Hawaiʻi &mdash; every place looks different through the right frame
            </p>
          </div>
        </section>

        {/* ── 4. Themes / pillars ── */}
        <section
          className="py-20 px-6"
          data-shift-bg="#F5EDE0"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <p
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-[0.2em] uppercase text-clay"
              >
                Five themes. One thread.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px" style={{ backgroundColor: "#E8D9C4" }}>
              {themes.map((theme) => (
                <Link
                  key={theme.slug}
                  href={`/blog/category/${theme.slug}`}
                  className="group p-6 flex flex-col gap-3 transition-colors"
                  style={{ backgroundColor: "#FAF5EC" }}
                >
                  <span
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-xl font-light text-deep-brown group-hover:text-clay transition-colors"
                  >
                    {theme.name}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-xs font-light leading-relaxed"
                  >
                    {theme.description}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
                    className="text-xs tracking-widest uppercase mt-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Newsletter — primary CTA ── */}
        <section
          className="py-20 px-6"
          data-shift-bg="#F5EDE0"
        >
          <div
            className="max-w-5xl mx-auto p-10 md:p-16"
            style={{
              backgroundColor: "#2C3519",
            }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                  className="text-xs tracking-[0.2em] uppercase mb-4"
                >
                  Free guide for subscribers
                </p>
                <h2
                  style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
                  className="text-3xl md:text-4xl font-light leading-tight mb-4"
                >
                  Seven rituals for the first 48 hours in a new place.
                </h2>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.8)" }}
                  className="text-sm font-light leading-relaxed"
                >
                  Practical, specific, written from the road. For anyone who&apos;s felt unmoored in a city they technically live in. Free when you subscribe.
                </p>
              </div>
              <div>
                <NewsletterSignup variant="dark" buttonText="Send me the guide" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Pick of the Week teaser ── */}
        <section
          className="py-20 px-6"
          data-shift-bg="#FAF5EC"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="text-xs tracking-[0.2em] uppercase text-clay mb-2"
                >
                  Pick of the week
                </p>
                <h2
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-2xl font-light text-deep-brown"
                >
                  Objects worth carrying.
                </h2>
              </div>
              <Link
                href="/objects"
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-deep-brown border-b border-clay-light pb-0.5 hover:text-clay transition-colors hidden md:block"
              >
                All objects →
              </Link>
            </div>

            <div
              className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
              style={{ border: "1px solid #E8D9C4" }}
            >
              {/* Image placeholder */}
              <div
                className="aspect-square rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "#E8D9C4" }}
              >
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                  className="text-xs tracking-widest uppercase opacity-50"
                >
                  Photo
                </p>
              </div>

              {/* Object info */}
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#C9873A" }}
                    className="text-xs tracking-widest uppercase mb-1"
                  >
                    Week of April 7
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-2xl font-light text-deep-brown leading-tight"
                  >
                    Barro negro bowl, Oaxaca
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-xs mt-1 font-light"
                  >
                    by Doña Rosa Nieto
                  </p>
                </div>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
                  className="text-sm font-light leading-relaxed"
                >
                  A handmade black clay bowl from San Bartolo Coyotepec. The weight of it grounds a table. I&apos;ve moved it across three apartments and it&apos;s the first thing I unpack.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#C9873A" }}
                    className="text-xs font-medium"
                  >
                    ~$45 · Handmade · Oaxaca, Mexico
                  </p>
                </div>
                <Link
                  href="/objects"
                  style={{
                    fontFamily: "var(--font-jost)",
                    color: "#FAF5EC",
                    backgroundColor: "#2AADA4",
                  }}
                  className="text-xs tracking-widest uppercase px-5 py-3 text-center hover:opacity-90 transition-opacity self-start"
                >
                  Add to wishlist →
                </Link>
              </div>
            </div>

            <div className="mt-4 md:hidden">
              <Link
                href="/objects"
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-widest uppercase text-deep-brown border-b border-clay-light pb-0.5 hover:text-clay transition-colors"
              >
                All objects →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. Founder ── */}
        <section
          className="py-20 px-6"
          data-shift-bg="#F0EBE3"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Founder photo */}
              <img
                src="/images/kristina-muss.jpg"
                alt="Kristina Muss — founder, Solace Space"
                className="w-full rounded-sm object-cover object-top"
                style={{ aspectRatio: "3/4" }}
              />

              {/* Text */}
              <div className="flex flex-col gap-6 md:pt-8">
                <p
                  style={{ fontFamily: "var(--font-jost)" }}
                  className="text-xs tracking-[0.2em] uppercase text-clay"
                >
                  About Kristina Muss
                </p>
                <h2
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-3xl md:text-4xl font-light text-deep-brown leading-tight"
                >
                  Kristina Muss. Seven places in eight years.
                </h2>
                <div
                  style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
                  className="text-sm font-light leading-[1.9] space-y-4"
                >
                  <p>
                    I started this journal on a Tuesday morning in Mexico City. Three weeks into a new apartment, I still hadn&apos;t unpacked the last box. On the shelf: a ceramic cup from two cities before, a photograph, a book I hadn&apos;t opened. Three objects. It was the whole project, right there.
                  </p>
                  <p>
                    Solace Space is my attempt to name what I&apos;d been doing unconsciously for years — across borrowed apartments, short lets, and cities I&apos;d adopted and left. What makes a place feel inhabited. What actually helps you arrive.
                  </p>
                </div>
                <Link
                  href="/about"
                  style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #E8D9C4" }}
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-deep-brown pb-0.5 hover:text-clay hover:border-clay transition-colors self-start"
                >
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Sessions — soft mention ── */}
        <section
          className="py-16 px-6"
          data-shift-bg="#FAF5EC"
          style={{ borderTop: "1px solid #E8D9C4" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-5"
            >
              If you want to think together
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-2xl md:text-3xl font-light text-deep-brown leading-tight mb-4"
            >
              Occasionally, I take one-to-one sessions.
            </h2>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-sm font-light leading-relaxed max-w-lg mx-auto mb-6"
            >
              A 90-minute conversation for anyone navigating a move, a shift in direction, or a season they can&apos;t quite name. Four clients a month. No packages.
            </p>
            <Link
              href="/work-with-me"
              style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #E8D9C4" }}
              className="text-xs tracking-widest uppercase text-deep-brown pb-0.5 hover:text-clay hover:border-clay transition-colors"
            >
              Learn about sessions →
            </Link>
          </div>
        </section>

        {/* ── 9. Dark closing ── */}
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
              style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
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
              Five themes. One thread: learning to arrive, wherever you land.
            </p>
            <Link
              href="/blog"
              style={{
                fontFamily: "var(--font-jost)",
                color: "#FAF5EC",
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
