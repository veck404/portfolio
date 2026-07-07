import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white/75 text-slate-700 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-slate-950 hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:shadow-black/20 dark:hover:border-primary/40 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
      aria-label="Toggle theme"
      type="button"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-5 w-5">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isDark ? "rotate-[360deg]" : "-rotate-[360deg]"
          }`}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-primary-300" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
        </span>
      </div>
    </button>
  );
}
