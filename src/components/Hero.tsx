
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Optional: <Meteors number={15} /> */}

      {/* Animated background */}
      <div className="absolute inset-0 opacity-80">
        {/* Example: Add grid or animated patterns here */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl motion-safe:animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 md:max-w-[90%] lg:max-w-[75%]">
        <div className="grid max-w-6xl mx-auto grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* ---- Left Content ---- */}
          <motion.div
            {...animationProps}
            className="order-2 flex flex-col items-center justify-center space-y-6 text-center font-body md:order-1 md:items-start md:text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur-md dark:bg-primary/20 dark:text-primary-200">
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
              <h1 className="text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.015em] text-slate-900 animate-gradient bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 bg-clip-text text-transparent dark:text-white md:text-5xl lg:text-[3.75rem]">
                Victor Umaru
              </h1>
              <div className="text-balance text-lg text-slate-600 dark:text-slate-300 md:text-xl">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </motion.div>

          {/* ---- Right: Profile Image ---- */}
          <div className="relative order-1 flex justify-center md:order-2">
            <ProfileImage />
          </div>
        </div>

        {/* ---- Scroll Down Indicator ---- */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            aria-label="Scroll to About section"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
