import React from "react";

const STEPS = [
  { number: "01", name: "Discover" },
  { number: "02", name: "Design" },
  { number: "03", name: "Build" },
  { number: "04", name: "Refine" },
  { number: "05", name: "Launch" },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full border-t border-b border-[#cdc5c2] grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest" id="process">
      <div className="md:col-span-12 p-6 sm:p-8 lg:p-10 border-b border-[#cdc5c2]">
        <h2 className="font-sans font-semibold text-xs uppercase text-on-surface-variant tracking-wider">
          The Process
        </h2>
      </div>
      <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#cdc5c2]">
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            className={`p-6 sm:p-8 hover:bg-surface-container-low transition-colors ${
              idx % 2 === 0 ? "border-r sm:border-r-0 border-[#cdc5c2]" : ""
            } ${idx < 4 ? "border-b lg:border-b-0 border-[#cdc5c2]" : ""}`}
          >
            <span className="font-sans text-xs text-primary block mb-2 font-mono">
              {step.number}
            </span>
            <h4 className="font-heading text-base md:text-lg text-on-surface font-semibold">
              {step.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
