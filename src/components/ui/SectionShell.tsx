import React from "react";
import { cn } from "../../lib/utils";

type SectionTone = "default" | "muted";

interface SectionShellProps {
  id: string;
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-white text-slate-900 dark:bg-[#0b1220] dark:text-slate-100",
  muted: "bg-slate-50 text-slate-900 dark:bg-[#111827] dark:text-slate-100",
};

export function SectionShell({
  id,
  tone = "default",
  className,
  innerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-28",
        toneClasses[tone],
        className,
      )}
    >
      <div
        className={cn(
          "container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
