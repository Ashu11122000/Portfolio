import { useMemo, useState } from "react";

import AnimatedBackground from "../components/ui/AnimatedBackground";
import Container from "../components/common/Container";
import FloatingShapes from "../components/ui/FloatingShapes";
import SectionTitle from "../components/common/SectionTitle";

import FilterBar, {
  type ProjectFilter,
} from "../components/projects/FilterBar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/projects/SearchBar";

import GlassCard from "../components/ui/GlassCard";

import projects from "../data/projects";

/**
 * ==========================================================
 * Projects Page
 * ==========================================================
 *
 * Ultra Premium Projects Showcase
 *
 * Features
 * ----------
 * ✓ Animated Background
 * ✓ Floating Shapes
 * ✓ Search
 * ✓ Category Filter
 * ✓ Live Counter
 * ✓ Empty State
 * ✓ Glassmorphism
 * ✓ Responsive
 *
 * ==========================================================
 */

function Projects() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] =
    useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        filter === "All" ||
        project.category === filter;

      const matchesSearch =
        keyword.length === 0 ||
        project.name
          .toLowerCase()
          .includes(keyword) ||
        project.description
          .toLowerCase()
          .includes(keyword) ||
        project.technologies.some((technology) =>
          technology.name
            .toLowerCase()
            .includes(keyword),
        );

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [filter, search]);

  return (
    <main
      className="
        relative
        isolate
        min-h-screen
        overflow-x-hidden
        py-28
      "
    >
      {/* Premium Background */}

      <AnimatedBackground />

      <FloatingShapes />

      <Container>
        <section className="relative z-10">
          {/* Heading */}

          <SectionTitle
            title="Projects"
            subtitle="Explore a curated collection of frontend, backend, and full-stack applications showcasing scalable architecture, clean code, modern UI design, and real-world software engineering practices."
            center
          />

          {/* Search */}

          <div className="mx-auto mt-16 max-w-3xl">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Filter */}

          <div className="mt-10">
            <FilterBar
              activeFilter={filter}
              onFilterChange={setFilter}
            />
          </div>

          {/* Counter */}

          <GlassCard
            hover={false}
            className="
              mt-10
              flex
              items-center
              justify-between
              px-6
              py-4
            "
          >
            <p
              className="
                text-sm
                font-medium
                tracking-wide
                text-zinc-700
                dark:text-zinc-300
              "
            >
              Showing{" "}
              <span
                className="
                  font-bold
                  text-cyan-600
                  dark:text-cyan-400
                "
              >
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          </GlassCard>

          {/* Projects */}

          <div className="mt-10">
            {filteredProjects.length > 0 ? (
              <ProjectGrid
                projects={filteredProjects}
              />
            ) : (
              <GlassCard
                hover={false}
                className="
                  py-20
                  text-center
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-zinc-900
                    dark:text-white
                  "
                >
                  No projects found
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  Try changing the search
                  keyword or selecting a
                  different category.
                </p>
              </GlassCard>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Projects;