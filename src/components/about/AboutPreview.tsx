import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../common/Button";
import Container from "../common/Container";
import GradientText from "../ui/GradientText";

import personalInfo from "../../data/personalInfo";

function AboutPreview() {
  return (
    <section className="py-24">
      <Container>
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* Left Content */}

          <div className="space-y-6">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-indigo-500/30
                bg-indigo-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-indigo-400
              "
            >
              About Me
            </span>

            <h2 className="text-4xl font-bold md:text-5xl">
              Passionate about building{" "}
              <GradientText>modern web applications.</GradientText>
            </h2>

            <p className="max-w-2xl leading-8 text-slate-400">
              {personalInfo.bio}
            </p>

            <Link to="/about">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Card */}

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/60
              p-8
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">{personalInfo.name}</h3>

                <p className="mt-2 text-slate-400">{personalInfo.role}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Experience</p>

                  <p className="mt-1 font-semibold">
                    {personalInfo.experience}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="mt-1 font-semibold">{personalInfo.location}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Availability</p>

                  <p className="mt-1 font-semibold text-emerald-400">
                    {personalInfo.availability}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Languages</p>

                  <p className="mt-1 font-semibold">
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
