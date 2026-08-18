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
      <div className="md:col-span-12 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-between">
        <div className="flex-1 max-w-2xl lg:max-w-3xl flex flex-col gap-6 justify-center">
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-on-surface font-semibold leading-snug tracking-tight">
            I&apos;m Nirmal, a third-year Computer Science student and the person behind Crafted Web. I design and develop thoughtful digital experiences for creatives, businesses, and ambitious brands.
          </p>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            I enjoy bringing together clean design, purposeful development, and emerging technology to create websites that not only look refined but work beautifully. Crafted Web is where I turn that passion into digital experiences built with intention.
          </p>
        </div>

        <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] shrink-0 self-center lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#cdc5c2] bg-surface-container-low shadow-xs">
            <Image
              src="/images/nirmal-portrait.jpg"
              alt="Portrait of Nirmal, founder of Crafted Web"
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 300px"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
