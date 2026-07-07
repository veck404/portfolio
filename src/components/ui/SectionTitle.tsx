import React from "react";
import { cn } from "../../lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  eyebrow?: string;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionTitle({
  children,
  eyebrow,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-primary/70 dark:text-primary-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-[-0.015em] text-slate-950 dark:text-white sm:text-4xl lg:text-[2.75rem]">
        {children}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base",
            isCentered && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
