"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const CARD_PALETTE = [
  { bg: "#342007", text: "#FAF7F2", meta: "rgba(250,247,242,0.55)" },
  { bg: "#2C3519", text: "#FAF7F2", meta: "rgba(250,247,242,0.55)" },
  { bg: "#E8D9C4", text: "#342007", meta: "rgba(52,32,7,0.50)" },
];

export function StickyPostCards({ posts }: { posts: Post[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = containerRef.current?.querySelectorAll<HTMLElement>(".ss-stack-card");
        if (!cards) return;

        cards.forEach((card, i) => {
          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 0.95,
              opacity: 0.65,
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top 75%",
                end: "top 25%",
                scrub: true,
              },
            });
          }
        });
      }, containerRef);
    };

    init();
    return () => ctx?.revert?.();
  }, []);

  return (
    <div ref={containerRef} className="max-w-2xl mx-auto px-6 pb-40">
      {posts.map((post, i) => {
        const { bg, text, meta } = CARD_PALETTE[i % CARD_PALETTE.length];
        const topPx = 80 + i * 22;

        return (
          <div
            key={post.slug}
            className="ss-stack-card"
            style={{
              position: "sticky",
              top: topPx,
              backgroundColor: bg,
              borderRadius: "3px",
              padding: "clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px)",
              minHeight: "260px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
              zIndex: i + 1,
              willChange: "transform",
            }}
          >
            {/* Category */}
            <div
              style={{
                color: meta,
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {post.category}
            </div>

            {/* Title */}
            <Link href={`/blog/${post.slug}`}>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: text,
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  marginBottom: "12px",
                }}
              >
                {post.title}
              </h3>
            </Link>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-jost)",
                color: text,
                opacity: 0.65,
                fontSize: "15px",
                lineHeight: 1.6,
                maxWidth: "52ch",
                marginBottom: "22px",
              }}
            >
              {post.description}
            </p>

            {/* Footer row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span
                style={{
                  fontFamily: "var(--font-jost)",
                  color: meta,
                  fontSize: "12px",
                }}
              >
                {post.readingTime}
              </span>
              <span style={{ color: meta, opacity: 0.4, fontSize: "12px" }}>·</span>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontFamily: "var(--font-jost)",
                  color: meta,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderBottom: `1px solid ${meta}`,
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                Read →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
