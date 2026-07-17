import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import ExperienceTimeline from "../components/experience/ExperienceTimeline";
import GlassCard from "../components/ui/GlassCard";

/**
 * ==========================================================
 * Experience Page
 * ==========================================================
 *
 * Ultra Premium Experience Showcase
 *
 * Features
 * ----------
 * ✓ Layered Premium Background
 * ✓ Premium Statistics Cards
 * ✓ Glassmorphism
 * ✓ Light & Dark Theme
 * ✓ Responsive
 * ✓ Timeline
 *
 * ==========================================================
 */

const stats = [
  {
    value: "10",
    label: "Months Experience",
    gradient:
      "from-cyan-500 to-sky-500 dark:from-cyan-300 dark:to-sky-300",
  },
  {
    value: "2",
    label: "Internships",
    gradient:
      "from-violet-500 to-fuchsia-500 dark:from-violet-300 dark:to-fuchsia-300",
  },
  {
    value: "10+",
    label: "Projects Delivered",
    gradient:
      "from-emerald-500 to-cyan-500 dark:from-emerald-300 dark:to-cyan-300",
  },
  {
    value: "25+",
    label: "Technologies",
    gradient:
      "from-amber-500 to-orange-500 dark:from-amber-300 dark:to-orange-300",
  },
] as const;

function Experience() {
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
      {/* Background Base */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-linear-to-br
          from-white
          via-slate-50
          to-indigo-50
          dark:from-zinc-950
          dark:via-slate-950
          dark:to-black
        "
      />

      {/* Ambient Mesh */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-80
          dark:opacity-50
          [background-image:
            radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_30%),
            radial-gradient(circle_at_80%_25%,rgba(34,211,238,0.12),transparent_30%),
            radial-gradient(circle_at_50%_80%,rgba(217,70,239,0.10),transparent_35%)]
        "
      />

      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-136 w-136 rounded-full bg-violet-500/15 blur-[170px] dark:bg-violet-500/12" />
      <div className="pointer-events-none absolute -bottom-44 -right-44 -z-10 h-144 w-xl rounded-full bg-cyan-500/15 blur-[180px] dark:bg-cyan-500/12" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.025]
          dark:opacity-[0.045]
          [background-image:
            linear-gradient(to_right,currentColor_1px,transparent_1px),
            linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-size-[64px_64px]
          text-slate-900
          dark:text-white
        "
      />

      <Container>
        <section className="relative z-10 space-y-20">
          <SectionTitle
            title="Professional Experience"
            subtitle="A timeline of my internships and professional experience, showcasing my growth as a Software Engineer while building scalable applications, collaborating with teams, and delivering production-ready solutions."
            center
          />

          {/* Statistics */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="text-center transition-transform duration-500 hover:-translate-y-2"
              >
                <h3
                  className={`bg-linear-to-r ${stat.gradient} bg-clip-text text-4xl font-extrabold tracking-tight text-transparent`}
                >
                  {stat.value}
                </h3>

                <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>

          <ExperienceTimeline />
        </section>
      </Container>
    </main>
  );
}

export default Experience;