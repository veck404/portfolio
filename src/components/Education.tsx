// import React from 'react';
import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";

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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.degree}
              {...edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
