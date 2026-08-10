"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Compass,
  FileText,
  Gauge,
  MessageSquare,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { logFirebaseEvent } from "../../lib/firebase";

const paths = [
  {
    name: "Launch a Mobile MVP",
    timeline: "6 - 10 weeks",
    bestFor: "Founders moving from prototype or Figma to a real app-store launch.",
    promise:
      "A production-ready Flutter app with the right backend, analytics, payment/auth flows, and release path.",
    outcomes: ["Clickable scope and build plan", "iOS and Android implementation", "Backend/API integration", "Store submission support"],
    proof: "RightHand shipped with payments, mapping, partner flows, and production operations.",
  },
  {
    name: "Modernize a Live App",
    timeline: "2 - 6 weeks",
    bestFor: "Teams with a working product that has become slow, fragile, or hard to extend.",
    promise:
      "A calmer architecture, faster screens, cleaner state boundaries, and a release process your team can trust.",
    outcomes: ["Codebase audit", "State and repository refactor", "Performance fixes", "Release automation"],
    proof: "Hudle partner workflows improved through cleaner feature boundaries and faster API paths.",
  },
  {
    name: "Add a High-Value Feature",
    timeline: "2 - 4 weeks",
    bestFor: "Startups adding payments, AI workflows, realtime feeds, maps, or complex onboarding.",
    promise:
      "A shipped feature that fits your product model instead of feeling bolted on.",
    outcomes: ["Technical design", "Edge-case mapping", "Secure integration", "Instrumented launch"],
    proof: "SOCTR handled live market data and heavy charts without sacrificing interaction quality.",
  },
];

const operatingModel = [
  ["Discovery", "Clarify user jobs, business constraints, existing systems, and the smallest launchable scope."],
  ["Design With Reality", "Translate flows into states, APIs, data models, failure paths, and measurable acceptance criteria."],
  ["Weekly Build Loop", "Ship visible progress every week with async notes, demos, and trade-offs documented before they become surprises."],
  ["Launch Hardening", "Profile frames, latency, crash paths, analytics, store readiness, and the handoff notes your team will need."],
];

const answers = [
  {
    q: "Can you work inside an existing team?",
    a: "Yes. I can join your Linear/Jira, Slack, Git flow, and review process. The work is documented so your team can keep moving after handoff.",
  },
  {
    q: "Do you only build Flutter apps?",
    a: "Flutter is the core mobile layer. I also work across Go, Firebase, PostgreSQL, AWS, analytics, payments, and AI APIs when the product requires it.",
  },
  {
    q: "What makes this different from hiring an agency?",
    a: "You work directly with the senior engineer making the product and architecture decisions. Fewer layers, faster feedback, clearer accountability.",
  },
];

