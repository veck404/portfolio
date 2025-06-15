import { SectionTitle } from "./ui/SectionTitle";
import { ContactForm } from "./ui/ContactForm";
import { Mail, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// import Magnet from "./reactbits/Magnet/Magnet";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      {/* Background Elements */}

      <div className="container mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Let's Connect...
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:deepakmodi8676@gmail.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
                <span>victor7ultimate@gmail.com</span>
              </a>
              <a
                href="https://x.com/veck404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Twitter className="w-6 h-6" />
                <span>x.com.veck404</span>
              </a>
              <a
                href="https://wa.me/2347066733522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>+2347066733522</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
