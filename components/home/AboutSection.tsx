import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section
      className="w-full border-b border-[#cdc5c2] grid grid-cols-1 md:grid-cols-12 bg-surface-container-highest"
      id="about"
    >
      {/* Centered Warm Orange Header */}
      <div className="md:col-span-12 py-5 sm:py-6 lg:py-8 px-6 sm:px-8 lg:px-12 border-b border-[#cdc5c2] flex justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          ABOUT ME
        </h2>
      </div>

      {/* Centralized Text Content */}
      <div className="md:col-span-12 py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 flex justify-center items-center text-center">
        <div className="max-w-3xl flex flex-col gap-5 sm:gap-6">
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-on-surface font-semibold leading-snug tracking-tight">
            I&apos;m Nirmal, a third-year Computer Science student and the person behind Crafted Web. I design and develop thoughtful digital experiences for creatives, businesses, and ambitious brands.
          </p>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            I enjoy bringing together clean design, purposeful development, and emerging technology to create websites that not only look refined but work beautifully. Crafted Web is where I turn that passion into digital experiences built with intention.
          </p>
        </div>
      </div>
    </section>
  );
};
