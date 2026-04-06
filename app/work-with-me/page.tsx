import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work with Me | Solace Space",
  description:
    "A single 90-minute conversation for anyone navigating a move, a transition, or a version of themselves they can't quite see yet. No packages, no programme.",
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
              One-to-one
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-deep-brown leading-tight mb-8"
            >
              A single conversation can change how you see what&apos;s next.
            </h1>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base font-light leading-relaxed max-w-2xl"
            >
              I&apos;m not a coach. Not a therapist. I&apos;m someone who&apos;s navigated multiple countries, careers-in-flux, and the particular grief of leaving places you loved. The session is a 90-minute conversation — you talk, I listen, we think together. You leave with clarity, not homework. One thing you didn&apos;t have before you came in.
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
              Who this is for
            </p>
            <ul className="flex flex-col gap-5">
              {[
                "You're between things — a move, a job, a version of yourself — and you can't quite see the shape of what's next.",
                "You feel fine on paper and unsettled underneath.",
                "You need a witness, not a plan.",
                "You've been journalling alone for too long.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span style={{ color: "#C4A882" }} className="mt-1 flex-shrink-0 text-sm">◦</span>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#342007" }}
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

        {/* What happens in the session */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-10"
            >
              What happens in the session
            </p>
            <div className="flex flex-col gap-10">
              {[
                {
                  num: "1",
                  text: "You talk. I listen without agenda for the first 30 minutes.",
                },
                {
                  num: "2",
                  text: "We find the thread. What keeps surfacing. What you're actually asking.",
                },
                {
                  num: "3",
                  text: "You leave with one clear thing. Not a list. One thing.",
                },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-6">
                  <span
                    style={{ fontFamily: "var(--font-cormorant)", color: "#C4A882" }}
                    className="text-5xl font-light flex-shrink-0 leading-none mt-1"
                  >
                    {step.num}
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-jost)", color: "#342007" }}
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
                { label: "Format", value: "Video call (Zoom or equivalent)" },
                { label: "Length", value: "90 minutes" },
                {
                  label: "Investment",
                  // TO EDIT: Replace with your actual session price
                  value: "$185",
                },
                { label: "Availability", value: "Currently taking 4 clients per month" },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline gap-6 border-b pb-5" style={{ borderColor: "#E8D9C4" }}>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                    className="text-xs tracking-[0.15em] uppercase w-28 flex-shrink-0"
                  >
                    {row.label}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#342007" }}
                    className="text-base font-light"
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              {/* Booking row */}
              <div className="flex items-baseline gap-6 border-b pb-5" style={{ borderColor: "#E8D9C4" }}>
                <span
                  style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                  className="text-xs tracking-[0.15em] uppercase w-28 flex-shrink-0"
                >
                  Booking
                </span>
                {/* TO EDIT: Replace with your actual booking link (Cal.com, Calendly, etc.) */}
                <Link
                  href="https://cal.com/your-link"
                  style={{ fontFamily: "var(--font-jost)", borderBottom: "1px solid #342007" }}
                  className="text-base font-light text-deep-brown pb-0.5 hover:text-clay transition-colors"
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

        {/* This might not be for you */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              This might not be for you if...
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "You're looking for accountability coaching or a structured programme.",
                "You want someone to tell you what to do.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span style={{ color: "#C4A882" }} className="mt-1 flex-shrink-0 text-sm">◦</span>
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

        {/* Dark closing section */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "#2C3519" }}
        >
          <div className="max-w-2xl mx-auto">
            {/* Pull quote */}
            <blockquote
              style={{ fontFamily: "var(--font-cormorant)", color: "#FAF7F2" }}
              className="text-3xl md:text-4xl font-light italic leading-relaxed mb-10"
            >
              &ldquo;I came in with a fog I&rsquo;d been living inside for months. I left with one sentence that changed how I moved for weeks.&rdquo;
            </blockquote>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.7)" }}
              className="text-xs tracking-[0.15em] uppercase mb-12"
            >
              — Previous client
            </p>
            {/* CTA */}
            {/* TO EDIT: Replace with your actual booking link (Cal.com, Calendly, etc.) */}
            <Link
              href="https://cal.com/your-link"
              style={{
                fontFamily: "var(--font-jost)",
                color: "#FAF7F2",
                borderColor: "#C4A882",
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
