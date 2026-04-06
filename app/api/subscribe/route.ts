import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL PROVIDER INTEGRATION GUIDE
//
// This handler currently logs the email and returns a success response.
// To connect a real email provider, replace the placeholder block below.
//
// ── CONVERTKIT ────────────────────────────────────────────────────────────────
// 1. Add to .env.local:
//      CONVERTKIT_API_KEY=your_api_key
//      CONVERTKIT_FORM_ID=your_form_id
// 2. Replace the placeholder block with:
//
//    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
//    const API_KEY = process.env.CONVERTKIT_API_KEY;
//    const ckRes = await fetch(
//      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
//      {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({ api_key: API_KEY, email }),
//      }
//    );
//    if (!ckRes.ok) throw new Error("ConvertKit error");
//
// ── MAILERLITE ────────────────────────────────────────────────────────────────
// 1. Add to .env.local:
//      MAILERLITE_API_KEY=your_api_key
//      MAILERLITE_GROUP_ID=your_group_id   (optional, for a specific group)
// 2. Replace the placeholder block with:
//
//    const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
//      },
//      body: JSON.stringify({
//        email,
//        groups: process.env.MAILERLITE_GROUP_ID
//          ? [process.env.MAILERLITE_GROUP_ID]
//          : undefined,
//      }),
//    });
//    if (!mlRes.ok) throw new Error("MailerLite error");
//
// ── BEEHIIV ───────────────────────────────────────────────────────────────────
// 1. Add to .env.local:
//      BEEHIIV_API_KEY=your_api_key
//      BEEHIIV_PUBLICATION_ID=your_publication_id
// 2. Replace the placeholder block with:
//
//    const bhRes = await fetch(
//      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
//      {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
//        },
//        body: JSON.stringify({ email, reactivate_existing: false }),
//      }
//    );
//    if (!bhRes.ok) throw new Error("Beehiiv error");
//
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Validate that body is an object with an email field
  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as Record<string, unknown>).email !== "string"
  ) {
    return Response.json(
      { success: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase();

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { success: false, error: "That doesn't look like a valid email address." },
      { status: 400 }
    );
  }

  try {
    // ── PLACEHOLDER: replace this block with your email provider integration ──
    // See the comments at the top of this file for ConvertKit, MailerLite, and
    // Beehiiv integration instructions.
    console.log(`[subscribe] New subscriber: ${email}`);
    // ── END PLACEHOLDER ────────────────────────────────────────────────────────

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[subscribe] Provider error:", err);
    return Response.json(
      { success: false, error: "Couldn't subscribe just now. Please try again." },
      { status: 500 }
    );
  }
}
