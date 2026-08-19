import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Github } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-highest border-t border-[#cdc5c2] w-full mt-auto">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#cdc5c2]">
        {/* Column 1: Brand: [CW LOGO] + Crafted Web */}
        <div className="md:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
          <Link
            href="/"
            prefetch={true}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none w-fit"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
              <Image
                src="/images/cw-logo.png"
                alt="CW Logo"
                fill
                sizes="(max-width: 640px) 36px, 40px"
                className="object-contain"
              />
            </div>
            <span className="font-heading text-xl font-semibold text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors">
              Crafted Web
            </span>
          </Link>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Independent digital studio focusing on premium, editorial web experiences.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
          <h5 className="font-sans font-semibold text-xs uppercase text-on-surface-variant tracking-wider">
            Navigation
          </h5>
          <nav className="flex flex-col gap-2.5 font-sans text-sm">
            <Link href="/" prefetch={true} className="text-on-surface hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" prefetch={true} className="text-on-surface hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/work" prefetch={true} className="text-on-surface hover:text-primary transition-colors">
              Works
            </Link>
            <Link href="/contact" prefetch={true} className="text-on-surface hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3: Social */}
        <div className="md:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
          <h5 className="font-sans font-semibold text-xs uppercase text-on-surface-variant tracking-wider">
            Social
          </h5>
          <div className="flex items-center gap-3.5 pt-1">
            <a
              href="https://www.instagram.com/crafted_webs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#cdc5c2] flex items-center justify-center text-on-surface hover:border-primary hover:text-primary hover:bg-primary/[0.04] hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nirmal-p-44645a326/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-[#cdc5c2] flex items-center justify-center text-on-surface hover:border-primary hover:text-primary hover:bg-primary/[0.04] hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://github.com/Nirmal0804"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-[#cdc5c2] flex items-center justify-center text-on-surface hover:border-primary hover:text-primary hover:bg-primary/[0.04] hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="md:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
          <h5 className="font-sans font-semibold text-xs uppercase text-on-surface-variant tracking-wider">
            Contact
          </h5>
          <div className="flex flex-col gap-2.5 font-sans text-sm text-on-surface">
            <a
              href="mailto:craftedweb@zohomail.in"
              className="hover:text-primary transition-colors break-all"
            >
              craftedweb@zohomail.in
            </a>
            <a
              href="tel:+916385626810"
              className="hover:text-primary transition-colors"
            >
              +91 6385626810
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#cdc5c2] px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 font-sans text-xs text-on-surface-variant max-w-[1360px] mx-auto w-full">
        <span>© 2026 Crafted Web</span>
        <a
          href="https://github.com/Nirmal0804"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-primary transition-colors group"
        >
          <span>Crafted by Nirmal</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  );
};
