import { useState, useEffect, useMemo } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "./Link";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ui/ThemeToggle";
import { motion } from "framer-motion";
import Magnet from "./reactbits/Magnet/Magnet";

// Try import for reliable favicon asset resolution
import favicon from "/assets/favicon.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

// Logo component for re-use
function Logo() {
  return (
    <div className="cursor-pointer" onClick={() => (window.location.href = "/")}>
      <img src={favicon} alt="Logo" width={32} height={32} loading="lazy" className="h-8 w-auto" />
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isDark, setIsDark } = useTheme();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.innerWidth < 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Intersection Observer for active nav highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Memoize links for slight perf boost (not critical)
  const navLinks = useMemo(() => NAV_LINKS, []);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
        ${isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
          : "bg-transparent outline outline-1 outline-blue-600"
        }`}
    >
      <div className="flex items-center justify-between h-12 px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8 relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
            >
              {link.label}
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
          <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
          {/* Call-to-action link */}
          <div className="absolute right-0 justify-end">
            <Magnet magnetStrength={6}>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 dark:text-white"
              >
                Get in touch...
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Magnet>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
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
              className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-400 text-white text-sm hover:bg-blue-700 dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Get in touch...
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}