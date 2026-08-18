import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full border-b border-[#E5E2E1] grid grid-cols-1 md:grid-cols-12 min-h-[55vh] bg-background">
      <div className="md:col-span-8 p-6 sm:p-8 lg:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#E5E2E1]"></div>
      <div className="md:col-span-4 p-6 sm:p-8 lg:p-12 flex flex-col justify-end"></div>
    </section>
  );
};
