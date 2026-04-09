import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C3519" }} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Newsletter signup row */}
        <div
          className="mb-12 pb-12"
          style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.2)" }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2
                style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
                className="text-2xl font-light mb-2"
              >
                Stay close.
              </h2>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                className="text-sm font-light leading-relaxed opacity-80"
              >
                New essays and objects, whenever there&apos;s something worth sharing. No schedule, no noise.
              </p>
            </div>
            <div>
              <NewsletterSignup
                variant="dark"
                buttonText="Subscribe"
              />
            </div>
          </div>
        </div>

        {/* Links grid + brand */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="13" stroke="#C4A882" strokeWidth="1" />
                <circle cx="14" cy="14" r="9" stroke="#C4A882" strokeWidth="1" />
                <circle cx="14" cy="14" r="5" stroke="#C4A882" strokeWidth="1" />
                <circle cx="14" cy="14" r="1.5" fill="#C4A882" />
              </svg>
              <span
                style={{ fontFamily: "var(--font-cormorant)", color: "#FAF5EC" }}
                className="text-lg font-medium tracking-wide"
              >
                Solace Space
              </span>
            </div>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="text-sm font-light leading-relaxed opacity-80 italic mb-3"
            >
              a journal for people living between places
            </p>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="text-xs tracking-widest uppercase opacity-50"
            >
              @solacespace
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Column 1 — Themes */}
            <div>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60"
              >
                Themes
              </p>
              <nav className="flex flex-col gap-2">
                {["Rituals", "Reflections", "Guides", "Field Notes", "Objects"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog/category/${cat.toLowerCase().replace(/ /g, "-")}`}
                    style={{ fontFamily: "var(--font-jost)", color: "#FAF5EC" }}
                    className="text-sm font-light hover:text-clay transition-colors opacity-80"
                  >
                    {cat}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2 — Pages */}
            <div>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60"
              >
                Pages
              </p>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Journal", href: "/blog" },
                  { label: "Objects", href: "/objects" },
                  { label: "Start Here", href: "/start-here" },
                  { label: "About", href: "/about" },
                  { label: "Sessions", href: "/work-with-me" },
                  { label: "Subscribe", href: "/newsletter" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ fontFamily: "var(--font-jost)", color: "#FAF5EC" }}
                    className="text-sm font-light hover:text-clay transition-colors opacity-80"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-2" style={{ borderColor: "rgba(196, 168, 130, 0.2)" }}>
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
            className="text-xs opacity-50"
          >
            © {new Date().getFullYear()} Solace Space. All rights reserved.
          </p>
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
            className="text-xs opacity-40 tracking-widest uppercase"
          >
            @solacespace
          </p>
        </div>
      </div>
    </footer>
  );
}
