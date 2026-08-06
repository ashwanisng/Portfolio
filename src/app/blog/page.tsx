import { Metadata } from "next";
import ClientBlogPage from "./client-page";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Guides | Ashwani Singh - Mobile Product Engineer",
  description:
    "Articles and tutorials on mobile engineering, startup product strategy, Flutter architecture practices, and scaling mobile apps.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Guides | Ashwani Singh - Mobile Product Engineer",
    description:
      "Articles and tutorials on mobile engineering, startup product strategy, Flutter architecture practices, and scaling mobile apps.",
    url: "https://ashwanisng.com/blog",
  },
  twitter: {
    title: "Engineering Blog & Technical Guides | Ashwani Singh - Mobile Product Engineer",
    description:
      "Articles and tutorials on mobile engineering, startup product strategy, Flutter architecture practices, and scaling mobile apps.",
  },
};

export default function BlogPage() {
  return <ClientBlogPage />;
}
