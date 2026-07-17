/**
 * ==========================================================
 * Featured Projects
 * ==========================================================
 *
 * Ultra Premium Featured Projects Section
 *
 * Features
 * ----------
 * ✓ Premium Background Effects
 * ✓ Layered Gradient Orbs
 * ✓ Glassmorphism Ready
 * ✓ Better Light/Dark Mode
 * ✓ Responsive
 * ✓ Improved Spacing
 * ✓ Modern Portfolio Design
 * ✓ Reusable
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
        py-32
      "
    >
      {/* ======================================================
          Premium Background
      ======================================================= */}

      <div className="absolute inset-0 -z-20">
        {/* Main Background */}

        <div
          className="
            absolute
            inset-0

            bg-white
            dark:bg-transparent
          "
        />

        {/* Top Left Glow */}

        <div
          className="
            absolute
            -left-32
            top-0

            h-96
            w-96

            rounded-full

            bg-cyan-500/10
            blur-[120px]
          "
        />

        {/* Bottom Right Glow */}

        <div
          className="
            absolute
            -right-32
            bottom-0

            h-112
            w-md

            rounded-full

            bg-violet-500/10
            blur-[140px]
          "
        />

        {/* Center Accent */}

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-72
            w-72

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-sky-400/5

            blur-[100px]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_45%)]
          "
        />
      </div>

      {/* ======================================================
          Content
      ======================================================= */}

      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A curated collection of projects showcasing modern UI engineering, scalable architecture, high-performance applications, and production-ready software built using today's best technologies."
          center
        />

        <div className="mt-24">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;