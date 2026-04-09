import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Kristina Muss | Solace Space",
  description:
    "Kristina Muss has lived in seven places in eight years. Solace Space is her journal about what it means to arrive — in new cities, new seasons, new versions of yourself.",
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

        {/* Founder intro */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <div>
              <img
                src="/images/kristina-muss.jpg"
                alt="Kristina Muss — founder, Solace Space"
                className="w-full rounded-sm mb-4 object-cover object-top"
                style={{ aspectRatio: "3/4" }}
              />
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                className="text-xs font-light tracking-widest uppercase"
              >
                Kristina Muss — founder, Solace Space
              </p>
            </div>

            {/* Story */}
            <div className="flex flex-col gap-6 md:pt-4">
              <p
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-xs tracking-[0.2em] uppercase text-clay"
              >
                Kristina Muss
              </p>
              <div
                style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
                className="text-base font-light leading-[1.9] space-y-5"
              >
                <p>
                  I&apos;m Kristina. I&apos;ve spent the last eight years moving — between cities, countries, and different versions of myself. London, Berlin, Lisbon, Mexico City, and a few places in between. I&apos;m not a nomad by ideology. I just kept finding reasons to go somewhere new, and then figuring out how to make that somewhere feel like home.
                </p>
                <p>
                  The rituals started small. A cup from one city that travels to the next. A particular morning sequence. The exact way I arrange things on a desk before I can write. I didn&apos;t think of these as systems — they were just things I did to feel less unmoored. It took several moves before I realised I was building something.
                </p>
                <p>
                  Solace Space is my attempt to name all of it. The unconscious architecture of feeling at home. The objects that earn their place in your life by surviving every move. The interior geography that goes with you regardless of address.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Where this came from */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Where this came from
            </p>
            <div
              style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
              className="text-base font-light leading-[1.9] space-y-5"
            >
              <p>
                It was a Tuesday morning in Mexico City, early enough that the street below was still quiet. I&apos;d been in the apartment three weeks and hadn&rsquo;t unpacked the last box. On the shelf above my desk: a ceramic cup I&apos;d carried from two cities before, a small photograph, a book I hadn&apos;t opened. Three objects. I remember looking at them and thinking — this is the whole project, right here.
              </p>
              <p>
                Not unpacking. Not decorating. Not making it look like somewhere. Just finding the three things that made a room feel inhabited. I&apos;d been doing that unconsciously for years — in shared houses, short lets, borrowed spaces — and I&apos;d never named it. Solace Space started as my attempt to name it. To write down what I actually did, and why it seemed to help, and to see if any of it was useful to anyone else who moves around or feels unmoored in a place they technically live.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
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
                Solace Space is a journal, a newsletter, and eventually a small curated world of objects. There&rsquo;s no programme, no framework, no five-step system for living your best nomadic life. There are five themes — Rituals, Reflections, Guides, Field Notes, Objects — and one thread running through all of them: learning to arrive.
              </p>
              <p>
                The writing is honest about what works and what doesn&rsquo;t. It takes the small things seriously — a morning sequence, a particular kind of light, the way a kitchen smells — because those are the things that actually shift how a place feels. The objects I write about are things I&apos;ve moved across countries and still reach for.
              </p>
              <p>
                If you&apos;re looking for permission to care about the details, you&apos;re in the right place.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* CTAs */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              Where to begin
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card A — Newsletter */}
              <div
                className="p-8 flex flex-col gap-4"
                style={{ backgroundColor: "rgba(42, 173, 164, 0.06)", border: "1px solid #E8D9C4" }}
              >
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#2AADA4" }}
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
                  style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #2AADA4", color: "#2AADA4" }}
                  className="inline-flex items-center gap-2 text-sm pb-0.5 hover:opacity-70 transition-opacity self-start mt-auto"
                >
                  Get the guide →
                </Link>
              </div>

              {/* Card B — Start here */}
              <div
                className="p-8 flex flex-col gap-4"
                style={{ backgroundColor: "#2C3519" }}
              >
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                  className="text-xs tracking-[0.15em] uppercase"
                >
                  New here
                </p>
                <h3
                  style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
                  className="text-2xl font-light leading-tight"
                >
                  Start here
                </h3>
                <p
                  style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.85)" }}
                  className="text-sm font-light leading-relaxed"
                >
                  A short orientation for first-time visitors. What this is, who it&apos;s for, where to begin.
                </p>
                <Link
                  href="/start-here"
                  style={{ fontFamily: "var(--font-jost)", color: "#FAF5EC", borderBottom: "1px solid #C4A882" }}
                  className="inline-flex items-center gap-2 text-sm pb-0.5 hover:opacity-70 transition-opacity self-start mt-auto"
                >
                  Orient yourself →
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
