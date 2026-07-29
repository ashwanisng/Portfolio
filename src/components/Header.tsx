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
              <X size={22} />
            </button>
          </div>
          <nav className="mobile-drawer-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`mobile-drawer-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="/contact"
              className="btn btn-primary m-t-20"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
              <ArrowUpRight className="icon icon-xs" />
            </a>
          </nav>
        </div>
      </div>

      <style jsx global>{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(3, 2, 8, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          z-index: 100;
          transition: var(--transition-normal);
        }
        .header-nav.scrolled {
          height: 64px;
          background: rgba(3, 2, 8, 0.9);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
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
          background: var(--bg-primary);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-nav-drawer.open {
          right: 0;
        }
        .mobile-drawer-inner {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
          margin-bottom: 30px;
        }
        .mobile-navbar-close {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .mobile-drawer-nav {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-drawer-link {
          font-family: var(--font-headings);
          font-size: 20px;
          font-weight: 500;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }
        .mobile-drawer-link:hover, .mobile-drawer-link.active {
          color: #fff;
          border-color: var(--accent-blue);
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
