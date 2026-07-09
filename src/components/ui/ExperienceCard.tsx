import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const ExperienceCard = React.memo(function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  const descriptionLines = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="group relative">
      {/* Timeline Dot */}
      <div className="absolute left-[-33px] top-5 h-4 w-4 rounded-full border-4 border-white bg-primary-500 shadow-md shadow-primary/20 dark:border-slate-950 dark:bg-primary-300 sm:left-[-41px]"></div>

      {/* Experience Card */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20 dark:hover:bg-slate-900/90 sm:p-6">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 dark:bg-primary/20 sm:p-4">
              <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-300 sm:h-6 sm:w-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-950 dark:text-white">
                {title}
              </h3>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-300 sm:text-base">
                {company}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {period}
              </p>
            </div>
          </div>

          {/* Description (Custom Blue Bullets) */}
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
            {descriptionLines.map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
