import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevi's Signature Stacks — The Bracelet Bar | Handmade With Love",
  description:
    "Discover handmade bracelets, charm bracelets, pastel bead jewelry, wire necklaces & customized gift bracelets at Jeevi's Signature Stacks. Style Your Story with our unique handcrafted collection.",
  keywords:
    "handmade bracelets, charm bracelets, bead bracelets, wire jewelry, gift bracelets, custom bracelets, pastel jewelry, handcrafted accessories",
  openGraph: {
    title: "Jeevi's Signature Stacks — Style Your Story",
    description:
      "Handcrafted bracelets made with love. Charm bracelets, pastel beads, wire jewelry & personalized gifts.",
    type: "website",
    images: ["/images/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevi's Signature Stacks — Style Your Story",
    description:
      "Handcrafted bracelets made with love. Charm bracelets, pastel beads, wire jewelry & personalized gifts.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f8dfe5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
