import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Menu, Sparkles, X } from "lucide-react";

import Container from "../common/Container";

import { cn } from "../../utils/cn";
import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/**
 * ==========================================================
 * Navbar Component
 * ==========================================================
 *
 * Ultra Premium Floating Navigation
 *
 * Features
 * ----------
 * ✓ Floating Glass Navbar
 * ✓ Animated Gradient Border
 * ✓ Scroll Detection
 * ✓ Active Navigation
 * ✓ Premium Logo
 * ✓ Glassmorphism
 * ✓ Responsive
 * ✓ Mobile Drawer
 * ✓ Theme Toggle
 * ✓ Tailwind CSS v4
 * ==========================================================
 */

function Navbar() {
  /**
   * Floating navbar state.
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Mobile drawer state.
   */
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /**
   * Detect page scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Lock body while drawer is open.
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
              "group relative overflow-hidden",

              "rounded-[28px]",

              "border border-white/20",

              "bg-white/65",

              "backdrop-blur-3xl",

              "dark:border-white/10",
              "dark:bg-slate-900/65",

              "transition-all duration-500",

              isScrolled
                ? "shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                : "shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
            )}
          >
            {/* Gradient Border */}

            <div
              className={cn(
                "pointer-events-none absolute inset-0",

                "rounded-[28px]",

                "bg-gradient-to-r",

                "from-violet-500/10",
                "via-fuchsia-500/10",
                "to-cyan-500/10",
              )}
            />

            {/* Decorative Glow */}

            <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="absolute -right-12 top-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* ================================================= */}
            {/* Navbar Content */}
            {/* ================================================= */}

            <div
              className={cn(
                "relative z-10",

                "flex items-center justify-between",

                "px-5 lg:px-8",

                isScrolled ? "h-16" : "h-20",

                "transition-all duration-500",
              )}
            >
              {/* ========================================= */}
              {/* Logo */}
              {/* ========================================= */}

              <Link to="/" className="group/logo flex items-center gap-4">
                {/* Logo Container */}

                <div className="relative">
                  {/* Glow */}

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 opacity-40 blur-xl transition-all duration-500 group-hover/logo:scale-150 group-hover/logo:opacity-70" />

                  {/* Logo */}

                  <div
                    className={cn(
                      "relative",

                      "flex h-14 w-14 items-center justify-center",

                      "rounded-3xl",

                      "bg-gradient-to-br",

                      "from-indigo-600",
                      "via-violet-600",
                      "to-cyan-500",

                      "shadow-xl",

                      "transition-all duration-500",

                      "group-hover/logo:-rotate-6",
                      "group-hover/logo:scale-110",
                    )}
                  >
                    <span className="text-lg font-black text-white">
                      {SITE_CONFIG.logo}
                    </span>
                  </div>
                </div>

                {/* Brand */}

                <div className="hidden sm:block">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                      {SITE_CONFIG.name}
                    </h1>

                    <Sparkles size={15} className="text-violet-500" />
                  </div>

                  <p className="mt-1 text-xs font-medium tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400">
                    Software Engineer
                  </p>
                </div>
              </Link>

              {/* ========================================= */}
              {/* Desktop Navigation */}
              {/* ========================================= */}

              <nav className="hidden lg:block">
                <ul className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/40 p-2 backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/30">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          cn(
                            "group/nav relative overflow-hidden",
                            "flex items-center justify-center",
                            "rounded-2xl px-5 py-3",
                            "text-sm font-semibold",
                            "transition-all duration-300",

                            isActive
                              ? [
                                  "bg-gradient-to-r",
                                  "from-violet-600",
                                  "via-fuchsia-600",
                                  "to-cyan-500",
                                  "text-white",
                                  "shadow-lg shadow-violet-500/25",
                                ]
                              : [
                                  "text-slate-700",
                                  "hover:bg-white/70",
                                  "hover:text-violet-700",
                                  "dark:text-slate-300",
                                  "dark:hover:bg-slate-800/70",
                                  "dark:hover:text-white",
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
                                  "absolute bottom-2 left-1/2 h-0.5 w-0",
                                  "-translate-x-1/2 rounded-full",
                                  "bg-gradient-to-r",
                                  "from-violet-500",
                                  "to-cyan-500",
                                  "transition-all duration-300",
                                  "group-hover/nav:w-8",
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

                {/* Mobile Menu */}

                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setIsMobileOpen(true)}
                  className={cn(
                    "group/menu lg:hidden",

                    "relative overflow-hidden",

                    "flex h-12 w-12 items-center justify-center",

                    "rounded-2xl",

                    "border border-white/20",

                    "bg-white/60",

                    "backdrop-blur-xl",

                    "shadow-lg",

                    "transition-all duration-300",

                    "hover:-translate-y-0.5",
                    "hover:border-violet-400/40",
                    "hover:shadow-violet-500/20",

                    "dark:border-white/10",
                    "dark:bg-slate-800/60",
                  )}
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 transition-all duration-300 group-hover/menu:from-violet-500/10 group-hover/menu:via-fuchsia-500/10 group-hover/menu:to-cyan-500/10" />

                  <Menu
                    size={22}
                    className="relative z-10 transition-transform duration-300 group-hover/menu:scale-110"
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
          aria-label="Close navigation menu"
          onClick={() => setIsMobileOpen(false)}
          className={cn(
            "fixed inset-0 z-40 lg:hidden",

            "bg-slate-950/45",

            "backdrop-blur-md",

            "animate-in fade-in duration-300",
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

          "bg-white/75",

          "backdrop-blur-3xl",

          "shadow-[0_25px_80px_rgba(15,23,42,0.20)]",

          "transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",

          "dark:border-white/10",
          "dark:bg-slate-950/75",

          isMobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Background Effects */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-16 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="absolute bottom-0 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        {/* ============================== */}
        {/* Drawer Header */}
        {/* ============================== */}

        <div className="relative z-10 flex items-center justify-between border-b border-slate-200/60 p-6 dark:border-slate-800/70">
          <div>
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {SITE_CONFIG.name}
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.30em] text-slate-500 dark:text-slate-400">
              Navigation
            </p>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileOpen(false)}
            className={cn(
              "group/close",

              "flex h-11 w-11 items-center justify-center",

              "rounded-2xl",

              "border border-slate-200/70",

              "bg-white/60",

              "backdrop-blur-xl",

              "transition-all duration-300",

              "hover:rotate-90",
              "hover:border-violet-400/40",
              "hover:bg-violet-500/10",

              "dark:border-slate-700",
              "dark:bg-slate-900/60",
            )}
          >
            <X
              size={20}
              className="transition-transform duration-300 group-hover/close:scale-110"
            />
          </button>
        </div>

        {/* ============================== */}
        {/* Navigation */}
        {/* ============================== */}

        <nav className="relative z-10 flex-1 px-5 py-8">
          <ul className="space-y-3">
            {NAV_LINKS.map((item, index) => (
              <li
                key={item.label}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
                className="animate-in slide-in-from-right-6 fade-in duration-500"
              >
                <NavLink
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "group/link",

                      "relative flex items-center",

                      "overflow-hidden",

                      "rounded-2xl",

                      "px-5 py-4",

                      "font-semibold",

                      "transition-all duration-300",

                      isActive
                        ? [
                            "bg-gradient-to-r",

                            "from-violet-600",
                            "via-fuchsia-600",
                            "to-cyan-500",

                            "text-white",

                            "shadow-lg shadow-violet-500/25",
                          ]
                        : [
                            "text-slate-700",

                            "hover:bg-white/60",
                            "hover:text-violet-700",

                            "dark:text-slate-300",
                            "dark:hover:bg-slate-800/70",
                            "dark:hover:text-white",
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

                            "bg-gradient-to-b",

                            "from-violet-500",
                            "to-cyan-500",

                            "transition-transform duration-300",

                            "group-hover/link:scale-y-100",
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

        {/* ============================== */}
        {/* Drawer Footer */}
        {/* ============================== */}

        <div className="relative z-10 border-t border-slate-200/60 p-6 dark:border-slate-800/70">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 p-5 backdrop-blur-xl dark:border-white/10">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Let's build something amazing.
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Thanks for visiting my portfolio. Explore my work, experience, and
              feel free to get in touch.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
