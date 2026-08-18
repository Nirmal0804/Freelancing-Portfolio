"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="bg-background/95 backdrop-blur-md border-b border-[#E5E2E1] w-full top-0 sticky z-50">
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-background border-t border-[#E5E2E1] flex flex-col justify-between p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-5 pt-4 font-sans text-base">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "py-3 border-b border-[#E5E2E1]/60 transition-colors flex items-center justify-between font-medium",
                    isActive ? "text-primary font-semibold" : "text-on-surface hover:text-primary"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 pb-10 flex flex-col gap-4">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-sans font-medium text-xs uppercase tracking-wider py-3.5 border border-primary hover:bg-transparent hover:text-primary transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center font-sans text-xs text-on-surface-variant pt-2">
              <a href="mailto:craftedweb@zohomail.in" className="hover:text-primary transition-colors">
                craftedweb@zohomail.in
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
