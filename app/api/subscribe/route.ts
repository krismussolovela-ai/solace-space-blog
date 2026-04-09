import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// Auto-detecting email provider — set ONE of these in .env.local:
//
//   Kit (ConvertKit):
//     KIT_API_KEY=your_api_key
//     KIT_FORM_ID=your_form_id
//
//   MailerLite:
//     MAILERLITE_API_KEY=your_api_key
//     MAILERLITE_GROUP_ID=your_group_id  (optional)
//
//   Beehiiv:
//     BEEHIIV_API_KEY=your_api_key
//     BEEHIIV_PUBLICATION_ID=your_publication_id
//
// Whichever key is present will be used. If none, emails are logged to console.
// ─────────────────────────────────────────────────────────────────────────────

async function addSubscriber(email: string, tag?: string): Promise<void> {
  // ── Kit (ConvertKit) ────────────────────────────────────────────────────────
  if (process.env.KIT_API_KEY && process.env.KIT_FORM_ID) {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email,
          tags: tag ? [tag] : undefined,
        }),
      }
    );
    if (!res.ok) throw new Error(`Kit error: ${res.status}`);
    return;
  }

  // ── MailerLite ──────────────────────────────────────────────────────────────
  if (process.env.MAILERLITE_API_KEY) {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: process.env.MAILERLITE_GROUP_ID
          ? [process.env.MAILERLITE_GROUP_ID]
          : undefined,
      }),
    });
    if (!res.ok) throw new Error(`MailerLite error: ${res.status}`);
    return;
  }

  // ── Beehiiv ─────────────────────────────────────────────────────────────────
  if (process.env.BEEHIIV_API_KEY && process.env.BEEHIIV_PUBLICATION_ID) {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          custom_fields: tag ? [{ name: "source", value: tag }] : undefined,
        }),
      }
    );
    if (!res.ok) throw new Error(`Beehiiv error: ${res.status}`);
    return;
  }

  // ── No provider configured — log and succeed silently ───────────────────────
  console.log(`[subscribe] ${email}${tag ? ` (${tag})` : ""} — no provider configured`);
}

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
  const tag = (body as Record<string, unknown>).tag as string | undefined;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { success: false, error: "That doesn't look like a valid email address." },
      { status: 400 }
    );
  }

  try {
    await addSubscriber(email, tag);
    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[subscribe] Provider error:", err);
    return Response.json(
      { success: false, error: "Couldn't subscribe just now. Please try again." },
      { status: 500 }
    );
  }
}
