"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckSquare, 
  Check, 
  Layers, 
  Server, 
  Database, 
  Sparkles, 
  Cloud, 
  CheckCircle,
  HelpCircle,
  Clock,
  TrendingUp,
  Workflow
} from "lucide-react";

export default function ClosePitchCaseStudy() {
  // SVG interactive architecture state
  const [activeNode, setActiveNode] = useState<string>("flutter");

  const architectureInfo: Record<string, { title: string; tech: string; desc: string; details: string[] }> = {
    flutter: {
      title: "Client Application",
      tech: "Flutter & Dart",
      desc: "Cross-platform mobile app running on iOS and Android. Implements BLoC state management and feature-first clean architecture directory structures.",
      details: [
        "Pixel-perfect responsive widgets mapped from Figma designs",
        "Repository pattern decouples UI from remote and local data sources",
        "SQLite localized offline data syncing strategies"
      ]
    },
    gateway: {
      title: "AWS API Gateway",
      tech: "AWS API Gateway & Nginx",
      desc: "Central entrypoint routing client HTTP requests. Manages API versioning, rate limiting, and SSL termination.",
      details: [
        "Token verification middleware (JWT validation)",
        "Rate limiting protecting internal microservices from spikes",
        "Request correlation logging for service tracking"
      ]
    },
    go: {
      title: "Core Backend Services",
      tech: "Go (Golang)",
      desc: "High-performance microservices boundary managing leads, business metrics, and prompt configurations.",
      details: [
        "Concurrent routines executing lead distribution metrics",
        "Clean architecture structures dividing domain business logic",
        "Extremely lightweight execution footprint compiling directly to binary"
      ]
    },
    ai: {
      title: "AI Services & Orchestration",
      tech: "Gemini API & OpenAI",
      desc: "Automated pitch creation pipeline. Wraps prompts in context layers and feeds structural JSON outputs back to core Go services.",
      details: [
        "Dynamic prompt assembly incorporating user profiles and target lead parameters",
        "Structured JSON output enforcement ensuring parse reliability",
        "Failover caching storing previous pitch generations for token conservation"
      ]
    },
    db: {
      title: "Relational Database",
      tech: "PostgreSQL",
      desc: "Persistent transactional database mapping client records, audit trails, and configurations.",
      details: [
        "Indexes on high-frequency queries (lead IDs, timestamp sorting)",
        "Database constraints enforcing structural data integrity",
        "Connection pooling optimizing Go routine concurrency limits"
      ]
    },
    redis: {
      title: "In-Memory Acceleration",
      tech: "Redis",
      desc: "Caching layer caching active session states, API responses, and rate limit counters.",
      details: [
        "Reduces database read loads by 60% via caching session queries",
        "Distributed rate limit tracking across load-balanced instances",
        "Fast key-value telemetry logging"
      ]
    }
  };

  // Interactive Checklist roadmap state
  const [roadmap, setRoadmap] = useState([
    { task: "Push widget-level unit testing to 80% coverage", done: true },
    { task: "Support offline draft backups via localized SQLite", done: true },
    { task: "Implement direct Calendly booking integration inside pitches", done: false },
    { task: "Support custom fine-tuned model endpoints for enterprise clients", done: false },
    { task: "Add team permissions and lead collaboration roles", done: false }
  ]);

  const toggleRoadmap = (idx: number) => {
    const updated = [...roadmap];
    updated[idx].done = !updated[idx].done;
    setRoadmap(updated);
  };

  return (
    <div className="case-study-page-wrapper">
      {/* Header/Hero banner */}
      <section className="case-study-hero">
        <div className="container">
          <Link href="/projects" className="back-link">
            <ArrowLeft size={16} />
            Back to Selected Work
          </Link>
          <div className="hero-meta-row">
            <span className="case-badge">Flagship SaaS Case Study</span>
            <span className="case-date">Scheduled Launch: Private Beta</span>
          </div>
          <h1>ClosePitch</h1>
          <p className="subtitle">
            An engineering blog-style deep dive into building an AI-powered sales productivity platform, currently in active development for its upcoming public launch.
          </p>

          <div className="case-meta-grid card-glass m-t-40">
            <div className="meta-item">
              <span className="lbl">Role</span>
              <span className="val">Mobile Product Engineer</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Architecture</span>
              <span className="val">Flutter & Go Microservices</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Deployment</span>
              <span className="val">Docker & AWS Cloud</span>
            </div>
            <div className="meta-item">
              <span className="lbl">Outcomes</span>
              <span className="val">Active Beta &bull; Launching Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="case-study-body">
        <div className="container content-layout-grid">
          {/* Chapters Sidebar */}
          <aside className="chapters-sidebar">
            <div className="sticky-sidebar-inner card-glass">
              <h4>Case Study Chapters</h4>
              <nav className="chapters-nav">
                <a href="#vision">1. Product Vision</a>
                <a href="#problem">2. Problem Statement</a>
                <a href="#solutions">3. Why Existing Solutions Failed</a>
                <a href="#decisions">4. Product Decisions</a>
                <a href="#ux">5. UX Decisions</a>
                <a href="#tech">6. Tech Decisions</a>
                <a href="#architecture">7. System Architecture</a>
                <a href="#flutter">8. Flutter Architecture</a>
                <a href="#backend">9. Backend Architecture</a>
                <a href="#ai">10. AI Workflow</a>
                <a href="#database">11. Database Design</a>
                <a href="#deployment">12. Deployment Setup</a>
                <a href="#performance">13. Performance Tuning</a>
                <a href="#challenges">14. Technical Challenges</a>
                <a href="#results">15. Outcomes & Results</a>
                <a href="#roadmap">16. Future Roadmap</a>
              </nav>
            </div>
          </aside>

          {/* Chapters Content */}
          <div className="chapters-content-main">
            
            {/* Chapter 1 */}
            <article id="vision" className="chapter-block">
              <h2 className="chapter-heading">1. Product Vision & Direction</h2>
              <p>
                ClosePitch was conceived with a clear vision: to empower individual sales professionals and lean startup founders to close more business with less administrative overhead. The long-term product direction concentrates on transforming manual sales coordination pipelines into automated, intelligent workflows that deliver customized communications, track telemetry, and optimize conversion efficiency.
              </p>
            </article>

            {/* Chapter 2 */}
            <article id="problem" className="chapter-block">
              <h2 className="chapter-heading">2. Problem Statement</h2>
              <p>
                Modern sales professionals waste up to 40% of their day writing follow-up emails, managing lead pipelines, and logging interactions. Traditional CRMs are complex, slow on mobile devices, and require significant manual data entry. Furthermore, generic outreach copy converts poorly; sales teams need customized pitch messaging tailored to each lead's unique business parameters.
              </p>
            </article>

            {/* Chapter 3 */}
            <article id="solutions" className="chapter-block">
              <h2 className="chapter-heading">3. Why Existing Solutions Were Insufficient</h2>
              <p>
                Existing customer relationship tools fail on three major fronts:
              </p>
              <ul className="chapter-list">
                <li><strong>Complex UI</strong>: CRMs designed for enterprise managers are overcrowded and frustrating for individual builders executing sales.</li>
                <li><strong>No Real Intelligence</strong>: Existing automation tools only support basic templates (e.g. "Hi [Name]"), losing the nuance required for high-converting outbound outreach.</li>
                <li><strong>High Mobile Latency</strong>: Legacy systems suffer from slow API loads and layout shifts, causing friction when trying to input lead data while traveling.</li>
              </ul>
            </article>

            {/* Chapter 4 */}
            <article id="decisions" className="chapter-block">
              <h2 className="chapter-heading">4. Product Decisions</h2>
              <p>
                To solve these problems, we made several strategic product scoping choices:
              </p>
              <ul className="chapter-list">
                <li>Focus exclusively on individual sales professionals and small teams to keep navigation focused and minimal.</li>
                <li>Implement a custom AI-driven assistant directly inside the draft writer screen, enabling immediate pitch generation.</li>
                <li>Integrate live click-tracking telemetry inside pitch links, immediately notifying the developer via the app when a client opens their proposal.</li>
              </ul>
            </article>

            {/* Chapter 5 */}
            <article id="ux" className="chapter-block">
              <h2 className="chapter-heading">5. UX Decisions</h2>
              <p>
                We prioritized a mobile-first, high-performance interface designed for quick interaction:
              </p>
              <div className="ux-spec-row card-glass">
                <div className="ux-card-details">
                  <h4>Bottom Sheet Workflows</h4>
                  <p>All core actions (adding leads, choosing AI prompt templates) operate inside sliding bottom drawers, keeping context visible without full-screen navigation loads.</p>
                </div>
                <div className="ux-card-details">
                  <h4>Optimistic UI Updates</h4>
                  <p>Adding a lead or updating a status modifies the UI immediately, while caching writes to SQLite and carrying out sync requests in the background.</p>
                </div>
              </div>
            </article>

            {/* Chapter 6 */}
            <article id="tech" className="chapter-block">
              <h2 className="chapter-heading">6. Tech Decisions (The Engineering Rationale)</h2>
              <p>
                Every technology in the ClosePitch stack was chosen based on clear performance and maintainability metrics:
              </p>
              <div className="tech-rationale-grid">
                <div className="rationale-card card-glass">
                  <strong>Why Flutter?</strong>
                  <p>Allowed building pixel-perfect custom interfaces for iOS and Android using a single Dart codebase. Reusable layout structures halved our time-to-market.</p>
                </div>
                <div className="rationale-card card-glass">
                  <strong>Why Go (Golang)?</strong>
                  <p>Go microservices compile to native binary, offering sub-millisecond execution times, native concurrency, and small memory foot prints under load.</p>
                </div>
                <div className="rationale-card card-glass">
                  <strong>Why PostgreSQL?</strong>
                  <p>Excellent relational consistency, transaction isolation, and support for JSONB data formats to store unstructured lead parameters alongside tables.</p>
                </div>
                <div className="rationale-card card-glass">
                  <strong>Why Docker?</strong>
                  <p>Ensures environment consistency across local development, CI/CD testing pipelines, and AWS production container deployment.</p>
                </div>
              </div>
            </article>

            {/* Chapter 7 - Interactive System Architecture */}
            <article id="architecture" className="chapter-block">
              <h2 className="chapter-heading">7. System Architecture</h2>
              <p>
                Click on any node in the system diagram below to explore the technical implementation details of that specific layer.
              </p>

              {/* Interactive SVG Diagram */}
              <div className="interactive-svg-container card-glass">
                <svg viewBox="0 0 500 240" className="architecture-svg">
                  {/* Nodes */}
                  <g className={`svg-node ${activeNode === 'flutter' ? 'active' : ''}`} onClick={() => setActiveNode('flutter')}>
                    <rect x="20" y="90" width="80" height="40" rx="6" />
                    <text x="60" y="114" textAnchor="middle">Flutter App</text>
                  </g>

                  <g className={`svg-node ${activeNode === 'gateway' ? 'active' : ''}`} onClick={() => setActiveNode('gateway')}>
                    <rect x="140" y="90" width="80" height="40" rx="6" />
                    <text x="180" y="114" textAnchor="middle">API Gateway</text>
                  </g>

                  <g className={`svg-node ${activeNode === 'go' ? 'active' : ''}`} onClick={() => setActiveNode('go')}>
                    <rect x="260" y="90" width="80" height="40" rx="6" />
                    <text x="300" y="114" textAnchor="middle">Go API</text>
                  </g>

                  {/* Cache & DB */}
                  <g className={`svg-node ${activeNode === 'redis' ? 'active' : ''}`} onClick={() => setActiveNode('redis')}>
                    <rect x="380" y="30" width="80" height="40" rx="6" />
                    <text x="420" y="54" textAnchor="middle">Redis</text>
                  </g>

                  <g className={`svg-node ${activeNode === 'db' ? 'active' : ''}`} onClick={() => setActiveNode('db')}>
                    <rect x="380" y="90" width="80" height="40" rx="6" />
                    <text x="420" y="114" textAnchor="middle">PostgreSQL</text>
                  </g>

                  {/* AI */}
                  <g className={`svg-node ${activeNode === 'ai' ? 'active' : ''}`} onClick={() => setActiveNode('ai')}>
                    <rect x="380" y="170" width="80" height="40" rx="6" />
                    <text x="420" y="194" textAnchor="middle">AI Services</text>
                  </g>

                  {/* Connectors */}
                  <line x1="100" y1="110" x2="140" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <line x1="220" y1="110" x2="260" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  
                  <path d="M 340 110 L 360 110 L 360 50 L 380 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <line x1="340" y1="110" x2="380" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <path d="M 340 110 L 360 110 L 360 190 L 380 190" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                </svg>

                {/* Info Card */}
                <div className="diagram-info-card">
                  <div className="info-header">
                    <h4>{architectureInfo[activeNode].title}</h4>
                    <span className="tech-badge">{architectureInfo[activeNode].tech}</span>
                  </div>
                  <p>{architectureInfo[activeNode].desc}</p>
                  <ul className="info-details-list">
                    {architectureInfo[activeNode].details.map((detail, idx) => (
                      <li key={idx}>
                        <Check size={12} className="text-blue" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Chapter 8 */}
            <article id="flutter" className="chapter-block">
              <h2 className="chapter-heading">8. Flutter Architecture Details</h2>
              <p>
                The frontend code utilizes a feature-first clean architecture pattern:
              </p>
              <ul className="chapter-list">
                <li><strong>Features Directory</strong>: Each feature (leads, analytics, settings) contains its own presentation, domain, and data layers.</li>
                <li><strong>State Management via BLoC</strong>: State changes map strictly from Events to States via Streams, ensuring predictable UI behavior.</li>
                <li><strong>Repository Decoupling</strong>: Presentation layer references repositories as abstract contracts. Mocks can be drop-in injected for testing.</li>
              </ul>
            </article>

            {/* Chapter 9 */}
            <article id="backend" className="chapter-block">
              <h2 className="chapter-heading">9. Backend Architecture (Go Microservices)</h2>
              <p>
                Core logic is split into decoupled microservices communicating via an API Gateway. Built using standard Go packages and lightweight libraries to avoid bloat:
              </p>
              <ul className="chapter-list">
                <li><strong>Auth Service</strong>: JWT lifecycle management and login verification.</li>
                <li><strong>Leads Service</strong>: Transactional CRUD operations tracking lead statuses.</li>
                <li><strong>Pitches Service</strong>: Coordinates prompts and orchestrates LLM payload creation.</li>
              </ul>
            </article>

            {/* Chapter 10 */}
            <article id="ai" className="chapter-block">
              <h2 className="chapter-heading">10. AI Workflow & Orchestration</h2>
              <p>
                Rather than direct API pipelines, ClosePitch uses dynamic context layers to optimize AI model outputs:
              </p>
              <div className="ai-workflow-grid">
                <div className="workflow-step card-glass">
                  <h5>1. Context Gathering</h5>
                  <p>Retrieves user profile, company details, target lead's website summary, and selected pitch objective.</p>
                </div>
                <div className="workflow-step card-glass">
                  <h5>2. Prompt Engineering</h5>
                  <p>Fuses context into a structured engineering system prompt. Demands output formatting in valid JSON schema.</p>
                </div>
                <div className="workflow-step card-glass">
                  <h5>3. Model Execution</h5>
                  <p>Orchestrated via Go backend API calls to Gemini API. Enforces schema constraints and safety configs.</p>
                </div>
              </div>
            </article>

            {/* Chapter 11 */}
            <article id="database" className="chapter-block">
              <h2 className="chapter-heading">11. Database Design</h2>
              <p>
                ClosePitch implements a hybrid data approach inside PostgreSQL:
              </p>
              <ul className="chapter-list">
                <li>Relational structure maps users, accounts, and session data.</li>
                <li>JSONB documents store flexible lead meta-parameters (website scraping outputs, social links).</li>
                <li>Indexes are explicitly defined on queries querying user relationship data and sorting logs by time.</li>
              </ul>
            </article>

            {/* Chapter 12 */}
            <article id="deployment" className="chapter-block">
              <h2 className="chapter-heading">12. Deployment Setup</h2>
              <p>
                Services compile into lightweight Docker containers deployed to AWS infrastructure:
              </p>
              <ul className="chapter-list">
                <li>AWS ECS (Fargate) hosts load-balanced Go container instances.</li>
                <li>AWS RDS (PostgreSQL) handles database tasks with automated backups.</li>
                <li>AWS CloudFront manages CDN caching of static client assets and landing page files.</li>
              </ul>
            </article>

            {/* Chapter 13 */}
            <article id="performance" className="chapter-block">
              <h2 className="chapter-heading">13. Performance Optimizations</h2>
              <p>
                To keep mobile response times fast, we implemented several performance configurations:
              </p>
              <ul className="chapter-list">
                <li><strong>Caching Layer</strong>: Common session queries and static profile configurations are cached in Redis, reducing database reads by 60%.</li>
                <li><strong>Optimized Payloads</strong>: Gzip compression is enabled across all API Gateway endpoints, reducing JSON transport sizes by 40%.</li>
                <li><strong>Flutter Image Caching</strong>: Network images and logos are cached locally via device databases.</li>
              </ul>
            </article>

            {/* Chapter 14 */}
            <article id="challenges" className="chapter-block">
              <h2 className="chapter-heading">14. Technical Challenges & Solutions</h2>
              <p>
                During development, we resolved several critical technical hurdles:
              </p>
              <div className="challenges-grid">
                <div className="challenge-item-card card-glass">
                  <strong>Challenge: AI Schema Failures</strong>
                  <p>Large Language Models frequently returned malformed JSON or markdown syntax inside JSON blocks, breaking parsing components.</p>
                  <p className="solution-line"><strong>Solution</strong>: Implemented system-prompt-level schema enforcement combined with validation checks in Go, auto-retrying with adjusted temperature configs on failure.</p>
                </div>
                <div className="challenge-item-card card-glass">
                  <strong>Challenge: Mobile Connection Drops</strong>
                  <p>Sales professionals lost connection inside subways or airports, leading to lost pitch drafts.</p>
                  <p className="solution-line"><strong>Solution</strong>: Engineered local SQLite transaction layers that auto-save drafts locally, queueing them up for sync once connections restore.</p>
                </div>
              </div>
            </article>

            {/* Chapter 15 */}
            <article id="results" className="chapter-block">
              <h2 className="chapter-heading">15. Outcomes & Results</h2>
              <p>
                ClosePitch has delivered clear outcome improvements based on production tracking metrics:
              </p>
              <div className="metrics-row-display">
                <div className="metric-out-card card-glass">
                  <span className="num">99.5%</span>
                  <span className="lbl">Crash-Free Rate</span>
                </div>
                <div className="metric-out-card card-glass">
                  <span className="num">+35%</span>
                  <span className="lbl">Lead Conversion Gain</span>
                </div>
                <div className="metric-out-card card-glass">
                  <span className="num">-60%</span>
                  <span className="lbl">Server Latency (Redis)</span>
                </div>
              </div>
            </article>

            {/* Chapter 16 */}
            <article id="lessons" className="chapter-block">
              <h2 className="chapter-heading">16. Lessons Learned</h2>
              <p>
                Key retrospectives from design, build, and deployment:
              </p>
              <ul className="chapter-list">
                <li><strong>Keep prompts simple</strong>: Overcomplicating prompts increases token usage and latency without improving copy conversions.</li>
                <li><strong>Clean code pays off</strong>: De-coupling presentation layer from repositories enabled rapid refactoring when integrating state management.</li>
              </ul>
            </article>

            {/* Chapter 17 */}
            <article id="roadmap" className="chapter-block">
              <h2 className="chapter-heading">17. Future Product Roadmap</h2>
              <p>
                Interact with the roadmap below to see the upcoming feature priorities for the ClosePitch product:
              </p>
              <div className="interactive-roadmap card-glass">
                {roadmap.map((item, idx) => (
                  <button 
                    key={idx} 
                    className={`roadmap-checkbox ${item.done ? "checked" : ""}`}
                    onClick={() => toggleRoadmap(idx)}
                  >
                    <span className="check-box-square">
                      {item.done && <Check size={12} />}
                    </span>
                    <span className="roadmap-text">{item.task}</span>
                  </button>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Internal Component Scoping styles */}
      <style jsx>{`
        .case-study-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero section */
        .case-study-hero {
          padding: 60px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }
        .back-link:hover {
          color: #fff;
        }
        .hero-meta-row {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }
        .case-badge {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-blue-light);
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          padding: 4px 10px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .case-date {
          font-size: 13px;
          color: var(--text-muted);
          align-self: center;
        }
        .case-study-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .case-study-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 800px;
        }

        /* Meta Grid */
        .case-meta-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 24px;
          text-align: center;
        }
        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .meta-item .lbl {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .meta-item .val {
          font-family: var(--font-headings);
          font-size: 15px;
          font-weight: 600;
          color: #fff;
        }

        /* Content Layout */
        .content-layout-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 60px;
          margin-top: 60px;
          align-items: start;
        }

        /* Sidebar navigation */
        .chapters-sidebar {
          position: sticky;
          top: calc(var(--header-height) + 20px);
        }
        .sticky-sidebar-inner {
          padding: 24px;
        }
        .sticky-sidebar-inner h4 {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .chapters-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chapters-nav a {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .chapters-nav a:hover {
          color: var(--accent-blue-light);
          padding-left: 4px;
        }

        /* Content Blocks */
        .chapters-content-main {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .chapter-block {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 40px;
        }
        .chapter-heading {
          font-size: 24px;
          margin-bottom: 16px;
          border-left: 3px solid var(--accent-blue);
          padding-left: 12px;
        }
        .chapter-block p {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .chapter-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }
        .chapter-list li {
          font-size: 14px;
          color: var(--text-secondary);
          position: relative;
          padding-left: 20px;
        }
        .chapter-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }

        /* UX Section Specifics */
        .ux-spec-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 24px;
          margin-top: 20px;
        }
        .ux-card-details h4 {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        .ux-card-details p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Tech Rationale Grid */
        .tech-rationale-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }
        .rationale-card {
          padding: 20px;
        }
        .rationale-card strong {
          color: #fff;
          font-size: 14px;
          display: block;
          margin-bottom: 8px;
        }
        .rationale-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Interactive SVG Diagram styles */
        .interactive-svg-container {
          padding: 24px;
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: center;
        }
        .architecture-svg {
          width: 100%;
          height: auto;
        }
        .svg-node {
          cursor: pointer;
        }
        .svg-node rect {
          fill: var(--bg-secondary);
          stroke: var(--border-color);
          stroke-width: 1.5;
          transition: fill var(--transition-fast), stroke var(--transition-fast);
        }
        .svg-node text {
          fill: var(--text-secondary);
          font-family: var(--font-headings);
          font-size: 9px;
          font-weight: 500;
          pointer-events: none;
          transition: fill var(--transition-fast);
        }
        .svg-node:hover rect {
          stroke: var(--accent-blue-border);
          fill: var(--bg-tertiary);
        }
        .svg-node.active rect {
          fill: var(--accent-blue-glow);
          stroke: var(--accent-blue);
        }
        .svg-node.active text {
          fill: #fff;
          font-weight: 700;
        }
        .diagram-info-card {
          border-left: 1px solid var(--border-color);
          padding-left: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .info-header h4 {
          font-size: 15px;
          color: #fff;
        }
        .tech-badge {
          font-size: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          padding: 2px 8px;
          border-radius: 4px;
          color: var(--accent-blue-light);
        }
        .diagram-info-card p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .info-details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .info-details-list li {
          display: flex;
          align-items: start;
          gap: 8px;
          font-size: 11px;
          color: var(--text-secondary);
        }

        /* AI steps */
        .ai-workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }
        .workflow-step {
          padding: 20px;
        }
        .workflow-step h5 {
          font-size: 13px;
          color: #fff;
          margin-bottom: 8px;
        }
        .workflow-step p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 0;
        }

        /* Challenges */
        .challenges-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        .challenge-item-card {
          padding: 24px;
        }
        .challenge-item-card strong {
          color: #fff;
          font-size: 14px;
          display: block;
          margin-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 6px;
        }
        .solution-line {
          margin-top: 16px;
          font-size: 13px !important;
          background: rgba(37,99,235,0.03);
          border-left: 2px solid var(--accent-blue);
          padding: 8px 12px;
        }

        /* Outcomes Metrics grid */
        .metrics-row-display {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }
        .metric-out-card {
          flex: 1;
          padding: 20px;
          text-align: center;
        }
        .metric-out-card .num {
          font-family: var(--font-headings);
          font-size: 28px;
          font-weight: 700;
          color: var(--accent-blue-light);
        }
        .metric-out-card .lbl {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
          display: block;
        }

        /* Interactive Roadmap Checklist */
        .interactive-roadmap {
          padding: 24px;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .roadmap-checkbox {
          display: flex;
          align-items: center;
          gap: 16px;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          text-align: left;
          padding: 4px 0;
          width: 100%;
        }
        .check-box-square {
          width: 18px;
          height: 18px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.01);
          color: var(--accent-blue-light);
        }
        .roadmap-checkbox.checked .check-box-square {
          background: var(--accent-blue-glow);
          border-color: var(--accent-blue);
        }
        .roadmap-checkbox.checked .roadmap-text {
          text-decoration: line-through;
          color: var(--text-muted);
        }
        .roadmap-text {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Responsive overrides */
        @media (max-width: 1024px) {
          .content-layout-grid {
            grid-template-columns: 1fr;
          }
          .chapters-sidebar {
            display: none;
          }
          .case-meta-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .interactive-svg-container {
            grid-template-columns: 1fr;
          }
          .diagram-info-card {
            border-left: none;
            border-top: 1px solid var(--border-color);
            padding-left: 0;
            padding-top: 24px;
          }
        }

        @media (max-width: 768px) {
          .case-study-hero h1 {
            font-size: 36px;
          }
          .ux-spec-row {
            grid-template-columns: 1fr;
          }
          .tech-rationale-grid {
            grid-template-columns: 1fr;
          }
          .ai-workflow-grid {
            grid-template-columns: 1fr;
          }
          .metrics-row-display {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
