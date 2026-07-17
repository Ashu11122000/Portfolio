import AboutSection from "../components/about/AboutSection";

/**
 * ==========================================================
 * About Page
 * ==========================================================
 *
 * Ultra Premium About Page
 *
 * Features
 * ----------
 * ✓ Layered Premium Background
 * ✓ Ambient Gradient Glows
 * ✓ Subtle Grid Overlay
 * ✓ Light & Dark Theme Support
 * ✓ Responsive
 * ✓ Reuses AboutSection
 * *
 * ==========================================================
 */

function About() {
  return (
    <main
      className="
        relative
        isolate
        min-h-screen
        overflow-x-hidden
        pt-28
        pb-20
      "
    >
      {/* =======================================================
          Background Base
      ======================================================= */}

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

      {/* =======================================================
          Ambient Gradient Mesh
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-80
          dark:opacity-50
          [background-image:
            radial-gradient(circle_at_15%_15%,rgba(99,102,241,0.14),transparent_30%),
            radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.12),transparent_30%),
            radial-gradient(circle_at_50%_80%,rgba(217,70,239,0.10),transparent_35%)]
        "
      />

      {/* =======================================================
          Top Left Glow
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -left-40
          -z-10
          h-136
          w-136
          rounded-full
          bg-violet-500/15
          blur-[170px]
          dark:bg-violet-500/12
        "
      />

      {/* =======================================================
          Bottom Right Glow
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-40
          -z-10
          h-144
          w-xl
          rounded-full
          bg-cyan-500/15
          blur-[180px]
          dark:bg-cyan-500/12
        "
      />

      {/* =======================================================
          Subtle Grid
      ======================================================= */}

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

      {/* =======================================================
          About Content
      ======================================================= */}

      <section className="relative z-10">
        <AboutSection />
      </section>
    </main>
  );
}

export default About;