import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import { ServiceItem } from "@/lib/sanity/fallbackData";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="flex flex-col bg-background p-6 sm:p-8 lg:p-10 h-full justify-between hover:bg-surface-container/20 transition-colors">
      <div>
        <div className="mb-6 flex justify-between items-center">
          <span className="font-heading text-sm font-semibold text-primary font-mono">
            {service.number}
          </span>
          <span className="font-sans text-xs text-primary font-semibold tracking-wider">
            {service.startingPrice}
          </span>
        </div>

        <div className="flex flex-col gap-2.5 mb-8">
          <h2 className="font-heading text-xl sm:text-2xl text-on-surface font-semibold tracking-tight">
            {service.title}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-sans font-semibold text-xs text-primary uppercase tracking-widest border-b border-[#E5E2E1] pb-2">
            What you get
          </h3>
          <ul className="flex flex-col gap-2 font-sans text-sm text-on-surface-variant mt-1">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className={item.includes("Update your website without coding") ? "font-semibold text-primary" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#E5E2E1] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="font-sans text-xs text-on-surface-variant">
          Starting <span className="font-heading text-sm text-on-surface font-semibold">{service.startingPrice}</span>
        </span>
        <Link
          href={`/contact?service=${service.slug}`}
          className="group inline-flex items-center gap-1.5 font-sans font-semibold text-xs uppercase tracking-wider text-primary hover:text-primary-container transition-colors"
        >
          <span>{service.ctaText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
