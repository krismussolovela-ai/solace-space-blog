import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Subscribe — The Grounding Guide | Solace Space",
  description:
    "Seven rituals for the first 48 hours in a new place. Simple, specific, tested across a lot of different rooms. Free when you subscribe to the Solace Space newsletter.",
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
              Free for subscribers · @solacespace
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
              Most of us know how to pack a bag. Fewer of us know how to actually land somewhere. This is a guide for the first 48 hours — seven specific things that help a new place start to feel inhabited. Written by Kristina Muss, tested across many different rooms.
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
                "A movement sequence for the first morning, before you check your phone",
                "How to make any kitchen feel like yours in under ten minutes",
                "The five-minute arrival ritual I use every time, in every city",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    style={{ color: "#2AADA4" }}
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

            {/* Divider */}
            <div className="h-px mb-10" style={{ backgroundColor: "#E8D9C4" }} />

            {/* What the newsletter is */}
            <p
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-[0.2em] uppercase text-clay mb-5"
            >
              The newsletter
            </p>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-sm font-light leading-relaxed mb-10"
            >
              When you subscribe, you get the guide immediately. After that: new essays, objects, and occasional field notes whenever there&apos;s something worth saying. No schedule, no noise, no pitch. Unsubscribe any time.
            </p>

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
