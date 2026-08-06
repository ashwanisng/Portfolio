import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuickChat from "../components/QuickChat";
import ScrollObserver from "../components/ScrollObserver";

const BASE_URL = "https://ashwanisng.com";

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

export const metadata: Metadata = {
  title: {
    default: "Ashwani Singh | Mobile Product Engineer",
    template: "%s | Ashwani Singh",
  },
  description:
    "I help startups turn ideas into production-ready mobile products. Flutter Engineer specializing in cross-platform mobile apps, AI-enabled workflows, and scalable architectures.",
  metadataBase: new URL(BASE_URL),
  manifest: "/manifest.json",
  keywords: [
    "Flutter developer",
    "mobile app developer",
    "cross-platform app development",
    "Flutter engineer India",
    "Go backend developer",
    "AWS mobile developer",
    "freelance Flutter developer",
    "mobile product engineer",
    "AI mobile app developer",
  ],
  authors: [{ name: "Ashwani Kumar Singh", url: BASE_URL }],
  creator: "Ashwani Kumar Singh",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ashwani Singh",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ashwani Singh | Mobile Product Engineer",
    description:
      "I help startups turn ideas into production-ready mobile products. Flutter, Go, and AWS engineering expertise.",
    url: BASE_URL,
    siteName: "Ashwani Singh",
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
    creator: "@ashwanisng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashwani Kumar Singh",
    jobTitle: "Mobile Product Engineer",
    url: BASE_URL,
    email: "ashwanicena5@gmail.com",
    image: `${BASE_URL}/og-image.png`,
    sameAs: [
      "https://linkedin.com/in/ashwanisng",
      "https://github.com/ashwanisng",
      "https://medium.com/@ashwanisng",
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Go",
      "AWS",
      "Firebase",
      "Mobile App Development",
      "Cross-Platform Development",
      "AI Integration",
    ],
    worksFor: {
      "@type": "Organization",
      name: "HDFC Securities",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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
