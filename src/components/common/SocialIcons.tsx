import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { cn } from "../../utils/cn";

interface SocialLink {
  name: string;
  href: string;
  // react-icons components accept className in addition to size
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Ashu11122000",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ashish-sharma-383439191",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ashu11vats@gmail.com",
    icon: MdEmail,
  },
];

function SocialIcons({ className, iconSize = 18 }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        const isExternal =
          social.href.startsWith("http") || social.href.startsWith("mailto:");

        return (
          <a
            key={social.name}
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.name}
            title={social.name}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center",

              "overflow-hidden rounded-2xl",

              "border border-white/20",

              "bg-white/70 backdrop-blur-2xl",

              "text-slate-700",

              "shadow-lg shadow-slate-300/20",

              "ring-1 ring-white/10",

              "transition-all duration-300 ease-out",

              "hover:-translate-y-1.5",
              "hover:scale-105",

              "hover:border-indigo-400/40",

              "hover:bg-gradient-to-br",
              "hover:from-indigo-600",
              "hover:via-violet-600",
              "hover:to-fuchsia-600",

              "hover:text-slate-900 dark:text-white",

              "hover:shadow-2xl",
              "hover:shadow-violet-500/30",

              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-indigo-500/60",
              "focus:ring-offset-2",
              "focus:ring-offset-white",

              "dark:border-white/10",
              "dark:bg-slate-900/60",
              "dark:text-slate-700 dark:text-slate-300",
              "dark:shadow-black/30",
              "dark:ring-white/5",
              "dark:hover:shadow-violet-500/25",
              "dark:focus:ring-offset-slate-950",
            )}
          >
            {/* Premium Shine */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-gradient-to-br
                from-white/25
                via-transparent
                to-transparent
              "
            />

            <Icon
              size={iconSize}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
