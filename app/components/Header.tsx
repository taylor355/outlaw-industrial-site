"use client";

import { useState } from "react";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-brand-row">
          <a className="wordmark" href="#top" aria-label="Outlaw Industrial home" onClick={closeMenu}>
            <span>Outlaw</span>
            <span>Industrial</span>
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`header-menu ${isOpen ? "is-open" : ""}`} id="site-menu">
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+13076774232">
              307-677-4232
            </a>
            <a className="button button-outline" href="#contact" onClick={closeMenu}>
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
