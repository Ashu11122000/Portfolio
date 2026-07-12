/**
 * ==========================================================
 * FilterBar Component
 * ==========================================================
 *
 * Ultra Premium Project Filter
 *
 * Features
 * ----------
 * ✓ Glassmorphism Container
 * ✓ Gradient Active Button
 * ✓ Smooth Hover Animations
 * ✓ Responsive
 * ✓ Strongly Typed
 * ✓ Accessible
 * ✓ Reusable
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - ProjectGrid.tsx
 * ==========================================================
 */

import type { FC } from "react";

import Button from "../common/Button";

import type { ProjectCategory } from "../../types/project";

export type ProjectFilter = "All" | ProjectCategory;

interface FilterBarProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const filters: ProjectFilter[] = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
];

const FilterBar: FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className="
          inline-flex
          flex-wrap
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-white/5
          p-2
          shadow-xl
          shadow-black/20
          backdrop-blur-2xl
        "
        role="tablist"
        aria-label="Project Categories"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <Button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              aria-pressed={isActive}
              className={`
                relative
                rounded-full
                px-6
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  isActive
                    ? `
                      bg-gradient-to-r
                      from-cyan-500
                      via-indigo-500
                      to-violet-600
                      text-white
                      shadow-lg
                      shadow-cyan-500/30
                      hover:scale-105
                    `
                    : `
                      bg-transparent
                      text-slate-400
                      hover:bg-white/8
                      hover:text-white
                      hover:shadow-md
                    `
                }
              `}
            >
              {filter}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;