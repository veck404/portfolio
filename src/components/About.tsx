import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionShell } from "./ui/SectionShell";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A Software Engineer committed to delivering high-quality product.",
      "Always learning new technologies to improve my skills.",
      "Love collaborating with designers and developers.",
      "Committed to lifelong learning and professional development.",
      "Believe in the power of technology to make a difference.",
      "Committed to delivering high-quality software solutions.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance web apps using modern tech stacks.",
      "Focus on building responsive apps and following industry's best practices.",
      "Strive for continuous improvement and innovation in my work.",
      "Enjoy the process of bringing ideas to life through code.",
      "Love to collaborate with like-minded individuals to create amazing products.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Build tech products that solve real-world challenges at global scale.",
      "Advance as a full-stack developer with modern frameworks.",
      "Mentor aspiring developers and share knowledge.",
      "Stay updated with the latest trends in software development.",
      "Aim to contribute to products that make a positive impact on society.",
      "Strive for excellence in every line of code I write.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should simplify lives, not complicate them.",
      // "Innovation comes from curiosity and experimentation.",
      // "Embrace the challenges and celebrate the victories.",
      "Every bug is an opportunity to learn and improve.",
      "Believe that every line of code should add value to the user experience.",
      "Collaboration is key to building great products.",
      "Stay humble, stay hungry, and keep coding.",
      "Code should be easy to read, understand, and maintain.",
      // "Never stop exploring new technologies and ideas.",
      "In the end, it's all about creating value for users.",
    ],
    color: "bg-orange-600",
  },
];

function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return direction;
}

export function About() {
  const scrollDirection = useScrollDirection();
  const yMain = scrollDirection === "down" ? -40 : 40;
  const yGrid = scrollDirection === "down" ? -20 : 20;

  return (
    <SectionShell id="about" tone="muted">
      <motion.div
        initial={{ opacity: 0, y: yMain }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.0 }}
      >
        <SectionTitle
          // eyebrow="Profile"
          description={
            <>
              I'm{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-300">
                Victor Umaru
              </span>
              , a Software Engineer and BSc. Computer Science holder. I
              specialise in transforming ideas into scalable web applications
              and bringing product concepts to life through continuous learning,
              experimentation, and close collaboration.
            </>
          }
        >
          About Me
        </SectionTitle>

        <div className="mx-auto mb-12 flex max-w-3xl justify-center sm:mb-14">
          <span className="inline-flex rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-center text-sm font-medium text-primary-700 shadow-sm shadow-primary/5 dark:border-primary/25 dark:bg-primary/20 dark:text-primary-200 sm:text-base">
            If you can imagine it, I can bring it to life.
          </span>
        </div>
      </motion.div>

      {/* About Section Cards */}
      <motion.div
        initial={{ opacity: 0, y: yGrid }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.0 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-5 sm:gap-6"
      >
        {aboutSections.map(({ icon: Icon, title, description, color }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: yGrid }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: idx * 0.04,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.0 }}
            className="group relative h-full"
          >
            <div className="relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 sm:p-6">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`rounded-xl p-3 ${color} shadow-lg shadow-slate-950/10`}
                >
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-950 dark:text-white sm:text-xl">
                  {title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {description.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
