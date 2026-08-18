import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

export const CtaSection: React.FC = () => {
  return (
    <section
      className="w-full border-t border-[#E5E2E1] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background"
      id="contact"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
        <span className="font-sans font-semibold text-xs uppercase tracking-widest text-on-surface-variant">
          Have a project in mind?
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-on-surface font-semibold tracking-tight uppercase leading-tight">
          LET&apos;S CRAFT SOMETHING GREAT.
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-primary text-on-primary font-sans font-medium text-xs uppercase tracking-wider px-7 py-3.5 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 mt-2"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
