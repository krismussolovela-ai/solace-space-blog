"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Circumferences for stroke-dashoffset animation: C = 2πr
const C_OUTER = 2 * Math.PI * 13; // 81.68
const C_MID   = 2 * Math.PI * 9;  // 56.55
const C_INNER = 2 * Math.PI * 5;  // 31.42

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";
const FADE_S = 0.5; // fade duration in seconds

export function TextMaskHero({
  onImage = false,
  subheadline = "Rituals, reflections, and honest guides for the perpetually in-between.",
}: {
  onImage?: boolean;
  subheadline?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef  = useRef<HTMLDivElement>(null);
  const markRef    = useRef<SVGSVGElement>(null);
  const outerRef   = useRef<SVGCircleElement>(null);
  const midRef     = useRef<SVGCircleElement>(null);
  const innerRef   = useRef<SVGCircleElement>(null);
  const dotRef     = useRef<SVGCircleElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  // ── GSAP entrance + floating mark ────────────────────────────────────────
  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    const init = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        gsap.set(markRef.current,   { opacity: 0, y: -16 });
        gsap.set(revealRef.current, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(outerRef.current,  { strokeDasharray: C_OUTER, strokeDashoffset: C_OUTER });
        gsap.set(midRef.current,    { strokeDasharray: C_MID,   strokeDashoffset: C_MID   });
        gsap.set(innerRef.current,  { strokeDasharray: C_INNER, strokeDashoffset: C_INNER });
        gsap.set(dotRef.current,    { opacity: 0, scale: 0, transformOrigin: "center" });

        const tl = gsap.timeline({ delay: 0.4 });

        tl.to(markRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        tl.to(outerRef.current, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }, "-=0.2");
        tl.to(midRef.current,   { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.5");
        tl.to(innerRef.current, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.4");
        tl.to(dotRef.current,   { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }, "-=0.1");
        tl.to(revealRef.current, { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power2.inOut" }, "-=0.1");
        tl.to(markRef.current, {
          y: -10, duration: 2.8, ease: "power1.inOut", yoyo: true, repeat: -1,
        }, "+=0.2");
      });
    };

    init();
    return () => ctx?.revert?.();
  }, []);

  // ── Video: custom fade-in / fade-out loop ─────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number;

    function tick() {
      if (!video) return;
      const { currentTime, duration } = video;

      if (!duration || isNaN(duration)) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (currentTime < FADE_S) {
        video.style.opacity = String(currentTime / FADE_S);
      } else if (currentTime > duration - FADE_S) {
        video.style.opacity = String(Math.max(0, (duration - currentTime) / FADE_S));
      } else {
        video.style.opacity = "1";
      }

      raf = requestAnimationFrame(tick);
    }

    function handleEnded() {
      if (!video) return;
      video.style.opacity = "0";
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    }

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--font-instrument)",
    fontSize: "clamp(44px, 8vw, 96px)",
    fontWeight: 400,
    lineHeight: 0.95,
    letterSpacing: "-0.025em",
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* ── Video background ────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute pointer-events-none object-cover w-full"
        style={{
          top: "300px",
          left: 0,
          right: 0,
          bottom: 0,
          height: "calc(100% - 300px)",
          opacity: 0,
          zIndex: 0,
        }}
      />

      {/* ── Gradient overlays ───────────────────────────────────────────── */}
      {/* top fade: cream → transparent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #FAF5EC 0%, #FAF5EC 28%, transparent 55%)",
          zIndex: 1,
        }}
      />
      {/* bottom fade: transparent → cream */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #FAF5EC 0%, #FAF5EC 12%, transparent 40%)",
          zIndex: 1,
        }}
      />

      {/* ── Hero content ────────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "calc(8rem - 75px)", paddingBottom: "10rem", zIndex: 10 }}
      >
        {/* Animated ripple mark */}
        <svg
          ref={markRef}
          width="80"
          height="80"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8"
          aria-hidden="true"
        >
          <circle ref={outerRef} cx="14" cy="14" r="13" stroke="#C4A882" strokeWidth="1" />
          <circle ref={midRef}   cx="14" cy="14" r="9"  stroke="#C4A882" strokeWidth="1" />
          <circle ref={innerRef} cx="14" cy="14" r="5"  stroke="#C4A882" strokeWidth="1" />
          <circle ref={dotRef}   cx="14" cy="14" r="1.5" fill="#C4A882" />
        </svg>

        {/* Eyebrow */}
        <p
          style={{ fontFamily: "var(--font-jost)" }}
          className="text-sm tracking-[0.2em] uppercase text-clay mb-8"
        >
          A conscious lifestyle journal
        </p>

        {/* Stacked headline — ghost outline + filled reveal */}
        <div className="relative w-full max-w-5xl mb-8 select-none">
          {/* Layer 1: ghost outline */}
          <h1
            aria-hidden="true"
            style={{
              ...headingStyle,
              color: "transparent",
              WebkitTextStroke: "1px rgba(52,32,7,0.12)",
            }}
          >
            a space to feel at home,
            <br />
            <em style={{ color: "transparent" }}>wherever you are</em>
          </h1>

          {/* Layer 2: filled text, clips in on GSAP timeline */}
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
              <em style={{ color: "#7A5C3E" }}>wherever you are</em>
            </h1>
          </div>
        </div>

        {/* Sub-headline */}
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
          className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-10 animate-fade-rise-delay"
        >
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-rise-delay-2">
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
      </div>
    </section>
  );
}
