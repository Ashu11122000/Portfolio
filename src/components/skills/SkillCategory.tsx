import SkillCard from "./SkillCard";

import { cn } from "../../utils/cn";

import type { SkillCategory as SkillCategoryType } from "../../types/skill";

/**
 * ==========================================================
 * SkillCategory Component
 * ==========================================================
 *
 * Premium wrapper around SkillCard.
 *
 * Responsibilities
 * ----------------
 * ✓ Section spacing
 * ✓ Decorative background
 * ✓ Hover glow
 * ✓ Responsive layout
 * ✓ Reusable
 *
 * Used By
 * ----------
 * - SkillGrid.tsx
 * ==========================================================
 */

interface SkillCategoryProps {
  category: SkillCategoryType;
  className?: string;
}

const SkillCategory = ({
  category,
  className,
}: SkillCategoryProps) => {
  return (
    <section
      className={cn(
        "group relative",
        "overflow-hidden rounded-[32px]",
        className
      )}
    >
      {/* Background Glow */}

      <div
        className={cn(
          "absolute -top-20 -right-20 h-48 w-48 rounded-full",
          "bg-gradient-to-br",
          category.color,
          "opacity-10 blur-3xl",
          "transition-all duration-700",
          "group-hover:opacity-25",
          "group-hover:scale-125"
        )}
      />

      {/* Bottom Glow */}

      <div
        className={cn(
          "absolute -bottom-24 -left-24 h-56 w-56 rounded-full",
          "bg-violet-500/10 blur-3xl"
        )}
      />

      {/* Decorative Border */}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[32px]",
          "border border-white/20",
          "dark:border-white/5"
        )}
      />

      {/* Card */}

      <div className="relative z-10">
        <SkillCard category={category} />
      </div>
    </section>
  );
};

export default SkillCategory;