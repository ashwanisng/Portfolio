import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Founder-centric guides and technical reviews on Flutter development, mobile architecture, AI product integration, and startup engineering strategy.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Ashwani Singh — Product Engineering Articles",
    description: "Practical guides on building MVPs, choosing Flutter, shipping AI features, and hiring developers — written for startup founders and engineering leads.",
    url: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
