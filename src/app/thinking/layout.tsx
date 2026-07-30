import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Think",
  description: "Ashwani Singh's engineering philosophy — principles on clean architecture, startup speed, performance-first thinking, and long-term product ownership.",
  alternates: { canonical: "/thinking" },
  openGraph: {
    title: "How I Think | Ashwani Singh — Engineering Philosophy",
    description: "Mental models and engineering principles that guide how I build production mobile products for startup founders.",
    url: "/thinking",
  },
};

export default function ThinkingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
