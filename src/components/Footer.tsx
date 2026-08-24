import Link from "next/link";
import { Mail } from "lucide-react";
import availability from "../config/availability.json";

export default function Footer() {
  const isAvailable = availability.status === "available";

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Availability Banner */}
        {availability.showBanner && (
          <div className="availability-banner">
            <span className={`status-indicator ${isAvailable ? "available" : ""}`}></span>
            <span className="availability-text">
              {availability.text} — Next slot: <strong className="slot-date">{availability.nextSlot}</strong>
            </span>
            <Link href="/contact" className="availability-link">
              Discuss Your Project &rarr;
            </Link>
          </div>
        )}

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-brand">
              <span className="logo-badge">AS</span>
              <span className="logo-text">Ashwani Singh</span>
            </Link>
            <p className="footer-desc">
              Mobile Product Engineer building production-grade mobile applications and scalable digital solutions for startups globally.
            </p>
            <div className="footer-meta-info">
              <div className="meta-row">
                <span className="meta-lbl">Location:</span>
                <span className="meta-val">Delhi NCR, India</span>
              </div>
              <div className="meta-row">
                <span className="meta-lbl">Timezone:</span>
                <span className="meta-val">Europe / UAE / US overlap alignment</span>
              </div>
              <div className="meta-row">
                <span className="availability-badge-footer">Open to remote contracts</span>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4>Pages</h4>
              <Link href="/">Home</Link>
              <Link href="/projects">Selected Work</Link>
              <Link href="/about">About Me</Link>
              <Link href="/services">Services</Link>
            </div>

            <div className="footer-links-col">
              <h4>Resources</h4>
              <Link href="/process">My Process</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/now">Now Page</Link>
              <Link href="/labs">Labs</Link>
            </div>

            <div className="footer-links-col">
              <h4>Contact</h4>
              <a href="mailto:ashwanicena5@gmail.com">Email</a>
              <a href="https://linkedin.com/in/ashwanisng" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/ashwanisng" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://medium.com/@ashwanisng" target="_blank" rel="noopener noreferrer">Medium</a>
              <Link href="/resume">Resume</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Ashwani Kumar Singh. All rights reserved.
          </p>
          <div className="footer-social-row">
            <a href="mailto:ashwanicena5@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/ashwanisng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/ashwanisng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://medium.com/@ashwanisng" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="medium-footer-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ verticalAlign: 'middle', opacity: 0.8 }}>
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.24-.31 5.86-.7 5.86s-.7-2.62-.7-5.86.31-5.86.7-5.86.7 2.62.7 5.86z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
