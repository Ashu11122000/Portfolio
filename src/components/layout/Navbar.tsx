import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Sparkles, X } from "lucide-react";

import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

import { cn } from "../../utils/cn";
import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/* =============================================================================
   Navbar
   -----------------------------------------------------------------------------
   Ultra Premium Floating Navigation
============================================================================= */

function Navbar() {
  /* -------------------------------------------------------------------------- */
  /* State                                                                      */
  /* -------------------------------------------------------------------------- */

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /* Scroll Effect                                                              */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------------------------- */
  /* Lock Body Scroll                                                           */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ====================================================================== */}
      {/* Floating Navbar                                                        */}
      {/* ====================================================================== */}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-500 ease-out",
          isScrolled ? "pt-3" : "pt-5"
        )}
      >
        <Container>
          <div
            className={cn(
              "group relative overflow-hidden rounded-[30px]",

              // Glass
              "bg-white/80 dark:bg-slate-900/75",

              "backdrop-blur-3xl",

              // Border
              "border border-slate-200/70",
              "dark:border-white/10",

              // Shadow
              isScrolled
                ? [
                    "shadow-[0_24px_80px_rgba(15,23,42,0.15)]",
                    "dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
                  ]
                : [
                    "shadow-[0_14px_40px_rgba(15,23,42,0.08)]",
                    "dark:shadow-[0_14px_40px_rgba(0,0,0,0.30)]",
                  ],

              "transition-all duration-500"
            )}
          >
            {/* =============================================================== */}
            {/* Aurora Background                                               */}
            {/* =============================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>

            {/* Premium Border Highlight */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[30px]
                bg-linear-to-r
                from-violet-500/10
                via-fuchsia-500/10
                to-cyan-500/10
              "
            />

            {/* Glass Reflection */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[30px]
                bg-linear-to-b
                from-white/20
                via-transparent
                to-transparent
                dark:from-white/5
              "
            />

            {/* =============================================================== */}
            {/* Navbar Content                                                  */}
            {/* =============================================================== */}

            <div
              className={cn(
                "relative z-10 flex items-center justify-between",

                "px-5 lg:px-8",

                isScrolled ? "h-16" : "h-20",

                "transition-all duration-500"
              )}
            >
              {/* =========================================================== */}
              {/* Logo                                                       */}
              {/* =========================================================== */}

              <Link
                to="/"
                className="group/logo flex items-center gap-4"
              >
                <div className="relative">
                  {/* Glow */}

                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-600 via-fuchsia-500 to-cyan-500 opacity-40 blur-xl transition-all duration-500 group-hover/logo:scale-150 group-hover/logo:opacity-80" />

                  {/* Logo */}

                  <div
                    className={cn(
                      "relative flex h-14 w-14 items-center justify-center",

                      "rounded-3xl",

                      "bg-linear-to-br",
                      "from-indigo-600",
                      "via-violet-600",
                      "to-cyan-500",

                      "text-white",

                      "shadow-xl shadow-violet-500/30",

                      "transition-all duration-500",

                      "group-hover/logo:-rotate-6",
                      "group-hover/logo:scale-110"
                    )}
                  >
                    <span className="text-lg font-black tracking-tight">
                      {SITE_CONFIG.logo}
                    </span>
                  </div>
                </div>

                {/* Brand */}

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <h1
                      className="
                        text-xl
                        font-black
                        tracking-tight
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {SITE_CONFIG.name}
                    </h1>

                    <Sparkles
                      size={16}
                      className="text-violet-500 transition-transform duration-300 group-hover/logo:rotate-12"
                    />
                  </div>

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
                    Software Engineer
                  </p>
                </div>
              </Link>

              {/* =========================================================== */}
              {/* Desktop Navigation                                          */}
              {/* =========================================================== */}

              <nav className="hidden lg:block">
                <ul
                  className={cn(
                    "flex items-center gap-2",

                    "rounded-2xl",

                    "border border-slate-200/70",
                    "dark:border-white/10",

                    "bg-white/60 dark:bg-slate-800/50",

                    "backdrop-blur-2xl",

                    "p-2"
                  )}
                >
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            "group relative flex items-center justify-center overflow-hidden rounded-2xl px-5 py-3",

                            "text-sm font-semibold tracking-wide",

                            "transition-all duration-300",

                            isActive
                              ? [
                                  "bg-linear-to-r",
                                  "from-violet-600",
                                  "via-fuchsia-600",
                                  "to-cyan-500",

                                  "text-white",

                                  "shadow-lg shadow-violet-500/30",
                                ]
                              : [
                                  "text-slate-700",
                                  "dark:text-slate-300",

                                  "hover:bg-white/80",
                                  "dark:hover:bg-slate-800/80",

                                  "hover:text-violet-700",
                                  "dark:hover:text-white",
                                ]
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="relative z-10">
                              {item.label}
                            </span>

                            {!isActive && (
                              <span
                                className="
                                  absolute
                                  bottom-2
                                  left-1/2
                                  h-0.5
                                  w-0
                                  -translate-x-1/2
                                  rounded-full
                                  bg-linear-to-r
                                  from-violet-500
                                  to-cyan-500
                                  transition-all
                                  duration-300
                                  group-hover:w-8
                                "
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

                            {/* =========================================================== */}
              {/* Right Actions                                               */}
              {/* =========================================================== */}

              <div className="flex items-center gap-3">
                {/* Desktop Theme Toggle */}

                <div className="hidden lg:block">
                  <ThemeToggle />
                </div>

                {/* Mobile Theme Toggle */}

                <div className="lg:hidden">
                  <ThemeToggle />
                </div>

                {/* ======================================================= */}
                {/* Mobile Menu Button                                      */}
                {/* ======================================================= */}

                <button
                  type="button"
                  aria-label="Open navigation menu"
                  aria-expanded={isMobileOpen}
                  aria-controls="mobile-navigation"
                  onClick={() => setIsMobileOpen(true)}
                  className={cn(
                    "group lg:hidden",

                    // Layout
                    "relative flex h-11 w-11 items-center justify-center",

                    "overflow-hidden rounded-2xl",

                    // Glass
                    "bg-white/80 dark:bg-slate-900/70",

                    "backdrop-blur-3xl",

                    // Border
                    "border border-slate-200/70",
                    "dark:border-white/10",

                    // Shadow
                    "shadow-lg shadow-slate-300/20",
                    "dark:shadow-black/30",

                    // Performance
                    "transform-gpu will-change-transform",

                    // Animation
                    "transition-all duration-300 ease-out",

                    // Hover
                    "hover:-translate-y-1",
                    "hover:scale-105",

                    "hover:border-violet-400/40",

                    "hover:shadow-2xl",
                    "hover:shadow-violet-500/30",

                    // Focus
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-violet-500/50",
                    "focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-white",
                    "dark:focus-visible:ring-offset-slate-950"
                  )}
                >
                  {/* Glass Highlight */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[inherit]
                      bg-linear-to-b
                      from-white/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Animated Shimmer */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-1/2
                      w-1/2
                      skew-x-[-20deg]
                      bg-linear-to-r
                      from-transparent
                      via-white/25
                      to-transparent
                      opacity-0
                      transition-all
                      duration-700
                      group-hover:left-[130%]
                      group-hover:opacity-100
                    "
                  />

                  {/* Ambient Glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-violet-500/20
                      blur-xl
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <Menu
                    size={21}
                    className="
                      relative
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ====================================================================== */}
      {/* Mobile Overlay                                                         */}
      {/* ====================================================================== */}

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileOpen(false)}
          className={cn(
            "fixed inset-0 z-40 lg:hidden",

            // Premium backdrop
            "bg-slate-950/50",

            "backdrop-blur-md",

            // Animation
            "animate-in fade-in duration-300"
          )}
        />
      )}

            {/* ====================================================================== */}
      {/* Mobile Drawer                                                          */}
      {/* ====================================================================== */}

      <aside
        id="mobile-navigation"
        aria-hidden={!isMobileOpen}
        className={cn(
          "fixed right-0 top-0 z-50",

          "flex h-screen w-80 max-w-[90vw] flex-col",

          "overflow-hidden",

          // Premium Glass
          "bg-white/85 dark:bg-slate-950/80",

          "backdrop-blur-3xl",

          // Border
          "border-l border-slate-200/70",
          "dark:border-white/10",

          // Shadow
          "shadow-[0_30px_80px_rgba(15,23,42,0.22)]",
          "dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)]",

          // Animation
          "transform-gpu",
          "transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",

          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* =============================================================== */}
        {/* Aurora Background                                               */}
        {/* =============================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-cyan-500/12 blur-3xl" />

          <div className="absolute left-1/3 top-1/2 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        {/* Glass Reflection */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-b
            from-white/15
            via-transparent
            to-transparent
            dark:from-white/5
          "
        />

        {/* =============================================================== */}
        {/* Drawer Header                                                   */}
        {/* =============================================================== */}

        <div
          className={cn(
            "relative z-10",

            "flex items-center justify-between",

            "border-b border-slate-200/60",
            "dark:border-slate-800/70",

            "px-6 py-6"
          )}
        >
          {/* Brand */}

          <div>
            <h2
              className="
                text-xl
                font-black
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              {SITE_CONFIG.name}
            </h2>

            <p
              className="
                mt-1
                text-xs
                font-semibold
                uppercase
                tracking-[0.30em]
                text-slate-500
                dark:text-slate-400
              "
            >
              Navigation
            </p>
          </div>

          {/* =========================================================== */}
          {/* Close Button                                                */}
          {/* =========================================================== */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileOpen(false)}
            className={cn(
              "group",

              "relative flex h-11 w-11 items-center justify-center",

              "overflow-hidden rounded-2xl",

              // Glass
              "bg-white/80 dark:bg-slate-900/70",

              "backdrop-blur-3xl",

              // Border
              "border border-slate-200/70",
              "dark:border-white/10",

              // Shadow
              "shadow-lg shadow-slate-300/20",
              "dark:shadow-black/30",

              // Animation
              "transform-gpu",
              "transition-all duration-300 ease-out",

              "hover:rotate-90",
              "hover:scale-105",

              "hover:border-violet-400/40",

              "hover:shadow-2xl",
              "hover:shadow-violet-500/30",

              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-violet-500/50",
              "focus-visible:ring-offset-2",
              "focus-visible:ring-offset-white",
              "dark:focus-visible:ring-offset-slate-950"
            )}
          >
            {/* Glass Highlight */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[inherit]
                bg-linear-to-b
                from-white/20
                via-transparent
                to-transparent
              "
            />

            {/* Animated Shimmer */}

            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-1/2
                w-1/2
                skew-x-[-20deg]
                bg-linear-to-r
                from-transparent
                via-white/25
                to-transparent
                opacity-0
                transition-all
                duration-700
                group-hover:left-[130%]
                group-hover:opacity-100
              "
            />

            <X
              size={20}
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:scale-110
              "
            />
          </button>
        </div>

        {/* =============================================================== */}
        {/* Mobile Navigation                                               */}
        {/* =============================================================== */}

        <nav className="relative z-10 flex-1 overflow-y-auto px-5 py-8">
          <ul className="space-y-3">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "group relative flex items-center overflow-hidden rounded-2xl",

                      "px-5 py-4",

                      "font-semibold tracking-wide",

                      "transition-all duration-300",

                      isActive
                        ? [
                            "bg-linear-to-r",
                            "from-violet-600",
                            "via-fuchsia-600",
                            "to-cyan-500",

                            "text-white",

                            "shadow-lg shadow-violet-500/30",
                          ]
                        : [
                            "text-slate-700",
                            "dark:text-slate-300",

                            "hover:bg-white/80",
                            "dark:hover:bg-slate-800/70",

                            "hover:text-violet-700",
                            "dark:hover:text-white",
                          ]
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">
                        {item.label}
                      </span>

                      {!isActive && (
                        <span
                          className="
                            absolute
                            inset-y-0
                            left-0

                            w-1

                            origin-bottom
                            scale-y-0

                            bg-linear-to-b
                            from-violet-500
                            to-cyan-500

                            transition-transform
                            duration-300

                            group-hover:scale-y-100
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

                    {/* =============================================================== */}
          {/* Mobile Theme Toggle                                             */}
          {/* =============================================================== */}

          <div className="mt-10 flex justify-center lg:hidden">
            <ThemeToggle />
          </div>
        </nav>

        {/* =============================================================== */}
        {/* Drawer Footer                                                   */}
        {/* =============================================================== */}

        <div
          className={cn(
            "relative z-10",

            "border-t border-slate-200/60",
            "dark:border-slate-800/70",

            "p-6"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl",

              // Glass
              "bg-linear-to-br",
              "from-violet-500/10",
              "via-fuchsia-500/10",
              "to-cyan-500/10",

              "backdrop-blur-2xl",

              // Border
              "border border-white/30",
              "dark:border-white/10",

              // Shadow
              "shadow-lg shadow-violet-500/10",

              "p-5"
            )}
          >
            {/* Aurora Glow */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -right-8 h-28 w-28 rounded-full bg-violet-500/15 blur-2xl" />

              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>

            {/* Glass Reflection */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[inherit]
                bg-linear-to-b
                from-white/20
                via-transparent
                to-transparent
                dark:from-white/5
              "
            />

            <div className="relative z-10">
              <h3
                className="
                  text-lg
                  font-bold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Let's Build Something Amazing 🚀
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Thanks for visiting my portfolio. I'm always excited to
                collaborate on modern web applications, AI-powered products,
                and innovative software solutions.
              </p>

              {/* Decorative Accent */}

              <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />

                <div className="h-px flex-1 bg-linear-to-r from-violet-500/50 via-fuchsia-500/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;