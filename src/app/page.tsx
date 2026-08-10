"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  MoveRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { logFirebaseEvent } from "../lib/firebase";

const caseStudies = [
  {
    name: "SOCTR",
    category: "Fintech mobile platform",
    result: "60fps market charts under live ticker load",
    story:
      "Rebuilt the feed pipeline so high-frequency stock updates stopped competing with the UI thread.",
    proof: ["WebSocket isolation", "Background parsing", "TradingView integration"],
  },
  {
    name: "RightHand",
    category: "Home services marketplace",
    result: "99.9% payment success across Stripe and MyFatoorah",
    story:
      "Stabilized checkout by treating payments as a transaction lifecycle, not a sequence of screens.",
    proof: ["Payment locks", "Map scheduling", "Partner operations"],
  },
  {
    name: "Hudle",
    category: "Sports venue marketplace",
    result: "40% lower API latency in booking workflows",
    story:
      "Untangled dense venue schedules and rebuilt the partner app around durable feature boundaries.",
    proof: ["BLoC architecture", "Codemagic releases", "Analytics events"],
  },
];

const principles = [
  {
    title: "Product before platform",
    text:
      "Flutter is the medium. The work is reducing founder risk, clarifying the product loop, and shipping the smallest version that can earn trust.",
  },
  {
    title: "Architecture users can feel",
    text:
      "Performance, caching, state boundaries, and release discipline show up as faster checkout, calmer screens, and fewer support conversations.",
  },
  {
    title: "Senior without ceremony",
    text:
      "You get direct thinking, written trade-offs, async updates, and implementation that fits the team you already have.",
  },
];

const journey = [
  ["01", "Shape", "Turn a founder brief into crisp flows, technical assumptions, and a launchable scope."],
  ["02", "Build", "Implement the app, integrations, analytics, and backend seams with weekly demo loops."],
  ["03", "Harden", "Profile performance, close edge cases, prepare stores, and document how the system evolves."],
];

const trustSignals = [
  "Fintech, booking, services, travel, SaaS",
  "Flutter, Go, Firebase, PostgreSQL, AWS",
  "Remote-friendly across India, UAE, Europe, and US overlap",
];

