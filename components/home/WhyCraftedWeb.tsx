import React from "react";

const PILLARS = [
  {
    number: "01",
    title: "MODERN UI",
    description:
      "Editorial, minimalist design language that sets your brand apart with clean typography and intentional layout.",
  },
  {
    number: "02",
    title: "RESPONSIVE BY DEFAULT",
    description:
      "Engineered from the ground up to render flawlessly across desktop, tablet, and mobile screens.",
  },
  {
    number: "03",
    title: "HIGH PERFORMANCE",
    description:
      "Optimized assets, minimal runtime overhead, and fast load times that convert visitors into clients.",
  },
  {
    number: "04",
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Semantic HTML, structured metadata, and SEO best practices built right into every page.",
  },
  {
    number: "05",
    title: "AI INTEGRATION",
    description:
      "Modern AI workflows and intelligent tooling to accelerate delivery without sacrificing craftsmanship.",
  },
  {
    number: "06",
    title: "FULL-STACK CAPABILITY",
    description:
      "From UI design systems to serverless backends, CMS dashboards, and reliable deployments.",
  },
];

export const WhyCraftedWeb: React.FC = () => {
  return (
    <section
      className="w-full border-b border-[#E5E2E1] bg-surface-container-lowest"
      id="why-crafted-web"
    >
      {/* Centered Warm Orange Section Header */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-[#E5E2E1] flex justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          WHY CRAFTED WEB
        </h2>
      </div>

      {/* 3-Column × 2-Row Continuous Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-[#E5E2E1]">
        {PILLARS.map((pillar, idx) => (
          <div
            key={pillar.number}
            className={`group p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-primary/[0.03] transition-colors duration-200 min-h-[220px] lg:min-h-[250px] ${
              idx % 3 !== 0 ? "lg:border-l border-[#E5E2E1]" : ""
            } ${idx >= 3 ? "lg:border-t border-[#E5E2E1]" : ""} ${
              idx % 2 === 1 ? "md:border-l lg:border-l-0" : ""
            } ${idx >= 2 ? "md:border-t lg:border-t-0" : ""}`}
          >
            <div>
              <span className="font-heading text-sm font-semibold text-primary block mb-2 group-hover:text-primary transition-colors">
                {pillar.number}
              </span>
              <h3 className="font-heading text-base md:text-lg text-on-surface uppercase font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
