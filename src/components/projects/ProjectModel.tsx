import {
  X,
  ExternalLink,
  Calendar,
  Layers,
  FolderGit2,
} from "lucide-react";

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
        z-100

        flex
        items-center
        justify-center

        overflow-y-auto

        bg-black/60
        backdrop-blur-xl

        p-6
      "
    >
      <GlassCard
        className="
          relative

          max-h-[92vh]
          w-full
          max-w-5xl

          overflow-y-auto

          rounded-4xl

          border
          border-zinc-200/70
          dark:border-white/10

          bg-white/90
          dark:bg-zinc-900/80

          backdrop-blur-3xl

          shadow-2xl
          shadow-black/20

          p-8
          md:p-10
        "
      >
        {/* Premium Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-4xl

            bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_45%)]

            opacity-80
          "
        />

        {/* Close Button */}

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute
            right-6
            top-6
            z-20

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-zinc-300/70
            dark:border-white/10

            bg-white/70
            dark:bg-white/5

            text-zinc-700
            dark:text-zinc-300

            backdrop-blur

            transition-all
            duration-300

            hover:scale-105
            hover:border-red-400
            hover:bg-red-500/10
            hover:text-red-500
          "
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          {/* Header */}

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
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
                "
              >
                <FolderGit2
                  size={30}
                  className="
                    text-cyan-600
                    dark:text-cyan-300
                  "
                />
              </div>

              {/* Title */}

              <div>
                <h2
                  className="
                    text-4xl
                    font-bold
                    tracking-tight

                    text-zinc-900
                    dark:text-zinc-100
                  "
                >
                  {project.name}
                </h2>

                <p
                  className="
                    mt-2

                    text-sm
                    font-medium

                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {project.category}
                </p>
              </div>
            </div>

            {/* Status */}

            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-emerald-500/25

                bg-emerald-500/10

                px-4
                py-2

                text-sm
                font-semibold

                text-emerald-700
                dark:text-emerald-300

                backdrop-blur
              "
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-current" />

              {project.status}
            </span>
          </div>

                    {/* ======================================================
              Project Overview
          ======================================================= */}

          <GlassCard
            className="
              mb-8

              rounded-3xl

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/3

              p-7

              backdrop-blur-xl
            "
          >
            <h3
              className="
                mb-4

                text-xl
                font-semibold

                text-zinc-900
                dark:text-zinc-100
              "
            >
              Project Overview
            </h3>

            <p
              className="
                leading-8

                text-zinc-700
                dark:text-zinc-400
              "
            >
              {project.description}
            </p>
          </GlassCard>

          {/* ======================================================
              Technology Stack
          ======================================================= */}

          <GlassCard
            className="
              mb-8

              rounded-3xl

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/3

              p-7

              backdrop-blur-xl
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-xl

                  bg-linear-to-br
                  from-cyan-500/15
                  to-violet-500/15
                "
              >
                <Layers
                  size={20}
                  className="
                    text-cyan-600
                    dark:text-cyan-300
                  "
                />
              </div>

              <h3
                className="
                  text-xl
                  font-semibold

                  text-zinc-900
                  dark:text-zinc-100
                "
              >
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

          {/* ======================================================
              Development
          ======================================================= */}

          <GlassCard
            className="
              mb-10

              rounded-3xl

              border
              border-zinc-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/3

              p-7

              backdrop-blur-xl
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-xl

                  bg-linear-to-br
                  from-cyan-500/15
                  to-violet-500/15
                "
              >
                <Calendar
                  size={20}
                  className="
                    text-cyan-600
                    dark:text-cyan-300
                  "
                />
              </div>

              <h3
                className="
                  text-xl
                  font-semibold

                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                Development
              </h3>
            </div>

            <p
              className="
                leading-8

                text-zinc-700
                dark:text-zinc-400
              "
            >
              This project demonstrates practical implementation of modern
              software development practices, scalable architecture,
              reusable components, responsive UI engineering,
              performance optimization, accessibility, and clean,
              maintainable code following industry standards.
            </p>
          </GlassCard>

          {/* ======================================================
              Footer
          ======================================================= */}

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="
                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:shadow-lg
                "
              >
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
              >
                <Button
                  variant="outline"
                  className="
                    transition-all
                    duration-300

                    hover:scale-[1.02]
                  "
                >
                  <ExternalLink
                    size={18}
                    className="mr-2"
                  />

                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export default ProjectModal;