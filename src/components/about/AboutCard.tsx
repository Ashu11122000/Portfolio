import type { ReactNode } from "react";

import GlassCard from "../ui/GlassCard";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * About Card Component
 * ==========================================================
 *
 * Reusable glassmorphism card used throughout the
 * About section.
 *
 * Features
 * ----------
 * ✓ Premium Glass UI
 * ✓ Responsive
 * ✓ Hover Animation
 * ✓ Theme Aware
 * ✓ Reusable
 * ✓ Accessible
 *
 * Used By
 * ----------
 * ✓ PersonalInfo
 * ✓ EducationCard
 * ✓ Future Achievement Cards
 * ✓ Contact Cards
 *
 * ==========================================================
 */

interface AboutCardProps {
  /**
   * Card content.
   */
  children: ReactNode;

  /**
   * Optional title.
   */
  title?: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Additional Tailwind classes.
   */
  className?: string;
}

function AboutCard({ children, title, icon, className }: AboutCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2",
        "hover:scale-[1.015]",
        "hover:shadow-2xl",
        "hover:shadow-violet-500/20",
        className,
      )}
    >
      {/* Premium Ambient Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-violet-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-52
          w-52
          rounded-full
          bg-cyan-500/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Premium Glass Highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {(title || icon) && (
        <header className="relative z-10 mb-6 flex items-center gap-4">
          {icon && (
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl

                bg-gradient-to-br
                from-indigo-600
                via-violet-600
                to-fuchsia-600

                text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white

                shadow-xl
                shadow-violet-500/25

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              {icon}
            </div>
          )}

          {title && (
            <h3
              className="
                text-xl
                font-bold
                tracking-tight
                text-slate-900
               text-slate-900 dark:text-slate-900 dark:text-white
              "
            >
              {title}
            </h3>
          )}
        </header>
      )}

      <div className="relative z-10">{children}</div>
    </GlassCard>
  );
}

export default AboutCard;
