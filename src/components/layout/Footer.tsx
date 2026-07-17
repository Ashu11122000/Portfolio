import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";

import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/* =============================================================================
   Footer
   -----------------------------------------------------------------------------
   Ultra Premium Footer
============================================================================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-slate-200/60
        dark:border-white/10

        bg-linear-to-b
        from-white
        via-slate-50
        to-slate-100

        dark:from-slate-950
        dark:via-slate-950
        dark:to-black
      "
    >
      {/* =================================================================== */}
      {/* Aurora Background                                                    */}
      {/* =================================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Glass Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-linear-to-b
          from-white/30
          via-transparent
          to-transparent

          dark:from-white/5
        "
      />

      {/* Noise Layer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
      />

      <Container>
        <div className="relative py-24">

          {/* =============================================================== */}
          {/* Top Grid                                                        */}
          {/* =============================================================== */}

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

            {/* =========================================================== */}
            {/* Brand Card                                                  */}
            {/* =========================================================== */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl

                border
                border-slate-200/70
                dark:border-white/10

                bg-white/60
                dark:bg-slate-900/50

                backdrop-blur-3xl

                p-8

                shadow-xl
                shadow-slate-300/10
                dark:shadow-black/30

                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-violet-500/15
              "
            >
              {/* Ambient Glow */}

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />

                <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-cyan-500/15 blur-3xl" />
              </div>

              {/* Glass Reflection */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-linear-to-b
                  from-white/20
                  via-transparent
                  to-transparent

                  dark:from-white/5
                "
              />

              <div className="relative z-10">

                {/* Logo */}

                <Link
                  to="/"
                  className="group/logo inline-flex items-center gap-5"
                >
                  <div className="relative">

                    {/* Glow */}

                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 opacity-40 blur-xl transition-all duration-500 group-hover/logo:scale-150 group-hover/logo:opacity-80" />

                    {/* Icon */}

                    <div
                      className="
                        relative

                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        rounded-3xl

                        bg-linear-to-br
                        from-indigo-600
                        via-violet-600
                        to-fuchsia-600

                        text-xl
                        font-black
                        text-white

                        shadow-xl
                        shadow-violet-500/30

                        transition-all
                        duration-500

                        group-hover/logo:scale-110
                        group-hover/logo:-rotate-6
                      "
                    >
                      {SITE_CONFIG.logo}
                    </div>
                  </div>

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-black
                        tracking-tight

                        text-slate-900
                        dark:text-white
                      "
                    >
                      {SITE_CONFIG.name}
                    </h3>

                    <p
                      className="
                        mt-1

                        text-xs
                        font-semibold

                        uppercase
                        tracking-[0.28em]

                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Full Stack Engineer
                    </p>

                  </div>
                </Link>

                {/* Description */}

                <p
                  className="
                    mt-8

                    max-w-md

                    text-base
                    leading-8

                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Passionate about crafting premium digital experiences with
                  modern technologies, scalable architectures, beautiful user
                  interfaces, and performance-driven engineering.
                </p>

                </div>

              </div>

                                {/* =========================================================== */}
                {/* Quick Links                                                 */}
                {/* =========================================================== */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl

                    border
                    border-slate-200/70
                    dark:border-white/10

                    bg-white/60
                    dark:bg-slate-900/50

                    backdrop-blur-3xl

                    p-8

                    shadow-xl
                    shadow-slate-300/10
                    dark:shadow-black/30

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:shadow-violet-500/15
                  "
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-violet-500" />

                      <h4
                        className="
                          text-xl
                          font-bold
                          tracking-tight

                          text-slate-900
                          dark:text-white
                        "
                      >
                        Quick Links
                      </h4>
                    </div>

                    <ul className="space-y-4">
                      {NAV_LINKS.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="
                              group/link

                              inline-flex
                              items-center
                              gap-3

                              font-medium

                              text-slate-600
                              dark:text-slate-400

                              transition-all
                              duration-300

                              hover:translate-x-2
                              hover:text-violet-600
                              dark:hover:text-violet-300
                            "
                          >
                            <span
                              className="
                                h-1.5
                                w-1.5
                                rounded-full

                                bg-violet-500

                                transition-all
                                duration-300

                                group-hover/link:scale-150
                              "
                            />

                            <span className="relative">
                              {item.label}

                              <span
                                className="
                                  absolute
                                  -bottom-1
                                  left-0

                                  h-0.5
                                  w-0

                                  rounded-full

                                  bg-linear-to-r
                                  from-violet-500
                                  to-cyan-500

                                  transition-all
                                  duration-300

                                  group-hover/link:w-full
                                "
                              />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* =========================================================== */}
                {/* Connect Card                                                */}
                {/* =========================================================== */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl

                    border
                    border-slate-200/70
                    dark:border-white/10

                    bg-white/60
                    dark:bg-slate-900/50

                    backdrop-blur-3xl

                    p-8

                    shadow-xl
                    shadow-slate-300/10
                    dark:shadow-black/30

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:shadow-violet-500/15
                  "
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="absolute -top-16 -left-16 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
                  </div>

                  {/* Glass Reflection */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-linear-to-b
                      from-white/20
                      via-transparent
                      to-transparent

                      dark:from-white/5
                    "
                  />

                  <div className="relative z-10">

                    <div className="mb-8 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-500" />

                      <h4
                        className="
                          text-xl
                          font-bold
                          tracking-tight

                          text-slate-900
                          dark:text-white
                        "
                      >
                        Let's Connect
                      </h4>
                    </div>

                    <p
                      className="
                        mb-8

                        leading-8

                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      I'm always open to discussing exciting projects,
                      innovative ideas, freelance opportunities, or simply
                      connecting with fellow developers and technology
                      enthusiasts.
                    </p>

                    {/* Social Icons */}

                    <SocialIcons />

                    {/* CTA */}

                    <div className="mt-10">
                      <Button
                        variant="primary"
                        rightIcon={<ArrowUp size={18} />}
                        onClick={handleBackToTop}
                        className="w-full sm:w-auto"
                      >
                        Back to Top
                      </Button>
                    </div>

                    </div>
                </div>
              </div>
                          {/* =============================================================== */}
          {/* Premium Divider                                                 */}
          {/* =============================================================== */}

          <div className="relative my-16">
            <div
              className="
                h-px
                w-full

                bg-linear-to-r
                from-transparent
                via-slate-300
                to-transparent

                dark:via-slate-700
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                inset-x-0
                top-1/2

                h-px

                -translate-y-1/2

                bg-linear-to-r
                from-transparent
                via-violet-500/40
                to-transparent

                blur-sm
              "
            />
          </div>

          {/* =============================================================== */}
          {/* Bottom Footer                                                   */}
          {/* =============================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-8

              lg:flex-row
            "
          >
            {/* =========================================================== */}
            {/* Copyright                                                   */}
            {/* =========================================================== */}

            <div className="space-y-2 text-center lg:text-left">
              <p
                className="
                  text-base
                  font-semibold

                  text-slate-700
                  dark:text-slate-300
                "
              >
                © {currentYear}{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  {SITE_CONFIG.name}
                </span>
              </p>

              <p
                className="
                  text-sm

                  text-slate-500
                  dark:text-slate-400
                "
              >
                All rights reserved.
              </p>
            </div>

            {/* =========================================================== */}
            {/* Built With                                                  */}
            {/* =========================================================== */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  rounded-full

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/60
                  dark:bg-slate-900/60

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-slate-700
                  dark:text-slate-300

                  backdrop-blur-xl
                "
              >
                React
              </span>

              <span
                className="
                  rounded-full

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/60
                  dark:bg-slate-900/60

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-slate-700
                  dark:text-slate-300

                  backdrop-blur-xl
                "
              >
                TypeScript
              </span>

              <span
                className="
                  rounded-full

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/60
                  dark:bg-slate-900/60

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-slate-700
                  dark:text-slate-300

                  backdrop-blur-xl
                "
              >
                Tailwind CSS
              </span>
            </div>

            {/* =========================================================== */}
            {/* Built With Text                                             */}
            {/* =========================================================== */}

            <div
              className="
                text-center
                lg:text-right
              "
            >
              <p
                className="
                  text-sm
                  leading-7

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Crafted with passion, precision and modern web technologies to
                deliver fast, scalable and beautiful digital experiences.
              </p>
            </div>
          </div>

                  </div>
      </Container>

      {/* =================================================================== */}
      {/* Decorative Bottom Glow                                              */}
      {/* =================================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            h-40
            w-136
            -translate-x-1/2

            rounded-full

            bg-linear-to-r
            from-violet-500/10
            via-fuchsia-500/15
            to-cyan-500/10

            blur-3xl
          "
        />
      </div>

      {/* =================================================================== */}
      {/* Bottom Reflection                                                   */}
      {/* =================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-px

          bg-linear-to-r
          from-transparent
          via-white/50
          to-transparent

          dark:via-white/10
        "
      />

      {/* =================================================================== */}
      {/* Floating Decorative Elements                                        */}
      {/* =================================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Orb */}

        <div
          className="
            absolute
            right-10
            top-20

            h-3
            w-3

            rounded-full

            bg-violet-400/40

            blur-[1px]
          "
        />

        {/* Bottom Left Orb */}

        <div
          className="
            absolute
            bottom-24
            left-16

            h-2
            w-2

            rounded-full

            bg-cyan-400/40

            blur-[1px]
          "
        />

        {/* Center Orb */}

        <div
          className="
            absolute
            bottom-16
            left-1/2

            h-2.5
            w-2.5

            -translate-x-1/2

            rounded-full

            bg-fuchsia-400/40

            blur-[1px]
          "
        />
      </div>
    </footer>
  );
}

export default Footer;