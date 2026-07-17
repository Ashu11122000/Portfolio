/**
 * ==========================================================
 * Project Card
 * ==========================================================
 *
 * Ultra Premium Project Card
 *
 * Features
 * ----------
 * ✓ Premium Glassmorphism
 * ✓ Light / Dark Mode Optimized
 * ✓ Gradient Hover Glow
 * ✓ Premium Elevation
 * ✓ Featured Badge
 * ✓ Status Badge
 * ✓ Technology Tags
 * ✓ GitHub & Live Demo
 * ✓ Responsive
 * ✓ Accessibility Improved
 */

import type { FC } from "react";

import {
  ExternalLink,
  FolderGit2,
  Star,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";
import TechBadge from "./TechBadge";

import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

/* ==========================================================
   Status Badge Colors
========================================================== */

function getStatusClasses(status: Project["status"]) {
  return status === "Completed"
    ? `
      border
      border-emerald-500/25
      bg-emerald-500/10
      text-emerald-700
      dark:text-emerald-300
    `
    : `
      border
      border-amber-500/25
      bg-amber-500/10
      text-amber-700
      dark:text-amber-300
    `;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassCard
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden

        rounded-[28px]

        border
        border-zinc-200/70
        dark:border-white/10

        bg-white/80
        dark:bg-white/4

        backdrop-blur-2xl

        shadow-lg
        shadow-zinc-900/5
        dark:shadow-black/20

        p-8

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_35px_80px_rgba(34,211,238,0.18)]
      "
    >
      {/* ======================================================
          Premium Hover Glow
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_45%)]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* ======================================================
            Header
        ======================================================= */}

        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Project Icon */}

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

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
                group-hover:rotate-3
              "
            >
              <FolderGit2
                size={28}
                className="
                  text-cyan-600
                  dark:text-cyan-300
                "
              />
            </div>

            {/* Project Info */}

            <div>
              <h3
                className="
                  text-2xl
                  font-bold
                  tracking-tight

                  text-zinc-900
                  dark:text-zinc-100

                  transition-colors
                  duration-300

                  group-hover:text-cyan-600
                  dark:group-hover:text-cyan-300
                "
              >
                {project.name}
              </h3>

              <span
                className="
                  mt-3
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-zinc-300/70
                  dark:border-white/10

                  bg-zinc-100/80
                  dark:bg-white/5

                  px-3
                  py-1

                  text-xs
                  font-medium
                  tracking-wide

                  text-zinc-700
                  dark:text-zinc-300

                  backdrop-blur
                "
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Featured Badge */}

          {project.featured && (
            <span
              className="
                inline-flex
                items-center
                gap-1.5

                rounded-full

                border
                border-yellow-400/20

                bg-linear-to-r
                from-yellow-400/15
                to-orange-500/15

                px-3.5
                py-1.5

                text-xs
                font-semibold

                text-yellow-700
                dark:text-yellow-300

                shadow-sm
              "
            >
              <Star size={13} />
              Featured
            </span>
          )}
        </div>

                {/* ======================================================
            Description
        ======================================================= */}

        <p
          className="
            mb-7
            flex-1

            text-[15px]
            leading-8

            text-zinc-700
            dark:text-zinc-400

            transition-colors
            duration-300
          "
        >
          {project.description}
        </p>

        {/* ======================================================
            Status
        ======================================================= */}

        <div className="mb-7">
          <span
            className={`
              inline-flex
              items-center
              rounded-full
              px-3.5
              py-1.5
              text-xs
              font-semibold
              backdrop-blur
              transition-all
              duration-300
              ${getStatusClasses(project.status)}
            `}
          >
            <span
              className="
                mr-2
                h-2
                w-2
                rounded-full
                bg-current
                opacity-80
              "
            />
            {project.status}
          </span>
        </div>

        {/* ======================================================
            Technologies
        ======================================================= */}

        <div className="mb-8 flex flex-wrap gap-2.5">
          {project.technologies.map((technology) => (
            <TechBadge
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        {/* ======================================================
            Footer
        ======================================================= */}

        <div className="mt-auto flex items-center gap-3">
          {/* Source Code */}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label={`View ${project.name} source code`}
          >
            <Button
              className="
                w-full
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
              "
            >
              <FaGithub
                size={18}
                className="mr-2 shrink-0"
              />

              Source Code
            </Button>
          </a>

          {/* Live Demo */}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo`}
            >
              <Button
                variant="outline"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border-zinc-300
                  bg-white/70
                  text-zinc-700
                  backdrop-blur
                  transition-all
                  duration-300

                  hover:scale-105
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:text-cyan-600

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-zinc-300
                  dark:hover:border-cyan-400
                  dark:hover:bg-cyan-500/10
                  dark:hover:text-cyan-300
                "
              >
                <ExternalLink size={18} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;