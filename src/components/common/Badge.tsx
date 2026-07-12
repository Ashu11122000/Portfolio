import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Badge Component
 * ==========================================================
 *
 * A reusable premium badge component.
 *
 * Features
 * ----------
 * ✓ Multiple Variants
 * ✓ Multiple Sizes
 * ✓ Glassmorphism
 * ✓ Rounded Pill Design
 * ✓ Dark / Light Theme
 * ✓ Hover Animation
 * ✓ TypeScript
 * ✓ Reusable Across Entire Portfolio
 *
 * Used In
 * ----------
 * Experience
 * Projects
 * Skills
 * Certifications
 * Services
 * Resume
 * ==========================================================
 */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline";

  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: [
    "bg-gradient-to-br",
    "from-white/80",
    "to-slate-100/70",
    "text-slate-700",
    "border-white/50",
    "shadow-slate-200/40",
    "dark:from-slate-800/80",
    "dark:to-slate-900/70",
    "dark:text-slate-200",
    "dark:border-white/10",
  ],

  primary: [
    "bg-gradient-to-br",
    "from-indigo-500/20",
    "via-violet-500/15",
    "to-fuchsia-500/15",
    "text-indigo-700",
    "border-indigo-400/30",
    "shadow-indigo-500/20",
    "dark:from-indigo-500/25",
    "dark:via-violet-500/20",
    "dark:to-fuchsia-500/20",
    "dark:text-indigo-200",
    "dark:border-indigo-400/25",
  ],

  secondary: [
    "bg-gradient-to-br",
    "from-violet-500/20",
    "via-fuchsia-500/15",
    "to-pink-500/15",
    "text-violet-700",
    "border-violet-400/30",
    "shadow-violet-500/20",
    "dark:from-violet-500/25",
    "dark:via-fuchsia-500/20",
    "dark:to-pink-500/20",
    "dark:text-violet-200",
    "dark:border-violet-400/25",
  ],

  success: [
    "bg-gradient-to-br",
    "from-emerald-500/20",
    "via-green-500/15",
    "to-teal-500/15",
    "text-emerald-700",
    "border-emerald-400/30",
    "shadow-emerald-500/20",
    "dark:from-emerald-500/25",
    "dark:via-green-500/20",
    "dark:to-teal-500/20",
    "dark:text-emerald-200",
    "dark:border-emerald-400/25",
  ],

  warning: [
    "bg-gradient-to-br",
    "from-amber-500/20",
    "via-orange-500/15",
    "to-yellow-500/15",
    "text-amber-700",
    "border-amber-400/30",
    "shadow-amber-500/20",
    "dark:from-amber-500/25",
    "dark:via-orange-500/20",
    "dark:to-yellow-500/20",
    "dark:text-amber-200",
    "dark:border-amber-400/25",
  ],

  danger: [
    "bg-gradient-to-br",
    "from-red-500/20",
    "via-rose-500/15",
    "to-pink-500/15",
    "text-red-700",
    "border-red-400/30",
    "shadow-red-500/20",
    "dark:from-red-500/25",
    "dark:via-rose-500/20",
    "dark:to-pink-500/20",
    "dark:text-red-200",
    "dark:border-red-400/25",
  ],

  outline: [
    "bg-white/10",
    "text-slate-700",
    "border-slate-300/60",
    "shadow-slate-300/20",
    "dark:bg-white/5",
    "dark:text-slate-200",
    "dark:border-slate-600/60",
  ],
};

const sizeClasses = {
  sm: "px-2.5 py-1 text-xs",

  md: "px-3.5 py-1.5 text-sm",

  lg: "px-4.5 py-2 text-base",
};

function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "font-semibold",
        "tracking-wide",
        "backdrop-blur-xl",
        "whitespace-nowrap",
        "select-none",
        "transition-all",
        "duration-300",
        "shadow-lg",
        "shadow-black/5",
        "ring-1",
        "ring-white/10",
        "hover:-translate-y-1",
        "hover:scale-[1.04]",
        "hover:shadow-xl",
        "hover:shadow-black/10",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;