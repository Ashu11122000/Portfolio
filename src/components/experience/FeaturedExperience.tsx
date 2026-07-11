import { ArrowRight, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { experiences } from "../../data/experience";

/**
 * ==========================================================
 * Featured Experience Component
 * ==========================================================
 *
 * Compact experience preview for the Home page.
 *
 * Features
 * ----------
 * ✓ Latest Experience Preview
 * ✓ Glassmorphism Card
 * ✓ Responsive Layout
 * ✓ Technologies Preview
 * ✓ CTA to Experience Page
 * ✓ Reuses Centralized Experience Data
 * ✓ Production Ready
 *
 * Used By
 * ----------
 * Home.tsx
 *
 * ==========================================================
 */

function FeaturedExperience() {
  const latestExperience = experiences[0];

  if (!latestExperience) {
    return null;
  }

  return (
    <section className="py-24">
      <Container>
        {/* ======================================================
            Section Title
        ======================================================= */}

        <SectionTitle
          title="Professional"
          highlight="Experience"
          subtitle="A quick overview of my latest professional experience. Visit the Experience page to explore my complete journey."
          center
        />

        {/* ======================================================
            Experience Preview Card
        ======================================================= */}

        <div className="mt-16">
          <Card
            hover
            glass
            className="group overflow-hidden"
          >
            <div className="space-y-8">
              {/* Header */}

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {latestExperience.position}
                    </h3>

                    <Badge
                      variant="primary"
                      size="sm"
                    >
                      {latestExperience.employmentType}
                    </Badge>

                    {latestExperience.currentlyWorking && (
                      <Badge
                        variant="success"
                        size="sm"
                      >
                        Current
                      </Badge>
                    )}
                  </div>

                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {latestExperience.company}
                  </h4>

                  <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={18}
                        className="text-indigo-500"
                      />

                      <span>
                        {latestExperience.startDate} —{" "}
                        {latestExperience.currentlyWorking
                          ? "Present"
                          : latestExperience.endDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin
                        size={18}
                        className="text-violet-500"
                      />

                      <span>{latestExperience.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness
                        size={18}
                        className="text-cyan-500"
                      />

                      <span>{latestExperience.employmentType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}

              <div>
                <p className="max-w-4xl leading-8 text-slate-600 dark:text-slate-300">
                  {latestExperience.description}
                </p>
              </div>

              {/* Technologies */}

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">
                  {latestExperience.technologies
                    .slice(0, 6)
                    .map((technology) => (
                      <Badge
                        key={technology.id}
                        variant="outline"
                        size="sm"
                        className="
                          transition-all
                          duration-300
                          hover:border-indigo-500
                          hover:bg-indigo-500/10
                          hover:text-indigo-600
                          dark:hover:text-indigo-300
                        "
                      >
                        {technology.name}
                      </Badge>
                    ))}
                </div>
              </div>

              {/* CTA */}

              <div className="flex justify-center pt-4">
                <Link to="/experience">
                  <Button
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    View Experience
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedExperience;