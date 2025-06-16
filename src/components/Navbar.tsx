import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "./Link";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion } from "framer-motion";
import Magnet from "./reactbits/Magnet/Magnet";

export function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // State to determine if page has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // State to track which section is currently in view
  const [activeSection, setActiveSection] = useState("");

  // Dark/light theme hook
  const { isDark, setIsDark } = useTheme();

  // Logo animation hook

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 20px
      setIsScrolled(window.scrollY > 20);

      // Auto-collapse mobile menu on scroll
      if (window.innerWidth < 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Intersection observer to update the active section based on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ];

  return (
    <>
      {/* Main Navbar container */}
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
          ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
              : "bg-transparent outline outline-1 outline-blue-600"
          }`}
      >
        {/* Navbar content wrapper */}
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => (window.location.href = "/#home")}
          >
            <img src="/assets/favicon.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop nav links - hidden on smaller screens */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
              >
                {link.label}
                {/* Animated underline for active section */}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  />
                )}
              </Link>
            ))}

            {/* Theme toggle switch */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Call-to-action link */}
            <div className="absolute right-0 justify-end">
              <Magnet magnetStrength={6}>
                <Link
                  href="#contact"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
                >
                  Get in touch...
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Magnet>
            </div>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 rounded-b-xl shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-400 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Get in touch...
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
