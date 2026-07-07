import { SectionTitle } from "./ui/SectionTitle";
import { SectionShell } from "./ui/SectionShell";
import React, { Suspense } from "react";
const ContactForm = React.lazy(() =>
  import("./ui/ContactForm").then((m) => ({ default: m.ContactForm }))
);
import { Mail, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import Magnet from "./reactbits/Magnet/Magnet";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.16,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -36, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, type: "spring", bounce: 0.18 },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 36, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, type: "spring", bounce: 0.18 },
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

export function Contact() {
  return (
    <SectionShell id="contact" tone="default">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        >
          <SectionTitle
            eyebrow="Contact"
            description="Have a product idea, website, or workflow that needs sharper execution? Send a message and I'll respond through WhatsApp."
          >
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
          className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8"
          variants={gridVariants}
        >
          {/* Left Column: Contact Info */}
          <motion.div
            variants={leftColumnVariants}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 sm:p-6 lg:p-8"
          >
            <h3 className="mb-4 font-heading text-2xl font-semibold tracking-[-0.01em] text-slate-950 dark:text-white">
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
              className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            >
              Bring your product idea, website, or workflow challenge and let's
              shape it into something reliable, polished, and useful.
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
              className="mb-6 flex"
            >
              <span className="inline-flex rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm shadow-primary/5 dark:border-primary/25 dark:bg-primary/20 dark:text-primary-200">
                Typically responds quickly on WhatsApp.
              </span>
            </motion.div>
            <div className="space-y-3">
              <motion.a
                href="mailto:veck404@gmail.com"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-primary-300"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span className="truncate">veck404@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/veck404/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-primary-300"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                <span className="truncate">linkedin.com/in/veck404</span>
              </motion.a>
              <motion.a
                href="https://x.com/veck404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-primary-300"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <Twitter className="h-5 w-5 shrink-0" />
                <span className="truncate">x.com/veck404</span>
              </motion.a>
              <motion.a
                href="https://wa.me/2347066733522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-primary-300"
                variants={iconVariants}
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" />
                <span className="truncate">+2347066733522</span>
              </motion.a>
            </div>
          </motion.div>
          {/* Right Column: Contact Form */}
          <motion.div
            variants={rightColumnVariants}
            className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-950/5 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 sm:p-6 lg:p-8"
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
    </SectionShell>
  );
}
