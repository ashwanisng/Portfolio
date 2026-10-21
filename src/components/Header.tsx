"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="header-nav-container">
          <Link href="/" className="logo-brand">
            <span className="logo-badge">AS</span>
            <span className="logo-text">Ashwani Singh</span>
          </Link>

          <nav className="desktop-navbar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="header-nav-actions">
            <a
              href="/contact"
              className="btn btn-outline btn-sm desktop-only-btn"
            >
              Book a Call
              <ArrowUpRight className="icon icon-xs" />
            </a>
            <button
              className="mobile-navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-glow-orb"></div>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <Link href="/" className="logo-brand" onClick={() => setIsOpen(false)}>
              <span className="logo-badge">AS</span>
              <span className="logo-text">Ashwani Singh</span>
            </Link>
            <button
              className="mobile-navbar-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="mobile-drawer-nav">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`mobile-drawer-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="drawer-link-num">0{idx + 1}</span>
                  <span className="drawer-link-txt">{link.name}</span>
                  {isActive && <span className="drawer-link-dot"></span>}
                </Link>
              );
            })}
            <a
              href="/contact"
              className="btn btn-primary m-t-20 mobile-drawer-cta"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
              <ArrowUpRight size={16} />
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <div className="drawer-status-badge">
              <span className="status-dot"></span>
              <span>Available for contracts</span>
            </div>
            <div className="drawer-socials">
              <a href="https://github.com/ashwanisng" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://linkedin.com/in/ashwanisng" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:ashwanicena5@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(9, 9, 11, 0.72);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          z-index: 100;
          transition: var(--transition-normal);
        }
        .header-nav.scrolled {
          height: 64px;
          background: rgba(9, 9, 11, 0.9);
          box-shadow: none;
        }
        .header-nav-container {
          max-width: var(--max-width);
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
        }
        .logo-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 16px;
          color: #fff;
        }
        .logo-badge {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border: 1px solid var(--accent-blue-border);
          border-radius: 6px;
          padding: 2px 6px;
          font-size: 12px;
          font-weight: 700;
        }
        .logo-text {
          letter-spacing: -0.02em;
        }
        .desktop-navbar {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .navbar-link {
          font-family: var(--font-headings);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          position: relative;
          padding: 4px 0;
        }
        .navbar-link:hover, .navbar-link.active {
          color: #fff;
        }
        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-blue);
          transition: var(--transition-normal);
        }
        .navbar-link:hover::after, .navbar-link.active::after {
          width: 100%;
        }
        .header-nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .mobile-navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 4px;
        }
        .desktop-only-btn {
          display: inline-flex;
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(9, 9, 11, 0.97);
          backdrop-filter: blur(20px);
          z-index: 1000;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .mobile-nav-drawer.open {
          right: 0;
        }
        .drawer-glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(198, 242, 94, 0.05) 0%, transparent 70%);
          bottom: -50px;
          left: -50px;
          filter: blur(40px);
          pointer-events: none;
        }
        .mobile-drawer-inner {
          padding: 24px 24px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }
        .mobile-navbar-close {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }
        .mobile-drawer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: auto 0;
        }
        .mobile-drawer-link {
          font-family: var(--font-headings);
          font-size: 26px;
          font-weight: 600;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 0;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
        }
        .mobile-nav-drawer.open .mobile-drawer-link {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(1) { transition-delay: 0.05s; }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(2) { transition-delay: 0.1s; }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(3) { transition-delay: 0.15s; }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(4) { transition-delay: 0.2s; }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(5) { transition-delay: 0.25s; }
        .mobile-nav-drawer.open .mobile-drawer-link:nth-child(6) { transition-delay: 0.3s; }
        .mobile-nav-drawer.open .mobile-drawer-cta {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.35s;
        }

        .mobile-drawer-link:hover, .mobile-drawer-link.active {
          color: #fff;
        }
        .drawer-link-num {
          font-family: monospace;
          font-size: 13px;
          color: var(--accent-blue-light);
          opacity: 0.7;
          width: 24px;
        }
        .drawer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
        }
        .mobile-drawer-cta {
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .drawer-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: #10b981;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .drawer-status-badge .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        .drawer-socials {
          display: flex;
          gap: 20px;
        }
        .drawer-socials a {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .drawer-socials a:hover {
          color: #fff;
        }

        @media (max-width: 1024px) {
          .desktop-navbar {
            display: none;
          }
          .mobile-navbar-toggle {
            display: block;
          }
          .desktop-only-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
