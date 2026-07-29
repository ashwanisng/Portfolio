import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickChat from "../components/QuickChat";
import ScrollObserver from "../components/ScrollObserver";

// Load Google Fonts
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Global SEO Metadata configurations
export const metadata: Metadata = {
  title: "Ashwani Singh | Mobile Product Engineer",
  description:
    "I help startups turn ideas into production-ready mobile products. Flutter Engineer specializing in cross-platform mobile apps, AI-enabled workflows, and scalable architectures.",
  metadataBase: new URL("https://ashwanisingh.dev"), // Fallback domain
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ashwani.Dev",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashwani Singh | Mobile Product Engineer",
    description:
      "I help startups turn ideas into production-ready mobile products. Flutter, Go, and AWS engineering expertise.",
    url: "/",
    siteName: "Ashwani Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashwani Singh - Mobile Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwani Singh | Mobile Product Engineer",
    description:
      "I help startups turn ideas into production-ready mobile products. Flutter, Go, and AWS engineering expertise.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="theme-dark-body">
        <ScrollObserver />
        <Header />
        <main className="main-content-layout">{children}</main>
        <Footer />
        <QuickChat />
      </body>
    </html>
  );
}
