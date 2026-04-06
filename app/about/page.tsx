import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Solace Space",
  description:
    "Solace Space is a journal about learning to arrive — in new cities, new seasons, new versions of yourself. Seven places in eight years taught me that home is a practice, not a place.",
};

export default function AboutPage() {
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
              About
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl font-light text-deep-brown leading-tight mb-6"
            >
              I&apos;ve lived in seven places in eight years.
            </h1>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base md:text-lg font-light leading-relaxed"
            >
              Each move taught me something different. The last one taught me that arriving is a skill — and almost no one talks about how to build it.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Section 1 — Origin */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Where this came from
            </p>
            <div
              style={{ fontFamily: "var(--font-jost)", color: "#342007" }}
              className="text-base font-light leading-[1.9] space-y-5"
            >
              <p>
                It was a Tuesday morning in Mexico City, early enough that the street below was still quiet. I&apos;d been in the apartment three weeks and hadn&rsquo;t unpacked the last box. On the shelf above my desk: a ceramic cup I&rsquo;d carried from two cities before, a small photograph, a book I hadn&rsquo;t opened. Three objects. I remember looking at them and thinking — this is the whole project, right here.
              </p>
              <p>
                Not unpacking. Not decorating. Not making it look like somewhere. Just finding the three things that made a room feel inhabited. I&apos;d been doing that unconsciously for years — in shared houses, short lets, borrowed spaces — and I&rsquo;d never named it. Solace Space started as my attempt to name it. To write down what I actually did, and why it seemed to help, and to see if any of it was useful to anyone else who moves around or feels unmoored in a place they technically live.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Section 2 — What this is */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              What this is
            </p>
            <div
              style={{ fontFamily: "var(--font-jost)", color: "#342007" }}
              className="text-base font-light leading-[1.9] space-y-5"
            >
              <p>
                Solace Space is a journal, not a brand. There&rsquo;s no programme, no framework, no five-step system for living your best nomadic life. There are five categories — Rituals, Reflections, Guides, Field Notes, Objects — and one thread running through all of them: learning to arrive. To feel present in the space you&rsquo;re actually in, rather than the one you&rsquo;re still carrying from before, or already half-planning next.
              </p>
              <p>
                The writing is honest about what works and what doesn&rsquo;t. It takes the small things seriously — a morning sequence, a particular kind of light, the way a kitchen smells — because those are the things that actually shift how a place feels. If you&rsquo;re looking for permission to care about the details, you&rsquo;re in the right place.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Section 3 — CTAs */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              Work together
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card A — Newsletter */}
              <div
                className="p-8 flex flex-col gap-4"
                style={{ backgroundColor: "rgba(196, 168, 130, 0.12)", border: "1px solid #E8D9C4" }}
              >
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                  className="text-xs tracking-[0.15em] uppercase"
                >
                  Free guide
                </p>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)" }}
                  className="text-2xl font-light text-deep-brown leading-tight"
                >
                  The Grounding Guide
                </h3>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                  className="text-sm font-light leading-relaxed"
                >
                  Seven rituals for the first 48 hours in a new place. Free for subscribers.
                </p>
                <Link
                  href="/newsletter"
                  style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #C4A882" }}
                  className="inline-flex items-center gap-2 text-sm text-deep-brown pb-0.5 hover:text-clay transition-colors self-start mt-auto"
                >
                  Get the guide →
                </Link>
              </div>

              {/* Card B — Work with me */}
              <div
                className="p-8 flex flex-col gap-4"
                style={{ backgroundColor: "#2C3519" }}
              >
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                  className="text-xs tracking-[0.15em] uppercase"
                >
                  One-to-one
                </p>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)", color: "#FAF7F2" }}
                  className="text-2xl font-light leading-tight"
                >
                  A 90-minute session
                </h3>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.85)" }}
                  className="text-sm font-light leading-relaxed"
                >
                  One conversation, focused entirely on where you are and where you want to be. No packages, no programme.
                </p>
                <Link
                  href="/work-with-me"
                  style={{ fontFamily: "var(--font-jost)", color: "#FAF7F2", borderBottom: "1px solid #C4A882" }}
                  className="inline-flex items-center gap-2 text-sm pb-0.5 hover:opacity-70 transition-opacity self-start mt-auto"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
