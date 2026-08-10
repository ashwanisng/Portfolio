"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Thinking", href: "/thinking" },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">
          <Link href="/" className="brand-mark" aria-label="Ashwani Singh home">
            <span>AS</span>
            <strong>Ashwani Singh</strong>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="header-cta">
              Book a Call
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <button
              className="menu-button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="mobile-cta" onClick={() => setIsOpen(false)}>
            Book a Discovery Call
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>

      <style jsx global>{`
        .site-header {
          background: rgba(7, 8, 8, 0.78);
          border-bottom: 1px solid transparent;
          height: var(--header-height);
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
          transition: background 180ms ease, border-color 180ms ease, height 180ms ease;
          z-index: 100;
        }

        .site-header.scrolled {
          background: rgba(7, 8, 8, 0.92);
          border-bottom-color: var(--border-color);
          height: 64px;
        }

        .site-header-inner {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: space-between;
          margin: 0 auto;
          max-width: var(--max-width);
          padding: 0 32px;
        }

        .brand-mark {
          align-items: center;
          color: #fff;
          display: inline-flex;
          gap: 10px;
        }

        .brand-mark span {
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--accent-blue-light);
          display: inline-flex;
          font-size: 12px;
          font-weight: 800;
          height: 30px;
          justify-content: center;
          width: 30px;
        }

        .brand-mark strong {
          font-size: 15px;
          font-weight: 650;
          letter-spacing: -0.01em;
        }

        .desktop-nav {
          align-items: center;
          display: flex;
          gap: 24px;
        }

        .desktop-nav a {
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 550;
        }

        .desktop-nav a:hover,
        .desktop-nav a.active {
          color: #fff;
        }

        .header-actions {
          align-items: center;
          display: flex;
          gap: 12px;
        }

        .header-cta {
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          color: #fff;
          display: inline-flex;
          font-size: 14px;
          font-weight: 650;
          gap: 7px;
          padding: 9px 14px;
        }

        .header-cta:hover {
          border-color: rgba(34,211,238,0.35);
          color: var(--accent-blue-light);
        }

        .menu-button {
          align-items: center;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          display: none;
          height: 42px;
          justify-content: center;
          width: 42px;
        }

        .mobile-menu {
          background: rgba(7, 8, 8, 0.98);
          border-bottom: 1px solid var(--border-color);
          left: 0;
          opacity: 0;
          padding: 86px 24px 28px;
          pointer-events: none;
          position: fixed;
          right: 0;
          top: 0;
          transform: translateY(-10px);
          transition: opacity 180ms ease, transform 180ms ease;
          z-index: 90;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .mobile-menu nav {
          display: grid;
          gap: 6px;
          margin: 0 auto;
          max-width: var(--max-width);
        }

        .mobile-menu a {
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 24px;
          font-weight: 600;
          padding: 16px 0;
        }

        .mobile-menu a.active,
        .mobile-menu a:hover {
          color: #fff;
        }

        .mobile-menu .mobile-cta {
          align-items: center;
          border: 1px solid rgba(34,211,238,0.24);
          color: #fff;
          display: inline-flex;
          font-size: 16px;
          gap: 8px;
          justify-content: center;
          margin-top: 18px;
          padding: 14px 18px;
        }

        @media (max-width: 860px) {
          .desktop-nav,
          .header-cta {
            display: none;
          }

          .menu-button {
            display: inline-flex;
          }

          .site-header-inner {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
