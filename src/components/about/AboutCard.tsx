import type { ReactNode } from "react";

import GlassCard from "../ui/GlassCard";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * About Card Component
 * ==========================================================
 *
 * Ultra Premium reusable glass card.
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Aurora Glow
 * ✓ Animated Shine
 * ✓ Floating Hover
 * ✓ Light & Dark Mode Optimized
 * ✓ Accessible Contrast
 * ✓ Responsive
 * ✓ Reusable
 *
 * ==========================================================
 */

interface AboutCardProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  className?: string;
}

function AboutCard({
  children,
  title,
  icon,
  className,
}: AboutCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative overflow-hidden rounded-3xl",

        /* Layout */
        "p-8",

        /* Border */
        "border border-slate-200/70 dark:border-white/10",

        /* Smooth Animation */
        "transition-all duration-700 ease-out",

        /* Premium Hover */
        "hover:-translate-y-2",
        "hover:scale-[1.02]",
        "hover:border-violet-400/40 dark:hover:border-violet-500/30",

        /* Shadows */
        "shadow-lg shadow-slate-900/5",
        "dark:shadow-black/30",
        "hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.35)]",

        className,
      )}
    >
      {/* ======================================================
          Aurora Glow
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-32
          -right-24
          h-72
          w-72
          rounded-full
          bg-violet-500/15
          blur-[100px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-72
          w-72
          rounded-full
          bg-cyan-400/15
          blur-[100px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ======================================================
          Gradient Border Overlay
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-white/20
          dark:border-white/5
        "
      />

      {/* ======================================================
          Premium Shine Effect
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/20
          to-transparent
          opacity-0
          transition-all
          duration-1000
          group-hover:translate-x-full
          group-hover:opacity-100
        "
      />

      {/* ======================================================
          Glass Highlight
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          rounded-3xl
          bg-linear-to-br
          from-white/20
          via-white/5
          to-transparent
          dark:from-white/10
          dark:via-transparent
          dark:to-transparent
        "
      />

      {(title || icon) && (
        <header className="relative z-10 mb-7 flex items-center gap-5">
          {icon && (
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl

                bg-linear-to-br
                from-indigo-500
                via-violet-600
                to-fuchsia-600

                text-white

                shadow-xl
                shadow-violet-500/30

                ring-1
                ring-white/20

                transition-all
                duration-500

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
                dark:text-white

                transition-colors
                duration-300
              "
            >
              {title}
            </h3>
          )}
        </header>
      )}

      <div className="relative z-10 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </GlassCard>
  );
}

export default AboutCard;