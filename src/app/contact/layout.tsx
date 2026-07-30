import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute discovery call with Ashwani Singh. Submit your project scope to start a Flutter MVP, mobile modernization, or AI feature integration engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ashwani Singh | Book a Discovery Call",
    description: "Reach out to start an MVP build, modernize your mobile app, or integrate AI features. Typical response within 24 hours.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
