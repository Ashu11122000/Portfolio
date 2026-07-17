import Container from "../components/common/Container";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import FloatingShapes from "../components/ui/FloatingShapes";
import SectionTitle from "../components/common/SectionTitle";

import SkillGrid from "../components/skills/SkillGrid";

import GlassCard from "../components/ui/GlassCard";
import GradientText from "../components/ui/GradientText";

/**
 * ==========================================================
 * Skills Page
 * ==========================================================
 *
 * Ultra Premium Skills Showcase
 *
 * Features
 * ----------
 * ✓ Apple / Linear Inspired
 * ✓ Animated Background
 * ✓ Floating Shapes
 * ✓ Premium Statistics
 * ✓ Glassmorphism
 * ✓ Responsive
 * ✓ Better Typography
 * ✓ Light & Dark Theme
 *
 * ==========================================================
 */

const skillStats = [
  {
    value: "25+",
    label: "Technologies",
    gradient:
      "from-cyan-500 via-sky-500 to-indigo-500 dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300",
  },
  {
    value: "6",
    label: "Skill Categories",
    gradient:
      "from-violet-500 via-fuchsia-500 to-pink-500 dark:from-violet-300 dark:via-fuchsia-300 dark:to-pink-300",
  },
  {
    value: "10+",
    label: "Projects Built",
    gradient:
      "from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300",
  },
  {
    value: "10",
    label: "Months Experience",
    gradient:
      "from-orange-500 via-amber-500 to-yellow-500 dark:from-orange-300 dark:via-amber-300 dark:to-yellow-300",
  },
] as const;

function Skills() {
  return (
    <main
      className="
        relative
        isolate
        min-h-screen
        overflow-x-hidden
        py-28
      "
    >
      {/* Premium Background */}

      <AnimatedBackground />

      <FloatingShapes />

      <Container>
        <section className="relative z-10 space-y-20">
          {/* Heading */}

          <SectionTitle
            title="Skills & Technologies"
            subtitle="A curated collection of programming languages, frameworks, databases, cloud platforms, and development tools I use to build modern, scalable, and production-ready software solutions."
            center
          />

          {/* Premium Statistics */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {skillStats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                <GradientText
                  className={`
                    bg-linear-to-r
                    ${stat.gradient}
                    bg-clip-text
                    text-4xl
                    font-black
                    tracking-tight
                  `}
                >
                  {stat.value}
                </GradientText>

                <p
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Skills */}

          <SkillGrid />
        </section>
      </Container>
    </main>
  );
}

export default Skills;