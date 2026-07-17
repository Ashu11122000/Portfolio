import {
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext, type Theme } from "./ThemeContext";

/**
 * ==========================================================
 * Theme Provider
 * ==========================================================
 *
 * Global Theme Manager
 *
 * Features
 * ----------
 * ✓ Persistent Theme (localStorage)
 * ✓ Light & Dark Mode
 * ✓ HTML Class Synchronization
 * ✓ data-theme Attribute
 * ✓ Browser color-scheme
 * ✓ Mobile Theme Color
 * ✓ Memoized Context
 * ✓ React 19 Ready
 *
 * ==========================================================
 */

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  /**
   * Toggle between light and dark.
   */
  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, [setTheme]);

  /**
   * Synchronize document theme.
   */
  useEffect(() => {
    const root = document.documentElement;

    // Ensure only one theme class exists.
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // CSS variables / selectors
    root.setAttribute("data-theme", theme);

    // Native browser controls
    root.style.colorScheme = theme;

    // Mobile browser address bar color
    const metaTheme = document.querySelector(
      'meta[name="theme-color"]',
    );

    if (metaTheme instanceof HTMLMetaElement) {
      metaTheme.content =
        theme === "dark" ? "#09090B" : "#FFFFFF";
    }
  }, [theme]);

  /**
   * Memoized context value.
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
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}