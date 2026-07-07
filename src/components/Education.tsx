// import React from 'react';
import { SectionTitle } from "./ui/SectionTitle";
import { SectionShell } from "./ui/SectionShell";
import { EducationCard } from "./ui/EducationCard";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor Degree in Computer Science",
    institution: "Nasarawa State University, Keffi.",
    period: "2014 - 2018",
    honor: "BSc. Certified",
  },
  {
    degree: "O'Level Certification",
    institution: "ECWA Peace College, Nasarawa.",
    period: "2006 - 2012",
    honor: "O'Level Certified",
  },
  // {
  //   degree: "Primary School Certification",
  //   institution: "St. Kizito Nursary & Primary School, Nasarawa.",
  //   period: "1997 - 2006",
  //   honor: "Primary School Certificate",
  // },
];

export function Education() {
  return (
    <SectionShell id="education" tone="muted">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Credentials"
          description="Formal foundations that support the practical engineering and product work."
        >
          Education
        </SectionTitle>
      </motion.div>
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-5 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.25,
              delay: index * 0.08,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <EducationCard {...edu} isLast={index === education.length - 1} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
