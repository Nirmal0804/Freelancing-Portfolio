import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full border-b border-[#cdc5c2] bg-background min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 lg:py-32"
      aria-label="Hero Section"
    >
      <h1 className="font-serif italic font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-on-surface text-center tracking-tight leading-none select-none">
        Hey, there.
      </h1>
    </section>
  );
};
