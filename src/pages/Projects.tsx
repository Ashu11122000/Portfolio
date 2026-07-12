/**
 * ==========================================================
 * Projects Page
 * ==========================================================
 *
 * Ultra Premium Projects Showcase
 *
 * Features
 * ----------
 * ✓ Search
 * ✓ Category Filtering
 * ✓ Live Project Counter
 * ✓ Premium Layout
 * ✓ Glassmorphism Background
 * ✓ Responsive
 * ✓ Optimized Filtering
 *
 * ==========================================================
 */

import { useMemo, useState } from "react";

import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import FilterBar, {
  type ProjectFilter,
} from "../components/projects/FilterBar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/projects/SearchBar";

import projects from "../data/projects";

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
            .includes(keyword)
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
        min-h-screen
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
          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_40%)]
        "
      />

      <Container>
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

        {/* Result Counter */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-sm
              font-medium
              tracking-wide
              text-slate-400
            "
          >
            Showing{" "}
            <span className="font-semibold text-cyan-400">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1
              ? "project"
              : "projects"}
          </p>
        </div>

        {/* Projects */}

        <div className="mt-10">
          <ProjectGrid
            projects={filteredProjects}
          />
        </div>
      </Container>
    </main>
  );
}

export default Projects;