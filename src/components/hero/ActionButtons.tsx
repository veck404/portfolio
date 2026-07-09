// import React from "react";
import { FileText, Mail } from "lucide-react";
import { Link } from "../Link";
import Magnet from "../reactbits/Magnet/Magnet";

export function ActionButtons() {
  return (
    <div className="flex w-full flex-col gap-3 py-2 min-[420px]:w-auto min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:justify-center md:justify-start">
      <a
        href="/assets/Resume.pdf"
        className="group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-primary/20 dark:bg-white dark:text-slate-950 dark:hover:bg-primary-300"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-slate-950/10" />
        <FileText className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="relative">View Resume</span>
      </a>
      <Magnet magnetStrength={6}>
        <Link
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/65 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-primary-300"
        >
          <Mail className="h-5 w-5" />
          <span>Contact Me</span>
        </Link>
      </Magnet>
    </div>
  );
}
