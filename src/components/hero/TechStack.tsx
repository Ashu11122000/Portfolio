import React from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import skills from "../../data/skills";

/**
 * ==========================================================
 * Tech Stack
 * ==========================================================
 *
 * Ultra Premium Tech Stack Section
 *
 * Features
 * ----------
 * ✓ Category Based Layout
 * ✓ Glassmorphism Cards
 * ✓ Gradient Headers
 * ✓ Premium Hover Effects
 * ✓ Responsive
 */

function TechStack() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionTitle
          title="Technologies I Work With"
          subtitle="A carefully selected collection of technologies, frameworks, databases and tools that I use to build modern, scalable and high-performance applications."
          center
        />

        <div className="mt-16 space-y-10">
          {skills.map((category) => (
            <div key={category.title}>
              {/* Category Heading */}

              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/60 to-transparent" />

                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>

                <div className="h-px flex-1 bg-gradient-to-l from-violet-500/60 to-transparent" />
              </div>

              {/* Skills */}

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {category.skills.map((skill) => (
                  <GlassCard
                    key={skill.name}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border-white/10
                      p-6
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-cyan-400/30
                      hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]
                    "
                  >
                    {/* Hover Glow */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
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
                      {/* Icon */}

                      <div
                        className="
                          mb-5
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-cyan-500/15
                          via-indigo-500/15
                          to-violet-500/15
                          ring-1
                          ring-white/10
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:rotate-6
                        "
                      >
                        {
                          // skill.icon may not be declared on the Skill type — cast to any
                          // and render if present, otherwise render a simple fallback.
                          (() => {
                            type SkillWithIcon = { icon?: React.ComponentType<{ size?: number; className?: string }> };
                            const Icon = (skill as SkillWithIcon).icon;
                            if (Icon) return <Icon size={34} className="text-cyan-300" />;
                            return (
                              <div className="text-cyan-300 text-2xl font-bold">{skill.name?.charAt(0)}</div>
                            );
                          })()
                        }
                      </div>

                      {/* Name */}

                      <h4 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h4>

                      {/* Level */}

                      <span
                        className="
                          mt-4
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-500/10
                          px-3
                          py-1
                          text-xs
                          font-medium
                          uppercase
                          tracking-wider
                          text-cyan-300
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