export default function Home() {
  return (
    <div className="launch-page">
      <section className="launch-hero" aria-labelledby="home-heading">
        <div className="container launch-hero-grid">
          <div className="launch-copy">
            <p className="eyebrow">Senior Mobile Product Engineer</p>
            <h1 id="home-heading">
              I turn founder-grade ideas into mobile products people can trust.
            </h1>
            <p className="hero-lede">
              I partner with ambitious startups to design, build, and launch polished Flutter products with the product thinking, architecture, and delivery cadence of a senior founding engineer.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => logFirebaseEvent("click_home_hero_contact", {})}
              >
                Book a Discovery Call
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/projects" className="quiet-link">
                Study the Work
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="trust-strip" aria-label="Trust signals">
              {trustSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>

          <div className="product-stage" aria-label="Mobile product launch visual">
            <div className="phone-frame">
              <div className="phone-top" aria-hidden="true"></div>
              <div className="app-screen">
                <div className="screen-header">
                  <span>Launch Readiness</span>
                  <strong>92%</strong>
                </div>
                <div className="screen-hero-card">
                  <span>Checkout recovery</span>
                  <strong>Payment state secured</strong>
                  <p>Bank redirect, retry, and confirmation paths are now isolated.</p>
                </div>
                <div className="screen-row">
                  <span>Frame budget</span>
                  <strong>16 ms</strong>
                </div>
                <div className="screen-row">
                  <span>Crash-free</span>
                  <strong>99.9%</strong>
                </div>
                <div className="screen-progress" aria-hidden="true">
                  <span style={{ width: "72%" }}></span>
                </div>
              </div>
            </div>
            <div className="stage-note note-one">
              <Sparkles size={14} aria-hidden="true" />
              <span>Product judgement built into engineering decisions.</span>
            </div>
            <div className="stage-note note-two">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Calm launches, not heroic recoveries.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="narrative-section">
        <div className="container split-intro">
          <p className="eyebrow">The Positioning</p>
          <h2>A founder does not need another developer. They need someone who can hold product, UX, and production reality in one head.</h2>
          <p>
            The site is designed around that promise. Each section moves from curiosity to trust: what I build, how I think, what shipped, and how a collaboration begins.
          </p>
        </div>
      </section>

      <section className="principles-section">
        <div className="container principle-grid">
          {principles.map((item) => (
            <article key={item.title} className="principle-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-preview-section" aria-labelledby="case-preview-heading">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 id="case-preview-heading">Case studies written like product decisions, not project thumbnails.</h2>
            </div>
            <Link href="/projects" className="quiet-link desktop-link">
              View All Work
              <MoveRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="case-stack">
            {caseStudies.map((project) => (
              <Link
                href="/projects"
                key={project.name}
                className="case-row"
                onClick={() => logFirebaseEvent("click_home_case_preview", { project: project.name })}
              >
                <div>
                  <span className="case-kicker">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.story}</p>
                <div className="case-result">
                  <strong>{project.result}</strong>
                  <span>{project.proof.join(" / ")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-heading">
        <div className="container journey-grid">
          <div>
            <p className="eyebrow">Engineering Partnership</p>
            <h2 id="journey-heading">A simple operating model for shipping without chaos.</h2>
            <p>
              The service offer is intentionally narrow: product-minded mobile delivery for startups that need momentum, quality, and a clear technical path.
            </p>
            <Link href="/services" className="quiet-link">
              See Engagement Options
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ol className="journey-list">
            {journey.map(([step, title, text]) => (
              <li key={step}>
                <span>{step}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container final-cta">
          <div>
            <p className="eyebrow">Next Slot</p>
            <h2>Bring the problem. I will help shape the product and ship the app.</h2>
          </div>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => logFirebaseEvent("click_home_final_contact", {})}
          >
            Start the Conversation
            <MessageSquare size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .launch-page {
          background:
            radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.12), transparent 32rem),
            linear-gradient(180deg, rgba(255,255,255,0.035), transparent 28rem),
            var(--bg-primary);
          overflow: hidden;
        }

        .launch-hero {
          min-height: calc(100svh - var(--header-height));
          display: flex;
          align-items: center;
          padding: 64px 0 72px;
          border-bottom: 1px solid var(--border-color);
        }

        .launch-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.72fr);
          gap: 72px;
          align-items: center;
        }

        .eyebrow {
          color: var(--accent-blue-light);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        .launch-copy h1,
        .split-intro h2,
        .section-heading-row h2,
        .journey-grid h2,
        .final-cta h2 {
          color: #fff;
          font-size: clamp(42px, 7vw, 92px);
          font-weight: 600;
          letter-spacing: -0.045em;
          line-height: 0.94;
          max-width: 900px;
        }

        .hero-lede {
          color: var(--text-secondary);
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.55;
          margin-top: 28px;
          max-width: 720px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        .quiet-link {
          align-items: center;
          color: #fff;
          display: inline-flex;
          font-size: 15px;
          font-weight: 600;
          gap: 6px;
        }

        .quiet-link:hover {
          color: var(--accent-blue-light);
        }

        .trust-strip {
          border-top: 1px solid var(--border-color);
          display: grid;
          gap: 10px;
          margin-top: 52px;
          max-width: 680px;
          padding-top: 22px;
        }

        .trust-strip span {
          color: var(--text-secondary);
          font-size: 14px;
        }

        .trust-strip span::before {
          color: var(--accent-blue-light);
          content: "•";
          margin-right: 10px;
        }

        .product-stage {
          display: grid;
          min-height: 620px;
          place-items: center;
          position: relative;
        }

        .phone-frame {
          background: linear-gradient(145deg, #262a2b, #050606 34%, #121516);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 42px;
          box-shadow: 0 46px 110px rgba(0,0,0,0.58), inset 0 0 0 8px #090b0c;
          height: 560px;
          padding: 18px;
          position: relative;
          width: min(320px, 82vw);
        }

        .phone-top {
          background: #050607;
          border-radius: 0 0 18px 18px;
          height: 24px;
          left: 50%;
          position: absolute;
          top: 18px;
          transform: translateX(-50%);
          width: 98px;
          z-index: 2;
        }

        .app-screen {
          background: linear-gradient(180deg, #111818, #070909);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
          overflow: hidden;
          padding: 54px 18px 20px;
        }

        .screen-header,
        .screen-row {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .screen-header span,
        .screen-row span,
        .screen-hero-card span,
        .screen-hero-card p {
          color: var(--text-secondary);
          font-size: 12px;
        }

        .screen-header strong {
          color: var(--accent-blue-light);
          font-size: 28px;
        }

        .screen-hero-card {
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px;
          margin: 18px 0;
          padding: 20px;
        }

        .screen-hero-card strong {
          color: #fff;
          display: block;
          font-size: 24px;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 10px 0;
        }

        .screen-row {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 15px;
        }

        .screen-row strong {
          color: #fff;
        }

        .screen-progress {
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
          height: 6px;
          margin-top: auto;
          overflow: hidden;
        }

        .screen-progress span {
          background: var(--accent-blue-light);
          display: block;
          height: 100%;
        }

        .stage-note {
          align-items: center;
          background: rgba(7, 8, 8, 0.82);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #fff;
          display: flex;
          gap: 10px;
          max-width: 250px;
          padding: 14px 16px;
          position: absolute;
        }

        .stage-note svg {
          color: var(--accent-blue-light);
          flex: 0 0 auto;
        }

        .stage-note span {
          font-size: 13px;
          line-height: 1.4;
        }

        .note-one {
          left: 0;
          top: 18%;
        }

        .note-two {
          bottom: 17%;
          right: 0;
        }

        .narrative-section,
        .principles-section,
        .case-preview-section,
        .journey-section,
        .final-cta-section {
          padding: 110px 0;
        }

        .split-intro {
          display: grid;
          gap: 34px;
          grid-template-columns: 0.35fr 1fr;
        }

        .split-intro h2,
        .section-heading-row h2,
        .journey-grid h2,
        .final-cta h2 {
          font-size: clamp(34px, 5vw, 64px);
          line-height: 1;
        }

        .split-intro > p:last-child {
          color: var(--text-secondary);
          font-size: 18px;
          line-height: 1.65;
          max-width: 560px;
        }

        .principle-grid {
          display: grid;
          gap: 1px;
          grid-template-columns: repeat(3, 1fr);
        }

        .principle-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border-color);
          min-height: 290px;
          padding: 36px;
        }

        .principle-card h3,
        .case-row h3,
        .journey-list h3 {
          color: #fff;
          font-size: 22px;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }

        .principle-card p,
        .case-row p,
        .journey-list p,
        .journey-grid > div > p {
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .section-heading-row,
        .final-cta {
          align-items: end;
          display: flex;
          gap: 48px;
          justify-content: space-between;
        }

        .case-stack {
          border-top: 1px solid var(--border-color);
          margin-top: 54px;
        }

        .case-row {
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          display: grid;
          gap: 28px;
          grid-template-columns: 0.55fr 1fr 0.75fr;
          padding: 32px 0;
        }

        .case-row:hover h3,
        .case-row:hover .case-result strong {
          color: var(--accent-blue-light);
        }

        .case-kicker,
        .case-result span {
          color: var(--text-muted);
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .case-result strong {
          color: #fff;
          display: block;
          font-size: 18px;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .journey-section {
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
        }

        .journey-grid {
          display: grid;
          gap: 72px;
          grid-template-columns: 0.8fr 1fr;
        }

        .journey-grid > div > p {
          font-size: 18px;
          margin: 24px 0 30px;
          max-width: 540px;
        }

        .journey-list {
          display: grid;
          gap: 1px;
          list-style: none;
        }

        .journey-list li {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: grid;
          gap: 24px;
          grid-template-columns: auto 1fr;
          padding: 30px;
        }

        .journey-list li > span {
          color: var(--accent-blue-light);
          font-size: 13px;
          font-weight: 800;
          padding-top: 6px;
        }

        .final-cta {
          align-items: center;
          border: 1px solid var(--border-color);
          padding: 48px;
        }

        @media (prefers-reduced-motion: no-preference) {
          .case-row,
          .quiet-link,
          .stage-note {
            transition: color 180ms ease, border-color 180ms ease, transform 180ms ease;
          }

          .case-row:hover {
            transform: translateX(6px);
          }
        }

        @media (max-width: 980px) {
          .launch-hero-grid,
          .split-intro,
          .principle-grid,
          .journey-grid {
            grid-template-columns: 1fr;
          }

          .launch-hero {
            padding-top: 44px;
          }

          .product-stage {
            min-height: 560px;
          }

          .section-heading-row,
          .final-cta {
            align-items: start;
            flex-direction: column;
          }

          .case-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .launch-hero,
          .narrative-section,
          .principles-section,
          .case-preview-section,
          .journey-section,
          .final-cta-section {
            padding: 72px 0;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .hero-actions .btn,
          .hero-actions .quiet-link,
          .final-cta .btn {
            justify-content: center;
            width: 100%;
          }

          .product-stage {
            min-height: 500px;
          }

          .phone-frame {
            height: 500px;
          }

          .stage-note {
            position: static;
            margin-top: 12px;
            width: 100%;
          }

          .product-stage {
            align-content: center;
          }

          .principle-card,
          .journey-list li,
          .final-cta {
            padding: 24px;
          }

          .desktop-link {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
