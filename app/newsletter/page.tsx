import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "The Grounding Guide — Free for Subscribers | Solace Space",
  description:
    "Seven small rituals for the first 48 hours in a new place. Simple, specific, and tested across a lot of different rooms. Free for subscribers.",
};

export default function NewsletterPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Eyebrow */}
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-6"
            >
              Free guide
            </p>

            {/* Heading */}
            <h1
              style={{ fontFamily: "var(--font-cormorant)" }}
              className="text-5xl md:text-6xl font-light text-deep-brown leading-tight mb-6"
            >
              Seven rituals for arriving.
            </h1>

            {/* Subheading */}
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-base font-light leading-relaxed mb-10"
            >
              Most of us know how to pack a bag. Fewer of us know how to actually land somewhere. This guide is seven small rituals for the first 48 hours in a new place — simple, specific, and tested across a lot of different rooms.
            </p>

            {/* Divider */}
            <div className="h-px mb-10" style={{ backgroundColor: "#E8D9C4" }} />

            {/* What's inside */}
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-5"
            >
              What&apos;s inside
            </p>
            <ul className="flex flex-col gap-3 mb-12">
              {[
                "The one-object anchor — how a single familiar thing can ground an unfamiliar room",
                "A simple movement sequence for the first morning, before you check your phone",
                "How to make any kitchen feel like yours in under ten minutes",
                "The five-minute arrival ritual that turns a new space into a temporary home",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    style={{ color: "#C4A882" }}
                    className="mt-1 flex-shrink-0 text-xs"
                  >
                    ◦
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
                    className="text-sm font-light leading-relaxed"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Signup */}
            <NewsletterSignup
              variant="page"
              heading="Get the guide"
              subheading="Enter your email and it lands in your inbox in minutes."
              buttonText="Send me the guide"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
