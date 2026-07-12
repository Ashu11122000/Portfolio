/**
 * ==========================================================
 * ProjectGrid Component
 * ==========================================================
 *
 * Ultra Premium Responsive Project Grid
 *
 * Features
 * ----------
 * ✓ Responsive Grid
 * ✓ Premium Empty State
 * ✓ Glassmorphism Ready
 * ✓ Smooth Layout
 * ✓ Strongly Typed
 * ✓ Accessible
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - FeaturedProjects.tsx
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
          rounded-3xl
          border
          border-dashed
          border-white/10
          px-8
          py-20
          text-center
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/5
            via-transparent
            to-violet-500/5
          "
        />

        <div className="relative z-10 flex flex-col items-center">
          <div
            className="
              mb-6
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500/15
              via-indigo-500/15
              to-violet-500/15
              ring-1
              ring-white/10
            "
          >
            <FolderOpen
              size={44}
              className="text-cyan-300"
            />
          </div>

          <h3 className="text-3xl font-bold">
            No Projects Found
          </h3>

          <p
            className="
              mt-4
              max-w-lg
              leading-8
              text-slate-400
            "
          >
            No projects match your current filter or search.
            Try selecting another category to explore more
            projects.
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
        sm:grid-cols-1
        lg:grid-cols-2
        2xl:grid-cols-3
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