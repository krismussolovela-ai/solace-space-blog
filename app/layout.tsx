import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://solace-space-blog.vercel.app"),
  title: {
    default: "Solace Space — a journal for people living between places",
    template: "%s | Solace Space",
  },
  description:
    "Essays, rituals, and objects for anyone who's felt at home everywhere and nowhere. A journal. A newsletter. A small world.",
  keywords: ["conscious living", "rituals", "objects", "slow lifestyle", "home", "travel", "mindful living", "newsletter"],
  authors: [{ name: "Kristina Muss" }],
  creator: "Kristina Muss",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://solace-space-blog.vercel.app",
    siteName: "Solace Space",
    title: "Solace Space — a journal for people living between places",
    description:
      "Essays, rituals, and objects for anyone who's felt at home everywhere and nowhere.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solace Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solace Space",
    description: "A journal for people living between places.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "a21486663ec2473f",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9VB5FLF67"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F9VB5FLF67');
          `}
        </Script>
      </body>
    </html>
  );
}
