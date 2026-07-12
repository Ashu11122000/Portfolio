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
  "group relative inline-flex h-11 w-11 items-center justify-center",
  "rounded-2xl overflow-hidden",

  "border border-slate-200/70",
  "bg-white/70 backdrop-blur-xl",

  "shadow-lg transition-all duration-300",

  "hover:-translate-y-0.5",
  "hover:border-violet-400/40",
  "hover:shadow-violet-500/20",

  "dark:border-slate-700",
  "dark:bg-slate-900/70",

  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-violet-500/40",

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