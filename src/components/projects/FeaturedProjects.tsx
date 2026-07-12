/**
 * ==========================================================
 * Featured Projects
 * ==========================================================
 *
 * Premium showcase section highlighting selected projects.
 *
 * Features
 * ----------
 * ✓ Premium Section Layout
 * ✓ Decorative Background Glow
 * ✓ Responsive
 * ✓ Glassmorphism Ready
 * ✓ Strongly Typed
 * ✓ Reusable
 *
 * Used By
 * ----------
 * - Home.tsx
 * - Projects.tsx (Optional)
 * ==========================================================
 */

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "./ProjectGrid";

import projects from "../../data/projects";

function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section
      id="featured-projects"
      className="
        relative
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
          bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_40%)]
        "
      />

      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore some of my most impactful projects demonstrating expertise in full-stack development, scalable backend architecture, responsive frontend engineering, and modern software development practices."
          center
        />

        <div className="mt-20">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;