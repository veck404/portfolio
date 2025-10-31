import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { label: "React", tone: "primary" as const },
  node: { label: "Node.js", tone: "muted" as const },
  firebase: { label: "Firebase", tone: "accent" as const },
  tailwind: { label: "Tailwind CSS", tone: "accent" as const },
  typescript: { label: "TypeScript", tone: "primary" as const },
  next: { label: "Next.js", tone: "muted" as const },
  mongodb: { label: "MongoDB", tone: "accent" as const },
  prisma: { label: "Prisma", tone: "muted" as const },
  shadcn: { label: "shadcn/ui", tone: "muted" as const },
  framer: { label: "Framer Motion", tone: "accent" as const },
  socket: { label: "Socket.io", tone: "muted" as const },
  stripe: { label: "Stripe", tone: "accent" as const },
  appwrite: { label: "Appwrite", tone: "muted" as const },
  vite: { label: "Vite", tone: "primary" as const },
};

// Define projects data
const projects = [
  {
    title: "Noorvale Studio",
    description:
      "A boutique creative studio site with immersive art direction, interactive case studies, and optimized messaging funnels for lead capture.",
    image: "/assets/noorvalestudio.png",
    link: "https://noorvalestudio.com",
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
    link: "https://app.grainplus.org",
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
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-24 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-soft-radial opacity-70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-section-gradient" />

      <div className="container relative">
        <div className="mb-6 text-center">
          <p className="tracking-widest text-xs font-semibold uppercase text-primary/70">
            Featured Work
          </p>
          <SectionTitle>Projects</SectionTitle>
          <p className="mx-auto max-w-2xl text-balance text-sm text-slate-500 dark:text-slate-400 md:text-base">
            A curated mix of client engagements and personal experiments focused
            on performance, delightful interactions, and resilient engineering.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
