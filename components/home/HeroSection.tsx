import React from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full border-b border-[#cdc5c2] bg-background min-h-[65vh] sm:min-h-[72vh] lg:min-h-[78vh] flex flex-col justify-start overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16"
      aria-label="Hero Section"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* Left Side: Hey, there text placed at the top-left */}
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-on-surface text-left tracking-tight leading-none select-none">
            Hey, there.
          </h1>
        </div>

        {/* Right Side: Oval / Capsule Arch Framed Portrait */}
        <div className="shrink-0 self-center lg:self-start lg:mt-2 flex justify-center items-center">
          <div className="relative w-[220px] sm:w-[260px] md:w-[290px] lg:w-[320px] xl:w-[340px] aspect-[3/4] rounded-full overflow-hidden border-[6px] sm:border-8 border-white ring-1 ring-[#cdc5c2] shadow-md bg-surface-container-low">
            <Image
              src="/images/nirmal-portrait.jpg"
              alt="Portrait of Nirmal, Founder of Crafted Web"
              fill
              priority
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 340px"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
