import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "./Link";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ui/ThemeToggle";
import Magnet from "./reactbits/Magnet/Magnet";
import vectorLogoBlack from "/assets/Vector-Logo-Black.png";
import vectorLogoWhite from "/assets/Vector-Logo-White.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
] as const;

const SECTION_ORDER = [
  ...NAV_LINKS.map((link) => link.href.slice(1)),
  "contact",
];
const MOBILE_MENU_ID = "mobile-navigation";
const NAV_OFFSET_CSS_VAR = "--nav-offset";
const DEFAULT_NAV_OFFSET = 112;

function getFallbackActiveSection(offset: number) {
  const currentScroll = window.scrollY + offset + 24;
  let currentSection = SECTION_ORDER[0];

  for (const sectionId of SECTION_ORDER) {
    const section = document.getElementById(sectionId);
    if (!section) {
      continue;
    }

    if (currentScroll >= section.offsetTop) {
      currentSection = sectionId;
    }
  }

  return currentSection;
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

type LogoProps = {
  isDark: boolean;
  offset: number;
};

function Logo({ isDark, offset }: LogoProps) {
  return (
    <Link
      href="#home"
      offset={offset}
      aria-label="Go to home section"
      className="group relative inline-flex h-14 w-14 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
    >
      <img
        src={isDark ? vectorLogoBlack : vectorLogoWhite}
        alt="Victor Umaru logo"
        width={68}
        height={68}
        loading="lazy"
        className="relative h-16 w-16 object-contain transition-all duration-300 group-hover:scale-105"
      />
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navOffset, setNavOffset] = useState(DEFAULT_NAV_OFFSET);
  const { isDark, setIsDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const navRowRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const isTickingRef = useRef(false);
  const observerRatiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const applyOffset = (nextOffset: number) => {
      const stableOffset = Math.max(Math.round(nextOffset), DEFAULT_NAV_OFFSET);
      setNavOffset((prev) => (prev !== stableOffset ? stableOffset : prev));
      document.documentElement.style.setProperty(
        NAV_OFFSET_CSS_VAR,
        `${stableOffset}px`,
      );
    };

    const measureOffset = () => {
      if (!navRowRef.current) {
        applyOffset(DEFAULT_NAV_OFFSET);
        return;
      }

      const navRowRect = navRowRef.current.getBoundingClientRect();
      applyOffset(navRowRect.bottom + 12);
    };

    measureOffset();

    const resizeObserver = new ResizeObserver(() => {
      measureOffset();
    });

    if (navRowRef.current) {
      resizeObserver.observe(navRowRef.current);
    }

    window.addEventListener("resize", measureOffset);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureOffset);
    };
  }, []);

  useEffect(() => {
    const runScrollUpdate = () => {
      isTickingRef.current = false;
      const nextIsScrolled = window.scrollY > 12;
      const fallbackSection = getFallbackActiveSection(navOffset);

      setIsScrolled((prev) =>
        prev !== nextIsScrolled ? nextIsScrolled : prev,
      );
      setActiveSection((prev) =>
        prev !== fallbackSection ? fallbackSection : prev,
      );
    };

    const handleScroll = () => {
      if (isTickingRef.current) {
        return;
      }

      isTickingRef.current = true;
      rafRef.current = window.requestAnimationFrame(runScrollUpdate);
    };

    runScrollUpdate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [navOffset]);

  useEffect(() => {
    const sections = SECTION_ORDER.map((sectionId) =>
      document.getElementById(sectionId),
    ).filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const thresholds = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.id;
          if (!SECTION_ORDER.includes(sectionId)) {
            continue;
          }

          observerRatiosRef.current[sectionId] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        }

        const bestSection = SECTION_ORDER.reduce<{
          id: string;
          ratio: number;
        } | null>((best, sectionId) => {
          const ratio = observerRatiosRef.current[sectionId] ?? 0;
          if (ratio <= 0) {
            return best;
          }

          if (!best || ratio > best.ratio) {
            return { id: sectionId, ratio };
          }

          return best;
        }, null);

        if (bestSection) {
          setActiveSection((prev) =>
            prev !== bestSection.id ? bestSection.id : prev,
          );
          return;
        }

        const fallbackSection = getFallbackActiveSection(navOffset);
        setActiveSection((prev) =>
          prev !== fallbackSection ? fallbackSection : prev,
        );
      },
      {
        threshold: thresholds,
        rootMargin: `-${Math.max(navOffset + 12, 1)}px 0px -55% 0px`,
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [navOffset]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarCompensation =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarCompensation > 0) {
      document.body.style.paddingRight = `${scrollbarCompensation}px`;
    }

    const focusables = mobilePanelRef.current
      ? getFocusableElements(mobilePanelRef.current)
      : [];
    focusables[0]?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobilePanelRef.current) {
        return;
      }

      const currentFocusables = getFocusableElements(mobilePanelRef.current);
      if (currentFocusables.length === 0) {
        event.preventDefault();
        return;
      }

      const first = currentFocusables[0];
      const last = currentFocusables[currentFocusables.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", handleKeydown);
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  const handleThemeToggle = () => setIsDark(!isDark);
  const sharedTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2 };
  const menuTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={sharedTransition}
            className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <nav
        className={`fixed left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-2xl backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.45)] dark:bg-slate-950/80 dark:shadow-[0_22px_70px_-40px_rgba(0,0,0,0.8)]"
            : "bg-white/60 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)] dark:bg-slate-950/60 dark:shadow-[0_18px_55px_-42px_rgba(0,0,0,0.7)]"
        }`}
        style={{ top: "calc(1rem + env(safe-area-inset-top))" }}
      >
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" />
        <div
          ref={navRowRef}
          className="grid min-h-16 grid-cols-[auto_1fr_auto] items-center gap-3 px-3 sm:px-4"
        >
          <div className="flex items-center">
            <Logo isDark={isDark} offset={navOffset} />
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="inline-flex items-center gap-1 rounded-xl border border-slate-200/70 bg-slate-950/[0.025] p-1 shadow-inner shadow-white/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    offset={navOffset}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative inline-flex h-9 items-center rounded-lg px-3 text-[13px] font-medium transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 xl:px-3.5 ${
                      isActive
                        ? "text-slate-950 dark:text-white"
                        : "text-slate-500 hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-lg border border-slate-200/80 bg-white shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-white/10 dark:shadow-black/10"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 450, damping: 34 }
                        }
                      />
                    )}
                    <span className="relative">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-500 dark:bg-primary-300"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 32 }
                        }
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
            <Magnet magnetStrength={12}>
              <Link
                href="#contact"
                offset={navOffset}
                className="group inline-flex h-10 items-center gap-2 rounded-xl border border-primary-500/20 bg-slate-950 px-4 text-[13px] font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-400/40 hover:bg-primary-600 hover:text-white hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-950 dark:shadow-black/20 dark:hover:bg-primary-300 dark:hover:text-slate-950 dark:focus-visible:ring-offset-slate-950"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Magnet>
          </div>

          <div className="flex items-center justify-end gap-2 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/75 text-slate-900 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100 dark:shadow-black/20 dark:hover:border-primary/40 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "menu"}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, rotate: -12, scale: 0.9 }
                  }
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, rotate: 12, scale: 0.9 }
                  }
                  transition={sharedTransition}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobilePanelRef}
              id={MOBILE_MENU_ID}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              transition={menuTransition}
              className="border-t border-slate-200/70 px-3 pb-3 pt-2 dark:border-white/10 lg:hidden"
            >
              <div className="space-y-1 rounded-xl border border-slate-200/70 bg-white/80 p-2 shadow-inner shadow-white/80 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.slice(1);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      offset={navOffset}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`group flex min-h-11 items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                        isActive
                          ? "bg-slate-950 text-white shadow-sm shadow-slate-950/10 dark:bg-white dark:text-slate-950"
                          : "text-slate-600 hover:translate-x-0.5 hover:bg-slate-100/80 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-300 dark:bg-primary-500" />
                      )}
                    </Link>
                  );
                })}

                <Link
                  href="#contact"
                  offset={navOffset}
                  onClick={() => setIsOpen(false)}
                  className="group mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-slate-950 dark:hover:bg-primary-300 dark:hover:text-slate-950 dark:focus-visible:ring-offset-slate-950"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
