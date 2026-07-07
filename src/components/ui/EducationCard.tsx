import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  honor: string;
  isLast?: boolean;
}

export const EducationCard = React.memo(function EducationCard({
  degree,
  institution,
  period,
  honor,
}: EducationCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 sm:p-6">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        {/* Cap Icon */}
        <div className="rounded-xl bg-primary/10 p-3 dark:bg-primary/20 sm:p-4">
          <GraduationCap className="h-5 w-5 text-primary-600 dark:text-primary-300 sm:h-6 sm:w-6" />
        </div>

        {/* Details Section */}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-950 dark:text-white sm:text-xl">
            {degree}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-300 sm:text-base">
            {institution}
          </p>

          <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            {/* Period */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{period}</span>
            </div>

            {/* honor */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
              <Award className="h-4 w-4" />
              <span className="text-sm">{honor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
