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
      className={`inline-flex min-h-9 items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
        href ? "hover:-translate-y-0.5 hover:bg-slate-950/[0.04] dark:hover:bg-white/[0.06]" : ""
      } transition-all duration-200`}
    >
      <span className="text-primary-600 dark:text-primary-300">{icon}</span>
      <span className="text-slate-600 dark:text-slate-300">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-1 md:items-start">
      <ContactItem
        icon={<Phone className="h-4 w-4" />}
        text="+234 7066733522"
        href="tel:+2347066733522"
      />
      <ContactItem
        icon={<Mail className="h-4 w-4" />}
        text="veck404@gmail.com"
        href="mailto:veck404@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="h-4 w-4" />}
        text="Abuja, Nigeria"
        href="https://www.google.com/maps/place/Abuja,+Nigeria"
      />
    </div>
  );
}
