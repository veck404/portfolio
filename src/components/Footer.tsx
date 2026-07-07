// import React from "react";
import { SocialLinks } from "./hero/SocialLinks";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/80 bg-slate-50 dark:border-white/10 dark:bg-slate-900">
      <div className="container relative mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>© {currentYear} Victor Umaru. All rights reserved.</p>
            <p className="flex flex-wrap items-center justify-center gap-2">
              Built with{" "}
              <FaReact className="h-5 w-5 text-primary-500 animate-spin" />{" "}
              using
              <SiVite className="h-5 w-5 text-amber-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
