import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

export const CustomInquiry: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="w-full">
        <p className="font-sans text-xs text-on-surface-variant italic">
          * Starting prices are estimates. Final pricing depends on project scope, custom requirements, and timeline.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 sm:gap-6 bg-surface-container-low/80 p-6 sm:p-8 lg:p-10 border border-[#cdc5c2]">
        <span className="font-sans font-semibold text-xs text-primary uppercase tracking-widest">
          Need something different?
        </span>
        <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-on-surface font-semibold max-w-3xl leading-snug tracking-tight">
          Not every project fits into a standard package. Tell me what you&apos;re trying to build and we&apos;ll figure out the right tailored approach.
        </h2>
        <Link
          href="/contact"
          prefetch={true}
          className="group inline-flex items-center gap-2 font-sans font-medium text-xs text-on-primary bg-primary px-6 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 mt-2 uppercase tracking-wider"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
