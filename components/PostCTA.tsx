import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function PostCTA() {
  return (
    <div className="mt-16">
      {/* Section 1 — Newsletter */}
      <div
        className="p-8 md:p-12"
        style={{ backgroundColor: "rgba(196, 168, 130, 0.08)", border: "1px solid #E8D9C4" }}
      >
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
          className="text-xs tracking-[0.2em] uppercase mb-4"
        >
          From the journal
        </p>
        <h3
          style={{ fontFamily: "var(--font-cormorant)" }}
          className="text-3xl md:text-4xl font-light text-deep-brown leading-tight mb-3"
        >
          Seven rituals for arriving.
        </h3>
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
          className="text-sm font-light leading-relaxed mb-6 max-w-md"
        >
          A free guide for anyone who&apos;s felt unmoored in a new place. Practical, specific, written from the road.
        </p>
        <NewsletterSignup variant="inline" buttonText="Send the guide" />
      </div>

      {/* Section 2 — Work with me */}
      <div
        className="p-8 md:p-12 mt-0"
        style={{ backgroundColor: "#2C3519" }}
      >
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
          className="text-xs tracking-[0.2em] uppercase mb-4"
        >
          One-to-one
        </p>
        <h3
          style={{ fontFamily: "var(--font-cormorant)", color: "#FAF7F2" }}
          className="text-3xl md:text-4xl font-light leading-tight mb-4"
        >
          Sometimes you need someone to think with.
        </h3>
        <p
          style={{ fontFamily: "var(--font-jost)", color: "rgba(196, 168, 130, 0.8)" }}
          className="text-sm font-light leading-relaxed mb-6 max-w-md"
        >
          A single 90-minute session. No programs, no packages. Just clear, grounded conversation about where you are and where you want to be.
        </p>
        <Link
          href="/work-with-me"
          style={{
            fontFamily: "var(--font-jost)",
            color: "#FAF7F2",
            borderBottom: "1px solid #C4A882",
          }}
          className="inline-flex items-center gap-2 text-sm tracking-wide pb-0.5 hover:opacity-70 transition-opacity"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
