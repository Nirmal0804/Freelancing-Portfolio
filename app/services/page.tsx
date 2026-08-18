import { Metadata } from "next";
import { servicesData } from "@/lib/sanity/fallbackData";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CustomInquiry } from "@/components/services/CustomInquiry";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore bespoke web development, UI/UX web design, logo design, and portfolio development services by Crafted Web.",
};

export default function ServicesPage() {
  return (
    <PageContainer usePadding className="py-12 sm:py-16 lg:py-20 flex flex-col gap-12 sm:gap-16 lg:gap-20">
      {/* Header */}
      <header className="max-w-3xl flex flex-col gap-3">
        <p className="font-sans text-xs uppercase tracking-widest text-primary font-semibold">
          SERVICES &amp; CAPABILITIES
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold tracking-tight">
          What I deliver.
        </h1>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
          Comprehensive, tailored digital solutions designed to elevate your brand&apos;s online presence with editorial precision and clean modern engineering.
        </p>
      </header>

      {/* 2x2 Editorial Grid on Desktop / Single Column Stack on Mobile */}
      <section className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E2E1] border border-[#E5E2E1] bg-background">
        {/* Left Column: Service 01 & 03 */}
        <div className="flex flex-col divide-y divide-[#E5E2E1]">
          <ServiceCard service={servicesData[0]} />
          <ServiceCard service={servicesData[2]} />
        </div>

        {/* Right Column: Service 02 & 04 */}
        <div className="flex flex-col divide-y divide-[#E5E2E1]">
          <ServiceCard service={servicesData[1]} />
          <ServiceCard service={servicesData[3]} />
        </div>
      </section>

      {/* Pricing Disclaimer & Custom Request */}
      <CustomInquiry />
    </PageContainer>
  );
}
