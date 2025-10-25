
import { ArrowDown } from "lucide-react";
import { Link } from "./Link";
import { TypeWriter } from "./ui/TypeWriter";
import { SocialLinks } from "./hero/SocialLinks";
import { ContactInfo } from "./hero/ContactInfo";
import { ActionButtons } from "./hero/ActionButtons";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
// import { Meteors } from "./meteors";


// ---- ProfileImage Subcomponent for clarity ----
function ProfileImage() {
  const { isDark } = useTheme();
  const dark = isDark;

  // These paths must exist in /public/assets/
  const avifSrcSet = dark
    ? "/assets/prof-pic-drk-800.avif 800w, /assets/prof-pic-drk-400.avif 400w"
    : "/assets/prof-pic-800.avif 800w, /assets/prof-pic-400.avif 400w";
  const webpSrcSet = dark
    ? "/assets/prof-pic-drk-800.webp 800w, /assets/prof-pic-drk-400.webp 400w"
    : "/assets/prof-pic-800.webp 800w, /assets/prof-pic-400.webp 400w";
  const fallback = dark
    ? "/assets/prof-pic-drk.webp"
    : "/assets/prof-pic.webp";

  // You may add a PNG/JPG fallback here if WebP/AVIF unsupported by user’s browser

  return (
    <div className="relative w-[70%] md:w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full mix-blend-multiply pointer-events-none z-10" />
      <div className="pc-card relative group animate-floating animation delay-400">
        <picture>
          <source
            type="image/avif"
            srcSet={avifSrcSet}
            sizes="(max-width: 768px) 80vw, 400px"
          />
          <source
            type="image/webp"
            srcSet={webpSrcSet}
            sizes="(max-width: 768px) 80vw, 400px"
          />
          <img
            src={fallback}
            alt="Victor Umaru"
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="relative z-20 w-full h-auto rounded-full shadow-xl transform lg:hover:scale-110 hover:scale-105 transition-transform duration-500"
          />
        </picture>
        {/* Dark overlay/tint for dark mode, scales on hover */}
        <div className="absolute inset-0 rounded-full bg-black/20 dark:block hidden z-30 pointer-events-none transform transition-transform duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
      </div>
    </div>
  );
}

// ---- Hero Section ----
export function Hero() {
  const roles = [
    "Web Developer",
    "Computer Analyst",
    "ML Enthusiast",
    "Problem Solver",
    "Tech Evangelist",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >


      {/* Optional: <Meteors number={15} /> */}

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">


        {/* Example: Add grid or animated patterns here */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>




      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ---- Left Content ---- */}
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}

            className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 order-2 md:order-1"
          >
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
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
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Victor Umaru
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </motion.div>


          {/* ---- Right: Profile Image ---- */}
          <div className="relative order-1 md:order-2 flex justify-center">












































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
