import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "System Administrator Officer",
    company: "BRIcapital",
    period: "Jan 2026 - Present",
    description: `Managed and maintained critical IT infrastructure across multi-user systems, servers, and network devices to ensure performance and security.
Implemented and monitored cybersecurity measures plus data backup and recovery strategies to protect sensitive information.
Provided technical support and training to internal staff on essential IT systems and applications.
Built and deployed automation scripts to streamline repetitive office routines.`,
    skills: [
      "Infrastructure Management",
      "Cybersecurity",
      "Backup & Recovery",
      "Technical Support",
      "Automation Scripting",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Noorvale Studio",
    period: "Aug 2025 - Present",
    description: `Translate creative visions and product requirements into high-quality, scalable, and user-friendly web applications.
Collaborate closely with designers and stakeholders to align on product goals and deliverables.
Iterate on features through continuous learning, experimentation, and feedback to ship impactful digital solutions.`,
    skills: [
      "Front-End Development",
      "UI Implementation",
      "Stakeholder Collaboration",
      "Feature Iteration",
      "Scalable Web Apps",
    ],
  },
  {
    title: "System Analyst",
    company: "Phoenix University, Agwada.",
    period: "Mar 2024 - Jan 2026",
    description: `As a System Analyst at Phoenix University, my responsibilities encompass a broad range of technical and strategic functions aimed at enhancing the university's IT infrastructure and supporting academic operations.
    User Support & Training: Provided technical support and training to staff and students on software systems, cybersecurity best practices, and university portals.
    Infrastructure Support: Collaborated with the IT department to maintain servers, ensure network integrity, and manage software deployments.
    Data Management: Assisted in managing student and faculty databases, ensuring data integrity and security.
    Project Management: Participated in IT projects, including system upgrades and new software implementations, ensuring alignment with academic needs and compliance with university policies.`,
    skills: [
      "IT Support",
      "User Training",
      "Data Management",
      "Network Security",
      "Cybersecurity",
    ],
  },
  {
    title: "Product Manager",
    company: "Grainplus Logistics",
    period: "July 2024 - Present",
    description: `As a Product Manager at Grainplus Logistics, I am responsible for overseeing the development and management of our logistics platform, ensuring it meets the needs of our users and aligns with our business goals.
    My role involves collaborating with cross-functional teams, including developers, designers, and stakeholders, to define product requirements, prioritize features, and drive the product roadmap.
    I conduct market research to identify user needs and industry trends, translating these insights into actionable product strategies.
    Additionally, I monitor product performance metrics, gather user feedback, and implement improvements to enhance user experience and operational efficiency.
    My goal is to deliver a robust and user-friendly logistics platform that streamlines operations and adds value to our customers.`,
    skills: [
      "Product Management",
      "Agile Methodologies",
      "Cross-Functional Collaboration",
      "Market Research",
      "User Experience",
    ],
  },
  {
    title: "Software Developer",
    company: "NBE Agro Allied Farms.",
    period: "January 2024 - July 2024",
    description: `As a Software Developer at NBE Agro Allied Farms, I played a crucial role in developing and maintaining software solutions that support the agricultural operations of the company.
    My responsibilities included designing and implementing software applications to streamline management processes, such as logistics, inventory management, and data analysis.
    I collaborated with cross-functional teams to gather requirements, develop technical specifications, integrate payment gateway systems, and ensure the software met the needs of the end-users.
    Additionally, I was involved in testing and debugging software to ensure reliability and performance.
    My work contributed to improving operational efficiency and data-driven decision-making within the agricultural sector.`,
    skills: [
      "Software Development",
      "Application Design",
      "Data Analysis",
      "Testing and Debugging",
      "Cross-Functional Collaboration",
    ],
  },
  {
    title: "Data Editor",
    company: "National Bureau of Statistics, Abuja Nigeria",
    period: "Aug 2022 - October 2022",
    description: `Worked as a Data Editor at the National Bureau of Statistics, Abuja Nigeria, on the National Agricultural Sample Census (NASC) project where I was responsible for validating data collected from various sources.
    My role involved ensuring the accuracy and consistency of data entries, identifying discrepancies, and collaborating with field agents to resolve issues.
    I utilized statistical software to analyze data sets, generate reports, and assist in the preparation of statistical publications.
    This position required a keen eye for detail, strong analytical skills, and the ability to work under tight deadlines while maintaining high standards of data integrity.`,
    skills: [
      "Data Validation",
      "Statistical Analysis",
      "Report Generation",
      "Attention to Detail",
      "Collaboration",
    ],
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

export function Experience() {
  const scrollDirection = useScrollDirection();
  const yMain = scrollDirection === "down" ? -40 : 40;
  const yGrid = scrollDirection === "down" ? -20 : 20;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, y: yMain }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.0 }}
        className="container mx-auto px-8"
      >
        <SectionTitle>Experience</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: yGrid }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.0, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.0 }}
          className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: yGrid }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.0 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
