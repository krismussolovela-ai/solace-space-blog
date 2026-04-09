import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sessions with Kristina Muss | Solace Space",
  description:
    "A 90-minute conversation for people navigating a move, a transition, or a season they can't quite name. Four sessions a month. No packages, no programme.",
};

export default function WorkWithMePage() {
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
              Sessions · Kristina Muss
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-deep-brown leading-tight mb-8"
            >
              A conversation that helps you see what&apos;s next.
            </h1>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base font-light leading-relaxed max-w-2xl"
            >
              I&apos;m not a coach. Not a therapist. I&apos;m someone who has navigated multiple countries, careers in flux, and the particular grief of leaving places you loved. These sessions are for people who already know how to think — they just need a clear hour and an honest witness.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Who this is for */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              Who comes
            </p>
            <ul className="flex flex-col gap-5">
              {[
                "You're between things — a move, a job, a version of yourself — and you can't quite see the shape of what's next.",
                "You feel fine on paper and unsettled underneath.",
                "You've been thinking in circles and need someone to think with, not at.",
                "You're a reader of the journal, or someone a reader sent here.",
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

        {/* What you leave with */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              What you leave with
            </p>
            <ul className="flex flex-col gap-5">
              {[
                "One clear thing. Not a list, not a plan. One thing you didn't have before.",
                "A different way of holding a question you've been carrying too tightly.",
                "The sensation that someone actually heard what you said.",
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

        {/* How it works */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-10"
            >
              How it works
            </p>
            <div className="flex flex-col gap-10">
              {[
                {
                  num: "1",
                  text: "You talk. I listen without agenda for the first 30 minutes. No questions yet.",
                },
                {
                  num: "2",
                  text: "We find the thread. What keeps surfacing. What you're actually asking underneath what you said.",
                },
                {
                  num: "3",
                  text: "You leave with one clear thing. Not a list. One thing you can carry forward.",
                },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-6">
                  <span
                    style={{ fontFamily: "var(--font-cormorant)", color: "#2AADA4" }}
                    className="text-5xl font-light flex-shrink-0 leading-none mt-1"
                  >
                    {step.num}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
                    className="text-lg font-light leading-relaxed pt-2"
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* The details */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-8"
            >
              The details
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Format", value: "Video call — Zoom or equivalent" },
                { label: "Length", value: "90 minutes" },
                { label: "Investment", value: "$185" },
                { label: "Availability", value: "Four sessions per month" },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline gap-6 border-b pb-5" style={{ borderColor: "#E8D9C4" }}>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-xs tracking-[0.15em] uppercase w-28 flex-shrink-0"
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jost)",
                      color: row.label === "Investment" ? "#C9873A" : "#2A2016",
                      fontWeight: row.label === "Investment" ? 500 : 300,
                    }}
                    className="text-base"
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              {/* Booking row */}
              <div className="flex items-baseline gap-6 border-b pb-5" style={{ borderColor: "#E8D9C4" }}>
                <span
                  style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                  className="text-xs tracking-[0.15em] uppercase w-28 flex-shrink-0"
                >
                  Booking
                </span>
                <Link
                  href="https://cal.com/kristina-mussolovela"
                  style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #2AADA4", color: "#2AADA4" }}
                  className="text-base font-light pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Book a session →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ backgroundColor: "#E8D9C4" }} />
        </div>

        {/* Not for you */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              This is probably not for you if...
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "You want a structured coaching programme or regular accountability check-ins.",
                "You need someone to hand you a plan or tell you what to do.",
                "You're in acute crisis — this isn't therapy, and it doesn't pretend to be.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span style={{ color: "#E8D9C4" }} className="mt-1 flex-shrink-0 text-sm">◦</span>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
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

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-10"
            >
              Questions
            </p>
            <div className="flex flex-col gap-8">
              {[
                {
                  q: "Do I need to have read the journal to book a session?",
                  a: "No. The journal is the public version of what I think about. The session is just a conversation — it doesn't require homework.",
                },
                {
                  q: "What if I don't know what I want to talk about?",
                  a: "That's fine. Most people who come don't have a clean question. We find it together. You don't need to arrive prepared.",
                },
                {
                  q: "Is this therapy?",
                  a: "No. I'm not a therapist. This is a thoughtful conversation between two people. If you need clinical support, I'll say so.",
                },
                {
                  q: "What happens after the session?",
                  a: "Nothing formal. There's no follow-up programme. You take the one thing and do what you want with it. Some people come back. Most don't need to.",
                },
              ].map((item) => (
                <div key={item.q} className="flex flex-col gap-3">
                  <h3
                    style={{ fontFamily: "var(--font-cormorant)" }}
                    className="text-xl font-light text-deep-brown leading-tight"
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-sm font-light leading-relaxed"
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark closing section */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#2C3519" }}
        >
          <div className="max-w-2xl mx-auto">
            {/* Pull quote */}
            <blockquote
              style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
              className="text-3xl md:text-4xl font-light italic leading-relaxed mb-10"
            >
              &ldquo;I came in with a fog I&rsquo;d been living inside for months. I left with one sentence that changed how I moved for weeks.&rdquo;
            </blockquote>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.7)" }}
              className="text-xs tracking-[0.15em] uppercase mb-12"
            >
              — Session client
            </p>
            <Link
              href="https://cal.com/kristina-mussolovela"
              style={{
                fontFamily: "var(--font-jost)",
                color: "#FAF5EC",
                borderColor: "#2AADA4",
              }}
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b pb-1 hover:opacity-70 transition-opacity"
            >
              Book a session →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
