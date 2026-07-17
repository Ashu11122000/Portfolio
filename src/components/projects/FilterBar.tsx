/**
 * ==========================================================
 * FilterBar Component
 * ==========================================================
 *
 * Ultra Premium Project Filter
 *
 * Features
 * ----------
 * ✓ Premium Glass Container
 * ✓ Light/Dark Optimized
 * ✓ Animated Active Button
 * ✓ Premium Gradient
 * ✓ Smooth Hover Effects
 * ✓ Responsive
 * ✓ Accessible
 * ✓ TypeScript
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
        role="tablist"
        aria-label="Project Categories"
        className="
          inline-flex
          flex-wrap
          items-center
          justify-center
          gap-3

          rounded-full

          border
          border-zinc-200/80
          dark:border-white/10

          bg-white/80
          dark:bg-white/5

          p-2

          backdrop-blur-2xl

          shadow-xl
          shadow-zinc-900/5
          dark:shadow-black/20
        "
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <Button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(filter)}
              className={`
                relative
                overflow-hidden

                rounded-full

                px-6
                py-2.5

                text-sm
                font-semibold
                tracking-wide

                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      bg-linear-to-r
                      from-cyan-500
                      via-sky-500
                      to-violet-600

                      text-white

                      shadow-lg
                      shadow-cyan-500/30

                      hover:scale-105
                      hover:shadow-cyan-500/40
                    `
                    : `
                      bg-transparent

                      text-zinc-700
                      dark:text-zinc-400

                      hover:bg-zinc-100
                      dark:hover:bg-white/10

                      hover:text-zinc-900
                      dark:hover:text-white

                      hover:shadow-md
                    `
                }
              `}
            >
              {/* Active Glow */}

              {isActive && (
                <span
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-white/10

                    opacity-50
                  "
                />
              )}

              <span className="relative z-10">
                {filter}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;