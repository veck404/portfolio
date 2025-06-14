// import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiMongodb,
  SiGit,
  SiGithub,
  SiReact,
  SiTailwindcss,
  // SiTypescript,
  // SiNextdotjs,
  // SiRedux,
  // SiExpress,
  // SiGraphql,
  // SiPrisma,
  // SiCplusplus,
  // SiPostman,
  SiVite,
  SiVercel,
} from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#3178c6",
    url: "https://www.flutter.dev/",
  },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ffca28",
    url: "https://firebase.google.com/",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    url: "https://www.python.org/",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
    url: "https://code.visualstudio.com/",
  },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      {/* Background Elements */}

      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              url={tech.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
