import type { Metadata } from "next";
import { Sora, Heebo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700"],
});

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Crafted Web — Modern Websites Crafted for Your Brand",
    template: "%s — Crafted Web",
  },
  description:
    "Crafted Web is an independent digital studio founded by Nirmal, focused on delivering high-end, bespoke web solutions for creatives and ambitious brands.",
  openGraph: {
    title: "Crafted Web — Modern Websites Crafted for Your Brand",
    description:
      "Crafted Web is an independent digital studio founded by Nirmal, focused on delivering high-end, bespoke web solutions for creatives and ambitious brands.",
    url: "https://craftedweb.in",
    siteName: "Crafted Web",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "32x32" },
      { url: "/icon.png?v=4", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${heebo.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico?v=4" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans bg-background text-on-surface antialiased selection:bg-primary selection:text-white relative"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
