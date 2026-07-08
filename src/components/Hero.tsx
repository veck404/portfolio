import { ArrowDown } from "lucide-react";
import { Link } from "./Link";
import { TypeWriter } from "./ui/TypeWriter";
import { SocialLinks } from "./hero/SocialLinks";
import { ContactInfo } from "./hero/ContactInfo";
import { ActionButtons } from "./hero/ActionButtons";
import { ProfileImage } from "./ProfileImage";
import { motion, useReducedMotion } from "framer-motion";
// import { Meteors } from "./meteors";

// ---- Hero Section ----
export function Hero() {
  const roles = [
    "Web Developer",
    "System Analyst",
    "Code Preacher",
    "Problem Solver",
    "Tech Evangelist",
    "Lifelong Learner",
  ];
  const prefersReducedMotion = useReducedMotion();
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { x: "-50%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 1, ease: "easeOut" },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh+2rem)] items-center overflow-hidden bg-white pt-24 dark:bg-slate-950 sm:min-h-screen"
    >
      {/* Optional: <Meteors number={15} /> */}

      {/* Animated background */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(248,250,252,0.92),rgba(255,255,255,0.74)_45%,rgba(238,242,255,0.78))] dark:bg-[linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(30,41,59,0.74))]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] dark:opacity-[0.045]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:gap-14">
          {/* ---- Left Content ---- */}
          <motion.div
            {...animationProps}
            className="order-2 flex flex-col items-center justify-center space-y-5 text-center font-body md:order-1 md:items-start md:text-left lg:space-y-6"
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/80 backdrop-blur-md dark:border-primary/20 dark:bg-primary/20 dark:text-primary-200 sm:px-5">
                Hello!{" "}
                <span
                  className="inline-block origin-[70%_70%] animate-wave"
                  role="img"
                  aria-label="Waving hand and smile emoji"
                >
                  👋😊
                </span>{" "}
                I'm
              </div>
              <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.02em] text-slate-900 animate-gradient bg-gradient-to-r from-primary-500 via-slate-950 to-accent bg-clip-text text-transparent dark:from-primary-300 dark:via-white dark:to-accent md:text-5xl lg:text-[4.25rem]">
                Victor Umaru
              </h1>
              <div className="text-balance text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </motion.div>

          {/* ---- Right: Profile Image ---- */}
          <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
            <ProfileImage />
          </div>
        </div>

        {/* ---- Scroll Down Indicator ---- */}
        <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
          <Link
            href="#about"
            aria-label="Scroll to About section"
            className="rounded-full border border-slate-200/70 bg-white/70 p-2 shadow-sm shadow-slate-950/5 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:hover:bg-slate-900"
          >
            <ArrowDown className="h-5 w-5 text-slate-400 dark:text-slate-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
