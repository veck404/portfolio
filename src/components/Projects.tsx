// import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiVite,
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: "#00cfff" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#228b22" },
  firebase: { icon: SiFirebase, name: "Firebase", color: "#fbbf00" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06b6d4" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#1f6feb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#10b981" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#186997" },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: "#6366f1" },
  framer: { icon: SiFramer, name: "Framer Motion", color: "#2563eb" },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: "#" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#5b4df1" },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: "#ff3d00" },
  vite: { icon: SiVite, name: "Vite", color: "#646cff" },
};

// Define projects data
const projects = [
  {
    title: 'Noorvale Studio',
    description: 'Noorvale studio is a',
    image: '/assets/noorvalestudio.png',
    link: 'https://noorvalestudio.com',
    // github: 'https://github.com/xxx,
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
    title: "BlackCode",
    description:
      "A coding platform with curated DSA sheets, roadmaps, CS articles, and a community forum for students to share resources and discuss challenges.",
    image: "/assets/blackcode.png",
    link: "https://bl4ck-code.vercel.app/",
    // github: "https://github.com/veck404/BlackCode",
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
      techStacks.vite,
    ],
  },
  
  {
    title: "NBE Agro Allied Farms",
    description:
      "A comprehensive farm management system for NBE Agro Allied Farms, enabling efficient management of farm operations, logistics, and data analytics.",
    image: "/assets/NBE.jpg",
    link: "https://nbeagrofarms.com",
    // github: "https://github.com/",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },
  {
    title: "GrainPlus Logistics",
    description:
      "A logistics platform for GrainPlus, providing real-time tracking, order management, and analytics for efficient supply chain operations.",
    image: "/assets/grainplus.jpg",
    link: "app.grainplus.org",
    // github: "https://github.com/",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },
  {
    title: "Portfolio Webpage",
    description:
      "My personal portfolio webpage showcasing my projects, skills, and contact information. Built with modern web technologies for a responsive and engaging user experience.",
    image: "/assets/portfolio_dark.png",
    link: "https://vector404.vercel.app",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      // techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
