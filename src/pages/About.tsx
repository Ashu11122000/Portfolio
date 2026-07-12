import AboutSection from "../components/about/AboutSection";

/**
 * ==========================================================
 * About Page
 * ==========================================================
 *
 * Ultra Premium About Page
 *
 * Responsibilities
 * ----------------
 * ✓ Premium Page Layout
 * ✓ Background Glow
 * ✓ Responsive
 * ✓ Reuses AboutSection
 * ✓ No Duplicate UI
 *
 * ==========================================================
 */

function About() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        pt-28
      "
    >
      {/* Background Effects */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_40%)]
        "
      />

      {/* About Content */}

      <AboutSection />
    </main>
  );
}

export default About;