import { SectionTitle } from "./ui/SectionTitle";
import { SectionShell } from "./ui/SectionShell";
import React, { Suspense } from "react";
const ContactForm = React.lazy(() =>
  import("./ui/ContactForm").then((m) => ({ default: m.ContactForm })),
);
import { Mail, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// import Magnet from "./reactbits/Magnet/Magnet";

const softEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: softEase,
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: softEase },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: softEase },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: softEase },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: softEase },
  },
};

const contactLinkClass =
  "group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 shadow-sm shadow-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary-600 hover:shadow-md hover:shadow-primary/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-primary/30 dark:hover:bg-white/[0.07] dark:hover:text-primary-300 dark:hover:shadow-black/20";

const contactIconClass =
  "relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-300";

export function Contact() {
  return (
    <SectionShell id="contact" tone="default">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={sectionVariants}
      >
        <motion.div variants={contentItemVariants}>
          <SectionTitle
            // eyebrow="Contact"
            description="Have a product idea, website, or workflow that needs sharper execution? Send a message and I'll respond through WhatsApp."
          >
            <motion.span variants={contentItemVariants} className="inline-block">
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
              <motion.span variants={contentItemVariants} className="inline-block">
                Let's Connect...
              </motion.span>
            </h3>
            <motion.p
              variants={contentItemVariants}
              className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            >
              Bring your product idea, website, or workflow challenge and let's
              shape it into something reliable, polished, and useful.
            </motion.p>
            <motion.div
              variants={contentItemVariants}
              className="mb-6 flex"
            >
              <span className="inline-flex rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm shadow-primary/5 dark:border-primary/25 dark:bg-primary/20 dark:text-primary-200">
                Typically responds quickly on WhatsApp.
              </span>
            </motion.div>
            <div className="space-y-3">
              <motion.a
                href="mailto:veck404@gmail.com"
                className={contactLinkClass}
                variants={iconVariants}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Mail className={contactIconClass} />
                <span className="relative truncate">veck404@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/veck404/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
                variants={iconVariants}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Linkedin className={contactIconClass} />
                <span className="relative truncate">linkedin.com/in/veck404</span>
              </motion.a>
              <motion.a
                href="https://x.com/veck404"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
                variants={iconVariants}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Twitter className={contactIconClass} />
                <span className="relative truncate">x.com/veck404</span>
              </motion.a>
              <motion.a
                href="https://wa.me/2347066733522"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
                variants={iconVariants}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <FaWhatsapp className={contactIconClass} />
                <span className="relative truncate">+2347066733522</span>
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
                <div className="space-y-5" aria-label="Loading contact form">
                  <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200/80 dark:bg-white/10" />
                  <div className="h-12 animate-pulse rounded-xl bg-slate-100 dark:bg-white/[0.06]" />
                  <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200/80 dark:bg-white/10" />
                  <div className="h-12 animate-pulse rounded-xl bg-slate-100 dark:bg-white/[0.06]" />
                  <div className="h-5 w-24 animate-pulse rounded-full bg-slate-200/80 dark:bg-white/10" />
                  <div className="h-32 animate-pulse rounded-xl bg-slate-100 dark:bg-white/[0.06]" />
                  <div className="h-12 animate-pulse rounded-xl bg-slate-200/80 dark:bg-white/10" />
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
