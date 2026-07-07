// import React from "react";
import { FileText, Mail } from "lucide-react";
import { Link } from "../Link";
import Magnet from "../reactbits/Magnet/Magnet";

export function ActionButtons() {
  return (
    <div className="flex w-full flex-col gap-3 py-2 min-[420px]:w-auto min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:justify-center md:justify-start">
      <a
        href="/assets/Resume.pdf"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-600 dark:bg-white dark:text-slate-950 dark:hover:bg-primary-300"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
      <Magnet magnetStrength={6}>
        <Link
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-white/70 px-4 py-2.5 text-sm font-semibold text-primary-600 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 dark:bg-slate-900/70 dark:text-primary-300"
        >
          <Mail className="w-5 h-5" />
          <span>Contact Me</span>
        </Link>
      </Magnet>
    </div>
  );
}
