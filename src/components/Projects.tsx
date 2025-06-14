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
};

// Define projects data
const projects = [
  // {
  //   title: 'NotesNeo',
  //   description: 'A notes sharing platform for university students with subject-wise notes, authentication, and personalised user dashboard to manage uploaded content.',
  //   image: '/assets/notesneo.webp',
  //   link: 'https://notesneo.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/notesneo',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.tailwind,
  //     techStacks.typescript,
  //     techStacks.firebase,
  //   ],
  // },
  // {
  //   title: 'NeoCode',
  //   description: 'A coding platform with curated DSA sheets, roadmaps, CS articles, and a community forum for students to share resources and discuss challenges.',
  //   image: '/assets/neocode.webp',
  //   link: 'https://neocoding.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/neocode',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.tailwind,
  //     techStacks.typescript,
  //     techStacks.mongodb,
  //     techStacks.prisma,
  //   ],
  // },
  // {
  //   title: 'NeoCompiler',
  //   description: 'An online compiler supporting multiple languages with auth, themes, and AI-assisted suggestions. Users can write, run, and share code snippets easily.',
  //   image: '/assets/neocompiler.webp',
  //   link: 'https://neocompiler.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/neo-compiler',
  //   techStack: [
  //     techStacks.next,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.mongodb,
  //     techStacks.prisma,
  //     techStacks.shadcn,
  //   ],
  // },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.",
    image: "/assets/portfolio.webp",
    link: "https://deepakmodi.vercel.app",
    github: "https://github.com/decodewithdeepak/portfolio",
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
    title: "Braineo",
    description:
      "An online AI learning platform with courses, quizzes, and user authentication. Users can track progress and manage their learning journey.",
    image: "/assets/braineo.webp",
    link: "https://braineo.vercel.app",
    github: "https://github.com/decodewithdeepak/braineo",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.appwrite,
      techStacks.framer,
    ],
  },
  {
    title: "Placify",
    description:
      "A campus placement platform connecting students with recruiters. Features job listings, company profiles, and application tracking.",
    image: "/assets/placify.webp",
    github: "https://github.com/decodewithdeepak/placify",
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  {
    title: "NeoFolio",
    description:
      "A portfolio website template for developers, showcasing projects and skills. Built with modern web technologies for easy customization.",
    image: "/assets/neofolio.webp",
    link: "https://neofolio.vercel.app",
    github: "https://github.com/decodewithdeepak/neofolio",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },
  {
    title: "Finneo",
    description:
      "An AI-powered investment platform that helps beginners understand and plan their investments based on risk, capital, age, and financial goals.",
    image: "/assets/finneo.webp",
    link: "https://finneo.vercel.app",
    github: "https://github.com/decodewithdeepak/finneo",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },
  {
    title: "Ajay Sharma",
    description:
      "A freelance project built for Ajay Sharma, a self-empowerment coach. Designed landing page, pricing section, and integrated payments.",
    image: "/assets/ajaysharma.webp",
    link: "https://ajay-sharma.vercel.app",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
