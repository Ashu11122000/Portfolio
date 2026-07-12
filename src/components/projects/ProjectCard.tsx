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
 * ✓ Hover Glow
 * ✓ Featured Badge
 * ✓ Status Badge
 * ✓ Technology Tags
 * ✓ GitHub & Live Demo
 * ✓ Fully Responsive
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

function getStatusClasses(status: Project["status"]) {
  return status === "Completed"
    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
    : "border border-amber-500/30 bg-amber-500/10 text-amber-300";
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
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400/30
        hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-violet-500/5
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}

        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-violet-500/20
                ring-1
                ring-white/10
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <FolderGit2
                size={26}
                className="text-cyan-300"
              />
            </div>

            <div>
              <h3
                className="
                  text-2xl
                  font-bold
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                "
              >
                {project.name}
              </h3>

              <span
                className="
                  mt-2
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-slate-400
                "
              >
                {project.category}
              </span>
            </div>
          </div>

          {project.featured && (
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-gradient-to-r
                from-yellow-500/20
                to-orange-500/20
                px-3
                py-1.5
                text-xs
                font-semibold
                text-yellow-300
                ring-1
                ring-yellow-500/20
              "
            >
              <Star size={13} />
              Featured
            </span>
          )}
        </div>

        {/* Description */}

        <p
          className="
            mb-6
            flex-1
            leading-8
            text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Status */}

        <div className="mb-6">
          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusClasses(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>

        {/* Technologies */}

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        {/* Footer */}

        <div className="mt-auto flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label={`View ${project.name} source code`}
          >
            <Button className="w-full">
              <FaGithub
                size={18}
                className="mr-2"
              />
              Source Code
            </Button>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
            >
              <Button
                variant="outline"
                className="px-4"
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