import { SectionTitle } from "./ui/SectionTitle";
import React, { Suspense } from "react";
const ContactForm = React.lazy(() =>
  import("./ui/ContactForm").then((m) => ({ default: m.ContactForm }))
);
import { Mail, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import Magnet from "./reactbits/Magnet/Magnet";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", bounce: 0.25 },
  },
};

const iconVariants = {
  hidden: { scale: 0.7, rotate: -20, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 18, duration: 0.5 },
  },
};

const orbVariants = {
  initial: { opacity: 0, scale: 0.7, y: 0 },
  animate: {
    opacity: 0.18,
    scale: 1,
    y: [0, 30, 0, -30, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const gradientBorder =
  "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-blue-400/40 before:via-purple-400/30 before:to-blue-400/40 before:blur before:z-[-1] before:opacity-60";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative"
    >
      {/* Animated Floating Orb - now in a dedicated container that does not affect layout */}
      <div className="pointer-events-none absolute inset-0 w-full h-full -z-10 overflow-visible">
        <motion.div
          variants={orbVariants}
          initial="initial"
          animate="animate"
          className="hidden md:block absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-blue-400/30 dark:bg-blue-700/30 rounded-full blur-3xl"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          <SectionTitle>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
              className="inline-block"
            >
              Get In Touch
            </motion.span>
          </SectionTitle>
        </motion.div>
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Left Column: Contact Info */}
          <motion.div
            variants={columnVariants}
            className={`bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg relative overflow-hidden ${gradientBorder}`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
                className="inline-block"
              >
                Let's Connect...
              </motion.span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              Bring those your wonderful ideads and lets bring it to life. I am
              quick, reliable. Lets build the future together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                type: "spring",
                bounce: 0.3,
              }}
              className="mt-6 flex justify-center"
            >
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow mb-8">
                ⚡ Typically respond to Whatsapp Messages in a flash!
              </span>
            </motion.div>
            <div className="space-y-4">
              <motion.a
                href="mailto:veck404@gmail.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Mail className="w-6 h-6" />
                <span>veck404@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/veck404/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/veck404</span>
              </motion.a>
              <motion.a
                href="https://x.com/veck404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Twitter className="w-6 h-6" />
                <span>x.com/veck404</span>
              </motion.a>
              <motion.a
                href="https://wa.me/2347066733522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>+2347066733522</span>
              </motion.a>
            </div>
          </motion.div>
          {/* Right Column: Contact Form */}
          <motion.div
            variants={columnVariants}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.2,
              delay: 0.2,
            }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center">
                  Loading form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
