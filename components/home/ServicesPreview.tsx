import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";

const SERVICES_PREVIEW = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description:
      "Websites built around your business, with responsive layouts, strong performance, and a polished user experience.",
    price: "₹4,499+",
    href: "/services",
  },
  {
    number: "02",
    title: "WEB DESIGN",
    description:
      "Thoughtful interfaces and visual systems designed around your brand and audience.",
    price: "₹1,499+",
    href: "/services",
  },
  {
    number: "03",
    title: "LOGO DESIGN",
    description:
      "Simple, memorable visual identities that give your brand a distinct character.",
    price: "₹199+",
    href: "/services",
  },
  {
    number: "04",
    title: "PORTFOLIO DEVELOPMENT",
    description:
      "Personal portfolios designed to present your work, skills, and personality professionally.",
    price: "₹1,499+",
    href: "/services",
  },
];

export const ServicesPreview: React.FC = () => {
  return (
    <section
      className="w-full border-b border-[#E5E2E1] grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest"
      id="services"
    >
      {/* Left Column: Heading */}
      <div className="md:col-span-4 p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#E5E2E1]">
        <h2 className="font-sans font-semibold text-xs uppercase text-on-surface-variant sticky top-28 tracking-wider">
          Services
        </h2>
      </div>

      {/* Right Column: 2x2 Services Grid */}
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E2E1]">
        {/* Column 1: Items 01 & 03 */}
        <div className="flex flex-col divide-y divide-[#E5E2E1]">
          {[SERVICES_PREVIEW[0], SERVICES_PREVIEW[2]].map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="p-6 sm:p-8 lg:p-10 hover:bg-primary/5 transition-colors group flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-heading text-sm font-semibold text-primary">
                    {service.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
                <h3 className="font-heading text-lg md:text-xl text-on-surface uppercase mb-2 font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2E1]/60">
                <span className="font-sans text-xs text-on-surface-variant uppercase tracking-wider">
                  Starting from{" "}
                  <span className="font-heading text-sm text-on-surface font-semibold">
                    {service.price}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Column 2: Items 02 & 04 */}
        <div className="flex flex-col divide-y divide-[#E5E2E1]">
          {[SERVICES_PREVIEW[1], SERVICES_PREVIEW[3]].map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="p-6 sm:p-8 lg:p-10 hover:bg-primary/5 transition-colors group flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-heading text-sm font-semibold text-primary">
                    {service.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
                <h3 className="font-heading text-lg md:text-xl text-on-surface uppercase mb-2 font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5E2E1]/60">
                <span className="font-sans text-xs text-on-surface-variant uppercase tracking-wider">
                  Starting from{" "}
                  <span className="font-heading text-sm text-on-surface font-semibold">
                    {service.price}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
