import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import About from "../pages/About";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
// import Contact from "../pages/Contact";

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
 * ✓ React Router v7 Ready
 * ✓ Shared Layout
 * ✓ Route Constants
 * ✓ Redirect Support
 * ✓ 404 Handling
 * ✓ Easy Scalability
 *
 * ==========================================================
 */

function AppRouter() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default AppRouter;