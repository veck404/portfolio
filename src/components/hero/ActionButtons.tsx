// import React from "react";
import { FileText, Mail } from "lucide-react";
import { Link } from "../Link";
import Magnet from "../reactbits/Magnet/Magnet";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-4">
      <a
        href="/assets/Resume.pdf"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
      <Magnet magnetStrength={6}>
        <Link
          href="#contact"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-transform duration-300 transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          <span>Contact Me</span>
        </Link>
      </Magnet>
    </div>
  );
}
