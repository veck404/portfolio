import React from "react";
import { Github, Globe } from "lucide-react";

interface TechStackItem {
  label: string;
  tone?: "primary" | "accent" | "muted";
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: TechStackItem[];
}

export const ProjectCard = React.memo(function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-none backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-brand-glow dark:border-slate-800/60 dark:bg-slate-900/70">
        {/* Image */}
        <div className="relative overflow-hidden p-5 pb-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {(() => {
              const base = image.replace(/(\.[a-zA-Z]+)$/, "");
              return (
                <picture className="block">
                  <source
                    type="image/avif"
                    srcSet={`${base}-800.avif 800w, ${base}-400.avif 400w`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${base}-800.webp 800w, ${base}-400.webp 400w`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <img
                    src={image}
                    alt={`Screenshot of ${title}`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    fetchpriority="low"
                    className="aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] dark:border-slate-800/80"
                  />
                </picture>
              );
            })()}
          </a>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Title + Icons */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Featured Build
              </p>
              <h3 className="font-heading text-2xl font-semibold tracking-[-0.01em] text-slate-900 dark:text-slate-100">
                {title}
              </h3>
            </div>
            <div className="flex shrink-0 gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} source code`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 text-slate-500 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary/40 dark:hover:text-primary-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} live preview`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 text-slate-500 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary/40 dark:hover:text-primary-300"
                >
                  <Globe className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-auto flex flex-wrap gap-2">
            {techStack.map(({ label, tone = "muted" }, index) => {
              const toneClass =
                tone === "primary"
                  ? "border-primary/30 bg-primary/10 text-primary-500 dark:border-primary/30 dark:text-primary-200"
                  : tone === "accent"
                  ? "border-accent/30 bg-accent/10 text-sky-500 dark:border-accent/30 dark:text-sky-300"
                  : "border-slate-200/80 bg-white/70 text-slate-500 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300";
              return (
                <span
                  key={`${label}-${index}`}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors ${toneClass}`}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export function ProjectsGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