export default function ClientServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow">Engineering Partnership</p>
            <h1>Choose the path that gets your mobile product unstuck.</h1>
          </div>
          <div className="hero-panel">
            <p>
              I work best with founders and small teams who need senior product engineering without turning the engagement into a ceremony.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => logFirebaseEvent("click_services_hero_contact", {})}
            >
              Book a Discovery Call
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="path-section" aria-labelledby="paths-heading">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Founder Workspace</p>
            <h2 id="paths-heading">Three engagement paths. One senior owner.</h2>
          </div>

          <div className="path-list">
            {paths.map((path, index) => (
              <article className="path-card" key={path.name}>
                <div className="path-index">0{index + 1}</div>
                <div className="path-content">
                  <div className="path-heading">
                    <h3>{path.name}</h3>
                    <span>
                      <Clock3 size={14} aria-hidden="true" />
                      {path.timeline}
                    </span>
                  </div>
                  <p className="path-best">{path.bestFor}</p>
                  <p className="path-promise">{path.promise}</p>
                  <div className="outcome-grid">
                    {path.outcomes.map((outcome) => (
                      <span key={outcome}>
                        <Check size={14} aria-hidden="true" />
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
                <aside className="proof-panel">
                  <span>Proof</span>
                  <p>{path.proof}</p>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="model-section">
        <div className="container model-grid">
          <div>
            <p className="eyebrow">How The Work Feels</p>
            <h2>A tight loop from ambiguity to shipped software.</h2>
            <p>
              The process is intentionally low-drama: clear scope, visible progress, technical notes in plain English, and a working product improving every week.
            </p>
          </div>
          <ol className="model-list">
            {operatingModel.map(([title, text]) => (
              <li key={title}>
                <span aria-hidden="true"></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="decision-section">
        <div className="container decision-grid">
          <article>
            <Compass size={18} aria-hidden="true" />
            <h3>Product Direction</h3>
            <p>Flows, trade-offs, launch scope, and user journeys shaped before implementation hardens the wrong assumptions.</p>
          </article>
          <article>
            <Gauge size={18} aria-hidden="true" />
            <h3>Performance Repair</h3>
            <p>Frame drops, heavy payloads, slow starts, memory leaks, and transaction uncertainty traced to their root cause.</p>
          </article>
          <article>
            <ShieldCheck size={18} aria-hidden="true" />
            <h3>Production Readiness</h3>
            <p>Analytics, crash paths, store constraints, error states, release notes, and handoff documentation handled before launch.</p>
          </article>
          <article>
            <FileText size={18} aria-hidden="true" />
            <h3>Clear Communication</h3>
            <p>Written decision logs and weekly walkthroughs so founders, designers, and engineers all understand what changed and why.</p>
          </article>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Founder Questions</p>
            <h2>Answers before the first call.</h2>
          </div>
          <div className="faq-list">
            {answers.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container cta-box">
          <Rocket size={22} aria-hidden="true" />
          <div>
            <h2>Start with a clear problem, not a perfect brief.</h2>
            <p>I will help you turn it into a product path, technical plan, and delivery cadence.</p>
          </div>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => logFirebaseEvent("click_services_final_contact", {})}
          >
            Tell Me What You Are Building
            <MessageSquare size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          background:
            radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.1), transparent 34rem),
            var(--bg-primary);
        }

        .services-hero,
        .path-section,
        .model-section,
        .decision-section,
        .faq-section,
        .services-cta {
          padding: 104px 0;
        }

        .services-hero {
          border-bottom: 1px solid var(--border-color);
        }

        .services-hero-grid,
        .model-grid,
        .faq-grid {
          display: grid;
          gap: 64px;
          grid-template-columns: 1fr 0.58fr;
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
        h2,
        h3 {
          color: #fff;
          letter-spacing: -0.04em;
        }

        h1 {
          font-size: clamp(44px, 7vw, 86px);
          line-height: 0.95;
          max-width: 960px;
        }

        h2 {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1;
        }

        .hero-panel {
          border: 1px solid var(--border-color);
          padding: 28px;
        }

        .hero-panel p,
        .model-grid > div > p,
        .path-best,
        .path-promise,
        .proof-panel p,
        .model-list p,
        .decision-grid p,
        .faq-list p,
        .cta-box p {
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .hero-panel .btn {
          margin-top: 24px;
          width: 100%;
        }

        .section-intro {
          max-width: 760px;
          margin-bottom: 54px;
        }

        .path-list {
          display: grid;
          gap: 22px;
        }

        .path-card {
          border: 1px solid var(--border-color);
          display: grid;
          gap: 28px;
          grid-template-columns: 52px 1fr 300px;
          padding: 32px;
        }

        .path-index {
          color: var(--accent-blue-light);
          font-size: 13px;
          font-weight: 800;
          padding-top: 10px;
        }

        .path-heading {
          align-items: start;
          display: flex;
          gap: 18px;
          justify-content: space-between;
        }

        .path-heading h3 {
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1;
        }

        .path-heading span {
          align-items: center;
          border: 1px solid var(--border-color);
          color: #fff;
          display: inline-flex;
          flex: 0 0 auto;
          font-size: 13px;
          gap: 7px;
          padding: 8px 10px;
        }

        .path-best {
          font-size: 15px;
          margin-top: 16px;
        }

        .path-promise {
          color: #d9e3e4;
          font-size: 18px;
          margin-top: 18px;
          max-width: 760px;
        }

        .outcome-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 28px;
        }

        .outcome-grid span {
          align-items: center;
          color: var(--text-secondary);
          display: inline-flex;
          font-size: 14px;
          gap: 9px;
        }

        .outcome-grid svg {
          color: var(--accent-blue-light);
        }

        .proof-panel {
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border-color);
          padding: 22px;
        }

        .proof-panel span {
          color: var(--accent-blue-light);
          display: block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .model-section,
        .faq-section {
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid var(--border-color);
          border-top: 1px solid var(--border-color);
        }

        .model-grid {
          align-items: start;
        }

        .model-grid > div > p {
          font-size: 18px;
          margin-top: 24px;
          max-width: 560px;
        }

        .model-list {
          display: grid;
          gap: 1px;
          list-style: none;
        }

        .model-list li {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: grid;
          gap: 18px;
          grid-template-columns: 18px 1fr;
          padding: 24px;
        }

        .model-list li > span {
          background: var(--accent-blue-light);
          border-radius: 999px;
          height: 8px;
          margin-top: 8px;
          width: 8px;
        }

        .model-list h3,
        .decision-grid h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .decision-grid {
          display: grid;
          gap: 1px;
          grid-template-columns: repeat(4, 1fr);
        }

        .decision-grid article {
          border: 1px solid var(--border-color);
          min-height: 280px;
          padding: 28px;
        }

        .decision-grid svg,
        .cta-box > svg {
          color: var(--accent-blue-light);
          margin-bottom: 28px;
        }

        .faq-grid {
          align-items: start;
        }

        .faq-list {
          display: grid;
          gap: 12px;
        }

        details {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 22px;
        }

        summary {
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          font-weight: 650;
          list-style-position: outside;
        }

        details p {
          margin-top: 14px;
        }

        .cta-box {
          align-items: center;
          border: 1px solid var(--border-color);
          display: grid;
          gap: 30px;
          grid-template-columns: auto 1fr auto;
          padding: 44px;
        }

        .cta-box p {
          font-size: 18px;
          margin-top: 12px;
        }

        @media (prefers-reduced-motion: no-preference) {
          .path-card,
          .decision-grid article,
          details {
            transition: border-color 180ms ease, transform 180ms ease;
          }

          .path-card:hover,
          .decision-grid article:hover,
          details:hover {
            border-color: rgba(34,211,238,0.28);
          }
        }

        @media (max-width: 1080px) {
          .path-card {
            grid-template-columns: 44px 1fr;
          }

          .proof-panel {
            grid-column: 2;
          }

          .decision-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 820px) {
          .services-hero-grid,
          .model-grid,
          .faq-grid,
          .path-card,
          .outcome-grid,
          .cta-box {
            grid-template-columns: 1fr;
          }

          .proof-panel {
            grid-column: auto;
          }

          .services-hero,
          .path-section,
          .model-section,
          .decision-section,
          .faq-section,
          .services-cta {
            padding: 76px 0;
          }
        }

        @media (max-width: 560px) {
          .decision-grid {
            grid-template-columns: 1fr;
          }

          .path-card,
          .hero-panel,
          .cta-box {
            padding: 22px;
          }

          .path-heading {
            align-items: start;
            flex-direction: column;
          }

          .cta-box .btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
