"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Circumferences for stroke-dashoffset animation: C = 2πr
const C_OUTER = 2 * Math.PI * 13; // 81.68
const C_MID   = 2 * Math.PI * 9;  // 56.55
const C_INNER = 2 * Math.PI * 5;  // 31.42

export function TextMaskHero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const revealRef   = useRef<HTMLDivElement>(null);
  const markRef     = useRef<SVGSVGElement>(null);
  const outerRef    = useRef<SVGCircleElement>(null);
  const midRef      = useRef<SVGCircleElement>(null);
  const innerRef    = useRef<SVGCircleElement>(null);
  const dotRef      = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    const init = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        // ── Initial states ──────────────────────────────────────────
        gsap.set(markRef.current,   { opacity: 0, y: -16 });
        gsap.set(revealRef.current, { clipPath: "inset(100% 0 0 0)" });

        // Rings start fully "undrawn"
        gsap.set(outerRef.current, { strokeDasharray: C_OUTER, strokeDashoffset: C_OUTER });
        gsap.set(midRef.current,   { strokeDasharray: C_MID,   strokeDashoffset: C_MID   });
        gsap.set(innerRef.current, { strokeDasharray: C_INNER, strokeDashoffset: C_INNER });
        gsap.set(dotRef.current,   { opacity: 0, scale: 0, transformOrigin: "center" });

        // ── Entrance timeline ────────────────────────────────────────
        const tl = gsap.timeline({ delay: 0.4 });

        // 1. Mark drifts into position
        tl.to(markRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        });

        // 2. Rings draw one by one (outer → mid → inner)
        tl.to(outerRef.current, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: "power2.inOut",
        }, "-=0.2");

        tl.to(midRef.current, {
          strokeDashoffset: 0,
          duration: 0.7,
          ease: "power2.inOut",
        }, "-=0.5");

        tl.to(innerRef.current, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }, "-=0.4");

        // 3. Centre dot pops in
        tl.to(dotRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(2)",
        }, "-=0.1");

        // 4. Text fills in from top → bottom
        tl.to(revealRef.current, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.1,
          ease: "power2.inOut",
        }, "-=0.1");

        // 5. Gentle float loop on the mark — starts after entrance
        tl.to(markRef.current, {
          y: -10,
          duration: 2.8,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }, "+=0.2");
      });
    };

    init();
    return () => ctx?.revert?.();
  }, []);

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--font-cormorant)",
    fontSize: "clamp(44px, 8vw, 96px)",
    fontWeight: 300,
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-24 px-6 max-w-5xl mx-auto"
    >
      {/* Eyebrow */}
      <p
        style={{ fontFamily: "var(--font-jost)" }}
        className="text-sm tracking-[0.2em] uppercase text-clay mb-8"
      >
        A conscious lifestyle journal
      </p>

      {/* Animated concentric-circle mark — lives above the headline */}
      <svg
        ref={markRef}
        width="64"
        height="64"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-7"
        aria-hidden="true"
      >
        <circle ref={outerRef} cx="14" cy="14" r="13" stroke="#C4A882" strokeWidth="1" />
        <circle ref={midRef}   cx="14" cy="14" r="9"  stroke="#C4A882" strokeWidth="1" />
        <circle ref={innerRef} cx="14" cy="14" r="5"  stroke="#C4A882" strokeWidth="1" />
        <circle ref={dotRef}   cx="14" cy="14" r="1.5" fill="#C4A882" />
      </svg>

      {/* Stacked headline — ghost outline + filled reveal */}
      <div className="relative max-w-4xl mb-8 select-none">
        {/* Layer 1: ghost outline */}
        <h1
          aria-hidden="true"
          style={{
            ...headingStyle,
            color: "transparent",
            WebkitTextStroke: "1px rgba(52,32,7,0.15)",
          }}
        >
          a space to feel at home,
          <br />
          <em>wherever you are</em>
        </h1>

        {/* Layer 2: filled text, clips in on timeline */}
        <div
          ref={revealRef}
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        >
          <h1
            aria-label="a space to feel at home, wherever you are"
            style={{ ...headingStyle, color: "#342007" }}
          >
            a space to feel at home,
            <br />
            <em>wherever you are</em>
          </h1>
        </div>
      </div>

      {/* Sub-headline */}
      <p
        style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
        className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-10"
      >
        Rituals, reflections, and honest guides for the perpetually in-between.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-6">
        <Link
          href="/blog"
          style={{ fontFamily: "var(--font-jost)" }}
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-deep-brown border-b border-clay pb-1 hover:text-clay transition-colors"
        >
          Read the journal →
        </Link>
        <Link
          href="/newsletter"
          style={{ fontFamily: "var(--font-jost)" }}
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-deep-brown border-b border-clay pb-1 hover:text-clay transition-colors"
        >
          Get the free guide →
        </Link>
      </div>
    </section>
  );
}
