import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C3519" }} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
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
                style={{ fontFamily: "var(--font-cormorant)", color: "#FAF7F2" }}
                className="text-lg font-medium tracking-wide"
              >
                Solace Space
              </span>
            </div>
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
              className="text-sm font-light leading-relaxed opacity-80 italic"
            >
              a space to feel at home, wherever you are
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60"
              >
                Categories
              </p>
              <nav className="flex flex-col gap-2">
                {["Rituals", "Reflections", "Guides", "Field Notes", "Objects"].map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog/category/${cat.toLowerCase().replace(/ /g, "-")}`}
                    style={{ fontFamily: "var(--font-jost)", color: "#FAF7F2" }}
                    className="text-sm font-light hover:text-clay transition-colors opacity-80"
                  >
                    {cat}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
                className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60"
              >
                Journal
              </p>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/blog"
                  style={{ fontFamily: "var(--font-jost)", color: "#FAF7F2" }}
                  className="text-sm font-light hover:text-clay transition-colors opacity-80"
                >
                  All essays
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t" style={{ borderColor: "rgba(196, 168, 130, 0.2)" }}>
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#C4A882" }}
            className="text-xs opacity-50"
          >
            © {new Date().getFullYear()} Solace Space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
