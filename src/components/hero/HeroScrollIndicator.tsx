import React from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "../Link";

export function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </Link>
    </div>
  );
}
