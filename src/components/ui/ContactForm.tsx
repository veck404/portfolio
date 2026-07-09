/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";

const WHATSAPP_NUMBER = "2347066733522";

const fieldIconClass =
  "pointer-events-none absolute left-3 flex text-slate-400 transition-all duration-300 group-hover:text-primary-500 group-focus-within:scale-105 group-focus-within:text-primary-600 dark:group-hover:text-primary-300 dark:group-focus-within:text-primary-300";

const inputClass =
  "min-h-12 w-full rounded-xl border border-slate-200/80 bg-slate-50/80 py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm shadow-transparent outline-none transition-all duration-300 placeholder:text-slate-400 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:shadow-md hover:shadow-primary/5 focus:translate-y-0 focus:border-primary/50 focus:bg-white focus:shadow-lg focus:shadow-primary/10 focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-primary/25 dark:hover:bg-white/[0.07] dark:focus:bg-white/[0.06]";

const textareaClass =
  "w-full resize-none rounded-xl border border-slate-200/80 bg-slate-50/80 py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm shadow-transparent outline-none transition-all duration-300 placeholder:text-slate-400 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:shadow-md hover:shadow-primary/5 focus:translate-y-0 focus:border-primary/50 focus:bg-white focus:shadow-lg focus:shadow-primary/10 focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-primary/25 dark:hover:bg-white/[0.07] dark:focus:bg-white/[0.06]";

export function ContactForm() {
  // State to manage form data (name, email, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track the submission status (idle, submitting, success, error)
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // Handle input changes and update form data state
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    // Set status to submitting and clear any previous error message
    setStatus("submitting");
    setErrorMessage("");

    try {
      const message = [
        "Hello Victor, I am reaching you from your portfolio contact form.",
        "",
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        "Message:",
        formData.message.trim(),
      ].join("\n");

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message,
      )}`;

      const whatsappWindow = window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer",
      );

      if (!whatsappWindow) {
        window.location.href = whatsappUrl;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset the form
    } catch (error) {
      setErrorMessage(
        "Could not open WhatsApp. Please try again or use the direct WhatsApp link.",
      );
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Form element with onSubmit handler */}
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Name
        </label>
        <div className="group relative">
          <div className={`${fieldIconClass} inset-y-0 items-center`}>
            {/* User icon */}
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className={inputClass}
            // Input field for name with styling and icon padding
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Email
        </label>
        <div className="group relative">
          <div className={`${fieldIconClass} inset-y-0 items-center`}>
            {/* Mail icon */}
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className={inputClass}
            // Input field for email with styling and icon padding
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          Message
        </label>
        <div className="group relative">
          <div className={`${fieldIconClass} top-3.5`}>
            {/* Comment icon */}
            <FaRegCommentDots className="w-5 h-5" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Drop your message..."
            rows={5}
            className={textareaClass}
            // Textarea for message with styling and icon padding
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        // Disable button while submitting
        className={`group relative flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-300 ${
          status === "submitting"
            ? "bg-primary-400 text-white shadow-primary/10"
            : "bg-slate-950 text-white shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-primary/20 dark:bg-white dark:text-slate-950 dark:hover:bg-primary-300 dark:hover:shadow-primary/10"
        }`}
        // Button styling based on submission status
      >
        {status !== "submitting" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-slate-950/10" />
        )}
        <span className="relative">
          {status === "submitting" ? "Opening WhatsApp..." : "Send via WhatsApp"}
        </span>
        {status !== "submitting" && (
          <LuMessageSquareShare className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <motion.p
          initial={{ scale: 0.7, rotate: -10, opacity: 0, y: 30 }}
          animate={{
            scale: [1.2, 0.95, 1.05, 1],
            rotate: [0, 8, -8, 0],
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            duration: 0.9,
          }}
          className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-300"
        >
          WhatsApp opened with your message draft!
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ scale: 0.7, rotate: 10, opacity: 0, y: 30 }}
          animate={{
            scale: [1.2, 0.95, 1.05, 1],
            rotate: [0, -8, 8, 0],
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
            duration: 0.9,
          }}
          className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-700 dark:text-red-300"
        >
          {errorMessage}
        </motion.p>
      )}
    </form>
  );
}
