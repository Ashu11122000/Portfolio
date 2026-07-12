import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Theme Toggle
 * ==========================================================
 *
 * Toggle between Light and Dark themes.
 *
 * Features
 * ----------
 * ✓ Light/Dark Toggle
 * ✓ Accessible
 * ✓ Animated
 * ✓ Keyboard Friendly
 * ✓ Reusable
 *
 * ==========================================================
 */

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={cn(
        "group relative",
        "inline-flex h-12 w-12 items-center justify-center",
        "overflow-hidden",
        "rounded-2xl",

        "border border-white/20",
        "bg-white/70",
        "backdrop-blur-2xl",

        "ring-1 ring-white/10",

        "shadow-lg shadow-slate-300/20",

        "transition-all duration-300 ease-out",

        "hover:-translate-y-1",
        "hover:scale-105",

        "hover:border-indigo-400/40",

        "hover:bg-gradient-to-br",
        "hover:from-indigo-600",
        "hover:via-violet-600",
        "hover:to-fuchsia-600",

        "hover:shadow-2xl",
        "hover:shadow-violet-500/30",

        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-500/60",
        "focus:ring-offset-2",
        "focus:ring-offset-white",

        "dark:border-white/10",
        "dark:bg-slate-900/60",
        "dark:ring-white/5",
        "dark:shadow-black/30",
        "dark:focus:ring-offset-slate-950",

        className
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

      {isDark ? (
        <Sun
          size={20}
          className="
            relative z-10
            text-amber-300
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