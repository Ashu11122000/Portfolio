<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeProvider from "./context/ThemeProvider";

import App from "./App";

import "./index.css";

/**
 * ==========================================================
 * Application Entry Point
 * ==========================================================
 *
 * Responsibilities
 * ----------------
 * ✓ Mount React Application
 * ✓ Enable Strict Mode
 * ✓ Register Global Providers
 * ✓ Import Global Styles
 *
 * ==========================================================
 */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 11d8adadfcbb10208ca3c1e53e4516cca8e5d0ae
