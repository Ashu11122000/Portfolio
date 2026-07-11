/**
 * ==========================================================
 * ExperienceTechBadge Component
 * ==========================================================
 *
 * Reusable technology badge for the Experience module.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Experience Module Specific
 * ✓ Responsive
 * ✓ Glassmorphism Styling
 * ✓ Hover Animation
 * ✓ Dark / Light Theme
 * ✓ Accessibility Friendly
 *
 * Used By
 * ----------
 * - ExperienceCard.tsx
 * - FeaturedExperience.tsx
 *
 * ==========================================================
 */

import type { FC } from "react";

import { Code2 } from "lucide-react";

import type { ExperienceTechnology } from "../../types/experience";

interface ExperienceTechBadgeProps {
  technology: ExperienceTechnology;
  className?: string;
}

const ExperienceTechBadge: FC<ExperienceTechBadgeProps> = ({
  technology,
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-3
        py-1.5
        text-xs
        font-medium
        text-primary
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-primary/40
        hover:bg-primary/15
        hover:shadow-lg
        hover:shadow-primary/10
        dark:border-primary/30
        dark:bg-primary/10
        ${className}
      `}
    >
      <Code2 size={14} strokeWidth={2} className="shrink-0" />

      <span>{technology.name}</span>
    </span>
  );
};

export default ExperienceTechBadge;
