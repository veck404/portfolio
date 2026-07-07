import { Instagram, Facebook, Linkedin } from "lucide-react";
// import { BsTelegram } from "react-icons/bs";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  // {
  //   href: 'https://github.com/decodewithdeepak',
  //   icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
  //   label: 'GitHub',
  // },
  {
    href: "https://www.linkedin.com/in/veck404/",
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: "LinkedIn",
  },
  {
    href: "https://fb.com/veck404",
    icon: <Facebook className="w-6 h-6 text-[#1877F2]" />,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/veck404",
    icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
    label: "Instagram",
  },
  {
    href: "https://wa.me/2347066733522",
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: "WhatsApp",
  },
  {
    href: "https://t.me/veck404",
    icon: <FaTelegram className="w-6 h-6" />,
    label: "Telegram",
  },
  {
    href: "https://x.com/veck404",
    icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: "Twitter",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white/70 shadow-sm shadow-slate-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20 dark:hover:bg-slate-900"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
