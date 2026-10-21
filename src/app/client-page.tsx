"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Copy, Check } from "lucide-react";
import CountUp from "../components/CountUp";
import HeroTicket from "../components/HeroTicket";
import DoctorTerminal from "../components/DoctorTerminal";
import availability from "../config/availability.json";

type ClientHomePageProps = {
  // slug -> public path, found in public/logos at build time
  logos: Record<string, string>;
};

export default function ClientHomePage({ logos }: ClientHomePageProps) {
  const stats = [
    { end: 4, suffix: "+", label: "Years shipping Flutter" },
    { end: 9, suffix: "", label: "Companies & clients" },
    { end: 5, suffix: "+", label: "Apps live on the stores" },
    { end: 100000, suffix: "+", label: "Users reached" }
  ];

  // `useLogo: false` keeps a monogram even if a logo file is added later.
  // `logoBg` is the plate colour behind a logo (e.g. a white wordmark needs its brand colour).
  const clients = [
    { slug: "hdfc-securities", name: "HDFC Securities", initials: "HS", useLogo: false, work: "Trading app", meta: "India · 2026 – now", href: "/experience" },
    { slug: "right-hands", name: "Right Hands", initials: "RH", useLogo: true, work: "Payments & UX revamp", meta: "Qatar · 2025 – 26", href: "https://apps.apple.com/us/app/right-hands/id1641289996" },
    { slug: "soctr", name: "SOCTR", initials: "SO", useLogo: true, work: "Live market data", meta: "India · 2024", href: "https://apps.apple.com/us/app/soctr/id6479616881" },
    { slug: "hudle", name: "Hudle", initials: "HU", useLogo: true, work: "Booking & partner apps", meta: "India · 2024 – 26", href: "https://apps.apple.com/in/app/hudle/id1398246473" },
    { slug: "mrmilkman", name: "Mr. Milkman by Ever.Ag", initials: "MM", useLogo: false, work: "Subscriptions & CI/CD", meta: "India · 2023 – 24", href: "/projects" },
    { slug: "squareboat", name: "Squareboat", initials: "SB", useLogo: true, work: "Product studio", meta: "India · 2022 – 23", href: "/experience" },
    { slug: "gostops", name: "goSTOPS", initials: "GS", useLogo: true, work: "Hostel booking app", meta: "India · via Squareboat", href: "https://apps.apple.com/in/app/gostops/id1538056051" },
    { slug: "yubi-health", name: "Yubi Health", initials: "YH", useLogo: true, work: "Behavioral health app", meta: "US · via Squareboat", href: "https://www.squareboat.com/clients/yubihealth" },
    { slug: "harbormoor", name: "HarborMoor", initials: "HM", useLogo: true, logoBg: "#1d5fb4", work: "Boating community app", meta: "US · via Squareboat", href: "https://www.squareboat.com/clients/harbormoor" }
  ];

  const selectedWork = [
    {
      title: "HDFC Securities",
      tag: "Trading · India",
      year: "2026 – now",
      desc: "Senior Mobile Engineer on the trading app of one of India's largest brokerages. Flutter architecture for trading features, shipped with product and backend squads.",
      stack: ["Flutter", "Android SDK", "REST"],
      links: [{ label: "Experience", href: "/experience" }],
      note: "Details under NDA"
    },
    {
      title: "SOCTR",
      tag: "Fintech · India",
      year: "2024",
      desc: "Social investing app with AI market insights, built from scratch as the sole Flutter developer. WebSocket ticker feeds parsed in background isolates keep candle charts at 60fps.",
      stack: ["Flutter", "WebSockets", "Isolates", "TradingView"],
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.soctrapp.android" },
        { label: "App Store", href: "https://apps.apple.com/us/app/soctr/id6479616881" }
      ]
    },
    {
      title: "Right Hands",
      tag: "Payments · Qatar",
      year: "2025 – 26",
      desc: "Full UX revamp and checkout rebuild for a home services marketplace across the GCC. Stripe and MyFatoorah, with checkout state that survives app-to-bank redirects.",
      stack: ["Flutter", "Stripe", "MyFatoorah", "BLoC"],
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.righthands" },
        { label: "App Store", href: "https://apps.apple.com/us/app/right-hands/id1641289996" }
      ]
    },
    {
      title: "Hudle",
      tag: "Bookings · India",
      year: "2024 – 26",
      desc: "Redesigned consumer booking flows and built the B2B partner app for a sports venue marketplace, with schedule grids for heavy venue configurations.",
      stack: ["Flutter", "AppsFlyer", "Mixpanel", "Codemagic"],
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hudle.app" },
        { label: "App Store", href: "https://apps.apple.com/in/app/hudle/id1398246473" }
      ]
    },
    {
      title: "ClosePitch",
      tag: "Own product · Beta",
      year: "Private beta",
      desc: "AI sales assistant I'm building end to end: Flutter app, Go services on AWS, schema-validated LLM drafting and offline sync.",
      stack: ["Flutter", "Go", "AWS", "Redis"],
      links: [{ label: "Case study", href: "/projects/closepitch" }]
    }
  ];

  // From pub.dev for flutter_doctor_ai 0.2.0
  const doctorRules = [
    { name: "large_build_method", catches: "build() methods growing to hundreds of lines" },
    { name: "missing_dispose", catches: "Controllers leaking after the widget unmounts" },
    { name: "missing_mounted_check", catches: "setState() on an unmounted widget" },
    { name: "empty_setstate", catches: "setState(() {}) triggering silent rebuilds" },
    { name: "print_statement", catches: "Debug print() shipping to production" }
  ];
  const doctorFacts = ["v0.2.0", "160/160 pub points", "MIT", "Groq · Gemini · OpenAI · Anthropic"];
  const installCmd = "dart pub global activate flutter_doctor_ai";

  const offerings = [
    {
      title: "Payments & checkout",
      desc: "Stripe, MyFatoorah or your gateway, wired end to end: 3-D Secure redirects, webhooks, retries and failure states that don't lose orders.",
      meta: "Fixed price"
    },
    {
      title: "Real-time & trading UI",
      desc: "WebSocket feeds, live charts and order screens that stay smooth under heavy update rates, with parsing kept off the UI thread.",
      meta: "Fixed price or retainer"
    },
    {
      title: "Part-time Flutter engineer",
      desc: `${availability.capacity} inside your team: features, releases, CI/CD and crash fixes, with weekly demos.`,
      meta: "Monthly retainer"
    }
  ];

  const processSteps = [
    { title: "Scope call", desc: "30 minutes on the problem, constraints and what done looks like." },
    { title: "Fixed plan", desc: "A written scope, milestones and a price before any code." },
    { title: "Weekly demos", desc: "Loom walkthroughs and builds you can install every week." },
    { title: "Release & handover", desc: "Store release, documentation and a clean repo you own." }
  ];

  // Only attributed quotes are shown. Fill in `author` and `role` (e.g. "Engineering Manager, Hudle")
  // with the person's permission to publish a quote.
  const allTestimonials = [
    {
      quote: "Ashwani is an exceptional Flutter developer who takes complete ownership. He redesigned our app interface and always focuses on high performance and widget optimization.",
      author: "",
      role: ""
    },
    {
      quote: "He has a strong product mindset, understands the big picture, and delivers robust Flutter architectures. Extremely reliable and key in streamlining our API caching and SDK tracking.",
      author: "",
      role: ""
    },
    {
      quote: "Delivered the subscription management and tracking apps on time with a 99.5% crash-free rate. Communication was excellent and implementation was top tier.",
      author: "",
      role: ""
    }
  ];
  const testimonials = allTestimonials.filter((t) => t.author);

  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    if (testimonials.length < 2) return;
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can you start?",
      answer: `I have ${availability.capacity} open right now, so I can usually start within a week of agreeing scope. Smaller fixed-price tasks (a bug fix, a payment gateway integration, a performance audit) can often start in a couple of days.`
    },
    {
      question: "What time zones do you overlap with?",
      answer: "I'm in India (IST) and regularly work with teams in the Gulf, Europe and North America, keeping at least 3-4 hours of live overlap each day."
    },
    {
      question: "How do you communicate during development?",
      answer: "Async-first: Slack or Discord for daily coordination, a Loom walkthrough every week, and Notion or GitHub Projects for scope and milestones."
    },
    {
      question: "Do you work on fixed-price or hourly rates?",
      answer: "Fixed price for well-defined builds and integrations. For ongoing work inside your team I work on a monthly retainer."
    },
    {
      question: "Can you work with our existing backend or design team?",
      answer: "Yes. Most of my work has been alongside product designers (Figma to Flutter) and backend engineers (REST, GraphQL, WebSockets, payload and caching design)."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, and I'm happy to sign one before we discuss your codebase or product details."
    }
  ];

  const [copied, setCopied] = useState(false);
  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be unavailable (insecure context); the command stays selectable.
    }
  };

  const isExternal = (href: string) => !href.startsWith("/");

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-status animate-in-1">
              <span className="live-dot" />
              <span>{availability.text} · {availability.capacity}</span>
              <span className="hero-status-sep" />
              <span className="hero-status-muted">Delhi NCR · IST</span>
            </div>

            <h1 className="hero-title animate-in-2">
              Senior Flutter engineer who ships <em>production apps.</em>
            </h1>

            <p className="hero-lede animate-in-3">
              4+ years taking iOS and Android apps from first commit to the store: architecture, payments,
              real-time features, CI/CD and releases. Senior Mobile Engineer at HDFC Securities; previously
              Hudle, Right Hands, SOCTR and Mr. Milkman.
            </p>

            <div className="hero-actions animate-in-4">
              <Link href="/contact" className="btn btn-primary">
                Book a 20-min call
                <ArrowRight size={16} />
              </Link>
              <a href="#work" className="btn btn-outline">
                See selected work
              </a>
            </div>

            <ul className="hero-stack animate-in-4">
              {["Flutter", "Stripe", "MyFatoorah", "WebSockets", "BLoC", "Firebase", "Go"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual animate-in-5">
            <HeroTicket />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-value">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="clients">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Clients</span>
              <h2 className="section-title">
                Shipped for teams in India, <em>the Gulf</em> and the US.
              </h2>
            </div>
            <p className="section-aside">
              Direct engagements and product-studio work through Squareboat. Tap a client to see the app.
            </p>
          </div>

          <div className="client-wall reveal-on-scroll">
            {clients.map((client) => {
              const logo = client.useLogo ? logos[client.slug] : undefined;
              const logoBg = "logoBg" in client ? client.logoBg : undefined;
              const body = (
                <>
                  <span
                    className={`client-mark ${logo ? "has-logo" : ""}`}
                    style={logo && logoBg ? { background: logoBg } : undefined}
                  >
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logo} alt="" />
                    ) : (
                      client.initials
                    )}
                  </span>
                  <span className="client-name">{client.name}</span>
                  <span className="client-work">{client.work}</span>
                  <span className="client-meta">{client.meta}</span>
                  <ArrowUpRight size={16} className="client-arrow" />
                </>
              );
              return isExternal(client.href) ? (
                <a key={client.slug} href={client.href} target="_blank" rel="noopener noreferrer" className="client-cell">
                  {body}
                </a>
              ) : (
                <Link key={client.slug} href={client.href} className="client-cell">
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="work" id="work">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">Selected work</span>
              <h2 className="section-title">
                Apps you can <em>install</em> and check.
              </h2>
            </div>
            <Link href="/projects" className="btn btn-outline btn-sm">
              All case studies
              <ArrowRight size={14} />
            </Link>
          </div>

          <ol className="work-list">
            {selectedWork.map((work, idx) => (
              <li key={work.title} className="work-row reveal-on-scroll">
                <span className="work-num">{String(idx + 1).padStart(2, "0")}</span>
                <div className="work-main">
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-desc">{work.desc}</p>
                  <ul className="work-stack">
                    {work.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-side">
                  <span className="work-tag">{work.tag}</span>
                  <span className="work-year">{work.year}</span>
                  <div className="work-links">
                    {work.links.map((link) =>
                      isExternal(link.href) ? (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="work-link">
                          {link.label} <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <Link key={link.label} href={link.href} className="work-link">
                          {link.label} <ArrowRight size={13} />
                        </Link>
                      )
                    )}
                  </div>
                  {work.note && <span className="work-note">{work.note}</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Open source */}
      <section className="oss" id="open-source">
        <div className="container">
          <div className="oss-panel reveal-on-scroll">
            <div className="oss-copy">
              <span className="section-tag">Open source · pub.dev</span>
              <h2 className="oss-title">flutter_doctor_ai</h2>
              <p className="oss-lede">
                A CLI I built and maintain that finds Flutter-specific anti-patterns the built-in analyzer misses,
                scores project health from 0 to 100, and asks your AI provider for a concrete fix.
              </p>

              <ul className="oss-facts">
                {doctorFacts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <ul className="oss-rules">
                {doctorRules.map((r) => (
                  <li key={r.name}>
                    <code>{r.name}</code>
                    <span>{r.catches}</span>
                  </li>
                ))}
              </ul>

              <div className="oss-install">
                {/* Focusable so keyboard users can scroll the command on narrow screens */}
                <code tabIndex={0}>{installCmd}</code>
                <button type="button" onClick={copyInstall} aria-label="Copy install command">
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              <div className="hero-actions">
                <a href="https://pub.dev/packages/flutter_doctor_ai" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  View on pub.dev
                  <ArrowUpRight size={14} />
                </a>
                <a href="https://github.com/ashwanisng/flutter_doctor_ai" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Source on GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="oss-terminal">
              <DoctorTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="offer">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-tag">How I can help</span>
              <h2 className="section-title">
                Three ways to <em>work together.</em>
              </h2>
            </div>
            <Link href="/services" className="btn btn-outline btn-sm">
              Services in detail
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="offer-grid reveal-on-scroll">
            {offerings.map((o, idx) => (
              <div key={o.title} className="offer-cell">
                <span className="offer-num">{String(idx + 1).padStart(2, "0")}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <span className="offer-meta">{o.meta}</span>
              </div>
            ))}
          </div>

          <ol className="process reveal-on-scroll">
            {processSteps.map((p, idx) => (
              <li key={p.title} className="process-step">
                <span className="process-num">Step {idx + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="quotes">
          <div className="container">
            <figure className="quote">
              <blockquote>“{testimonials[activeSlide].quote}”</blockquote>
              <figcaption>
                {testimonials[activeSlide].author}
                {testimonials[activeSlide].role && ` · ${testimonials[activeSlide].role}`}
              </figcaption>
            </figure>
            {testimonials.length > 1 && (
              <div className="quote-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`quote-dot ${idx === activeSlide ? "active" : ""}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="faq">
        <div className="container faq-grid">
          <div className="faq-intro reveal-on-scroll">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">
              Before we <em>start.</em>
            </h2>
            <p className="section-aside">
              Something else on your mind? <Link href="/contact" className="inline-link">Ask me directly</Link>.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-q" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className="faq-icon" />
                  </button>
                  <div className="faq-a">
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing">
        <div className="container">
          <div className="closing-panel reveal-on-scroll">
            <span className="section-tag">Next step</span>
            <h2 className="closing-title">
              Have an app to <em>build, fix or scale?</em>
            </h2>
            <p className="closing-lede">
              Tell me what you&apos;re building. I reply within 24 hours with how I&apos;d approach it.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a 20-min call
                <ArrowRight size={16} />
              </Link>
              <a href="mailto:ashwanicena5@gmail.com" className="btn btn-outline">
                ashwanicena5@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home {
          padding-bottom: 40px;
        }

        /* Hero */
        .hero {
          padding: 96px 0 88px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 64px;
        }
        .hero-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-primary);
          padding: 7px 14px;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          background: var(--bg-secondary);
          margin-bottom: 32px;
        }
        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(198, 242, 94, 0.6);
          animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0% { box-shadow: 0 0 0 0 rgba(198, 242, 94, 0.55); }
          70% { box-shadow: 0 0 0 7px rgba(198, 242, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(198, 242, 94, 0); }
        }
        .hero-status-sep {
          width: 1px;
          height: 12px;
          background: var(--border-hover);
        }
        .hero-status-muted {
          color: var(--text-muted);
        }
        .hero-title {
          font-size: 68px;
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.055em;
          margin-bottom: 28px;
        }
        .hero-title em {
          display: block;
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--accent);
        }
        .hero-lede {
          font-size: 19px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-stack {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 40px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
        }
        .hero-stack li {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hero-stack li::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--border-hover);
        }

        /* Stats */
        .stats {
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 36px 28px;
          border-left: 1px solid var(--border-color);
        }
        .stat:first-child {
          border-left: none;
          padding-left: 0;
        }
        .stat-value {
          font-size: 52px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.05em;
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Shared section head */
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .section-head .section-title {
          max-width: 640px;
          margin-bottom: 0;
        }
        .section-aside {
          max-width: 340px;
          font-size: 15px;
          color: var(--text-secondary);
        }
        .section-aside :global(.inline-link) {
          color: var(--text-primary);
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 4px;
        }

        /* Clients */
        .clients {
          padding: 112px 0 40px;
        }
        .client-wall {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--border-color);
          border-left: 1px solid var(--border-color);
        }
        .client-wall :global(.client-cell) {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto auto auto;
          column-gap: 16px;
          align-items: center;
          padding: 28px;
          border-right: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          color: inherit;
          transition: background var(--transition-normal);
        }
        .client-wall :global(.client-cell:hover) {
          background: var(--bg-secondary);
        }
        .client-mark {
          grid-row: 1 / span 3;
          width: 44px;
          height: 44px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border-hover);
          background: var(--bg-tertiary);
          overflow: hidden;
        }
        /* Logos are often wide wordmarks, so the plate grows sideways */
        .client-mark.has-logo {
          width: auto;
          min-width: 44px;
          max-width: 128px;
          background: #fff;
          border-color: transparent;
          padding: 7px 10px;
        }
        .client-mark img {
          display: block;
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }
        .client-name {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .client-work {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .client-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .client-wall :global(.client-arrow) {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--text-muted);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: all var(--transition-normal);
        }
        .client-wall :global(.client-cell:hover .client-arrow) {
          opacity: 1;
          color: var(--accent);
          transform: translate(0, 0);
        }

        /* Work */
        .work {
          padding: 112px 0 40px;
        }
        .work-list {
          list-style: none;
          border-top: 1px solid var(--border-color);
        }
        .work-row {
          display: grid;
          grid-template-columns: 72px 1fr 240px;
          gap: 32px;
          padding: 36px 0;
          border-bottom: 1px solid var(--border-color);
          transition: background var(--transition-normal);
        }
        .work-num {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent);
          padding-top: 10px;
        }
        .work-title {
          font-size: 34px;
          font-weight: 600;
          letter-spacing: -0.045em;
          margin-bottom: 12px;
        }
        .work-desc {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 620px;
          margin-bottom: 18px;
        }
        .work-stack {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .work-stack li {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          padding: 4px 10px;
          border: 1px solid var(--border-color);
          border-radius: 999px;
        }
        .work-side {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 10px;
        }
        .work-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-primary);
        }
        .work-year {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 14px;
        }
        .work-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
        }
        .work-links :global(.work-link) {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          border-bottom: 1px solid var(--accent-line);
          padding-bottom: 2px;
          transition: border-color var(--transition-fast), color var(--transition-fast);
        }
        .work-links :global(.work-link:hover) {
          color: var(--accent);
          border-color: var(--accent);
        }
        .work-note {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 8px;
        }

        /* Open source */
        .oss {
          padding: 112px 0 40px;
        }
        .oss-panel {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 56px;
          align-items: center;
          padding: 56px;
          border: 1px solid var(--border-color);
          border-radius: 24px;
          background:
            radial-gradient(500px 260px at 100% 100%, rgba(198, 242, 94, 0.06), transparent 70%),
            var(--bg-secondary);
        }
        /* Let the terminal scroll inside its box instead of widening the grid */
        .oss-copy,
        .oss-terminal {
          min-width: 0;
        }
        .oss-title {
          font-family: var(--font-mono);
          font-size: 40px;
          font-weight: 500;
          letter-spacing: -0.04em;
          margin-bottom: 16px;
        }
        .oss-lede {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .oss-facts {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .oss-facts li {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          padding: 4px 10px;
          border: 1px solid var(--accent-line);
          border-radius: 999px;
          background: var(--accent-soft);
        }
        .oss-rules {
          list-style: none;
          border-top: 1px solid var(--border-color);
          margin-bottom: 28px;
        }
        .oss-rules li {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 16px;
          padding: 11px 0;
          border-bottom: 1px solid var(--border-color);
          font-size: 14px;
          color: var(--text-secondary);
        }
        .oss-rules code {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-primary);
        }
        .oss-install {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 10px 10px 16px;
          border: 1px solid var(--border-hover);
          border-radius: 10px;
          background: var(--bg-primary);
          margin-bottom: 24px;
        }
        .oss-install code {
          flex: 1;
          min-width: 0;
          overflow-x: auto;
          white-space: nowrap;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-primary);
        }
        .oss-install code::before {
          content: "$ ";
          color: var(--accent);
        }
        .oss-install button {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .oss-install button:hover {
          color: var(--accent);
          border-color: var(--accent-line);
        }

        /* Offerings + process */
        .offer {
          padding: 112px 0 40px;
        }
        .offer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
        }
        .offer-cell {
          display: flex;
          flex-direction: column;
          padding: 36px 32px;
          border-left: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }
        .offer-cell:first-child {
          border-left: none;
        }
        .offer-num {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          margin-bottom: 40px;
        }
        .offer-cell h3 {
          font-size: 22px;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }
        .offer-cell p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }
        .offer-meta {
          margin-top: auto;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .process {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 64px;
        }
        .process-step {
          padding-top: 20px;
          border-top: 1px solid var(--border-hover);
          position: relative;
        }
        .process-step::before {
          content: "";
          position: absolute;
          top: -4px;
          left: 0;
          width: 7px;
          height: 7px;
          background: var(--accent);
        }
        .process-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .process-step h4 {
          font-size: 17px;
          margin: 8px 0 6px;
          letter-spacing: -0.02em;
        }
        .process-step p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Quotes */
        .quotes {
          padding: 112px 0 40px;
        }
        .quote {
          max-width: 860px;
        }
        .quote blockquote {
          font-family: var(--font-serif);
          font-size: 36px;
          line-height: 1.3;
          color: var(--text-primary);
        }
        .quote figcaption {
          margin-top: 20px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
        }
        .quote-dots {
          display: flex;
          gap: 8px;
          margin-top: 28px;
        }
        .quote-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border-hover);
          border: none;
          cursor: pointer;
        }
        .quote-dot.active {
          background: var(--accent);
          width: 24px;
          border-radius: 4px;
        }

        /* FAQ */
        .faq {
          padding: 112px 0 40px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        .faq-intro {
          position: sticky;
          top: calc(var(--header-height) + 32px);
        }
        .faq-intro .section-title {
          margin-bottom: 16px;
        }
        .faq-list {
          border-top: 1px solid var(--border-color);
        }
        .faq-item {
          border-bottom: 1px solid var(--border-color);
        }
        .faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 24px 0;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-align: left;
          cursor: pointer;
        }
        .faq-q:hover {
          color: var(--accent);
        }
        .faq-q :global(.faq-icon) {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: transform var(--transition-normal);
        }
        .faq-item.open .faq-q :global(.faq-icon) {
          transform: rotate(180deg);
          color: var(--accent);
        }
        .faq-a {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-item.open .faq-a {
          grid-template-rows: 1fr;
        }
        .faq-a > div {
          overflow: hidden;
        }
        .faq-a p {
          padding: 0 40px 24px 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* Closing */
        .closing {
          padding: 112px 0 40px;
        }
        .closing-panel {
          padding: 72px 64px;
          border: 1px solid var(--border-color);
          border-radius: 24px;
          background:
            radial-gradient(600px 240px at 85% 0%, rgba(198, 242, 94, 0.08), transparent 70%),
            var(--bg-secondary);
        }
        .closing-title {
          font-size: 60px;
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.05em;
          max-width: 760px;
          margin-bottom: 20px;
        }
        .closing-title em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--accent);
        }
        .closing-lede {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 520px;
        }

        /* Entrance */
        .animate-in-1, .animate-in-2, .animate-in-3, .animate-in-4, .animate-in-5 {
          opacity: 0;
          animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-in-2 { animation-delay: 0.08s; }
        .animate-in-3 { animation-delay: 0.16s; }
        .animate-in-4 { animation-delay: 0.24s; }
        .animate-in-5 { animation-delay: 0.32s; }
        @keyframes rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-in-1, .animate-in-2, .animate-in-3, .animate-in-4, .animate-in-5 {
            opacity: 1;
            animation: none;
          }
          .live-dot {
            animation: none;
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero {
            padding: 64px 0 72px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .hero-title {
            font-size: 60px;
          }
          .client-wall {
            grid-template-columns: repeat(2, 1fr);
          }
          .work-row {
            grid-template-columns: 56px 1fr;
          }
          .work-side {
            grid-column: 2;
            padding-top: 0;
          }
          .offer-grid {
            grid-template-columns: 1fr;
          }
          .offer-cell {
            border-left: none;
            border-top: 1px solid var(--border-color);
          }
          .offer-cell:first-child {
            border-top: none;
          }
          .process {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 36px;
          }
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .oss-panel {
            grid-template-columns: 1fr;
            padding: 40px;
          }
          .faq-intro {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 46px;
          }
          .hero-lede {
            font-size: 17px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat {
            padding: 28px 20px;
          }
          .stat:nth-child(3) {
            border-left: none;
            padding-left: 0;
          }
          .stat:nth-child(n + 3) {
            border-top: 1px solid var(--border-color);
          }
          .stat-value {
            font-size: 40px;
          }
          .clients,
          .work,
          .offer,
          .quotes,
          .faq,
          .closing {
            padding-top: 80px;
          }
          .client-wall {
            grid-template-columns: repeat(2, 1fr);
          }
          .client-wall :global(.client-cell) {
            grid-template-columns: 1fr;
            align-content: start;
            padding: 20px 16px;
          }
          .client-mark {
            grid-row: auto;
            width: 38px;
            height: 38px;
            margin-bottom: 14px;
          }
          .client-mark.has-logo {
            justify-self: start;
            max-width: 100%;
          }
          .client-name {
            font-size: 15px;
          }
          .client-work {
            font-size: 13px;
          }
          .client-wall :global(.client-arrow) {
            display: none;
          }
          .work-row {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 28px 0;
          }
          .work-num {
            padding-top: 0;
          }
          .work-side {
            grid-column: 1;
          }
          .work-title {
            font-size: 28px;
          }
          .process {
            grid-template-columns: 1fr;
          }
          .closing-panel {
            padding: 44px 24px;
          }
          .oss {
            padding-top: 80px;
          }
          .oss-panel {
            padding: 28px 20px;
            gap: 36px;
          }
          .oss-title {
            font-size: 28px;
          }
          .oss-rules li {
            grid-template-columns: 1fr;
            gap: 2px;
          }
          .closing-title {
            font-size: 38px;
          }
          .quote blockquote {
            font-size: 26px;
          }
        }

        @media (max-width: 400px) {
          .hero-title {
            font-size: 40px;
          }
          .hero-status-sep,
          .hero-status-muted {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
