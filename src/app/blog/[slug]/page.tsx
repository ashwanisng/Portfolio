import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Mock articles data map
const articleContent: Record<string, { title: string; category: string; date: string; readTime: string; body: string[] }> = {
  "build-mvp-no-waste": {
    title: "How to build an MVP without wasting six months",
    category: "Product Strategy",
    date: "July 12, 2026",
    readTime: "5 min read",
    body: [
      "Speed is the ultimate weapon for any early-stage startup. In my four years of engineering mobile applications, the most common trap I've seen founders fall into is scoping an MVP (Minimum Viable Product) as if it were a mature enterprise system.",
      "They spend months drafting complex requirements, integrating nested edge cases, and attempting to design the perfect database for scale before acquiring their first ten users. The result? They launch six months late into a market that has shifted, with a product that users find confusing.",
      "To build an MVP without waste, you must apply the Pareto Principle: identify the 20% of features that deliver 80% of the core user value. Defer technical debt responsibly. For example, rather than writing a complex automated team permissions system, support single-user accounts first. Rather than designing custom reporting modules, output simple CSV exports.",
      "Write clean, modular code at the core so that refactoring and adding features is easy, but scope the presentation layer strictly. Launch within weeks, set up analytics trackers, and let actual user metrics determine your feature roadmap. Real data is the only foundation you should build on."
    ]
  },
  "when-flutter-right-choice": {
    title: "When Flutter is the right choice (and when it isn't)",
    category: "Mobile Architecture",
    date: "June 28, 2026",
    readTime: "6 min read",
    body: [
      "When choosing a mobile development stack, founders face a critical decision: write native apps (Swift for iOS, Kotlin for Android) or use a cross-platform framework like Flutter or React Native.",
      "Flutter compiles directly to native machine code, providing absolute UI consistency and sub-millisecond rendering speeds at 60fps/120fps. It allows startups to maintain a single codebase, effectively halving development budgets and release timelines.",
      "However, an honest mobile engineer must admit that Flutter is not a silver bullet. If your application relies deeply on device hardware internals (e.g. background Bluetooth syncing, custom system drivers, native launcher widgets, or heavy 3D rendering), native code is superior.",
      "If you are building a B2C customer portal, a SaaS dashboard, a Fintech platform, or an interactive utility app, Flutter is almost always the right choice. It lets you focus on building features and validating market fit instead of managing dual iOS and Android code parity issues."
    ]
  },
  "startup-hiring-mistakes": {
    title: "Common mistakes startups make before hiring developers",
    category: "Product Management",
    date: "June 14, 2026",
    readTime: "4 min read",
    body: [
      "Hiring an engineer is a high-cost decision for a startup. Yet, founders often hire developers without aligning on code quality expectations, communication timelines, or release cycles.",
      "A common mistake is hiring for skill lists rather than product thinking. You don't just need a developer who can write widgets. You need an engineer who understands user flows, performance tradeoffs, and why releasing small iterations Compounds value.",
      "Before hiring, ensure you have a clear scope documentation of your MVP core features. Avoid outsourcing architecture mapping entirely; collaborate to align on database structures and API payloads. Choose developers who communicate asynchronously and set clear constraints.",
      "Establishing expectation-setting rules (such as Git workflow branching, automated testing rules, and release checks) before code starts saves weeks of debugging overhead later."
    ]
  },
  "lessons-shipping-closepitch": {
    title: "Lessons from shipping ClosePitch",
    category: "Engineering Retrospective",
    date: "May 20, 2026",
    readTime: "7 min read",
    body: [
      "ClosePitch is an AI-powered sales productivity platform designed to help sales professionals write custom pitches. Building and launching it as a solo engineer was an intense exercise in balancing speed and maintainability.",
      "One of the major lessons was that LLMs are highly unpredictable. Early versions frequently returned malformed JSON, which broke the Flutter front-end parsing logic. The solution was implementing validation checks in the Go API backend, dynamically adjusting parameters and retrying on failure before returning payloads.",
      "Another lesson was caching. Querying DB servers for every pitch preview is expensive. Implementing Redis to cache active session states and prompt templates reduced server response times by 60%.",
      "Finally, code structure matters. De-coupling presentation widgets from repository connections allowed rapid UI refactoring when updating state configurations. Clean architecture pays off."
    ]
  },
  "ai-features-improve-ux": {
    title: "AI features that actually improve user experience",
    category: "AI & Product Design",
    date: "May 02, 2026",
    readTime: "5 min read",
    body: [
      "The tech industry has added AI chat interfaces to almost every application. However, text inputs on mobile screens are often frustrating for users who want quick answers, not conversational chat loops.",
      "To build AI features that improve user experience, focus on context utility layers. The AI should read user context (e.g. current profile settings, lead details, historical inputs) and output structured recommendations silently.",
      "For example, rather than asking a user to type out a query, provide autocomplete draft suggestions. Instead of a chat assistant, display structured summaries or auto-fill forms.",
      "Enforce safety limits and JSON schema validation behind the scenes to keep data parsing reliable. Make AI a silent helper that reduces manual input friction, not a flashy widget."
    ]
  }
};

// Generate Static Params for Next.js build compilation
export async function generateStaticParams() {
  return [
    { slug: "build-mvp-no-waste" },
    { slug: "when-flutter-right-choice" },
    { slug: "startup-hiring-mistakes" },
    { slug: "lessons-shipping-closepitch" },
    { slug: "ai-features-improve-ux" },
  ];
}

// Next.js App Router Page Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = articleContent[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-article-wrapper">
      <div className="container article-container">
        <Link href="/blog" className="back-link">
          <ArrowLeft size={16} />
          Back to Articles
        </Link>

        <header className="article-header">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta-row">
            <Calendar size={14} className="text-muted" />
            <span>{post.date}</span>
            <span className="meta-dot">&bull;</span>
            <Clock size={14} className="text-muted" />
            <span>{post.readTime}</span>
          </div>
        </header>

        <main className="article-body card-glass">
          {post.body.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </main>
      </div>
    </div>
  );
}
