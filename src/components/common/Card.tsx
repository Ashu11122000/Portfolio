import { forwardRef } from "react";

import { cn } from "../../utils/cn";

import type { HTMLAttributes } from "react";

/**
 * ==========================================================
 * Card Component
 * ==========================================================
 *
 * Premium reusable card component used throughout
 * the portfolio application.
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Hover Animation
 * ✓ Border Glow
 * ✓ Responsive
 * ✓ Dark / Light Theme
 * ✓ Forward Ref Support
 * ✓ Custom className
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 *
 * Used By
 * ----------
 * - Hero Stats
 * - About Cards
 * - Education Cards
 * - Skill Cards
 * - Experience Cards
 * - Project Cards
 * - Certification Cards
 * - Contact Cards
 *
 * ==========================================================
 */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glass = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-3xl",

          "p-6",

          "border border-white/20 dark:border-white/10",

          glass
            ? "bg-white/70 backdrop-blur-2xl dark:bg-slate-900/60"
            : "bg-white dark:bg-slate-900",

          "shadow-xl shadow-slate-300/10 dark:shadow-black/30",

          "transition-all duration-500 ease-out",

          hover && [
            "hover:-translate-y-2",
            "hover:scale-[1.015]",
            "hover:border-violet-400/40",
            "hover:shadow-2xl",
            "hover:shadow-violet-500/15",
          ],

          className
        )}
        {...props}
      >
        {/* Premium Border Highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />

        {/* Ambient Glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
            hover && "group-hover:opacity-100"
          )}
        >
          <div
            className="
              absolute
              -top-24
              right-0
              h-52
              w-52
              rounded-full
              bg-violet-500/15
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-12
              h-52
              w-52
              rounded-full
              bg-cyan-500/15
              blur-3xl
            "
          />
        </div>

        {/* Soft Shine */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;