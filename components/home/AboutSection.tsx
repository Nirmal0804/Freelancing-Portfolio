import React from "react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  return (
    <section
      className="w-full border-b border-[#cdc5c2] grid grid-cols-1 md:grid-cols-12 bg-surface-container-highest"
      id="about"
    >
      <div className="md:col-span-12 p-6 sm:p-8 lg:p-12 border-b border-[#cdc5c2] flex justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          ABOUT ME
        </h2>
      </div>
      <div className="md:col-span-12 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-between">
        <div className="flex-1 order-1 max-w-3xl">
          <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold leading-snug tracking-tight">
            Crafted Web is an independent digital studio founded by Nirmal, focused on delivering high-end, bespoke web solutions for creatives and ambitious brands.
          </p>
        </div>
        <div className="w-full sm:w-56 md:w-60 lg:w-64 shrink-0 order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#cdc5c2] bg-surface-container-low">
            <Image
              src="/images/nirmal-portrait.jpg"
              alt="Portrait of Nirmal, founder of Crafted Web"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
