import { useCallback, useEffect, useMemo, type ReactNode } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext, type Theme } from "./ThemeContext";

/**
 * ==========================================================
 * Theme Provider
 * ==========================================================
 *
 * Global provider responsible for:
 *
 * ✓ Persisting theme in localStorage
 * ✓ Applying dark/light class to <html>
 * ✓ Exposing theme context
 * ✓ Syncing browser color scheme
 *
 * ==========================================================
 */

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  /**
   * Toggle between light and dark themes.
   */
  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => (previousTheme === "dark" ? "light" : "dark"));
  }, [setTheme]);

  /**
   * Apply theme to the document.
   */
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    /**
     * Native browser UI
     * (scrollbars, form controls, etc.)
     */
    root.style.colorScheme = theme;
  }, [theme]);

  /**
   * Memoize context value.
   */
  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
