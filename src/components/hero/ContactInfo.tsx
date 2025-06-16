import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? "a" : "div";
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${
        href ? "hover:scale-105" : ""
      } transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5 py-4" />}
        text="☎️+234 7066733522"
        href="tel:+2347066733522"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5 py-4" />}
        text="📩victor7ultimate@gmail.com"
        href="mailto:victor7ultimate@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5 py-4" />}
        text="📍Nasarwa, Nigeria."
        href="https://maps.app.goo.gl/FYAJyyym5LRTwbfF9"
      />
    </div>
  );
}
