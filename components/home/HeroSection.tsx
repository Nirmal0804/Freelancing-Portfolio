import React from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full border-b border-[#cdc5c2] bg-background min-h-[75vh] lg:min-h-[84vh] flex flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20 py-12 sm:py-16 lg:py-20"
      aria-label="Hero Section"
    >
      <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Greeting, Main Identity, Supporting Copy & Metadata */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start gap-6 sm:gap-8 text-left">
          {/* 1. Greeting */}
          <h1 className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tight leading-none select-none">
            Hey, there.
          </h1>

          {/* 2. Main Identity (Sora Bold/Black Heading) */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-on-surface uppercase tracking-tight leading-[0.92]">
            <span className="block">I&apos;M NIRMAL.</span>
            <span className="block">A WEB DESIGNER</span>
            <span className="block">&amp; DEVELOPER.</span>
          </h2>

          {/* 3. Supporting Paragraph (Heebo Normal Body Text) */}
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
            I create thoughtful digital experiences that bring together clean design, purposeful development, and modern technology.
          </p>

          {/* 4. Secondary Identity & Availability */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Secondary Identity (Small Supporting Metadata) */}
            <div className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-on-surface/80 leading-snug">
              <span className="block">THIRD-YEAR COMPUTER SCIENCE STUDENT</span>
              <span className="block">&amp; FOUNDER OF CRAFTED WEB</span>
            </div>

            {/* Vertical Separator for Desktop */}
            <div className="hidden sm:block w-px h-8 bg-[#cdc5c2]" aria-hidden="true" />

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest border border-[#cdc5c2] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
              <span className="font-sans text-xs font-semibold tracking-wider uppercase text-on-surface">
                AVAILABLE FOR NEW OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Oval Arch Framed Portrait */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end items-center">
          <div className="relative w-[230px] sm:w-[270px] md:w-[300px] lg:w-[320px] xl:w-[340px] aspect-[3/4] rounded-full overflow-hidden border-[6px] sm:border-8 border-white ring-1 ring-[#cdc5c2] shadow-lg bg-surface-container-low shrink-0">
            <Image
              src="/images/nirmal-portrait.jpg"
              alt="Portrait of Nirmal — Web Designer, Developer & Founder of Crafted Web"
              fill
              priority
              sizes="(max-width: 768px) 270px, (max-width: 1024px) 320px, 340px"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
