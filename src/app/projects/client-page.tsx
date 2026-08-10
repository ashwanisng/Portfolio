"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  LineChart,
  Search,
  Smartphone,
} from "lucide-react";
import { logFirebaseEvent } from "../../lib/firebase";

const projects = [
  {
    title: "SOCTR Fintech Platform",
    client: "SOCTR",
    context: "Social investing and AI-powered market insights",
    period: "2024",
    product: "Fintech",
    headline: "Keeping a live market interface smooth while prices moved 50+ times per second.",
    problem:
      "The app needed live stock tickers, heavy charts, OTP security, and social investing flows without the UI freezing under parsing and chart-render pressure.",
    decision:
      "Move feed parsing away from the rendering path, isolate state updates, and treat market data as a stream with backpressure instead of a screen refresh problem.",
    impact: ["60fps chart rendering", "Live tick synchronization", "Crash-free production launch"],
    architecture: ["Flutter", "BLoC and Cubit", "WebSockets", "TradingView", "Firebase"],
    lesson:
      "Realtime fintech UX is won in the invisible layer: parsing, state granularity, and knowing which updates deserve a frame.",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.soctrapp.android",
      app: "https://apps.apple.com/us/app/soctr/id6479616881",
    },
  },
  {
    title: "RightHand Home Services",
    client: "RightHand, Qatar",
    context: "On-demand household services marketplace",
    period: "2025 - 2026",
    product: "Marketplace",
    headline: "Turning checkout from a fragile screen into a reliable transaction system.",
    problem:
      "Payment redirects, banking callbacks, and partner scheduling created edge cases that could lose UI state and increase support load.",
    decision:
      "Model checkout as a transaction lifecycle with local locks, gateway-specific validation, and clear recovery paths for app-to-bank context switches.",
    impact: ["99.9% payment success", "Lower checkout drops", "Stripe and MyFatoorah shipped"],
    architecture: ["Flutter", "BLoC", "Stripe", "MyFatoorah", "Go APIs", "Firebase FCM"],
    lesson:
      "Payment UX is not just integration work. It is trust work, and every ambiguous state costs the business.",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.righthands&pcampaignid=web_share",
      app: "https://apps.apple.com/us/app/right-hands/id1641289996",
    },
  },
  {
    title: "Hudle Partner and Consumer Apps",
    client: "Hudle",
    context: "Sports venue booking marketplace",
    period: "2024 - Present",
    product: "Booking",
    headline: "Making dense venue operations feel simple on a phone.",
    problem:
      "Complex facility schedules, attribution events, and partner workflows were creating slow loads and difficult-to-maintain screens.",
    decision:
      "Rebuild feature boundaries, cache expensive API paths, and use optimistic updates where the user needed immediacy.",
    impact: ["40% lower API latency", "30% higher engagement", "Automated release pipelines"],
    architecture: ["Flutter", "BLoC", "REST APIs", "AppsFlyer", "Mixpanel", "Codemagic"],
    lesson:
      "Marketplace mobile products need operational clarity as much as UI polish. The partner side must be as carefully designed as the consumer side.",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.hudle.app",
      app: "https://apps.apple.com/in/app/hudle/id1398246473",
    },
  },
  {
    title: "MrMilkMan Subscription App",
    client: "MrMilkman by EverAg",
    context: "Dairy SaaS subscription workflows",
    period: "2023 - 2024",
    product: "SaaS",
    headline: "Reducing friction in recurring order management for a high-volume subscription product.",
    problem:
      "Nested GraphQL payloads, repeated order updates, and manual release steps slowed both the product and the team.",
    decision:
      "Trim expensive query shapes, add local cache buffers, and automate build workflows so frequent operational changes could ship safely.",
    impact: ["35% faster data fetches", "60% shorter deploy cycle", "10K+ daily orders supported"],
    architecture: ["Flutter", "GraphQL", "Firebase", "SQLite", "GitHub Actions"],
    lesson:
      "In subscription products, small latency and release-process gains compound because the same users repeat the same jobs every day.",
    links: {},
  },
  {
    title: "goStops Travel Booking",
    client: "goStops",
    context: "Hostel booking and trip planning",
    period: "2022 - 2023",
    product: "Travel",
    headline: "Smoothing the final mile of a mobile booking funnel.",
    problem:
      "Checkout drop-offs were tied to payment validation failures and unclear loading/error states during booking.",
    decision:
      "Refactor checkout controllers, add inline validation, and instrument the booking funnel so fixes could be measured.",
    impact: ["18% higher booking conversion", "99.5% crash-free", "50K+ active users"],
    architecture: ["Flutter", "GetX", "Firebase Analytics", "Mixpanel"],
    lesson:
      "The best booking flow is boring in the right way: clear states, no surprise retries, and no uncertainty after payment.",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.gostops.app",
      app: "https://apps.apple.com/in/app/gostops/id1538056051",
    },
  },
];

