/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // Handle input changes and update form data state
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    // Set status to submitting and clear any previous error message
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/veck404@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Portfolio contact from ${formData.name || "Website"}`,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        // Reset form data on successful submission
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "Something went wrong. Please try again."
          // Set error message based on response or a default
        );
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage(
        "An unexpected error occurred. Please reach out via WhatsApp instead."
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
        {status === "submitting" ? "Sending..." : "Send Message"}
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
          Message sent successfully!
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
