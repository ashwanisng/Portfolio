"use client";

import { useState } from "react";
import { Folder, Compass, Cpu, Code, ArrowUpRight } from "lucide-react";

export default function ClientLabsPage() {
  const explorations = [
    {
      title: "flutter_doctor_ai Package",
      category: "Pub Package",
      tech: "Flutter, Dart, AI (Gemini/OpenAI)",
      description: "An open-source Flutter command-line tool and package that automatically scans your codebase for compilation warnings, lint issues, and runtime crashes to suggest quick-fixes using AI.",
      outcomes: "Published package on pub.dev helping developers automate syntax fixing and dependency resolution.",
      link: "https://pub.dev/packages/flutter_doctor_ai"
    },
    {
      title: "Flutter-Starter-Bloc Template",
      category: "Open Source",
      tech: "Flutter, Dart, BLoC, Clean Architecture",
      description: "A production-ready starter template repository built on Flutter using the BLoC pattern, custom dio networking client, multi-flavor environment configurations, and strict repository boundaries.",
      outcomes: "Reduces setup time for standard enterprise-grade Flutter apps by 80%.",
      link: "https://github.com/ashwanisng/Flutter-Starter-Bloc"
    },
    {
      title: "Animated-Profile Flutter App",
      category: "Open Source",
      tech: "Flutter, Dart, Figma",
      description: "An animated Flutter profile application demonstrating advanced custom tween transitions, nested Hero animations, and pixel-perfect design translation from Figma.",
      outcomes: "10 stars and 8 forks on GitHub; used as an interactive widget benchmark.",
      link: "https://github.com/ashwanisng/Animated-Profile"
    },
    {
      title: "barview-android UI Library",
      category: "Open Source",
      tech: "Java, Android UI SDK",
      description: "A native Android UI library that facilitates representation of categorical data in the form of interesting and dynamic layout bars.",
      outcomes: "Fully operational native Android SDK integration.",
      link: "https://github.com/ashwanisng/barview-android"
    },
    {
      title: "Bitcoin-Ticker-App",
      category: "Personal Projects",
      tech: "Flutter, Dart, REST APIs",
      description: "A Flutter application that consumes REST endpoints to keep users updated on bitcoin exchange rates across global currencies.",
      outcomes: "Demonstrated real-time data fetching, currency selectors, and offline fallbacks.",
      link: "https://github.com/ashwanisng/Bitcoin-Ticker-App"
    },
    {
      title: "address_search_field Package",
      category: "Contributions",
      tech: "Flutter, Dart, Google Maps",
      description: "Contributed enhancements to an address search autocomplete field that helps fetch directions between two or more geocoordinates in Flutter apps.",
      outcomes: "Improved map integration accuracy and reduced autocomplete latency.",
      link: "https://github.com/ashwanisng/address_search_field"
    }
  ];

  return (
    <div className="labs-page-wrapper">
      <section className="labs-hero">
        <div className="container">
          <span className="section-tag">LABS</span>
          <h1>Experiments & Technical Explorations</h1>
          <p className="subtitle">
            A digital playground for AI prototypes, open source contributions, side projects, and performance benchmarks.
          </p>
        </div>
      </section>

      <section className="labs-grid-section">
        <div className="container labs-grid">
          {explorations.map((item, idx) => (
            <div key={idx} className="lab-item-card card-glass">
              <div className="lab-header">
                <span className="lab-badge">{item.category}</span>
                <span className="lab-tech">{item.tech}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <div className="lab-outcomes-block">
                <strong>Exploration Outcome:</strong>
                <p>{item.outcomes}</p>
              </div>

              <div className="lab-footer-row m-t-20">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="lab-link">
                  <Code size={14} />
                  <span>Explore Repository</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .labs-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .labs-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .labs-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .labs-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* Grid */
        .labs-grid-section {
          padding: 60px 0;
        }
        .labs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .lab-item-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        .lab-item-card:hover {
          border-color: var(--accent-blue-border);
          transform: translateY(-4px);
        }
        .lab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          font-size: 11px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .lab-badge {
          font-family: var(--font-headings);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-blue-light);
          background: var(--accent-blue-glow);
          border: 1px solid var(--accent-blue-border);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .lab-tech {
          color: var(--text-muted);
        }
        .lab-item-card h3 {
          font-size: 18px;
          color: #fff;
          margin-bottom: 12px;
        }
        .lab-item-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .lab-outcomes-block {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: 8px;
          margin-top: auto;
        }
        .lab-outcomes-block strong {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fff;
          margin-bottom: 4px;
        }
        .lab-outcomes-block p {
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 0;
        }
        .lab-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        .lab-link:hover {
          color: var(--accent-blue-light);
        }

        @media (max-width: 768px) {
          .labs-grid {
            grid-template-columns: 1fr;
          }
          .labs-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
