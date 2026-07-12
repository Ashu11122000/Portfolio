import { createContext } from "react";

/**
 * ==========================================================
 * Theme Context
 * ==========================================================
 *
 * Defines the application's global theme state.
 *
 * Supported Themes
 * ----------------
 * ✓ Light
 * ✓ Dark
 *
 * Exposes
 * ----------------
 * ✓ Current Theme
 * ✓ isDark Boolean
 * ✓ setTheme()
 * ✓ toggleTheme()
 *
 * ==========================================================
 */

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Global Theme Context
 */
export const ThemeContext =
  createContext<ThemeContextType | null>(null);