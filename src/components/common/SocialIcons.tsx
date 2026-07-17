import type { ComponentType } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Ultra Premium Social Icons
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ Gradient Hover
 * ✓ Theme Aware
 * ✓ Accessible
 * ✓ Animated Shine
 * ✓ GPU Accelerated
 * ✓ Production Ready
 * ==========================================================
 */

interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
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

function SocialIcons({
  className,
  iconSize = 20,
}: SocialIconsProps) {
  return (
    <nav
      aria-label="Social links"
      className={cn(
        "flex items-center gap-4",
        className
      )}
    >
      {socialLinks.map(({ name, href, icon: Icon }) => {
        const isExternal =
          href.startsWith("http") || href.startsWith("mailto:");

        return (
          <a
            key={name}
            href={href}
            aria-label={name}
            title={name}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              // Layout
              "group relative flex h-12 w-12 items-center justify-center",
              "overflow-hidden rounded-2xl",

              // Glass
              "bg-white/80 dark:bg-slate-900/70",
              "backdrop-blur-3xl",

              // Border
              "border border-slate-200/70",
              "dark:border-white/10",

              // Text
              "text-slate-700 dark:text-slate-200",

              // Shadow
              "shadow-lg shadow-slate-300/20",
              "dark:shadow-black/30",

              // Performance
              "transform-gpu will-change-transform",

              // Ring
              "ring-1 ring-white/20 dark:ring-white/5",

              // Animation
              "transition-all duration-300 ease-out",

              // Hover
              "hover:-translate-y-1.5",
              "hover:scale-110",

              "hover:border-violet-400/40",

              "hover:bg-linear-to-br",
              "hover:from-indigo-600",
              "hover:via-violet-600",
              "hover:to-fuchsia-600",

              "hover:text-white",

              "hover:shadow-2xl",
              "hover:shadow-violet-500/35",

              // Accessibility
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-violet-500/50",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-white",
              "dark:focus-visible:ring-offset-slate-950"
            )}
          >
            {/* Glass Highlight */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[inherit]
                bg-linear-to-b
                from-white/20
                via-transparent
                to-transparent
              "
            />

            {/* Animated Shimmer */}
            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-1/2
                w-1/2
                skew-x-[-20deg]
                bg-linear-to-r
                from-transparent
                via-white/25
                to-transparent
                opacity-0
                transition-all
                duration-700
                group-hover:left-[125%]
                group-hover:opacity-100
              "
            />

            {/* Glow */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                opacity-0
                blur-xl
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-violet-500/20
              "
            />

            <Icon
              size={iconSize}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:scale-110
                group-hover:rotate-3
              "
            />
          </a>
        );
      })}
    </nav>
  );
}

export default SocialIcons;