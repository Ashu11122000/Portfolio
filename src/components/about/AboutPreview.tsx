import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import GradientText from "../ui/GradientText";

import personalInfo from "../../data/personalInfo";

function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div className="space-y-8">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-indigo-500/25
                bg-gradient-to-r
                from-indigo-500/10
                via-violet-500/10
                to-fuchsia-500/10
                px-5
                py-2
                text-sm
                font-semibold
                tracking-wide
                text-indigo-300
                backdrop-blur-xl
              "
            >
              About Me
            </span>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Passionate about building{" "}
              <GradientText>
                modern web applications.
              </GradientText>
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              {personalInfo.bio}
            </p>

            <Link to="/about">
              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Card */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl

              border
              border-white/20

              bg-white/60
              backdrop-blur-3xl

              p-8

              shadow-2xl
              shadow-slate-300/10

              ring-1
              ring-white/10

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-violet-500/20

              dark:border-white/10
              dark:bg-slate-900/50
              dark:shadow-black/30
            "
          >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Glass Highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {personalInfo.role}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Experience
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {personalInfo.experience}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Availability
                  </p>

                  <p className="mt-2 text-lg font-semibold text-emerald-500">
                    {personalInfo.availability}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Languages
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {personalInfo.languages.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;