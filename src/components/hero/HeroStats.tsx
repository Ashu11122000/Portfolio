import { Code2, Folder, Layers, Sparkles, Star } from "lucide-react";

import GlassCard from "../ui/GlassCard";

import { heroStats } from "../../data/stats";

/**
 * ==========================================================
 * Hero Stats
 * ==========================================================
 *
 * Ultra Premium Statistics Cards
 *
 * Features
 * ----------
 * ✓ Apple + Linear Inspired
 * ✓ Premium Glassmorphism
 * ✓ Dynamic Theme Support
 * ✓ Animated Gradient Background
 * ✓ Floating Glow
 * ✓ Responsive
 * ✓ Modern Hover Effects
 * ✓ Better Typography
 *
 * ==========================================================
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

              overflow-hidden

              rounded-[30px]

              border
              border-slate-200/70

              bg-white/75

              p-7

              backdrop-blur-2xl

              shadow-xl
              shadow-slate-300/20

              transition-all
              duration-500

              hover:-translate-y-3
              hover:scale-[1.02]

              hover:border-cyan-400/40

              hover:shadow-[0_28px_70px_rgba(6,182,212,0.18)]

              dark:border-slate-700/60
              dark:bg-slate-900/60
              dark:shadow-black/30
            "
          >
            {/* ===================================== */}
            {/* Animated Background Glow */}
            {/* ===================================== */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                opacity-0

                transition-all
                duration-500

                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute

                  -right-12
                  -top-12

                  h-44
                  w-44

                  rounded-full

                  bg-cyan-500/10

                  blur-3xl

                  dark:bg-cyan-400/15
                "
              />

              <div
                className="
                  absolute

                  -bottom-16
                  -left-12

                  h-44
                  w-44

                  rounded-full

                  bg-violet-500/10

                  blur-3xl

                  dark:bg-violet-400/15
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br

                  from-cyan-500/5

                  via-transparent

                  to-violet-500/5
                "
              />
            </div>

            {/* ===================================== */}
            {/* Decorative Sparkle */}
            {/* ===================================== */}

            <Sparkles
              size={18}
              className="
                absolute

                right-5
                top-5

                text-cyan-500/60

                opacity-0

                transition-all
                duration-500

                group-hover:rotate-12
                group-hover:opacity-100

                dark:text-cyan-300/70
              "
            />

            {/* ===================================== */}
            {/* Card Content */}
            {/* ===================================== */}

            <div className="relative z-10">
              {/* ===================================== */}
              {/* Premium Icon */}
              {/* ===================================== */}

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

                  bg-gradient-to-br

                  from-cyan-50
                  via-indigo-50
                  to-violet-100

                  shadow-lg
                  shadow-cyan-200/30

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:-rotate-6
                  group-hover:shadow-cyan-400/30

                  dark:border-white/10

                  dark:from-cyan-500/15
                  dark:via-indigo-500/15
                  dark:to-violet-500/15

                  dark:shadow-cyan-500/10
                "
              >
                {/* Shine Effect */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    bg-gradient-to-br

                    from-white/40
                    via-transparent
                    to-transparent

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

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-12

                    dark:text-cyan-300
                  "
                />
              </div>

              {/* ===================================== */}
              {/* Statistic Value */}
              {/* ===================================== */}

              <h3
                className="
                  bg-gradient-to-r

                  from-slate-900
                  via-slate-800
                  to-slate-700

                  bg-clip-text

                  text-4xl
                  font-black

                  tracking-tight

                  text-transparent

                  transition-all
                  duration-500

                  group-hover:scale-[1.03]

                  dark:from-white
                  dark:via-slate-100
                  dark:to-slate-300
                "
              >
                {item.value}
              </h3>

              {/* ===================================== */}
              {/* Label */}
              {/* ===================================== */}

              <p
                className="
                  mt-3

                  text-sm

                  font-semibold

                  uppercase

                  tracking-[0.22em]

                  text-slate-600

                  transition-colors
                  duration-300

                  group-hover:text-cyan-600

                  dark:text-slate-400
                  dark:group-hover:text-cyan-300
                "
              >
                {item.label}
              </p>

              {/* ===================================== */}
              {/* Bottom Accent Line */}
              {/* ===================================== */}

              <div
                className="
                  mt-6

                  h-1
                  w-16

                  rounded-full

                  bg-gradient-to-r

                  from-cyan-500
                  via-indigo-500
                  to-violet-500

                  transition-all
                  duration-500

                  group-hover:w-28
                "
              />
            </div>

            {/* ===================================== */}
            {/* Premium Hover Border */}
            {/* ===================================== */}

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

                group-hover:border-cyan-400/30

                dark:group-hover:border-cyan-300/20
              "
            />

            {/* ===================================== */}
            {/* Premium Shine Animation */}
            {/* ===================================== */}

            <div
              className="
                pointer-events-none

                absolute

                inset-y-0
                -left-full

                w-1/2

                skew-x-[-20deg]

                bg-gradient-to-r

                from-transparent
                via-white/40
                to-transparent

                opacity-0

                transition-all
                duration-700

                group-hover:left-[140%]
                group-hover:opacity-100

                dark:via-white/10
              "
            />

            {/* ===================================== */}
            {/* Bottom Glow */}
            {/* ===================================== */}

            <div
              className="
                pointer-events-none

                absolute

                bottom-0
                left-1/2

                h-20
                w-40

                -translate-x-1/2

                rounded-full

                bg-cyan-500/10

                blur-3xl

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100

                dark:bg-cyan-400/15
              "
            />
          </GlassCard>
        );
      })}
    </div>
  );
}

export default HeroStats;
