import { X, ExternalLink, Calendar, Layers, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";
import TechBadge from "./TechBadge";

import type { Project } from "../../types/project";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

function ProjectModal({
  project,
  open,
  onClose,
}: ProjectModalProps) {
  if (!open || !project) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-lg
      p-5
      "
    >
      <GlassCard
        className="
        relative
        max-h-[90vh]
        w-full
        max-w-5xl
        overflow-y-auto
        rounded-3xl
        border
        border-white/10
        p-8
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
          absolute
          right-6
          top-6
          rounded-xl
          p-2
          transition
          hover:bg-white/10
          "
        >
          <X size={22} />
        </button>

        {/* Header */}

        <div className="mb-10 flex items-start justify-between gap-6">

          <div className="flex gap-5">

            <div
              className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500/20
              to-violet-500/20
              "
            >
              <FolderGit2
                size={30}
                className="text-cyan-300"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                {project.name}
              </h2>

              <p className="mt-2 text-slate-400">
                {project.category}
              </p>

            </div>

          </div>

          <span
            className="
            rounded-full
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-4
            py-2
            text-sm
            text-emerald-300
            "
          >
            {project.status}
          </span>

        </div>

        {/* Description */}

        <GlassCard className="mb-8 p-6">

          <h3 className="mb-4 text-xl font-semibold">
            Project Overview
          </h3>

          <p className="leading-8 text-slate-400">
            {project.description}
          </p>

        </GlassCard>

        {/* Tech */}

        <GlassCard className="mb-8 p-6">

          <div className="mb-4 flex items-center gap-2">

            <Layers size={20} />

            <h3 className="text-xl font-semibold">
              Technology Stack
            </h3>

          </div>

          <div className="flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <TechBadge
                key={tech.id}
                technology={tech}
              />
            ))}

          </div>

        </GlassCard>

        {/* Timeline */}

        <GlassCard className="mb-8 p-6">

          <div className="flex items-center gap-2">

            <Calendar size={20} />

            <h3 className="text-xl font-semibold">
              Development
            </h3>

          </div>

          <p className="mt-4 text-slate-400">
            This project demonstrates practical implementation
            of modern software development practices,
            scalable architecture,
            responsive UI design,
            reusable components,
            and clean coding principles.
          </p>

        </GlassCard>

        {/* Footer */}

        <div className="flex flex-wrap gap-4">

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Button>

              <FaGithub className="mr-2" />

              Source Code

            </Button>
          </a>

          {project.liveUrl && (

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">

                <ExternalLink
                  size={18}
                  className="mr-2"
                />

                Live Demo

              </Button>
            </a>

          )}

        </div>

      </GlassCard>
    </div>
  );
}

export default ProjectModal;