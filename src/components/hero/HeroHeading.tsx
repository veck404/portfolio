import React from "react";
import { TypeWriter } from "../ui/TypeWriter";

interface HeroHeadingProps {
  roles: string[];
}

export function HeroHeading({ roles }: HeroHeadingProps) {
  return (
    <div className="space-y-2">
      <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
        Hello!{" "}
        <span className="inline-block origin-[70%_70%] animate-wave" role="img" aria-label="Waving hand and smile emoji">
          👋😊
        </span>{" "}
        I'm
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
        Victor Umaru
      </h1>
      <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        I'm a <TypeWriter words={roles} delay={100} />
      </div>
    </div>
  );
}
