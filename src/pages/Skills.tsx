import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import SkillGrid from "../components/skills/SkillGrid";

/**
 * ==========================================================
 * Skills Page
 * ==========================================================
 *
 * Ultra Premium Skills Showcase
 *
 * Features
 * ----------
 * ✓ Premium Layout
 * ✓ Responsive Design
 * ✓ Background Glow
 * ✓ Skills Summary
 * ✓ Reusable Components
 * ✓ Category Based Skills
 *
 * Route
 * ----------
 * /skills
 *
 * ==========================================================
 */

function Skills() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        py-28
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_40%)]
        "
      />

      <Container>
        <section className="space-y-20">
          {/* Heading */}

          <SectionTitle
            title="Skills & Technologies"
            subtitle="A curated collection of programming languages, frameworks, databases, cloud platforms, and development tools I use to build modern, scalable, and production-ready software solutions."
            center
          />

          {/* Quick Highlights */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">25+</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Technologies
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">6</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Skill Categories
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Projects Built
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">10</h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Months Experience
              </p>
            </div>
          </div>

          {/* Skills Grid */}

          <SkillGrid />
        </section>
      </Container>
    </main>
  );
}

export default Skills;
