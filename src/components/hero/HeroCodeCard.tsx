import GlassCard from "../ui/GlassCard";

import { heroData } from "../../data/hero";

/**
 * =============================================================================
 * Hero Code Card
 * =============================================================================
 *
 * Ultra Premium Developer Card
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Premium Glassmorphism
 * ✓ VS Code Inspired Editor
 * ✓ macOS Window Controls
 * ✓ Animated Ambient Glow
 * ✓ Reflection Sweep Animation
 * ✓ Inner Highlight Border
 * ✓ Premium Hover Effects
 * ✓ Responsive
 * ✓ Better Light / Dark Theme Support
 * =============================================================================
 */

function HeroCodeCard() {
  return (
    <div className="relative">
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-112
          w-md
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[110px]
          transition-all
          duration-700
          group-hover:bg-cyan-500/20
          dark:bg-cyan-500/20
        "
      />

      <GlassCard
        className="
          group
          relative
          overflow-hidden

          rounded-[30px]

          border
          border-zinc-300/70
          dark:border-white/10

          bg-white/70
          dark:bg-white/4

          backdrop-blur-2xl

          p-0

          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          dark:shadow-[0_25px_80px_rgba(34,211,238,0.12)]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-2
          hover:scale-[1.01]

          hover:border-cyan-500/40
          dark:hover:border-cyan-400/25

          hover:shadow-[0_30px_90px_rgba(6,182,212,0.18)]
          dark:hover:shadow-[0_35px_100px_rgba(34,211,238,0.18)]
        "
      >
        {/* ------------------------------------------------------------------ */}
        {/* Inner Glass Highlight */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="
            pointer-events-none
            absolute
            inset-px
            rounded-[28px]
            border
            border-white/30
            dark:border-white/5
          "
        />

        {/* ------------------------------------------------------------------ */}
        {/* Animated Reflection */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-1/2
            w-1/3
            rotate-12
            bg-linear-to-r
            from-transparent
            via-white/25
            to-transparent
            opacity-0
            blur-xl
            transition-all
            duration-1000
            group-hover:left-[130%]
            group-hover:opacity-100
          "
        />

        {/* ------------------------------------------------------------------ */}
        {/* Premium Gradient Overlay */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-br
            from-cyan-500/5
            via-transparent
            to-violet-500/5
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* ------------------------------------------------------------------ */}
        {/* Editor Header */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="
            relative
            flex
            items-center
            justify-between

            border-b
            border-zinc-200
            dark:border-white/10

            bg-white/50
            dark:bg-white/2

            px-6
            py-4

            backdrop-blur-xl
          "
        >
          {/* macOS Controls */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm" />
          </div>

          {/* File Name */}
          <div className="flex items-center gap-3">
            <span
              className="
                text-sm
                font-semibold
                tracking-wide
                text-zinc-700
                dark:text-zinc-300
              "
            >
              developer.ts
            </span>

            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Editor Status */}
          <div
            className="
              hidden
              items-center
              gap-2
              sm:flex
            "
          >
            <span
              className="
                text-xs
                font-medium
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Ready
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Code Editor */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="
            relative
            space-y-2
            p-7

            font-mono
            text-[15px]
            font-medium
            leading-8
            tracking-tight

            text-zinc-900
            dark:text-zinc-100
          "
        >

                    <CodeLine number={1}>
            <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
            <span className="text-sky-600 dark:text-sky-300">
              developer
            </span>{" "}
            <span className="text-zinc-900 dark:text-zinc-100">= {"{"}</span>
          </CodeLine>

          <CodeLine number={2}>
            <span className="text-rose-600 dark:text-rose-400">
              name
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">: </span>
            <span className="text-emerald-600 dark:text-emerald-300">
              "{heroData.codeCard.name}"
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">,</span>
          </CodeLine>

          <CodeLine number={3}>
            <span className="text-rose-600 dark:text-rose-400">
              role
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">: </span>
            <span className="text-emerald-600 dark:text-emerald-300">
              "{heroData.codeCard.role}"
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">,</span>
          </CodeLine>

          <CodeLine number={4}>
            <span className="text-rose-600 dark:text-rose-400">
              skills
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              : [
            </span>
          </CodeLine>

          {heroData.codeCard.skills.map((skill, index) => (
            <CodeLine
              key={skill}
              number={index + 5}
              indent
            >
              <span className="text-sky-600 dark:text-sky-300">
                "{skill}"
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">,</span>
            </CodeLine>
          ))}

          <CodeLine number={heroData.codeCard.skills.length + 5}>
            <span className="text-zinc-700 dark:text-zinc-300">
              ],
            </span>
          </CodeLine>

          <CodeLine number={heroData.codeCard.skills.length + 6}>
            <span className="text-rose-600 dark:text-rose-400">
              passion
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">: </span>
            <span className="text-amber-600 dark:text-amber-300">
              "{heroData.codeCard.passion}"
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">,</span>
          </CodeLine>

          <CodeLine number={heroData.codeCard.skills.length + 7}>
            <span className="text-rose-600 dark:text-rose-400">
              goal
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">: </span>
            <span className="text-violet-600 dark:text-violet-300">
              "{heroData.codeCard.goal}"
            </span>
          </CodeLine>

          <CodeLine number={heroData.codeCard.skills.length + 8}>
            <span className="text-zinc-900 dark:text-zinc-100">
              {"}"}
            </span>
          </CodeLine>
        </div>
      </GlassCard>
    </div>
  );
}

type CodeLineProps = {
  number: number;
  indent?: boolean;
  children: React.ReactNode;
};

function CodeLine({
  number,
  indent = false,
  children,
}: CodeLineProps) {
  return (
    <div
      className="
        group/line
        flex
        items-start
        rounded-lg
        px-2
        py-0.5
        transition-all
        duration-300

        hover:bg-zinc-100/70
        dark:hover:bg-white/4
      "
    >
      {/* Line Number */}
      <span
        className="
          mr-5
          w-8
          shrink-0
          select-none
          text-right

          text-xs
          font-medium

          text-zinc-400
          dark:text-zinc-600

          transition-colors
          duration-300

          group-hover/line:text-cyan-600
          dark:group-hover/line:text-cyan-400
        "
      >
        {number}
      </span>

      {/* Code */}
      <div
        className={`
          flex-1
          whitespace-pre-wrap
          wrap-break-word
          transition-all
          duration-300
          ${
            indent
              ? "pl-6"
              : ""
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default HeroCodeCard;