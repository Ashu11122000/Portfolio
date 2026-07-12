import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Gradient Text
 * ==========================================================
 */

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block",

        "bg-gradient-to-r",
        "from-indigo-500",
        "via-violet-500",
        "via-55%",
        "to-fuchsia-500",

        "bg-clip-text",
        "text-transparent",

        "antialiased",
        "selection:text-white",

        className
      )}
    >
      {children}
    </span>
  );
}

export default GradientText;