import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full border-b border-[#cdc5c2] bg-background min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex flex-col justify-start items-start overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-16"
      aria-label="Hero Section"
    >
      <h1 className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-on-surface text-left tracking-tight leading-none select-none">
        Hey, there.
      </h1>
    </section>
  );
};
