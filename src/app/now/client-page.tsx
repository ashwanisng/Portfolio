"use client";

import Link from "next/link";
import { Clock, BookOpen, Sparkles, Code, Briefcase, ArrowLeft } from "lucide-react";

export default function ClientNowPage() {
  return (
    <div className="now-page-wrapper">
      <section className="now-hero">
        <div className="container">
          <span className="section-tag">NOW</span>
          <h1>What I'm focused on right now</h1>
          <p className="subtitle">
            This is a "now" page inspired by Derek Sivers. It details my current building, learning, and reading focus.
          </p>
          <span className="now-date-badge">
            <Clock size={12} />
            Last updated: July 2026
          </span>
        </div>
      </section>

      <section className="now-content-section">
        <div className="container now-grid">
          
          <div className="now-cards-col">
            <div className="now-card card-glass">
              <div className="now-icon-title">
                <Code size={18} className="text-blue" />
                <h3>Building</h3>
              </div>
              <p>
                Refactoring **ClosePitch** core Go microservices and enhancing its dynamic prompt assembly workflows to support context-aware custom pitch generations.
              </p>
            </div>

            <div className="now-card card-glass">
              <div className="now-icon-title">
                <Sparkles size={18} className="text-purple" />
                <h3>Learning & Exploring</h3>
              </div>
              <p>
                Exploring **Model Context Protocol (MCP)** integrations for AI developer environments, alongside local vector embedding pipelines for retrieval augmented generation (RAG) devices.
              </p>
            </div>

            <div className="now-card card-glass">
              <div className="now-icon-title">
                <BookOpen size={18} className="text-green" />
                <h3>Reading</h3>
              </div>
              <p>
                Currently reading **"Designing Data-Intensive Applications"** by Martin Kleppmann to deepen my understanding of transaction isolation boundaries and message broker configurations under scale.
              </p>
            </div>

            <div className="now-card card-glass">
              <div className="now-icon-title">
                <Briefcase size={18} className="text-orange" />
                <h3>Availability</h3>
              </div>
              <p>
                🟢 **Available for Freelance Projects.** I am accepting inquiries for fixed-scope MVP builds and technical Retainer contracts starting in **August 2026**.
              </p>
            </div>
          </div>

          <div className="now-sidebar-cta card-glass">
            <h3>Interested in collaborating?</h3>
            <p>If you have an MVP idea or need assistance modernizing an existing codebase, let's connect and map out your requirements.</p>
            <Link href="/contact" className="btn btn-primary btn-full m-t-20">
              Get in Touch
            </Link>
          </div>

        </div>
      </section>

      <style jsx>{`
        .now-page-wrapper {
          padding-bottom: 80px;
        }

        /* Hero */
        .now-hero {
          padding: 80px 0 40px;
          border-bottom: 1px solid var(--border-color);
        }
        .now-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .now-hero .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 24px;
        }
        .now-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 4px;
        }

        /* Content Grid */
        .now-content-section {
          padding: 60px 0;
        }
        .now-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 60px;
          align-items: start;
        }
        .now-cards-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .now-card {
          padding: 30px;
        }
        .now-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .now-icon-title h3 {
          font-size: 18px;
          color: #fff;
        }
        .now-card p {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Sidebar */
        .now-sidebar-cta {
          padding: 40px 30px;
          text-align: center;
        }
        .now-sidebar-cta h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }
        .now-sidebar-cta p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .now-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .now-hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
