import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Menu, Sparkles, X } from "lucide-react";

import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

import { cn } from "../../utils/cn";
import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/**
 * ==========================================================
 * Navbar Component
 * ==========================================================
 *
 * Ultra Premium Floating Navbar
 *
 * Features
 * ----------
 * ✓ Floating Glassmorphism
 * ✓ Scroll Animation
 * ✓ Premium Logo
 * ✓ Theme Toggle
 * ✓ Responsive
 * ✓ Mobile Drawer
 * ✓ Tailwind CSS v4
 *
 * ==========================================================
 */

function Navbar() {
  /**
   * Navbar scroll state
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Mobile Drawer
   */
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /**
   * Detect Scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Lock body when drawer opens
   */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ================================================= */}
      {/* Floating Navbar */}
      {/* ================================================= */}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-500",

          isScrolled ? "pt-3" : "pt-5",
        )}
      >
        <Container>
          <div
            className={cn(
              "relative overflow-hidden",

              "rounded-[28px]",

              "border border-white/20",

              "bg-white/70",

              "backdrop-blur-3xl",

              "dark:border-slate-700/60",
              "dark:bg-slate-900/70",

              isScrolled
                ? "shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                : "shadow-[0_12px_40px_rgba(15,23,42,0.08)]",

              "transition-all duration-500",
            )}
          >
            {/* Animated Background */}

            <div className="absolute inset-0">
              <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>

            {/* Gradient Border */}

            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-[28px]",

                "bg-linear-to-r",

                "from-violet-500/10",
                "via-fuchsia-500/10",
                "to-cyan-500/10",
              )}
            />

            {/* Navbar Content */}

            <div
              className={cn(
                "relative z-10",

                "flex items-center justify-between",

                "px-5 lg:px-8",

                isScrolled ? "h-16" : "h-20",

                "transition-all duration-500",
              )}
            >
              {/* ===================================== */}
              {/* Logo */}
              {/* ===================================== */}

              <Link to="/" className="group flex items-center gap-4">
                {/* Logo */}

                <div className="relative">
                  {/* Glow */}

                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-violet-600 via-fuchsia-500 to-cyan-500 opacity-40 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />

                  {/* Icon */}

                  <div
                    className={cn(
                      "relative",

                      "flex h-14 w-14 items-center justify-center",

                      "rounded-3xl",

                      "bg-linear-to-br",

                      "from-indigo-600",
                      "via-violet-600",
                      "to-cyan-500",

                      "shadow-xl",

                      "transition-all duration-500",

                      "group-hover:-rotate-6",
                      "group-hover:scale-110",
                    )}
                  >
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      {SITE_CONFIG.logo}
                    </span>
                  </div>
                </div>

                {/* Brand */}

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-900 dark:text-white">
                      {SITE_CONFIG.name}
                    </h1>

                    <Sparkles size={15} className="text-violet-500" />
                  </div>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-600 dark:text-slate-400">
                    Software Engineer
                  </p>
                </div>
              </Link>

              {/* ========================================= */}
              {/* Desktop Navigation */}
              {/* ========================================= */}

              <nav className="hidden lg:block">
                <ul
                  className={cn(
                    "flex items-center gap-2",

                    "rounded-2xl",

                    "border border-white/20",

                    "bg-white/45",

                    "p-2",

                    "backdrop-blur-xl",

                    "dark:border-slate-700/60",
                    "dark:bg-slate-800/40",
                  )}
                >
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            "group relative",

                            "flex items-center justify-center",

                            "overflow-hidden",

                            "rounded-2xl",

                            "px-5 py-3",

                            "text-sm font-semibold",

                            "transition-all duration-300",

                            isActive
                              ? [
                                  "bg-linear-to-r",

                                  "from-violet-600",
                                  "via-fuchsia-600",
                                  "to-cyan-500",

                                  "text-slate-900 dark:text-white",

                                  "shadow-lg",

                                  "shadow-violet-500/25",
                                ]
                              : [
                                  "text-slate-700",

                                  "hover:bg-white/70",

                                  "hover:text-violet-700",

                                  "dark:text-slate-700 dark:text-slate-300",

                                  "dark:hover:bg-slate-800/70",

                                  "dark:hover:text-slate-900 dark:text-white",
                                ],
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="relative z-10">{item.label}</span>

                            {!isActive && (
                              <span
                                className={cn(
                                  "absolute bottom-2 left-1/2",

                                  "h-0.5 w-0",

                                  "-translate-x-1/2",

                                  "rounded-full",

                                  "bg-linear-to-r",

                                  "from-violet-500",

                                  "to-cyan-500",

                                  "transition-all duration-300",

                                  "group-hover:w-8",
                                )}
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* ========================================= */}
              {/* Right Actions */}
              {/* ========================================= */}

              <div className="flex items-center gap-3">
                {/* Desktop Theme Toggle */}

                <div className="hidden lg:block">
                  <ThemeToggle />
                </div>

                {/* Mobile Theme Toggle */}

                <div className="lg:hidden">
                  <ThemeToggle />
                </div>

                {/* Mobile Menu */}

                <button
                  type="button"
                  aria-label="Open navigation menu"
                  onClick={() => setIsMobileOpen(true)}
                  className={cn(
                    "group lg:hidden",

                    "relative",

                    "flex h-11 w-11 items-center justify-center",

                    "overflow-hidden",

                    "rounded-2xl",

                    "border border-slate-200/70",

                    "bg-white/70",

                    "backdrop-blur-xl",

                    "shadow-lg",

                    "transition-all duration-300",

                    "hover:-translate-y-0.5",

                    "hover:border-violet-400/40",

                    "hover:shadow-violet-500/20",

                    "dark:border-slate-700",

                    "dark:bg-slate-900/70",
                  )}
                >
                  {/* Hover Glow */}

                  <span
                    className={cn(
                      "absolute inset-0",

                      "opacity-0",

                      "transition-opacity duration-300",

                      "group-hover:opacity-100",

                      "bg-linear-to-br",

                      "from-violet-500/10",

                      "via-fuchsia-500/10",

                      "to-cyan-500/10",
                    )}
                  />

                  <Menu
                    size={21}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ================================================= */}
      {/* Mobile Overlay */}
      {/* ================================================= */}

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileOpen(false)}
          className={cn(
            "fixed inset-0 z-40 lg:hidden",

            "bg-slate-950/45",

            "backdrop-blur-md",

            "transition-opacity duration-300",
          )}
        />
      )}

      {/* ================================================= */}
      {/* Mobile Drawer */}
      {/* ================================================= */}

      <aside
        className={cn(
          "fixed right-0 top-0 z-50",

          "flex h-screen w-80 max-w-[90vw] flex-col",

          "overflow-hidden",

          "border-l border-white/20",

          "bg-white/80",

          "backdrop-blur-3xl",

          "shadow-[0_25px_80px_rgba(15,23,42,0.20)]",

          "transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",

          "dark:border-slate-700/60",

          "dark:bg-slate-950/80",

          isMobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Decorative Background */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="absolute bottom-0 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute top-1/2 left-1/3 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        {/* ====================================== */}
        {/* Drawer Header */}
        {/* ====================================== */}

        <div
          className={cn(
            "relative z-10",

            "flex items-center justify-between",

            "border-b border-slate-200/60",

            "p-6",

            "dark:border-slate-800/70",
          )}
        >
          {/* Brand */}

          <div>
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-900 dark:text-white">
              {SITE_CONFIG.name}
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.30em] text-slate-500 dark:text-slate-600 dark:text-slate-400">
              Navigation
            </p>
          </div>

          {/* Close Button */}

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileOpen(false)}
            className={cn(
              "group",

              "relative",

              "flex h-11 w-11 items-center justify-center",

              "overflow-hidden",

              "rounded-2xl",

              "border border-slate-200/70",

              "bg-white/70",

              "backdrop-blur-xl",

              "transition-all duration-300",

              "hover:rotate-90",

              "hover:border-violet-400/40",

              "hover:bg-violet-500/10",

              "dark:border-slate-700",

              "dark:bg-slate-900/70",
            )}
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10" />

            <X
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        </div>

        {/* ====================================== */}
        {/* Navigation */}
        {/* ====================================== */}

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

                      "font-semibold",

                      "transition-all duration-300",

                      isActive
                        ? [
                            "bg-linear-to-r",

                            "from-violet-600",
                            "via-fuchsia-600",
                            "to-cyan-500",

                            "text-slate-900 dark:text-white",

                            "shadow-lg shadow-violet-500/25",
                          ]
                        : [
                            "text-slate-700",

                            "hover:bg-white/70",

                            "hover:text-violet-700",

                            "dark:text-slate-700 dark:text-slate-300",

                            "dark:hover:bg-slate-800/70",

                            "dark:hover:text-slate-900 dark:text-white",
                          ],
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>

                      {!isActive && (
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0",

                            "w-1",

                            "origin-bottom scale-y-0",

                            "bg-linear-to-b",

                            "from-violet-500",

                            "to-cyan-500",

                            "transition-transform duration-300",

                            "group-hover:scale-y-100",
                          )}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ====================================== */}
          {/* Mobile Theme Toggle */}
          {/* ====================================== */}

          <div className="mt-10 flex justify-center lg:hidden">
            <ThemeToggle />
          </div>
        </nav>

        {/* ====================================== */}
        {/* Drawer Footer */}
        {/* ====================================== */}

        <div className="relative z-10 border-t border-slate-200/60 p-6 dark:border-slate-800/70">
          <div
            className={cn(
              "rounded-3xl",

              "border border-white/20",

              "bg-linear-to-br",

              "from-violet-500/10",

              "via-fuchsia-500/10",

              "to-cyan-500/10",

              "p-5",

              "backdrop-blur-xl",

              "dark:border-white/10",
            )}
          >
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-900 dark:text-white">
              Let's Build Something Amazing
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-600 dark:text-slate-400">
              Thank you for visiting my portfolio. I'm always excited to
              collaborate on innovative projects and meaningful ideas.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
