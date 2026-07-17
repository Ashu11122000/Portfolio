import { Suspense, lazy } from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

/**
 * ==========================================================
 * Lazy Loaded Pages
 * ==========================================================
 *
 * Home is intentionally NOT lazy loaded because it is the
 * landing page of the application.
 *
 * Remaining pages are lazy loaded to reduce the initial
 * JavaScript bundle size and improve the first page load.
 *
 * ==========================================================
 */

import Home from "../pages/Home";

const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const Projects = lazy(() => import("../pages/Projects"));
const NotFound = lazy(() => import("../pages/NotFound"));

// import Contact from "../pages/Contact";

/**
 * ==========================================================
 * Loading Fallback
 * ==========================================================
 */

function RouteLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <p className="text-sm text-muted-foreground">
          Loading...
        </p>
      </div>
    </div>
  );
}

/**
 * ==========================================================
 * Application Routes
 * ==========================================================
 */

const ROUTES = {
  home: "/",
  about: "/about",
  skills: "/skills",
  experience: "/experience",
  projects: "/projects",
  // contact: "/contact",
} as const;

/**
 * ==========================================================
 * App Router
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ React Router v7
 * ✓ Route-based Code Splitting
 * ✓ React Lazy Loading
 * ✓ Suspense Fallback
 * ✓ Shared Layout
 * ✓ Route Constants
 * ✓ Redirect Support
 * ✓ 404 Handling
 * ✓ Better Initial Load Performance
 *
 * ==========================================================
 */

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          {/* ===================================================
              Shared Layout
          =================================================== */}

          <Route element={<Layout />}>
            <Route
              path={ROUTES.home}
              element={<Home />}
            />

            <Route
              path={ROUTES.about}
              element={<About />}
            />

            <Route
              path={ROUTES.skills}
              element={<Skills />}
            />

            <Route
              path={ROUTES.experience}
              element={<Experience />}
            />

            <Route
              path={ROUTES.projects}
              element={<Projects />}
            />

            {/*
            <Route
              path={ROUTES.contact}
              element={<Contact />}
            />
            */}

            {/* Legacy Redirect */}

            <Route
              path="/home"
              element={
                <Navigate
                  to={ROUTES.home}
                  replace
                />
              }
            />
          </Route>

          {/* ===================================================
              404
          =================================================== */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;