import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import { getProjects } from "@/lib/sanity/client";
import { ProjectSection } from "@/components/work/ProjectSection";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore websites, e-commerce platforms, and digital experiences crafted by Crafted Web studio.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <PageContainer usePadding className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 flex flex-col">
      {/* Introductory Header - Centered Warm Orange */}
      <header className="mb-14 sm:mb-20 lg:mb-24 w-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto gap-4">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold uppercase tracking-tight leading-tight">
          WHAT I&apos;VE BUILT
        </h1>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
          A selection of websites and digital experiences crafted for different brands, businesses, and purposes.
        </p>
      </header>

      {/* Projects Showcase */}
      <ProjectSection projects={projects} />

      {/* Thin Editorial Divider below final project (Apex Gym) */}
      <div className="w-full border-b border-[#cdc5c2] mt-16 sm:mt-20 lg:mt-24" />

      {/* Bottom CTA with Refined Editorial Vertical Spacing */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 text-center max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold uppercase tracking-tight">
          LIKE WHAT YOU SEE?
        </h2>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant">
          Have a project of your own? Let&apos;s craft it.
        </p>
        <Link
          href="/contact"
          prefetch={true}
          className="inline-flex items-center gap-2 bg-primary text-on-primary font-sans font-medium text-xs uppercase tracking-wider px-7 py-3.5 border border-primary hover:bg-transparent hover:text-primary transition-all duration-200 group mt-2"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>
    </PageContainer>
  );
}
