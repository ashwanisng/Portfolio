"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";

export default function Thinking() {
  const [activeEssay, setActiveEssay] = useState<number>(0);

  const essays = [
    {
      title: "Why I prefer shipping small iterations",
      subtitle: "The compounding value of micro-releases over massive monolithic launches.",
      content: `
        Many startups fail because they spend six months building a massive release in isolation, only to discover that users don't understand the product or that key market assumptions were wrong. I advocate for shipping small, high-frequency iterations.
        
        By breaking milestones into weekly or bi-weekly cycles, we validate features immediately, simplify tracking, and reduce architectural debt. It is easier to debug a code change containing 300 lines of code than a massive release with 10,000 lines. Early loops establish trust between engineering teams and founders.
        
        Focus on delivering a core value prop first, confirm it with telemetry, and iterate based on actual usage patterns. Real metrics beat developer assumptions every time.
      `
    },
    {
      title: "Why maintainability matters",
      subtitle: "How clean code structure saves development budgets over the long run.",
      content: `
        In the initial rush to build an MVP, maintainability is often sacrificed for speed. While this might save a week in the short term, it creates technical debt that slows subsequent feature sprints by a factor of three.
        
        For a mobile app, maintainability means decoupling components. By separating presentation widgets cleanly from database and network communication layers, we ensure that changes in API schemas do not break visual layouts.
        
        Using standard BLoC state management patterns, abstract repositories, and explicit models ensures that any developer can onboard onto the codebase and immediately understand data flows. Documenting architectures prevents code stagnation.
      `
    },
    {
      title: "When Flutter is the right choice (and when it isn't)",
      subtitle: "An honest engineering cost-benefit analysis of cross-platform development.",
      content: `
        Flutter is an exceptional framework for cross-platform mobile apps. It compiles directly to native machine code, rendering interfaces at 60fps/120fps with absolute UI consistency across iOS and Android. It halves your development budget and time-to-market.
        
        However, Flutter is not always the right choice.
        
        **When it is right**: Customer applications, SaaS dashboards, productivity utilities, and transactional platforms that require highly-custom branding and standard API integrations.
        
        **When it is wrong**: Native OS deep utilities, custom hardware driver controllers, applications requiring platform-specific backgrounds APIs, or heavy 3D rendering engines. If your product relies on deep integration with iOS/Android system internals, native Swift and Kotlin remain superior.
      `
    },
    {
      title: "How I evaluate new technologies",
      subtitle: "Filtering out framework hype to select stable software foundations.",
      content: `
        The software industry suffers from constant hype cycle fatigue. New frameworks, languages, and packages launch daily, promising to solve all development hurdles. Selecting a technology based on trending metrics is a high-risk decision.
        
        I evaluate technologies based on three strict criteria:
        
        1. **Community Size & Lifecycle**: Does this package have active backing and stable maintenance? Or will it be abandoned next year?
        2. **Standard Parity**: Does it solve a real limitation, or does it add unnecessary abstraction and dependency bloat?
        3. **Debugging Overhead**: How easy is it to profile, catch memory leaks, and debug this package under load?
        
        We build startups on stable, well-supported technologies (like Flutter, Go, and PostgreSQL) while isolating experimental tools (like AI agents and MCP endpoints) behind API boundaries.
      `
    },
    {
      title: "Balancing speed and quality",
      subtitle: "Navigating the trade-offs between rapid shipping and high-fidelity code.",
      content: `
        Startups exist in a state of urgency. Features must ship, MVPs must launch, and users must be onboarded. However, there is a fine line between shipping fast and shipping broken.
        
        I balance speed and quality by categorizing tasks:
        
        - **Speed Focus**: Visual layouts, prompt iterations, copy adjustments, and UI tweaks. These can be adjusted fast, iterated, and updated.
        - **Quality Focus**: State management, database constraints, auth security, payment pipelines, and network caching layers. These are the foundations. A bug in a payment pipeline or database transaction can be catastrophic.
        
        By maintaining absolute architectural standards at the foundation, we earn the flexibility to build, experiment, and update presentation layers rapidly.
      `
    }
  ];

  return (
    <div className="thinking-page-wrapper">
      <section className="thinking-hero">
        <div className="container">
          <span className="section-tag">PHILOSOPHY</span>
          <h1>How I Think</h1>
          <p className="subtitle">
            Short essays on engineering values, code maintainability, technology trade-offs, and product strategy.
          </p>
        </div>
      </section>

      <section className="essays-content-section">
        <div className="container essays-layout">
          {/* Essays Selector Sidebar */}
          <aside className="essays-sidebar">
            <div className="sticky-sidebar card-glass">
              <h4>Essay Chapters</h4>
              <div className="essays-selector-list">
                {essays.map((essay, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveEssay(idx)}
                    className={`essay-select-btn ${activeEssay === idx ? "active" : ""}`}
                  >
                    <BookOpen size={14} />
                    <span>{essay.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Essay display */}
          <main className="essay-display-col">
            <article className="essay-card card-glass">
              <span className="essay-number">Chapter 0{activeEssay + 1}</span>
              <h2>{essays[activeEssay].title}</h2>
              <span className="essay-subtitle">{essays[activeEssay].subtitle}</span>
              
              <div className="essay-body-text">
                {essays[activeEssay].content.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </article>
          </main>

        </div>
      </section>

      <style jsx>{`
        .thinking-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .thinking-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .thinking-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .thinking-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* Layout */
        .essays-content-section {
          padding: 60px 0;
        }
        .essays-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Sidebar */
        .essays-sidebar {
          position: sticky;
          top: calc(var(--header-height) + 20px);
        }
        .sticky-sidebar {
          padding: 24px;
        }
        .sticky-sidebar h4 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .essays-selector-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .essay-select-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-align: left;
          padding: 10px 12px;
          border-radius: 8px;
          transition: var(--transition-fast);
          width: 100%;
        }
        .essay-select-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.02);
        }
        .essay-select-btn.active {
          color: #fff;
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
        }

        /* Essay display */
        .essay-card {
          padding: 48px;
        }
        .essay-number {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-blue-light);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 16px;
        }
        .essay-card h2 {
          font-size: 32px;
          margin-bottom: 8px;
          color: #fff;
        }
        .essay-subtitle {
          font-size: 15px;
          color: var(--accent-purple);
          display: block;
          margin-bottom: 30px;
        }
        .essay-body-text p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .essay-body-text p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 1024px) {
          .essays-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .essays-sidebar {
            position: relative;
            top: 0;
          }
          .essay-card {
            padding: 30px 24px;
          }
        }
      `}</style>
    </div>
  );
}