const filters = ["All", "Fintech", "Marketplace", "Booking", "SaaS", "Travel"];

export default function ClientProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.product === activeFilter);

  return (
    <div className="case-study-page">
      <section className="case-hero">
        <div className="container case-hero-grid">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h1>Mobile products, studied from problem to production.</h1>
          </div>
          <p>
            Each case study is structured around the questions a founder or CTO actually asks: what was hard, what changed, why that decision mattered, and what shipped.
          </p>
        </div>
      </section>

      <section className="case-index-section" aria-label="Case study filters">
        <div className="container">
          <div className="filter-row">
            <Search size={15} aria-hidden="true" />
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="case-list-section">
        <div className="container case-list">
          {visibleProjects.map((project, index) => (
            <article className="case-study" key={project.title}>
              <div className="case-number">0{index + 1}</div>
              <div className="case-main">
                <div className="case-meta">
                  <span>{project.client}</span>
                  <span>{project.period}</span>
                  <span>{project.product}</span>
                </div>
                <h2>{project.title}</h2>
                <p className="case-headline">{project.headline}</p>

                <div className="case-story-grid">
                  <div>
                    <h3>Problem</h3>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h3>Engineering Decision</h3>
                    <p>{project.decision}</p>
                  </div>
                  <div>
                    <h3>Lesson</h3>
                    <p>{project.lesson}</p>
                  </div>
                </div>

                <div className="impact-strip" aria-label={`${project.title} outcomes`}>
                  {project.impact.map((item) => (
                    <span key={item}>
                      <CheckCircle2 size={15} aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="case-side" aria-label={`${project.title} technical details`}>
                <div className="phone-art" aria-hidden="true">
                  <div className="phone-art-screen">
                    <span>{project.product}</span>
                    <strong>{project.client}</strong>
                    <div className="art-line wide"></div>
                    <div className="art-line"></div>
                    <div className="art-cells">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
                <div className="architecture-box">
                  <div className="box-title">
                    <Layers3 size={14} aria-hidden="true" />
                    Architecture
                  </div>
                  <div className="tech-list">
                    {project.architecture.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="store-links">
                  {project.links.play && (
                    <a
                      href={project.links.play}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => logFirebaseEvent("click_project_play_store", { project: project.title })}
                    >
                      Play Store
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  {project.links.app && (
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => logFirebaseEvent("click_project_app_store", { project: project.title })}
                    >
                      App Store
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className="technical-deep-dive">
        <div className="container deep-dive-grid">
          <div>
            <p className="eyebrow">Technical Deep Dive</p>
            <h2>The through-line: state, latency, and release confidence.</h2>
          </div>
          <div className="deep-dive-cards">
            <div>
              <Smartphone size={18} aria-hidden="true" />
              <h3>Mobile interaction quality</h3>
              <p>Flows are designed around real thumb paths, interrupted sessions, retries, and store-review constraints.</p>
            </div>
            <div>
              <LineChart size={18} aria-hidden="true" />
              <h3>Performance as conversion</h3>
              <p>Frame stability, API latency, and asset weight are treated as business metrics, not engineering trivia.</p>
            </div>
            <div>
              <Layers3 size={18} aria-hidden="true" />
              <h3>Architecture that teams inherit</h3>
              <p>Feature boundaries, repository layers, and release automation make the work usable after handoff.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-cta">
        <div className="container cta-box">
          <h2>Have a product with messy mobile reality?</h2>
          <p>I can help you shape the scope, stabilize the architecture, and ship the version customers can use.</p>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => logFirebaseEvent("click_projects_contact", {})}
          >
            Discuss Your Product
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .case-study-page {
          background:
            radial-gradient(circle at 52% 0%, rgba(34, 211, 238, 0.1), transparent 34rem),
            var(--bg-primary);
        }

        .case-hero,
        .technical-deep-dive,
        .case-cta {
          padding: 104px 0;
        }

        .case-hero {
          border-bottom: 1px solid var(--border-color);
        }

        .case-hero-grid,
        .deep-dive-grid {
          display: grid;
          gap: 56px;
          grid-template-columns: 1fr 0.62fr;
          align-items: end;
        }

        .eyebrow {
          color: var(--accent-blue-light);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        h1,
        h2 {
          color: #fff;
          letter-spacing: -0.045em;
        }

        h1 {
          font-size: clamp(44px, 7vw, 86px);
          line-height: 0.95;
          max-width: 950px;
        }

        .case-hero p,
        .case-headline,
        .case-story-grid p,
        .deep-dive-cards p,
        .case-cta p {
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .case-hero-grid > p {
          font-size: 18px;
        }

        .case-index-section {
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: var(--header-height);
          z-index: 8;
        }

        .filter-row {
          align-items: center;
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 16px 0;
        }

        .filter-row svg {
          color: var(--text-muted);
          flex: 0 0 auto;
        }

        .filter-row button {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 999px;
          color: var(--text-secondary);
          cursor: pointer;
          font: inherit;
          font-size: 14px;
          padding: 8px 14px;
          white-space: nowrap;
        }

        .filter-row button.active,
        .filter-row button:hover {
          background: rgba(255,255,255,0.055);
          border-color: var(--border-color);
          color: #fff;
        }

        .case-list-section {
          padding: 64px 0 110px;
        }

        .case-list {
          display: grid;
          gap: 26px;
        }

        .case-study {
          border: 1px solid var(--border-color);
          display: grid;
          gap: 42px;
          grid-template-columns: 58px 1fr 330px;
          padding: 34px;
        }

        .case-number {
          color: var(--accent-blue-light);
          font-size: 13px;
          font-weight: 800;
          padding-top: 8px;
        }

        .case-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }

        .case-meta span {
          border: 1px solid var(--border-color);
          border-radius: 999px;
          color: var(--text-secondary);
          font-size: 12px;
          padding: 5px 9px;
        }

        .case-main h2 {
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1;
          margin-bottom: 16px;
        }

        .case-headline {
          font-size: 20px;
          max-width: 780px;
        }

        .case-story-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 34px;
        }

        .case-story-grid h3,
        .architecture-box .box-title,
        .deep-dive-cards h3 {
          color: #fff;
          font-size: 14px;
          letter-spacing: 0;
          margin-bottom: 10px;
        }

        .case-story-grid p,
        .deep-dive-cards p {
          font-size: 14px;
        }

        .impact-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 34px;
        }

        .impact-strip span {
          align-items: center;
          background: rgba(34,211,238,0.065);
          border: 1px solid rgba(34,211,238,0.18);
          border-radius: 999px;
          color: #dffcff;
          display: inline-flex;
          font-size: 13px;
          gap: 8px;
          padding: 8px 11px;
        }

        .case-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .phone-art {
          align-items: center;
          background: linear-gradient(145deg, #191f1f, #060707);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 32px;
          display: flex;
          height: 280px;
          justify-content: center;
          padding: 14px;
        }

        .phone-art-screen {
          background: #081011;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: end;
          padding: 20px;
          width: 100%;
        }

        .phone-art-screen span {
          color: var(--accent-blue-light);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .phone-art-screen strong {
          color: #fff;
          font-size: 24px;
          line-height: 1;
          margin-bottom: 28px;
        }

        .art-line {
          background: rgba(255,255,255,0.11);
          border-radius: 999px;
          height: 7px;
          margin-top: 10px;
          width: 68%;
        }

        .art-line.wide {
          width: 100%;
        }

        .art-cells {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 18px;
        }

        .art-cells i {
          background: rgba(34,211,238,0.12);
          border: 1px solid rgba(34,211,238,0.16);
          border-radius: 8px;
          height: 44px;
        }

        .architecture-box {
          border: 1px solid var(--border-color);
          padding: 18px;
        }

        .box-title {
          align-items: center;
          display: flex;
          gap: 8px;
        }

        .box-title svg {
          color: var(--accent-blue-light);
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-list span {
          color: var(--text-secondary);
          font-size: 12px;
        }

        .store-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .store-links a {
          align-items: center;
          border: 1px solid var(--border-color);
          color: #fff;
          display: inline-flex;
          font-size: 13px;
          gap: 6px;
          padding: 9px 11px;
        }

        .store-links a:hover {
          border-color: rgba(34,211,238,0.35);
          color: var(--accent-blue-light);
        }

        .technical-deep-dive {
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
        }

        .deep-dive-grid h2,
        .case-cta h2 {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1;
        }

        .deep-dive-cards {
          display: grid;
          gap: 14px;
        }

        .deep-dive-cards > div {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 24px;
        }

        .deep-dive-cards svg {
          color: var(--accent-blue-light);
          margin-bottom: 18px;
        }

        .cta-box {
          align-items: center;
          border: 1px solid var(--border-color);
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr auto;
          padding: 44px;
        }

        .cta-box p {
          font-size: 18px;
          margin-top: 14px;
          max-width: 650px;
        }

        @media (max-width: 1120px) {
          .case-study {
            grid-template-columns: 46px 1fr;
          }

          .case-side {
            grid-column: 2;
          }

          .phone-art {
            height: 240px;
          }
        }

        @media (max-width: 840px) {
          .case-hero-grid,
          .deep-dive-grid,
          .case-study,
          .case-story-grid,
          .cta-box {
            grid-template-columns: 1fr;
          }

          .case-side {
            grid-column: auto;
          }

          .case-number {
            padding-top: 0;
          }

          .case-hero,
          .technical-deep-dive,
          .case-cta {
            padding: 76px 0;
          }

          .case-list-section {
            padding: 44px 0 76px;
          }
        }

        @media (max-width: 560px) {
          .case-study,
          .cta-box {
            padding: 22px;
          }

          .case-index-section {
            top: 64px;
          }
        }
      `}</style>
    </div>
  );
}
