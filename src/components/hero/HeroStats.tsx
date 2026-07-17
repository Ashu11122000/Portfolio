import {
  Code2,
  Folder,
  Layers,
  Sparkles,
  Star,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

import { heroStats } from "../../data/stats";

/**
 * =============================================================================
 * Hero Stats
 * =============================================================================
 *
 * Ultra Premium Statistics Cards
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Apple + Linear Inspired UI
 * ✓ Premium Glassmorphism
 * ✓ Better Light / Dark Theme Support
 * ✓ Floating Ambient Glow
 * ✓ Inner Highlight
 * ✓ Premium Hover Effects
 * ✓ Responsive Layout
 * ✓ Modern Typography
 * =============================================================================
 */

const icons = {
  code: Code2,
  folder: Folder,
  layers: Layers,
  star: Star,
};

function HeroStats() {
  return (
    <div
      className="
        relative

        grid

        gap-6

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {heroStats.map((item) => {
        const Icon = icons[item.icon as keyof typeof icons];

        return (
          <GlassCard
            key={item.label}
            className="
              group
              relative
              isolate

              overflow-hidden

              rounded-[30px]

              border
              border-zinc-300/70
              dark:border-white/10

              bg-white/75
              dark:bg-white/4

              backdrop-blur-2xl

              p-7

              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]

              transition-all
              duration-500
              ease-out

              hover:-translate-y-3
              hover:scale-[1.02]

              hover:border-cyan-500/40
              dark:hover:border-cyan-400/25

              hover:shadow-[0_30px_90px_rgba(6,182,212,0.18)]
            "
          >
            {/* ========================================================== */}
            {/* Inner Glass Highlight */}
            {/* ========================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-px

                rounded-[28px]

                border
                border-white/40
                dark:border-white/5
              "
            />

            {/* ========================================================== */}
            {/* Reflection Sweep */}
            {/* ========================================================== */}

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
                via-white/20
                to-transparent

                opacity-0

                blur-xl

                transition-all
                duration-1000

                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            {/* ========================================================== */}
            {/* Premium Card Content */}
            {/* ========================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                opacity-0

                transition-all
                duration-700

                group-hover:opacity-100
              "
            >
              {/* Top Right Glow */}

              <div
                className="
                  absolute

                  -right-16
                  -top-16

                  h-52
                  w-52

                  rounded-full

                  bg-cyan-500/10
                  dark:bg-cyan-400/15

                  blur-[90px]
                "
              />

              {/* Bottom Left Glow */}

              <div
                className="
                  absolute

                  -bottom-20
                  -left-16

                  h-52
                  w-52

                  rounded-full

                  bg-violet-500/10
                  dark:bg-violet-400/15

                  blur-[100px]
                "
              />

              {/* Ambient Gradient */}

              <div
                className="
                  absolute
                  inset-0

                  bg-linear-to-br

                  from-cyan-500/5
                  via-transparent
                  to-violet-500/5
                "
              />
            </div>

            {/* ========================================================== */}
            {/* Decorative Sparkle */}
            {/* ========================================================== */}

            <Sparkles
              size={18}
              className="
                absolute

                right-6
                top-6

                text-cyan-500/70
                dark:text-cyan-300/70

                opacity-0

                transition-all
                duration-500

                group-hover:rotate-12
                group-hover:scale-110
                group-hover:opacity-100
              "
            />

            {/* ========================================================== */}
            {/* Premium Card Content */}
            {/* ========================================================== */}

            <div className="relative z-10">
              {/* ======================================================== */}
              {/* Premium Icon */}
              {/* ======================================================== */}

              <div
                className="
                  relative

                  mb-7

                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  overflow-hidden

                  rounded-2xl

                  border
                  border-cyan-200/70
                  dark:border-white/10

                  bg-linear-to-br
                  from-cyan-50
                  via-white
                  to-violet-100

                  dark:from-cyan-500/15
                  dark:via-indigo-500/15
                  dark:to-violet-500/15

                  shadow-xl
                  shadow-cyan-300/20
                  dark:shadow-cyan-500/10

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-110
                  group-hover:-rotate-6

                  group-hover:shadow-[0_18px_40px_rgba(6,182,212,0.30)]
                "
              >
                {/* Glass Highlight */}

                <div
                  className="
                    absolute
                    inset-px

                    rounded-[15px]

                    border
                    border-white/40
                    dark:border-white/5
                  "
                />

                {/* Shine */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-white/40
                    via-transparent
                    to-transparent

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                <Icon
                  size={28}
                  className="
                    relative
                    z-10

                    text-cyan-600
                    dark:text-cyan-300

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-12
                  "
                />
              </div>

              {/* ======================================================== */}
              {/* Statistic Value */}
              {/* ======================================================== */}

                            {/* ======================================================== */}
              {/* Statistic Value */}
              {/* ======================================================== */}

              <h3
                className="
                  bg-linear-to-r
                  from-zinc-900
                  via-zinc-800
                  to-zinc-700

                  dark:from-white
                  dark:via-zinc-100
                  dark:to-zinc-300

                  bg-clip-text
                  text-transparent

                  text-4xl
                  lg:text-[2.65rem]

                  font-black

                  tracking-tight

                  transition-all
                  duration-500

                  group-hover:scale-[1.04]
                "
              >
                {item.value}
              </h3>

              {/* ======================================================== */}
              {/* Statistic Label */}
              {/* ======================================================== */}

              <p
                className="
                  mt-3

                  text-sm
                  font-semibold

                  uppercase
                  tracking-[0.24em]

                  text-zinc-600
                  dark:text-zinc-400

                  transition-all
                  duration-300

                  group-hover:text-cyan-600
                  dark:group-hover:text-cyan-300
                "
              >
                {item.label}
              </p>

              {/* ======================================================== */}
              {/* Animated Accent Bar */}
              {/* ======================================================== */}

              <div
                className="
                  relative

                  mt-7

                  h-1.5
                  w-16

                  overflow-hidden
                  rounded-full

                  bg-zinc-200
                  dark:bg-zinc-800

                  transition-all
                  duration-500

                  group-hover:w-28
                "
              >
                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-linear-to-r
                    from-cyan-500
                    via-indigo-500
                    to-violet-500
                  "
                />

                {/* Gloss */}

                <div
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-linear-to-r
                    from-white/40
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>

            {/* ========================================================== */}
            {/* Premium Hover Border */}
            {/* ========================================================== */}

                        {/* ========================================================== */}
            {/* Premium Hover Border */}
            {/* ========================================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-[30px]

                border
                border-transparent

                opacity-0

                transition-all
                duration-500

                group-hover:opacity-100

                group-hover:border-cyan-500/30
                dark:group-hover:border-cyan-300/20
              "
            />

            {/* ========================================================== */}
            {/* Premium Reflection Sweep */}
            {/* ========================================================== */}

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
                via-white/35
                to-transparent

                opacity-0

                blur-xl

                transition-all
                duration-1000

                group-hover:left-[130%]
                group-hover:opacity-100

                dark:via-white/10
              "
            />

            {/* ========================================================== */}
            {/* Bottom Ambient Glow */}
            {/* ========================================================== */}

            <div
              className="
                pointer-events-none

                absolute

                bottom-0
                left-1/2

                h-24
                w-44

                -translate-x-1/2

                rounded-full

                bg-cyan-500/10
                dark:bg-cyan-400/15

                blur-[60px]

                opacity-0

                transition-all
                duration-500

                group-hover:opacity-100
              "
            />
          </GlassCard>
        );
      })}
    </div>
  );
}

export default HeroStats;