import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

interface ServiceColumn {
  number: string;
  title: string;
  price: string;
  description: string;
  href: string;
}

const SERVICES: ServiceColumn[] = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    price: "₹4,499+",
    description:
      "Modern responsive websites built for performance, usability, SEO, custom functionality, and future growth. Full-stack and AI integrations can be added when required.",
    href: "/services",
  },
  {
    number: "02",
    title: "WEB DESIGN",
    price: "₹1,499+",
    description:
      "Clean, modern interface design focused on clarity, visual hierarchy, responsive layouts, and a polished user experience.",
    href: "/services",
  },
  {
    number: "03",
    title: "LOGO DESIGN",
    price: "₹199+",
    description:
      "Simple, distinctive visual identities designed to give businesses a clean and memorable brand presence.",
    href: "/services",
  },
  {
    number: "04",
    title: "PORTFOLIO DEVELOPMENT",
    price: "₹1,499+",
    description:
      "Personal portfolios designed and developed to present your work, skills, and identity professionally online.",
    href: "/services",
  },
];

export const ServicesPreview: React.FC = () => {
  return (
    <section
      className="w-full border-b border-[#cdc5c2] bg-surface-container-lowest"
      id="services"
    >
      {/* Editorial Section Header - Centered Warm Orange */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-[#cdc5c2] flex justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          WHAT I CAN HELP YOU WITH
        </h2>
      </div>

      {/* 4-Column Continuous Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 divide-[#cdc5c2]">
        {SERVICES.map((service, idx) => (
          <Link
            key={service.number}
            href={service.href}
            prefetch={true}
            className={`group p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-primary/[0.03] transition-colors duration-200 min-h-[380px] lg:min-h-[440px] ${
              idx !== 0 ? "lg:border-l border-[#cdc5c2]" : ""
            } ${idx % 2 === 1 ? "md:border-l lg:border-l-0" : ""} ${
              idx >= 2 ? "md:border-t lg:border-t-0" : ""
            }`}
          >
            {/* Top / Main Column Content */}
            <div className="flex flex-col flex-grow">
              {/* Large Subtle Editorial Number */}
              <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-on-surface/25 select-none tracking-tighter leading-none mb-6 group-hover:text-primary/40 transition-colors duration-200">
                {service.number}
              </span>

              {/* Service Name */}
              <h3 className="font-heading text-lg sm:text-xl text-on-surface uppercase font-semibold tracking-tight mb-4 leading-snug group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>

              {/* Client-Focused Description */}
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Footer: Price & Arrow */}
            <div className="mt-8 pt-5 border-t border-[#cdc5c2]/70 flex items-end justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-sans text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">
                  Starting at
                </span>
                <span className="font-heading text-base font-semibold text-on-surface">
                  {service.price}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#cdc5c2] flex items-center justify-center text-on-surface-variant group-hover:border-primary group-hover:text-primary transition-all duration-200 shrink-0 mb-0.5">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
