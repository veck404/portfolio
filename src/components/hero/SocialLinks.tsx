import { Instagram, Facebook } from "lucide-react";
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
    href: "https://fb.com/veck404",
    icon: <Facebook className="w-6 h-6 text-[#0077B5]" />,
    label: "LinkedIn",
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
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-110 transform transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
