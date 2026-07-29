"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Cpu, 
  Zap, 
  Smartphone, 
  Layers, 
  ChevronDown, 
  MessageSquare,
  HelpCircle,
  Clock,
  Sparkles,
  GitBranch,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function Home() {
  // Testimonial State
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      quote: "Ashwani is an exceptional Flutter developer who takes complete ownership. He redesigned our app interface and always focuses on high performance and widget optimization.",
      author: "Kartikeya Gupta",
      title: "Co-founder, Hudle",
      initials: "KG"
    },
    {
      quote: "He has a strong product mindset, understands the big picture, and delivers robust Flutter architectures. Extremely reliable and key in streamlining our API caching and SDK tracking.",
      author: "Vivek Mishra",
      title: "Engineering Manager, Hudle",
      initials: "VM"
    },
    {
      quote: "Delivered the subscription management and tracking apps on time with a 99.5% crash-free rate. Communication was excellent and implementation was top tier.",
      author: "Verified EverAg Manager",
      title: "Dairy B2C Project Leader",
      initials: "MR"
    }
  ];

  // Auto-play Testimonials
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can you start?",
      answer: "I am typically able to onboard and kick off new projects within 2 to 3 weeks, depending on my current contract pipeline and the clarity of your initial requirements."
    },
    {
      question: "What time zones do you overlap with?",
      answer: "I regularly collaborate with teams across North America (EST/PST), Europe (GMT/CET), the Middle East (GST), and Australia. I coordinate my schedule to ensure at least 3-4 hours of live crossover time daily."
    },
    {
      question: "How do you communicate during development?",
      answer: "I rely on async-first tools: Slack/Discord for daily coordination, Loom for weekly walkthrough videos, and Notion or GitHub Projects for tracking scope and sprint milestones."
    },
    {
      question: "Do you work on fixed-price or hourly rates?",
      answer: "For well-defined MVPs and project scopes, I offer fixed-price deliverables. For ongoing product modernization, scaling, or team integration, I work on a monthly or weekly retainer structure."
    },
    {
      question: "Can you collaborate with our existing backend or design teams?",
      answer: "Yes. I have years of experience working closely with product designers (translating Figma designs to clean code) and backend engineers (handling GraphQL/REST integrations, caching, and payload schema aligning)."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Absolutely. I respect intellectual property and require signed Non-Disclosure Agreements (NDAs) before discussing sensitive codebases or proprietary product details."
    }
  ];

  return (
    <div className="homepage-wrapper">
      {/* Hero Section */}
      <section className="hero-block">
        <div className="container hero-grid">
          <div className="hero-main-content">
            <span className="hero-pill-badge animate-fade-up-1">Mobile Product Engineer</span>
            <h1 className="hero-heading-outcome animate-fade-up-2">
              Building <span className="text-glow-blue">production-ready</span> mobile products that startups can launch and scale with confidence.
            </h1>
            <p className="hero-subheading-outcome animate-fade-up-3">
              Built production applications using Flutter, Go, AWS, Firebase and AI technologies. Specializing in cross-platform mobile apps, custom AI integration workflows, and scalable architectures.
            </p>
            <div className="hero-buttons-row animate-fade-up-4">
              <Link href="/projects" className="btn btn-primary">
                View Selected Work
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Book a Call
              </Link>
            </div>

            <div className="hero-credibility-logos animate-fade-up-4">
              <span className="logos-title">TRUSTED BY STARTUPS AND TEAMS AT</span>
              <div className="logos-row">
                <span className="logo-item">Hudle</span>
                <span className="logo-separator">•</span>
                <span className="logo-item">MrMilkman</span>
                <span className="logo-separator">•</span>
                <span className="logo-item">Squareboat</span>
                <span className="logo-separator">•</span>
                <span className="logo-item">EverAg</span>
              </div>
            </div>
          </div>

          <div className="hero-mockup-wrapper animate-fade-up-5">
            <div className="glow-mesh-overlay"></div>
            
            {/* Floating Glassmorphic Cards */}
            <div className="floating-card hero-ai-card glassmorphic-float">
              <span className="card-lbl">AI GENERATIVE PITCH</span>
              <p className="card-prompt">Prompt: Generate saas pitch...</p>
              <div className="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div className="floating-card hero-chart-card glassmorphic-float">
              <span className="card-lbl">CONVERSIONS</span>
              <span className="card-val">+34.8%</span>
              <div className="mini-bar-chart">
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
              </div>
            </div>

            <div className="floating-card hero-stack-card glassmorphic-float">
              <span className="card-lbl">STACK TRUST</span>
              <div className="badge-row">
                <span className="badge-sm">Flutter</span>
                <span className="badge-sm">Go</span>
                <span className="badge-sm">AWS</span>
              </div>
            </div>

            <div className="phone-isometric-container">
              {/* iPhone Mockup */}
              <div className="phone-mockup home-phone-center">
                <div className="phone-screen">
                  <div className="mini-scan-line"></div>
                  <div className="phone-header">
                    <span className="phone-time">9:41</span>
                    <div className="phone-camera"></div>
                    <div className="phone-icons">
                      <span className="status-indicator available"></span>
                    </div>
                  </div>
                  <div className="phone-content">
                    <div className="mini-app-header">
                      <span className="mini-app-logo">ClosePitch</span>
                      <div className="mini-user-avatar"></div>
                    </div>
                    <div className="mini-app-hero">
                      <span className="mini-lbl">AI Pitch Generator</span>
                      <div className="mini-chat-bubble">
                        Generating optimized SaaS leads in real time...
                      </div>
                    </div>
                    
                    <div className="mini-popup-bubble">
                      <span>✓ Pitch Sent! +$2,500</span>
                    </div>

                    <div className="mini-metric-grid">
                      <div className="mini-m-card">
                        <span className="mini-lbl">Conversions</span>
                        <span className="mini-val pulsing">+25%</span>
                      </div>
                      <div className="mini-m-card">
                        <span className="mini-lbl">Uptime</span>
                        <span className="mini-val">99.9%</span>
                      </div>
                    </div>
                    <div className="mini-app-footer">
                      <span className="mini-lbl">Go Microservices backend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Hire Me */}
      <section className="why-hire-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="section-tag">PARTNERSHIP</span>
            <h2 className="section-title">Why Founders Hire Me</h2>
            <p className="section-subtitle centered-subtitle">
              I don't just compile code. I partner with founders to design, build, and scale digital products that achieve business milestones.
            </p>
          </div>

          <div className="why-hire-grid">
            <div className="why-hire-card card-glass reveal-on-scroll">
              <span className="why-hire-number text-glow-blue">01</span>
              <h3>End-to-End Ownership</h3>
              <p className="why-hire-tagline">From raw concept to the App Store.</p>
              <p className="why-hire-desc">
                I take complete ownership of user flows, design fidelity, release cycles, and device parity. You focus on user growth; I handle the product delivery pipeline.
              </p>
            </div>

            <div className="why-hire-card card-glass reveal-on-scroll reveal-delay-1">
              <span className="why-hire-number text-glow-purple">02</span>
              <h3>Startup Speed</h3>
              <p className="why-hire-tagline">Weekly demos and fast iterations.</p>
              <p className="why-hire-desc">
                I align development velocity with market validation. Weekly Loom video updates, slack-first async communications, and structured release increments mean you launch in weeks, not months.
              </p>
            </div>

            <div className="why-hire-card card-glass reveal-on-scroll reveal-delay-2">
              <span className="why-hire-number text-glow-green">03</span>
              <h3>Engineering Quality</h3>
              <p className="why-hire-tagline">Scalable architecture and clean systems.</p>
              <p className="why-hire-desc">
                No short-cuts. I write structured BLoC pattern Flutter applications connected to Go and AWS architectures built to support future team expansions and heavy loads from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Showcase Section */}
      <section className="featured-showcase-section">
        <div className="container">
          <div className="showcase-card-layout card-glass reveal-on-scroll">
            <div className="showcase-content">
              <span className="showcase-tag">FLAGSHIP SHOWCASE</span>
              <h2 className="showcase-title">ClosePitch</h2>
              <p className="showcase-desc">
                An AI-powered sales productivity platform that helps sales professionals automate pitch drafts, track customer conversions, and manage leads in real time.
              </p>
              
              <div className="outcome-bullets">
                <div className="bullet-item">
                  <CheckCircle size={16} className="text-blue" />
                  <span>Interactive AI Pitch Generation workflow</span>
                </div>
                <div className="bullet-item">
                  <CheckCircle size={16} className="text-blue" />
                  <span>Go microservices backend on AWS</span>
                </div>
                <div className="bullet-item">
                  <CheckCircle size={16} className="text-blue" />
                  <span>Real-time Redis caching and telemetry</span>
                </div>
              </div>

              <div className="showcase-ctas">
                <Link href="/projects/closepitch" className="btn btn-primary btn-sm">
                  Read ClosePitch Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="showcase-visual">
              <div className="glow-mesh-center"></div>
              {/* Custom CSS Browser Frame Mockup */}
              <div className="browser-mockup-frame">
                <div className="browser-bar">
                  <div className="dots-row">
                    <span className="b-dot red"></span>
                    <span className="b-dot yellow"></span>
                    <span className="b-dot green"></span>
                  </div>
                  <span className="browser-url">closepitch.com/dashboard</span>
                </div>
                <div className="browser-mock-body">
                  <div className="mock-sidebar">
                    <span className="mock-logo">CP</span>
                    <div className="mock-nav-item active"></div>
                    <div className="mock-nav-item"></div>
                    <div className="mock-nav-item"></div>
                  </div>
                  <div className="mock-main">
                    <div className="mock-grid-row">
                      <div className="mock-box"></div>
                      <div className="mock-box"></div>
                      <div className="mock-box"></div>
                    </div>
                    <div className="mock-chart-box">
                      <div className="mock-chart-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="highlights-bar-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-stat-item reveal-on-scroll">
              <span className="num">4+ Years</span>
              <span className="lbl">Professional Experience</span>
            </div>
            <div className="highlight-stat-item reveal-on-scroll reveal-delay-1">
              <span className="num">✅ Production Apps</span>
              <span className="lbl">Built & Launched Live</span>
            </div>
            <div className="highlight-stat-item reveal-on-scroll reveal-delay-2">
              <span className="num">AI-Enabled SaaS</span>
              <span className="lbl">Utility & Context Integration</span>
            </div>
            <div className="highlight-stat-item reveal-on-scroll reveal-delay-3">
              <span className="num">Go Microservices</span>
              <span className="lbl">Robust REST & Caching APIs</span>
            </div>
            <div className="highlight-stat-item reveal-on-scroll reveal-delay-4">
              <span className="num">AWS & Cloud</span>
              <span className="lbl">CI/CD Pipelines & Server Ops</span>
            </div>
          </div>
        </div>
      </section>



      {/* Engineering Practices & Values */}
      <section className="practices-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-tag">ENGINEERING CREDIBILITY</span>
            <h2 className="section-title">Engineering Practices & Values</h2>
            <p className="section-subtitle">
              Founders and engineering leaders trust me because I don't write quick hacks. I design software built to scale and remain maintainable.
            </p>
          </div>

          <div className="practices-grid">
            <div className="practice-card card-glass reveal-on-scroll">
              <div className="practice-icon-wrapper blue">
                <GitBranch size={20} />
              </div>
              <h3>Git-based workflows</h3>
              <p>Branch strategies, standard naming conventions, and clean commits that simplify codebase audits.</p>
            </div>

            <div className="practice-card card-glass reveal-on-scroll reveal-delay-1">
              <div className="practice-icon-wrapper purple">
                <Zap size={20} />
              </div>
              <h3>Automated CI/CD</h3>
              <p>Continuous Integration setup with Codemagic or GitHub Actions, ensuring consistent and fast deployments.</p>
            </div>

            <div className="practice-card card-glass reveal-on-scroll reveal-delay-2">
              <div className="practice-icon-wrapper green">
                <ShieldCheck size={20} />
              </div>
              <h3>Quality Assurance</h3>
              <p>Writing automated widget, unit, and integration tests to catch regressions before they hit production.</p>
            </div>

            <div className="practice-card card-glass reveal-on-scroll reveal-delay-3">
              <div className="practice-icon-wrapper orange">
                <Cpu size={20} />
              </div>
              <h3>Performance Monitoring</h3>
              <p>Profiling frame rates, measuring network payloads, and optimizing asset bundling to keep load times under 2 seconds.</p>
            </div>

            <div className="practice-card card-glass reveal-on-scroll reveal-delay-4">
              <div className="practice-icon-wrapper blue">
                <Smartphone size={20} />
              </div>
              <h3>Clean Architecture</h3>
              <p>Structured BLoC and repository design patterns, separating business logic cleanly from UI components.</p>
            </div>

            <div className="practice-card card-glass reveal-on-scroll reveal-delay-5">
              <div className="practice-icon-wrapper pink">
                <Sparkles size={20} />
              </div>
              <h3>AI-first Feature Engineering</h3>
              <p>Building secure prompt layers and orchestrating models (Gemini/OpenAI) to deliver tangible product features.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT I DO</span>
            <h2 className="section-title">Value-Driven Engineering Offerings</h2>
            <p className="section-subtitle">
              How I help startups validate ideas, scale tech, and build reliable digital interfaces.
            </p>
          </div>

          <div className="services-grid-outcomes">
            <div className="service-value-card card-glass">
              <h3>MVP Development</h3>
              <p className="value-statement">Go from concept to production-ready app stores release in weeks.</p>
              <ul className="value-bullet-list">
                <li>Cross-platform Flutter build (iOS & Android)</li>
                <li>Firebase or Go/PostgreSQL backend integrations</li>
                <li>Essential analytics, notifications, and auth setup</li>
              </ul>
            </div>

            <div className="service-value-card card-glass">
              <h3>Product Modernization</h3>
              <p className="value-statement">Migrate, refactor, and stabilize legacy mobile architectures.</p>
              <ul className="value-bullet-list">
                <li>Upgrading old Flutter codebases and package dependencies</li>
                <li>Transitioning state management to clean BLoC/Cubit</li>
                <li>API payload schema aligning and refactoring</li>
              </ul>
            </div>

            <div className="service-value-card card-glass">
              <h3>Add Practical AI Capabilities</h3>
              <p className="value-statement">Build utility and context layers using modern LLM prompt engineering.</p>
              <ul className="value-bullet-list">
                <li>Gemini / OpenAI API pipelines integration</li>
                <li>RAG & localized device databases integrations</li>
                <li>Custom AI chat assistants and workflow automations</li>
              </ul>
            </div>

            <div className="service-value-card card-glass">
              <h3>Improve Performance & UX</h3>
              <p className="value-statement">Eliminate lag, frame drops, and latency issues.</p>
              <ul className="value-bullet-list">
                <li>API response caching (Redis / SQLite)</li>
                <li>Profiling widgets to solve layout rendering shifts</li>
                <li>Decreasing app startup latency and bundle sizes</li>
              </ul>
            </div>

            <div className="service-value-card card-glass">
              <h3>Ongoing Engineering Support</h3>
              <p className="value-statement">Long-term roadmap support and contract sprint execution.</p>
              <ul className="value-bullet-list">
                <li>20-40 hours per week sprint allocation</li>
                <li>Continuous deployments & version updates release</li>
                <li>Direct Slack and video sync collaborations</li>
              </ul>
            </div>
          </div>

          {/* Ways to Work Together */}
          <div className="ways-to-work-box card-glass m-t-40">
            <h3>Ways to Work Together</h3>
            <div className="engagement-models-grid">
              <div className="model-item">
                <h5>Project-based</h5>
                <p>Fixed-scope MVP builds with clear deliverables and timelines.</p>
              </div>
              <div className="model-item">
                <h5>Part-time retainer</h5>
                <p>Retaining my services for 20h/week to support team feature sprints.</p>
              </div>
              <div className="model-item">
                <h5>Technical Consulting</h5>
                <p>Feasibility assessments, code audits, and architectural mapping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-home-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">TRUST</span>
            <h2 className="section-title">What Colleagues & Clients Say</h2>
          </div>

          <div className="testimonials-carousel-wrapper">
            <div className="testimonial-card-slide">
              <div className="quote-mark">“</div>
              <p className="testimonial-text-large">
                {testimonials[activeSlide].quote}
              </p>
              <div className="testimonial-author-row">
                <div className="author-circle-avatar">
                  {testimonials[activeSlide].initials}
                </div>
                <div>
                  <h4>{testimonials[activeSlide].author}</h4>
                  <span>{testimonials[activeSlide].title}</span>
                </div>
              </div>
            </div>
            
            <div className="carousel-dot-nav">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`dot-indicator ${idx === activeSlide ? "active" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">COLLABORATION FAQ</span>
            <h2 className="section-title">Working Together FAQ</h2>
            <p className="section-subtitle">
              Everything you need to know about timelines, communications, timezones, and pricing before starting.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="faq-item card-glass">
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className={`arrow-icon ${isOpen ? "open" : ""}`} />
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div style={{ overflow: 'hidden' }}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Actions banner */}
      <section className="ctas-banner-section">
        <div className="container">
          <div className="ctas-grid">
            <div className="cta-option-card card-glass">
              <div className="cta-icon-wrapper">
                <Code size={22} className="text-blue" />
              </div>
              <h3>Need to build an MVP?</h3>
              <p>Turn your product requirements doc into a reliable, store-ready cross-platform application in weeks.</p>
              <Link href="/contact?intent=mvp" className="btn btn-primary btn-sm m-t-20">
                Book Discovery
              </Link>
            </div>

            <div className="cta-option-card card-glass">
              <div className="cta-icon-wrapper">
                <Smartphone size={22} className="text-purple" />
              </div>
              <h3>Modernizing an app?</h3>
              <p>Refactor legacy performance bottlenecks, upgrade dependencies, and clean your code architecture.</p>
              <Link href="/contact?intent=modernize" className="btn btn-outline btn-sm m-t-20">
                Let's Build It
              </Link>
            </div>

            <div className="cta-option-card card-glass">
              <div className="cta-icon-wrapper">
                <Sparkles size={22} className="text-green" />
              </div>
              <h3>Want to add AI features?</h3>
              <p>Create context utility layers, secure integrations with LLMs, and localized database RAG helpers.</p>
              <Link href="/contact?intent=ai" className="btn btn-outline btn-sm m-t-20">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Component Scoping styles */}
      <style jsx>{`
        .homepage-wrapper {
          padding-bottom: 80px;
        }

        /* Hero block */
        .hero-block {
          padding: 80px 0;
          overflow: hidden;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 60px;
        }
        .hero-main-content {
          z-index: 2;
        }
        .hero-pill-badge {
          display: inline-block;
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-blue-light);
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          padding: 6px 14px;
          border-radius: 30px;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .hero-heading-outcome {
          font-size: 54px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.04em;
        }
        .hero-subheading-outcome {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 520px;
        }
        .hero-buttons-row {
          display: flex;
          gap: 16px;
        }
        .hero-mockup-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 480px;
        }
        .glow-mesh-overlay {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(0,0,0,0) 80%);
          filter: blur(40px);
          z-index: 1;
        }
        .phone-isometric-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }
        .home-phone-center {
          transform: rotate(-5deg) translateY(-10px);
          box-shadow: 0 40px 80px -10px rgba(0,0,0,0.9), 0 0 30px rgba(37, 99, 235, 0.1);
        }

        /* Phone Mini app styling */
        .mini-app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mini-app-logo {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 700;
        }
        .mini-user-avatar {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        }
        .mini-app-hero {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mini-lbl {
          font-size: 7px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mini-chat-bubble {
          font-size: 9px;
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          border-radius: 6px;
          padding: 4px 6px;
          line-height: 1.3;
        }
        .mini-metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .mini-m-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 6px;
        }
        .mini-val {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
        }

        /* Highlights stats bar */
        .highlights-bar-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 24px 0;
        }
        .highlights-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .highlight-stat-item {
          display: flex;
          flex-direction: column;
        }
        .highlight-stat-item .num {
          font-family: var(--font-headings);
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .highlight-stat-item .lbl {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        /* Practices & Values */
        .practices-section {
          padding: 100px 0;
        }
        .practices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .practice-card {
          padding: 30px;
        }
        .practice-card:hover {
          border-color: var(--accent-blue-border);
          transform: translateY(-4px);
        }
        .practice-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .practice-icon-wrapper.blue { background: rgba(37, 99, 235, 0.1); color: var(--accent-blue-light); }
        .practice-icon-wrapper.purple { background: rgba(168, 85, 247, 0.1); color: var(--accent-purple); }
        .practice-icon-wrapper.green { background: rgba(16, 185, 129, 0.1); color: var(--accent-green); }
        .practice-icon-wrapper.orange { background: rgba(249, 115, 22, 0.1); color: #f97316; }
        .practice-icon-wrapper.pink { background: rgba(236, 72, 153, 0.1); color: #ec4899; }
        .practice-card h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }
        .practice-card p {
          font-size: 14px;
          line-height: 1.6;
        }

        /* Featured project layout */
        .featured-showcase-section {
          padding: 40px 0 100px;
        }
        .showcase-card-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          padding: 60px;
          align-items: center;
        }
        .showcase-tag {
          font-family: var(--font-headings);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent-blue);
          margin-bottom: 12px;
          display: block;
        }
        .showcase-title {
          font-size: 42px;
          margin-bottom: 20px;
        }
        .showcase-desc {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .outcome-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }
        .bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .showcase-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 340px;
        }
        .glow-mesh-center {
          position: absolute;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(37, 99, 235, 0.02) 60%, rgba(0,0,0,0) 80%);
          filter: blur(30px);
        }
        .browser-mockup-frame {
          width: 100%;
          max-width: 440px;
          height: 260px;
          background: #11141d;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          overflow: hidden;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }
        .browser-bar {
          height: 32px;
          background: #191e2b;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          padding: 0 12px;
        }
        .dots-row {
          display: flex;
          gap: 6px;
          margin-right: 20px;
        }
        .b-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .b-dot.red { background: #ef4444; }
        .b-dot.yellow { background: #f59e0b; }
        .b-dot.green { background: #10b981; }
        .browser-url {
          font-size: 10px;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 1px 12px;
          border-radius: 4px;
          flex-grow: 1;
          max-width: 240px;
          margin: 0 auto;
          text-align: center;
        }
        .browser-mock-body {
          flex-grow: 1;
          display: grid;
          grid-template-columns: 100px 1fr;
        }
        .mock-sidebar {
          background: #0b0e16;
          border-right: 1px solid var(--border-color);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mock-logo {
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .mock-nav-item {
          height: 8px;
          width: 80%;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 2px;
        }
        .mock-nav-item.active {
          background: var(--accent-blue-border);
        }
        .mock-main {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #0b0e14;
        }
        .mock-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .mock-box {
          height: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        .mock-chart-box {
          flex-grow: 1;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          position: relative;
          min-height: 80px;
        }
        .mock-chart-line {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 80%;
          height: 2px;
          background: var(--accent-blue-border);
        }

        /* Services Grid */
        .services-section {
          padding: 100px 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }
        .services-grid-outcomes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-value-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
        }
        .service-value-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .value-statement {
          font-size: 14px;
          font-weight: 500;
          color: var(--accent-blue-light);
          margin-bottom: 24px;
          line-height: 1.4;
        }
        .value-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }
        .value-bullet-list li {
          font-size: 13px;
          color: var(--text-secondary);
          position: relative;
          padding-left: 14px;
        }
        .value-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }
        .ways-to-work-box {
          padding: 40px;
          text-align: center;
        }
        .ways-to-work-box h3 {
          font-size: 22px;
          margin-bottom: 24px;
        }
        .engagement-models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .model-item h5 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #fff;
        }
        .model-item p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Testimonials Carousel */
        .testimonials-home-section {
          padding: 100px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .testimonials-carousel-wrapper {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .testimonial-card-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .quote-mark {
          font-size: 64px;
          font-family: Georgia, serif;
          color: var(--accent-blue-border);
          line-height: 1;
          height: 32px;
        }
        .testimonial-text-large {
          font-size: 20px;
          color: #fff;
          font-style: italic;
          line-height: 1.6;
        }
        .testimonial-author-row {
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          margin-top: 16px;
        }
        .author-circle-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 14px;
          color: #fff;
          border: 2px solid var(--bg-primary);
        }
        .testimonial-author-row h4 {
          font-size: 15px;
          font-weight: 600;
        }
        .testimonial-author-row span {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .carousel-dot-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }
        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-muted);
          border: none;
          cursor: pointer;
          transition: var(--transition-normal);
        }
        .dot-indicator.active {
          background: var(--accent-blue);
          width: 24px;
          border-radius: 4px;
        }

        /* FAQ block */
        .faq-section {
          padding: 100px 0;
        }
        .faq-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          padding: 0;
          overflow: hidden;
        }
        .faq-question {
          width: 100%;
          padding: 24px;
          background: none;
          border: none;
          color: #fff;
          font-family: var(--font-headings);
          font-size: 16px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }
        .faq-question:hover {
          color: var(--accent-blue-light);
        }
        .arrow-icon {
          transition: transform var(--transition-normal);
          color: var(--text-muted);
        }
        .arrow-icon.open {
          transform: rotate(180deg);
          color: var(--accent-blue-light);
        }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
        }
        .faq-answer p {
          padding: 0 24px 24px;
          font-size: 14px;
          line-height: 1.6;
        }

        /* CTAs Banner */
        .ctas-banner-section {
          padding: 40px 0 100px;
        }
        .ctas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cta-option-card {
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-option-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .cta-option-card p {
          font-size: 14px;
          line-height: 1.5;
        }
        .cta-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        /* Animations classes mapping */
        .animate-fade-up-1 { animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up-2 { animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; }
        .animate-fade-up-3 { animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .animate-fade-up-4 { animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards; opacity: 0; }
        .animate-fade-up-5 { animation: fadeUpIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards; opacity: 0; }

        @keyframes fadeUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Responsive Layouts override */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-subheading-outcome {
            margin: 0 auto 40px;
          }
          .hero-buttons-row {
            justify-content: center;
          }
          .hero-mockup-wrapper {
            height: auto;
            min-height: 460px;
            padding: 20px 0;
          }
          .showcase-card-layout {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 40px;
          }
          .services-grid-outcomes {
            grid-template-columns: 1fr;
          }
          .engagement-models-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ctas-grid {
            grid-template-columns: 1fr;
          }
          .practices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-heading-outcome {
            font-size: 38px;
          }
          .showcase-title {
            font-size: 32px;
          }
          .highlights-grid {
            justify-content: center;
          }
          .highlight-stat-item {
            flex: 1 1 40%;
            text-align: center;
          }
          .practices-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-heading-outcome {
            font-size: 30px;
          }
          .highlight-stat-item {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
