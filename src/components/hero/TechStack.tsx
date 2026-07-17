import React from "react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import skills from "../../data/skills";

/**
 * =============================================================================
 * Tech Stack
 * =============================================================================
 *
 * Ultra Premium Technology Showcase
 *
 * Features
 * -----------------------------------------------------------------------------
 * ✓ Apple + Linear Inspired
 * ✓ Premium Glassmorphism
 * ✓ Better Light / Dark Theme Support
 * ✓ Responsive Grid
 * ✓ Animated Hover Effects
 * ✓ Reflection Sweep
 * ✓ Inner Highlight
 * ✓ Ambient Glow
 * =============================================================================
 */

function TechStack() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10

          h-152
          w-152

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10
          blur-[140px]

          dark:bg-cyan-500/15
        "
      />

      <Container>
        <SectionTitle
          title="Technologies I Work With"
          subtitle="A carefully selected collection of technologies, frameworks, databases and tools that I use to build modern, scalable and high-performance applications."
          center
        />

        <div className="mt-20 space-y-14">
          {skills.map((category) => (
            <div key={category.title}>
              {/* ====================================================== */}
              {/* Category Heading */}
              {/* ====================================================== */}

              <div className="mb-8 flex items-center gap-5">
                <div
                  className="
                    h-px
                    flex-1

                    bg-linear-to-r
                    from-cyan-500
                    to-transparent
                  "
                />

                <h3
                  className="
                    whitespace-nowrap

                    text-xl
                    font-bold

                    tracking-tight

                    text-zinc-900
                    dark:text-white
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    h-px
                    flex-1

                    bg-linear-to-l
                    from-violet-500
                    to-transparent
                  "
                />
              </div>

              {/* ====================================================== */}
              {/* Skills Grid */}
              {/* ====================================================== */}

              <div
                className="
                  grid
                  gap-6

                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                "
              >
                {category.skills.map((skill) => (
                  <GlassCard
                    key={skill.name}
                    className="
                      group
                      relative
                      isolate

                      overflow-hidden

                      rounded-[28px]

                      border
                      border-zinc-300/70
                      dark:border-white/10

                      bg-white/75
                      dark:bg-white/4

                      backdrop-blur-2xl

                      p-7

                      shadow-[0_18px_50px_rgba(15,23,42,0.08)]
                      dark:shadow-[0_20px_60px_rgba(0,0,0,0.30)]

                      transition-all
                      duration-500
                      ease-out

                      hover:-translate-y-3
                      hover:scale-[1.02]

                      hover:border-cyan-500/40
                      dark:hover:border-cyan-400/25

                      hover:shadow-[0_30px_80px_rgba(6,182,212,0.18)]
                    "
                  >
                    {/* Inner Highlight */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-px

                        rounded-[26px]

                        border
                        border-white/40
                        dark:border-white/5
                      "
                    />

                    {/* Reflection */}

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

                    {/* Hover Glow */}

                    <div
                      className="
                        pointer-events-none

                        absolute
                        inset-0

                        bg-linear-to-br
                        from-cyan-500/5
                        via-transparent
                        to-violet-500/5

                        opacity-0

                        transition-opacity
                        duration-500

                        group-hover:opacity-100
                      "
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* ================================================= */}
                      {/* Icon */}
                      {/* ================================================= */}

                      <div
                        className="
                          relative

                          mb-6

                          flex
                          h-18
                          w-18
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

                          shadow-lg
                          shadow-cyan-300/20
                          dark:shadow-cyan-500/10

                          transition-all
                          duration-500

                          group-hover:scale-110
                          group-hover:-rotate-6
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

                        {(() => {
                          type SkillWithIcon = {
                            icon?: React.ComponentType<{
                              size?: number;
                              className?: string;
                            }>;
                          };

                          const Icon = (skill as SkillWithIcon).icon;

                          if (Icon) {
                            return (
                              <Icon
                                size={34}
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
                            );
                          }

                          return (
                            <div
                              className="
                                relative
                                z-10

                                text-2xl
                                font-bold

                                text-cyan-600
                                dark:text-cyan-300
                              "
                            >
                              {skill.name.charAt(0)}
                            </div>
                          );
                        })()}
                      </div>

                      {/* ================================================= */}
                      {/* Skill Name */}
                      {/* ================================================= */}

                      <h4
                        className="
                          text-lg
                          font-semibold

                          text-zinc-900
                          dark:text-white
                        "
                      >
                        {skill.name}
                      </h4>

                      {/* ================================================= */}
                      {/* Level */}
                      {/* ================================================= */}

                      <span
                        className="
                          mt-5

                          rounded-full

                          border
                          border-cyan-500/20

                          bg-cyan-500/10

                          px-4
                          py-1.5

                          text-xs
                          font-semibold

                          uppercase
                          tracking-[0.22em]

                          text-cyan-700
                          dark:text-cyan-300
                        "
                      >
                        {skill.level}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;