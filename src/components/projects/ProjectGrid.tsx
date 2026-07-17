/**
 * ==========================================================
 * ProjectGrid Component
 * ==========================================================
 *
 * Ultra Premium Responsive Project Grid
 *
 * Features
 * ----------
 * ✓ Premium Glass Empty State
 * ✓ Better Light/Dark Mode
 * ✓ Modern Responsive Grid
 * ✓ Enhanced Hover Effects
 * ✓ Improved Typography
 * ✓ Accessible
 * ✓ Reusable
 * ==========================================================
 */

import type { FC } from "react";

import { FolderOpen } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import ProjectCard from "./ProjectCard";

import type { Project } from "../../types/project";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: FC<ProjectGridProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <GlassCard
        className="
          group
          relative
          overflow-hidden

          rounded-4xl

          border
          border-dashed
          border-zinc-300/70
          dark:border-white/10

          bg-white/80
          dark:bg-white/4

          backdrop-blur-2xl

          px-8
          py-24

          shadow-xl
          shadow-zinc-900/5
          dark:shadow-black/20
        "
      >
        {/* ======================================================
            Premium Background
        ======================================================= */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.10),transparent_45%)]

            opacity-80
          "
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon */}

          <div
            className="
              mb-8

              flex
              h-24
              w-24
              items-center
              justify-center

              rounded-full

              bg-linear-to-br
              from-cyan-500/15
              via-sky-500/10
              to-violet-500/15

              ring-1
              ring-cyan-500/20

              shadow-lg

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <FolderOpen
              size={42}
              className="
                text-cyan-600
                dark:text-cyan-300
              "
            />
          </div>

          {/* Heading */}

          <h3
            className="
              text-3xl
              font-bold
              tracking-tight

              text-zinc-900
              dark:text-zinc-100
            "
          >
            No Projects Found
          </h3>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl

              text-[15px]
              leading-8

              text-zinc-600
              dark:text-zinc-400
            "
          >
            No projects match your current filter or search.
            Try selecting another category to discover more
            applications, case studies, and development work.
          </p>
        </div>
      </GlassCard>
    );
  }

  return (
    <div
      className="
        grid

        gap-8
        xl:gap-10

        grid-cols-1

        md:grid-cols-2

        2xl:grid-cols-3

        items-stretch
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;