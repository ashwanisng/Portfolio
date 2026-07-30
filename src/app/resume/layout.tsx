import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Ashwani Kumar Singh's professional resume — Flutter Mobile Engineer with 4+ years of experience at HDFC Securities, Hudle, EverAg, and Squareboat.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Ashwani Singh — Flutter Engineer",
    description: "Full professional background, skills, and achievements for Ashwani Kumar Singh — Mobile Product Engineer specializing in Flutter, Go, and AWS.",
    url: "/resume",
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
