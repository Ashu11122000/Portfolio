import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

/* =============================================================================
   Layout
   -----------------------------------------------------------------------------
   Ultra Premium Portfolio Layout
============================================================================= */

function Layout() {
  return (
    <div
      className="
        relative

        flex
        min-h-screen
        flex-col

        overflow-x-hidden

        bg-linear-to-b
        from-white
        via-slate-50
        to-slate-100

        text-slate-800

        transition-colors
        duration-500

        dark:from-slate-950
        dark:via-slate-950
        dark:to-black

        dark:text-slate-100
      "
    >
      {/* =================================================================== */}
      {/* Aurora Background                                                    */}
      {/* =================================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">

        {/* Left Glow */}

        <div
          className="
            absolute

            -left-40
            -top-40

            h-144
            w-xl

            rounded-full

            bg-indigo-500/10

            blur-[160px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute

            -right-40
            top-1/4

            h-128
            w-lg

            rounded-full

            bg-fuchsia-500/10

            blur-[150px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute

            -bottom-48
            left-1/2

            h-168
            w-2xl

            -translate-x-1/2

            rounded-full

            bg-cyan-500/10

            blur-[180px]
          "
        />
      </div>

      {/* =================================================================== */}
      {/* Glass Reflection                                                     */}
      {/* =================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10

          bg-linear-to-b
          from-white/30
          via-transparent
          to-transparent

          dark:from-white/3
        "
      />

      {/* =================================================================== */}
      {/* Noise Overlay                                                       */}
      {/* =================================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10

          opacity-[0.025]

          mix-blend-overlay
        "
      />

      {/* =================================================================== */}
      {/* Navbar                                                              */}
      {/* =================================================================== */}

      <Navbar />

      {/* =================================================================== */}
      {/* Main Content                                                        */}
      {/* =================================================================== */}

      <main
        className="
          relative
          z-10
          flex-1
        "
      >
        <Outlet />
      </main>

      {/* =================================================================== */}
      {/* Footer                                                              */}
      {/* =================================================================== */}

      <Footer />
    </div>
  );
}

export default Layout;