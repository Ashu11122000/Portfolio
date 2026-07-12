import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";

import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/**
 * ==========================================================
 * Footer Component
 * ==========================================================
 *
 * Global application footer.
 *
 * Features
 * ----------
 * ✓ Responsive Layout
 * ✓ Quick Navigation
 * ✓ Social Icons
 * ✓ Back To Top
 * ✓ Copyright
 * ✓ Dark Mode
 *
 * ==========================================================
 */

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-black">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative py-20">
          {/* ==========================
              Top Section
          =========================== */}

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}

            <div>
              <Link to="/" className="group inline-flex items-center gap-4">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-600
                    via-violet-600
                    to-fuchsia-600
                    text-lg
                    font-bold
                    text-slate-900 dark:text-white
                    shadow-xl
                    shadow-violet-500/20
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  {SITE_CONFIG.logo}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
                    {SITE_CONFIG.name}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-600 dark:text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
              </Link>

              <p className="mt-7 max-w-sm leading-8 text-slate-600 dark:text-slate-600 dark:text-slate-400">
                Passionate about crafting elegant, high-performance web
                experiences with modern technologies, intuitive interfaces, and
                exceptional attention to detail.
              </p>
            </div>

            {/* Quick Links */}

            <div>
              <h4 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
                Quick Links
              </h4>

              <ul className="space-y-4">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="
                        inline-flex
                        text-slate-600
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-indigo-600
                        dark:text-slate-600 dark:text-slate-400
                        dark:hover:text-indigo-300
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}

            <div>
              <h4 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
                Let's Connect
              </h4>

              <p className="mb-7 text-slate-600 dark:text-slate-600 dark:text-slate-400">
                Feel free to connect with me for collaborations, opportunities,
                or simply to say hello.
              </p>

              <SocialIcons />

              <div className="mt-8">
                <Button
                  variant="outline"
                  rightIcon={<ArrowUp size={18} />}
                  onClick={handleBackToTop}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>

          {/* ==========================
              Bottom Section
          =========================== */}

          <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-200/70 pt-8 text-sm text-slate-500 dark:border-slate-800 md:flex-row dark:text-slate-600 dark:text-slate-400">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            <p className="text-center md:text-right">
              Designed & Developed with ❤️ using React, TypeScript & Tailwind
              CSS.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
