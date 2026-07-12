import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

/**
 * ==========================================================
 * useTheme Hook
 * ==========================================================
 *
 * Custom hook for accessing the global Theme Context.
 *
 * Features
 * ----------
 * ✓ Access Current Theme
 * ✓ Toggle Light / Dark Mode
 * ✓ Type Safe
 * ✓ Prevents Usage Outside ThemeProvider
 *
 * ==========================================================
 */

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider."
    );
  }

  return context;
};

export default useTheme;