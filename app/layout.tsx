import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://solacespace.com"),
  title: {
    default: "Solace Space — a space to feel at home, wherever you are",
    template: "%s | Solace Space",
  },
  description:
    "Rituals, reflections, and guides for feeling at home wherever you are. A conscious lifestyle journal for the perpetually in-between.",
  keywords: ["conscious living", "rituals", "slow lifestyle", "home", "travel", "mindful living"],
  authors: [{ name: "Solace Space" }],
  creator: "Solace Space",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://solacespace.com",
    siteName: "Solace Space",
    title: "Solace Space — a space to feel at home, wherever you are",
    description:
      "Rituals, reflections, and guides for feeling at home wherever you are.",
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
    description: "A space to feel at home, wherever you are.",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap"
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
