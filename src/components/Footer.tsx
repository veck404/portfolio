// import React from "react";
import { SocialLinks } from "./hero/SocialLinks";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>© {currentYear} Victor Umaru. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Built with{" "}
              <FaReact className="w-6 h-6 text-blue-500 animate-spin" /> using
              <SiVite className="w-6 h-6 text-yellow-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
