"use client";
import { useState } from "react";

// Flip to false once the email service is connected
const COMING_SOON = true;

interface NewsletterSignupProps {
  variant?: "inline" | "dark" | "page";
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

export function NewsletterSignup({
  variant = "inline",
  heading,
  subheading,
  buttonText = "Send it to me",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.error || "Something went gently wrong. Try once more?");
        return;
      }

      setStatus("success");
      setMessage("You're in. Check your inbox in a moment.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Couldn't connect just now. Try again in a moment.");
    }
  }

  const isDark = variant === "dark";
  const isPage = variant === "page";

  if (COMING_SOON) {
    return (
      <div>
        {heading && (
          <h3
            style={{ fontFamily: "var(--font-cormorant)", color: isDark ? "#FAF5EC" : "#2A2016" }}
            className={isPage ? "text-5xl font-light mb-3" : "text-3xl font-light mb-3"}
          >
            {heading}
          </h3>
        )}
        {subheading && (
          <p
            style={{ fontFamily: "var(--font-jost)", color: isDark ? "rgba(196,168,130,0.85)" : "#7A5C3E" }}
            className="text-sm font-light leading-relaxed mb-5"
          >
            {subheading}
          </p>
        )}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: isDark ? "#FAF5EC" : "#2A2016",
          }}
          className="text-xl italic font-light"
        >
          Newsletter coming soon.
        </p>
        <p
          style={{ fontFamily: "var(--font-jost)", color: isDark ? "rgba(196,168,130,0.6)" : "#7A5C3E" }}
          className="mt-2 text-xs font-light"
        >
          Check back shortly — the guide will be here when we launch.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = isDark
    ? {
        fontFamily: "var(--font-jost)",
        backgroundColor: "transparent",
        border: "1px solid rgba(196, 168, 130, 0.5)",
        color: "#FAF7F2",
        outline: "none",
      }
    : {
        fontFamily: "var(--font-jost)",
        backgroundColor: "transparent",
        border: "1px solid #E8D9C4",
        color: "#342007",
        outline: "none",
      };

  const buttonStyle: React.CSSProperties = isDark
    ? {
        fontFamily: "var(--font-jost)",
        backgroundColor: "#C4A882",
        color: "#342007",
        cursor: status === "loading" ? "not-allowed" : "pointer",
        opacity: status === "loading" ? 0.7 : 1,
      }
    : {
        fontFamily: "var(--font-jost)",
        backgroundColor: "#342007",
        color: "#FAF7F2",
        cursor: status === "loading" ? "not-allowed" : "pointer",
        opacity: status === "loading" ? 0.7 : 1,
      };

  const microcopyColor = isDark ? "rgba(196, 168, 130, 0.6)" : "#7A5C3E";

  return (
    <div>
      {heading && (
        <h3
          style={{ fontFamily: "var(--font-cormorant)", color: isDark ? "#FAF7F2" : "#342007" }}
          className={isPage ? "text-5xl font-light mb-3" : "text-3xl font-light mb-3"}
        >
          {heading}
        </h3>
      )}
      {subheading && (
        <p
          style={{ fontFamily: "var(--font-jost)", color: isDark ? "rgba(196,168,130,0.85)" : "#7A5C3E" }}
          className="text-sm font-light leading-relaxed mb-5"
        >
          {subheading}
        </p>
      )}

      {status === "success" ? (
        <p
          style={{ fontFamily: "var(--font-cormorant)", color: isDark ? "#FAF7F2" : "#342007" }}
          className="text-xl italic font-light"
        >
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === "loading"}
            style={inputStyle}
            className="flex-1 px-4 py-3 text-sm rounded-none placeholder-opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={buttonStyle}
            className="px-6 py-3 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-opacity hover:opacity-80"
          >
            {status === "loading" ? "Sending..." : buttonText}
          </button>
        </form>
      )}

      {status === "error" && (
        <p
          style={{ fontFamily: "var(--font-jost)", color: isDark ? "rgba(196,168,130,0.8)" : "#7A5C3E" }}
          className="mt-2 text-sm font-light"
        >
          {message}
        </p>
      )}

      <p
        style={{ fontFamily: "var(--font-jost)", color: microcopyColor }}
        className="mt-3 text-xs font-light"
      >
        No noise. Unsubscribe anytime.
      </p>
    </div>
  );
}
