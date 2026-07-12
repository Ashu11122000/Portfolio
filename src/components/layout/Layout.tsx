import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        flex-col
        overflow-x-hidden

        bg-gradient-to-b
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
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-indigo-500/8
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-8rem]
            top-1/4
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-fuchsia-500/8
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-12rem]
            left-1/2
            h-[40rem]
            w-[40rem]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/6
            blur-[160px]
          "
        />
      </div>

      <Navbar />

      <main className="relative flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
