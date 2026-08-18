import React from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full border-b border-[#cdc5c2] bg-background min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 pb-8 sm:pb-12"
      aria-label="Hero Section"
    >
      {/* Subtle Warm Ambient Glow behind the central portrait */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] lg:w-[620px] h-[320px] sm:h-[480px] lg:h-[620px] bg-[#f8e7dc]/50 rounded-full blur-3xl z-0"
        aria-hidden="true"
      />

      {/* 1. TOP GREETING (Background Layer z-10) */}
      <div className="w-full flex justify-center items-center pt-2 sm:pt-4 z-10">
        <h1 className="font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-on-surface text-center tracking-tight leading-none select-none">
          Hey, there.
        </h1>
      </div>

      {/* Central Portrait Cutout (Layer z-20 above 'Hey, there.' text) */}
      <div className="absolute inset-x-0 bottom-0 top-12 sm:top-14 lg:top-10 mx-auto w-full max-w-[340px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[720px] xl:max-w-[800px] flex items-end justify-center pointer-events-none z-20">
        <div className="relative w-full h-[82%] sm:h-[88%] lg:h-[94%] flex items-end justify-center">
          <Image
            src="/images/nirmal-hero-cutout.png"
            alt="Nirmal — Founder & Developer at Crafted Web"
            fill
            priority
            sizes="(max-width: 768px) 340px, (max-width: 1024px) 600px, 800px"
            className="object-contain object-bottom drop-shadow-sm"
          />
        </div>
      </div>

      {/* 2. MIDDLE ROW: Availability (Left) & Specialization (Right) (Layer z-30) */}
      <div className="relative w-full my-auto py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-6 sm:gap-8 z-30">
        {/* Left: Availability Badge */}
        <div className="lg:col-span-4 flex justify-start items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest/95 border border-[#cdc5c2] shadow-xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
            <span className="font-sans text-xs font-medium text-on-surface tracking-normal">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Center: Spacing column for desktop grid balance */}
        <div className="lg:col-span-4 hidden lg:block pointer-events-none" />

        {/* Right: Specialization Text */}
        <div className="lg:col-span-4 flex justify-start sm:justify-end items-center">
          <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-[240px] sm:max-w-[260px] text-left sm:text-right bg-background/80 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-1 rounded-sm">
            Specialized in Web Design, Web Development, and Frontend Development.
          </p>
        </div>
      </div>

      {/* 3. BOTTOM ROW: Identity (Left) & Role / Positioning (Right) (Layer z-30) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-end justify-between gap-6 sm:gap-8 pt-4 sm:pt-6 z-30 pointer-events-none">
        {/* Left: Main Identity Statement */}
        <div className="flex flex-col justify-end text-left pointer-events-auto">
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-on-surface uppercase tracking-tight leading-[0.88]">
            <span className="block">I AM</span>
            <span className="block">NIRMAL</span>
          </h2>
        </div>

        {/* Right: Role / Positioning Statement */}
        <div className="flex flex-col justify-end text-left sm:text-right pointer-events-auto">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-on-surface uppercase tracking-tight leading-[0.92]">
            <span className="block">WEB DESIGNER</span>
            <span className="block">&amp; DEVELOPER</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
