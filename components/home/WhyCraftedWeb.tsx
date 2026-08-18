import React from "react";

const PILLARS = [
  {
    number: "01",
    title: "Modern UI",
    description:
      "Editorial, minimalist design language that sets your brand apart with clean typography and intentional layout.",
  },
  {
    number: "02",
    title: "Responsive by Default",
    description:
      "Engineered from the ground up to render flawlessly across desktop, tablet, and mobile screens.",
  },
  {
    number: "03",
    title: "High Performance",
    description:
      "Optimized assets, minimal runtime overhead, and fast load times that convert visitors into clients.",
  },
  {
    number: "04",
    title: "Search Engine Optimization",
    description:
      "Semantic HTML, structured metadata, and SEO best practices built right into every page.",
  },
  {
    number: "05",
    title: "AI Integration",
    description:
      "Modern AI workflows and intelligent tooling to accelerate delivery without sacrificing craftsmanship.",
  },
  {
    number: "06",
    title: "Full-Stack Capability",
    description:
      "From UI design systems to serverless backends, CMS dashboards, and reliable deployments.",
  },
];

export const WhyCraftedWeb: React.FC = () => {
  return (
    <section className="w-full border-b border-[#E5E2E1] bg-surface-container-highest">
      <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E5E2E1]">
        <h2 className="font-sans font-semibold text-xs uppercase text-on-surface-variant tracking-wider">
          Why Crafted Web
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-[#E5E2E1]">
        {PILLARS.map((pillar, idx) => (
          <div
            key={pillar.number}
            className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px] bg-surface-container-highest hover:bg-surface-container transition-colors ${
              idx % 3 !== 2 ? "lg:border-r border-[#E5E2E1]" : ""
            } ${idx < 3 ? "lg:border-b border-[#E5E2E1]" : ""} ${
              idx % 2 === 0 ? "sm:border-r lg:border-r-0" : ""
            } ${idx < 4 ? "sm:border-b lg:border-b-0" : ""}`}
          >
            <div>
              <span className="font-heading text-sm font-semibold text-primary block mb-2">
                {pillar.number}
              </span>
              <h3 className="font-heading text-base md:text-lg text-on-surface uppercase font-semibold tracking-tight mb-2">
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
