"use client";
import { useState } from "react";

/**
 * PickOfTheWeek
 *
 * Displays the weekly curated object. Email capture validates demand
 * before the object is sourced — wishlist mode by default.
 *
 * Props:
 *   pick: {
 *     name: string,
 *     origin: string,
 *     maker?: string,
 *     description: string,
 *     story?: string,
 *     price: string,
 *     criteria?: string,
 *     weekOf: string,
 *     image?: string,
 *     imageAlt?: string,
 *     available?: boolean,   // true = buyable, false = wishlist mode
 *     buyLink?: string,      // if available = true
 *   }
 */
export function PickOfTheWeek({ pick }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleWishlist(e) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tag: `wishlist-${pick.name?.toLowerCase().replace(/\s+/g, "-")}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Image */}
      <div>
        {pick.image ? (
          <img
            src={pick.image}
            alt={pick.imageAlt || pick.name}
            className="w-full aspect-square object-cover"
          />
        ) : (
          <div
            className="aspect-square flex items-center justify-center"
            style={{ backgroundColor: "#E8D9C4" }}
          >
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-xs tracking-widest uppercase opacity-50"
            >
              Photo
            </p>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-5">
        {/* Week label */}
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#C9873A" }}
          className="text-xs tracking-widest uppercase"
        >
          Week of {pick.weekOf}
        </p>

        {/* Name + origin */}
        <div>
          <h2
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-3xl md:text-4xl font-light text-deep-brown leading-tight"
          >
            {pick.name}
          </h2>
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
            className="text-sm font-light mt-1"
          >
            {pick.origin}{pick.maker ? ` · ${pick.maker}` : ""}
          </p>
        </div>

        {/* Description */}
        <p
          style={{ fontFamily: "var(--font-jost)", color: "#2A2016" }}
          className="text-sm font-light leading-relaxed"
        >
          {pick.description}
        </p>

        {/* Story (optional) */}
        {pick.story && (
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
            className="text-sm font-light leading-relaxed italic"
          >
            {pick.story}
          </p>
        )}

        {/* Price + criteria */}
        <div className="flex items-center gap-4 pt-2 pb-4" style={{ borderTop: "1px solid #E8D9C4", borderBottom: "1px solid #E8D9C4" }}>
          <p
            style={{ fontFamily: "var(--font-jost)", color: "#C9873A" }}
            className="text-xs font-medium"
          >
            {pick.price}
          </p>
          {pick.criteria && (
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-xs font-light opacity-70"
            >
              {pick.criteria}
            </p>
          )}
        </div>

        {/* CTA — wishlist or buy */}
        {pick.available && pick.buyLink ? (
          <a
            href={pick.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-jost)",
              backgroundColor: "#2AADA4",
              color: "#FAF5EC",
            }}
            className="text-xs tracking-widest uppercase px-5 py-3 text-center hover:opacity-90 transition-opacity self-start"
          >
            Order this object →
          </a>
        ) : (
          <div className="flex flex-col gap-3">
            <p
              style={{ fontFamily: "var(--font-jost)", color: "#7A5C3E" }}
              className="text-xs font-light"
            >
              {status === "success"
                ? "You're on the wishlist. I'll email you when this is available to order."
                : "Add to wishlist — I source objects based on interest."}
            </p>

            {status !== "success" && (
              <form onSubmit={handleWishlist} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="your@email.com"
                  required
                  style={{
                    fontFamily: "var(--font-jost)",
                    backgroundColor: "transparent",
                    border: "1px solid #E8D9C4",
                    color: "#2A2016",
                  }}
                  className="flex-1 px-4 py-2.5 text-sm font-light placeholder-brown-muted focus:outline-none focus:border-clay transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    fontFamily: "var(--font-jost)",
                    backgroundColor: "#2AADA4",
                    color: "#FAF5EC",
                  }}
                  className="text-xs tracking-widest uppercase px-4 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-50 flex-shrink-0"
                >
                  {status === "loading" ? "..." : "Wish for this"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p
                style={{ fontFamily: "var(--font-jost)", color: "#C9873A" }}
                className="text-xs font-light"
              >
                Please enter a valid email address.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
