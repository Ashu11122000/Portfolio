import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import ExperienceTimeline from "../components/experience/ExperienceTimeline";

/**
 * ==========================================================
 * Experience Page
 * ==========================================================
 *
 * Ultra Premium Experience Showcase
 *
 * Features
 * ----------
 * ✓ Premium Layout
 * ✓ Experience Highlights
 * ✓ Timeline
 * ✓ Responsive
 * ✓ Background Glow
 *
 * ==========================================================
 */

function Experience() {
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
          {/* Title */}

          <SectionTitle
            title="Professional Experience"
            subtitle="A timeline of my internships and professional experience, showcasing my growth as a Software Engineer while building scalable applications, collaborating with teams, and delivering production-ready solutions."
            center
          />

          {/* Experience Highlights */}

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                10
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Months Experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                2
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Internships
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Projects Delivered
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                25+
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Technologies
              </p>
            </div>
          </div>

          {/* Timeline */}

          <ExperienceTimeline />
        </section>
      </Container>
    </main>
  );
}

export default Experience;