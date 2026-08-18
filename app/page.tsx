import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyCraftedWeb } from "@/components/home/WhyCraftedWeb";
import { CtaSection } from "@/components/home/CtaSection";
import { PageContainer } from "@/components/layout/PageContainer";

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <WhyCraftedWeb />
      <CtaSection />
    </PageContainer>
  );
}
