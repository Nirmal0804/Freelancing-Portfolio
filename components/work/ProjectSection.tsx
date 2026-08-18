import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Project } from "@/lib/sanity/fallbackData";

interface ProjectSectionProps {
  projects: Project[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-20 sm:gap-24 lg:gap-32">
      {projects.map((project, idx) => {
        const isEven = idx % 2 === 1; // Project 02 is reversed on desktop

        return (
          <article
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Device Mockup Preview */}
            <div
              className={`md:col-span-7 relative group py-4 sm:py-6 lg:py-10 px-0 sm:px-4 ${
                isEven ? "order-1 md:order-2" : "order-1 md:order-1"
              }`}
            >
              {/* Laptop Screen Frame */}
              <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] border-[#1a1a1a] shadow-xl overflow-hidden z-10 border-[6px] sm:border-[8px] md:border-[10px] rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 850px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 2}
                />
              </div>

              {/* Laptop Base Stand */}
              <div className="relative bottom-0 left-0 right-0 w-full h-3 sm:h-5 bg-[#e5e5e5] rounded-b-xl rounded-t-xs shadow-sm flex justify-center z-0">
                <div className="w-1/4 max-w-[100px] h-1 sm:h-1.5 bg-[#a3a3a3] rounded-b-md"></div>
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`md:col-span-5 flex flex-col justify-center ${
                isEven
                  ? "order-2 md:order-1 pr-0 md:pr-6 lg:pr-10"
                  : "order-2 md:order-2 pl-0 md:pl-6 lg:pl-10"
              }`}
            >
              <p className="font-sans text-xs text-tertiary mb-2 font-mono uppercase tracking-wider">
                {project.number} — {project.category}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-on-surface mb-3 sm:mb-4 font-semibold tracking-tight">
                {project.title}
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="border-t border-[#cdc5c2] pt-5 mb-6 sm:mb-8">
                <p className="font-sans text-xs uppercase tracking-wider text-tertiary font-semibold mb-1.5">
                  SERVICES
                </p>
                <p className="font-sans text-sm text-on-surface font-medium">
                  {project.services.join(", ")}
                </p>
              </div>

              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs uppercase tracking-wider text-primary hover:opacity-80 transition-all group"
                >
                  <span>VIEW LIVE WEBSITE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
