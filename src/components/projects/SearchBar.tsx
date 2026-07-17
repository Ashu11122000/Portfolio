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
 * ✓ Better Light/Dark Mode
 * ✓ Animated Search Icon
 * ✓ Premium Focus Ring
 * ✓ Gradient Glow
 * ✓ Smooth Hover Effects
 * ✓ Clear Button Animation
 * ✓ Responsive
 * ✓ Accessible
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
      {/* ======================================================
          Premium Background Glow
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-[28px]

          bg-linear-to-r
          from-cyan-500/10
          via-sky-500/10
          to-violet-500/10

          blur-2xl
        "
      />

      {/* ======================================================
          Search Container
      ======================================================= */}

      <div
        className="
          group
          relative
          overflow-hidden

          rounded-[28px]

          border
          border-zinc-200/70
          dark:border-white/10

          bg-white/80
          dark:bg-white/5

          backdrop-blur-2xl

          shadow-lg
          shadow-zinc-900/5
          dark:shadow-black/20

          transition-all
          duration-300

          hover:border-cyan-400/30

          focus-within:border-cyan-400/50
          focus-within:shadow-[0_0_45px_rgba(34,211,238,0.18)]
        "
      >
        {/* Gradient Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-[linear-gradient(90deg,rgba(34,211,238,0.08),transparent,rgba(139,92,246,0.08))]

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

            text-zinc-500
            dark:text-zinc-400

            transition-all
            duration-300

            group-hover:text-cyan-500
            group-focus-within:text-cyan-500

            group-hover:scale-110
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
            font-medium

            text-zinc-900
            dark:text-zinc-100

            placeholder:text-zinc-500
            dark:placeholder:text-zinc-500

            outline-none
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

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/80
              dark:bg-white/5

              text-zinc-600
              dark:text-zinc-400

              backdrop-blur

              transition-all
              duration-300

              hover:rotate-90
              hover:scale-110

              hover:border-red-400/40
              hover:bg-red-500/10
              hover:text-red-500
            "
          >
            <X size={17} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;