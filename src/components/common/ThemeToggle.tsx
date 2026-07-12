import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Theme Toggle
 * ==========================================================
 *
 * Premium Light / Dark Toggle
 *
 * Features
 * ----------
 * ✓ Light / Dark Mode
 * ✓ Accessible
 * ✓ Glassmorphism
 * ✓ Keyboard Friendly
 * ✓ Premium Animations
 * ✓ Tailwind CSS v4
 *
 * ==========================================================
 */

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    toggleTheme();

    /**
     * Remove mouse focus after clicking.
     * Keyboard users still receive focus.
     */
    event.currentTarget.blur();
  };

  return (
    <button
      type="button"
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={isDark}
      onClick={handleToggle}
      className={cn(
        "group relative inline-flex h-11 w-11 items-center justify-center",

        "overflow-hidden rounded-2xl",

        "border border-slate-200/70",
        "bg-white/70",

        "backdrop-blur-xl",

        "shadow-lg",

        "transition-all duration-300",

        "hover:-translate-y-0.5",
        "hover:scale-105",

        "hover:border-violet-400/40",
        "hover:shadow-xl",
        "hover:shadow-violet-500/20",

        "dark:border-slate-700",
        "dark:bg-slate-900/70",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-violet-500/40",

        className
      )}
    >
      {/* Shine */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-linear-to-br
          from-white/20
          via-transparent
          to-transparent
        "
      />

      {isDark ? (
        <Sun
          size={20}
          className="
            relative z-10
            text-amber-400
            transition-all
            duration-500
            group-hover:rotate-180
            group-hover:scale-110
          "
        />
      ) : (
        <Moon
          size={20}
          className="
            relative z-10
            text-slate-700
            transition-all
            duration-500
            group-hover:-rotate-12
            group-hover:scale-110
            dark:text-slate-200
          "
        />
      )}
    </button>
  );
}

export default ThemeToggle;