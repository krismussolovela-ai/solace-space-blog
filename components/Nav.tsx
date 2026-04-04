"use client";
import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(250, 247, 242, 0.95)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Concentric circle SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <circle cx="14" cy="14" r="13" stroke="#C4A882" strokeWidth="1" />
            <circle cx="14" cy="14" r="9" stroke="#C4A882" strokeWidth="1" />
            <circle cx="14" cy="14" r="5" stroke="#C4A882" strokeWidth="1" />
            <circle cx="14" cy="14" r="1.5" fill="#C4A882" />
          </svg>
          <span
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-xl font-medium text-deep-brown tracking-wide group-hover:text-clay transition-colors"
          >
            Solace Space
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Journal", href: "/blog" },
            { label: "Rituals", href: "/blog/category/rituals" },
            { label: "Guides", href: "/blog/category/guides" },
            { label: "Reflections", href: "/blog/category/reflections" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ fontFamily: "var(--font-jost)" }}
              className="text-xs tracking-widest uppercase text-deep-brown hover:text-clay transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-deep-brown transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-deep-brown transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-deep-brown transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-clay-light"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-5">
            {[
              { label: "Journal", href: "/blog" },
              { label: "Rituals", href: "/blog/category/rituals" },
              { label: "Guides", href: "/blog/category/guides" },
              { label: "Reflections", href: "/blog/category/reflections" },
              { label: "Field Notes", href: "/blog/category/field-notes" },
              { label: "Objects", href: "/blog/category/objects" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-jost)" }}
                className="text-sm tracking-widest uppercase text-deep-brown hover:text-clay transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom border */}
      <div className="h-px bg-clay-light" />
    </header>
  );
}
