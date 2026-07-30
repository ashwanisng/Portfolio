import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What Ashwani Singh is currently working on — active projects, learning goals, and current availability for freelance contracts.",
  alternates: { canonical: "/now" },
  openGraph: {
    title: "Now | Ashwani Singh",
    description: "Currently building ClosePitch, working as Senior Mobile Engineer at HDFC Securities, and available for freelance MVP projects.",
    url: "/now",
  },
};

export default function NowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
