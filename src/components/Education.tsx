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
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.16 }}
      >
        <SectionTitle
          // eyebrow="Credentials"
          description="Formal foundations that support the practical engineering and product work."
        >
          Education
        </SectionTitle>
      </motion.div>
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-5 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.05,
            },
          },
        }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.08,
            }}
            viewport={{ once: false, amount: 0.16 }}
          >
            <EducationCard {...edu} isLast={index === education.length - 1} />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
