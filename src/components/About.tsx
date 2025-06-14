import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A front-end developer committed to delivering high-quality product.",
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

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" /> */}
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! 👋 I'm{" "}
            <span className="text-blue-600 font-semibold">Victor Umaru</span>, a
            Front-end Developer and a BSc. Computer Science holder. I love
            transforming ideas into scalable web applications and bringing ideas
            to life. My journey in tech revolves around continuous learning,
            experimenting with new technologies, colaborating with talented
            individuals and building solutions that make an impact.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 I like to build products and solve problems
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div
                className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                  </h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
