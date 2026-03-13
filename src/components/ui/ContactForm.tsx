/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";

const WHATSAPP_NUMBER = "2347066733522";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form element with onSubmit handler */}
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
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
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            // Input field for name with styling and icon padding
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
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
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            // Input field for email with styling and icon padding
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-600">
            {/* Comment icon */}
            <FaRegCommentDots className="w-5 h-5" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows={4}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            // Textarea for message with styling and icon padding
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        // Disable button while submitting
        className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
          status === "submitting"
            ? "bg-blue-400"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        // Button styling based on submission status
      >
        {status === "submitting" ? "Opening WhatsApp..." : "Send via WhatsApp"}
        {status !== "submitting" && (
          <LuMessageSquareShare className="w-5 h-5" />
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
          className="text-green-600 text-center mt-4 font-bold text-lg drop-shadow-lg"
        >
          <span className="inline-block animate-bounce mr-2">🎉</span>
          WhatsApp opened with your message draft!
          <span className="inline-block animate-bounce ml-2">🚀</span>
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
          className="text-red-600 text-center mt-4 font-bold text-lg drop-shadow-lg"
        >
          <span className="inline-block animate-bounce mr-2">❌</span>
          {errorMessage}
          <span className="inline-block animate-bounce ml-2">😢</span>
        </motion.p>
      )}
    </form>
  );
}
