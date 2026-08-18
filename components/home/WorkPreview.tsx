import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/Icons";
import { fallbackProjects } from "@/lib/sanity/fallbackData";

export const WorkPreview: React.FC = () => {
  return (
    <section
      className="w-full border-b border-outline-variant bg-surface-container-low"
      id="work"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-outline-variant">
        <div className="md:col-span-8 p-6 md:p-grid-margin border-b md:border-b-0 md:border-r border-outline-variant">
          <h2 className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider mb-2">
            Selected Work
          </h2>
          <p className="font-headline-md text-2xl md:text-3xl text-on-surface font-semibold">
            Featured digital experiences and client projects.
          </p>
        </div>
        <div className="md:col-span-4 p-6 md:p-grid-margin flex items-center justify-start md:justify-end">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors uppercase tracking-wider group"
          >
            <span>View All Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 3 Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
        {fallbackProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-6 md:p-grid-margin bg-background hover:bg-surface-container/50 transition-colors group"
          >
            <div>
              {/* Project Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-outline-variant mb-6 bg-[#1a1a1a]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-start mb-2">
                <span className="font-metadata text-metadata text-tertiary">
                  {project.number} — {project.category}
                </span>
              </div>

              <h3 className="font-headline-md text-xl md:text-2xl text-on-surface uppercase font-bold tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
              <span className="font-metadata text-xs text-on-surface-variant">
                {project.services.join(", ")}
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-label-caps text-xs text-primary hover:opacity-80 transition-opacity"
              >
                <span>Live</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
