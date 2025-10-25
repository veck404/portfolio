// import React from "react";
import { motion } from "framer-motion";
import { HeroHeading } from "./HeroHeading";
import { HeroContacts } from "./HeroContacts";

interface HeroColumnLeftProps {
  roles: string[];
}

export function HeroColumnLeft({ roles }: HeroColumnLeftProps) {
  return (
    <motion.div
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 order-2 md:order-1"
    >
      <HeroHeading roles={roles} />
      <HeroContacts />
    </motion.div>
  );
}
