/**
 * ==========================================================
 * SearchBar Component
 * ==========================================================
 *
 * Ultra Premium Search Bar
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Animated Search Icon
 * ✓ Premium Focus Ring
 * ✓ Smooth Hover Effects
 * ✓ Clear Button Animation
 * ✓ Fully Responsive
 * ✓ Accessible
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - ProjectGrid.tsx
 * ==========================================================
 */

import type { ChangeEvent, FC } from "react";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search projects...",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const clearSearch = () => {
    onChange("");
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500/10
          via-indigo-500/10
          to-violet-500/10
          blur-xl
        "
      />

      {/* Search Container */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          transition-all
          duration-300
          focus-within:border-cyan-400/40
          focus-within:shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
      >
        {/* Decorative Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/5
            via-transparent
            to-violet-500/5
            opacity-0
            transition-opacity
            duration-500
            group-focus-within:opacity-100
          "
        />

        {/* Search Icon */}

        <Search
          size={20}
          className="
            pointer-events-none
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-slate-500
            transition-all
            duration-300
            group-focus-within:text-cyan-400
            group-focus-within:scale-110
          "
        />

        {/* Input */}

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label="Search projects"
          autoComplete="off"
          spellCheck={false}
          className="
            relative
            h-16
            w-full
            bg-transparent
            pl-14
            pr-14
            text-base
            text-white
            outline-none
            placeholder:text-slate-500
          "
        />

        {/* Clear Button */}

        {value && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              absolute
              right-5
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/5
              text-slate-400
              transition-all
              duration-300
              hover:rotate-90
              hover:bg-red-500/15
              hover:text-red-400
            "
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;