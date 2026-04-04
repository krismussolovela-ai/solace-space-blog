"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(html: string): Heading[] {
  if (typeof window === "undefined") return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headingEls = doc.querySelectorAll("h2, h3");
  return Array.from(headingEls).map((el) => ({
    id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "",
    text: el.textContent || "",
    level: parseInt(el.tagName[1]),
  }));
}

interface Props {
  contentHtml: string;
}

export function TableOfContents({ contentHtml }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const extracted = extractHeadings(contentHtml);
    setHeadings(extracted);
  }, [contentHtml]);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav>
      <p
        style={{ fontFamily: "var(--font-jost)" }}
        className="text-xs tracking-[0.2em] uppercase text-clay mb-4"
      >
        In this piece
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              style={{ fontFamily: "var(--font-jost)" }}
              className={`block text-xs leading-relaxed transition-colors ${
                h.level === 3 ? "pl-3" : ""
              } ${
                activeId === h.id
                  ? "text-clay font-medium"
                  : "text-brown-muted hover:text-deep-brown"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
