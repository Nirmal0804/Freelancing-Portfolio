"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#cdc5c2] w-full top-0 sticky z-50">
      <div className="max-w-[1360px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 h-20">
        {/* Brand */}
        <Link
          href="/"
          className="font-heading text-xl md:text-2xl font-semibold text-on-surface hover:text-primary transition-colors duration-200 tracking-tight uppercase"
        >
          Crafted Web
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors duration-200 py-1 font-medium",
                  isActive
                    ? "text-primary border-b-2 border-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-primary text-on-primary font-sans font-medium text-xs uppercase tracking-wider px-5 py-2.5 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 active:scale-[0.98]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Right Slide-Over Drawer Menu (Portaled to body to escape sticky nav stacking context) */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999]">
          {/* Heavily Blurred & Darkened Full Page Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* 100% Solid 75vw Slide-Over Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[320px] bg-[#fcf9f8] border-l border-[#cdc5c2] shadow-2xl z-[9999] flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#cdc5c2]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-base sm:text-lg font-semibold text-on-surface uppercase tracking-tight hover:text-primary transition-colors"
                >
                  Crafted Web
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-5 pt-8 font-heading text-base">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "transition-colors font-semibold uppercase tracking-wider flex items-center justify-between py-1",
                        isActive ? "text-primary font-bold" : "text-on-surface hover:text-primary"
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-[#cdc5c2] flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-on-surface text-[#fcf9f8] font-sans font-medium text-xs uppercase tracking-wider py-3.5 border border-on-surface hover:bg-primary hover:border-primary hover:text-white transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex flex-col gap-1 text-center font-sans text-xs text-on-surface-variant pt-1">
                <a href="tel:+916385626810" className="hover:text-primary transition-colors">
                  +91 6385626810
                </a>
                <a href="mailto:craftedweb@zohomail.in" className="hover:text-primary transition-colors">
                  craftedweb@zohomail.in
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};
