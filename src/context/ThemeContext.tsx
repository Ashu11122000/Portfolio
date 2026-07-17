import { createContext } from "react";

/**
 * ==========================================================
 * Theme Context
 * ==========================================================
 *
 * Global application theme state.
 *
 * Supported Themes
 * ----------------
 * ✓ Light
 * ✓ Dark
 *
 * Exposes
 * ----------------
 * ✓ Current Theme
 * ✓ isDark
 * ✓ setTheme()
 * ✓ toggleTheme()
 *
 * ==========================================================
 */

/**
 * Available application themes.
 */
export type Theme = "light" | "dark";

/**
 * Default application theme.
 */
export const DEFAULT_THEME: Theme = "dark";

/**
 * Theme context contract.
 */
export interface ThemeContextType {
  readonly theme: Theme;

  readonly isDark: boolean;

  readonly setTheme: (theme: Theme) => void;

  readonly toggleTheme: () => void;
}

/**
 * Default context value.
 *
 * The no-op functions prevent accidental runtime errors
 * if a component is rendered outside the ThemeProvider.
 */
const defaultContext: ThemeContextType = Object.freeze({
  theme: DEFAULT_THEME,

  isDark: true,

  setTheme: () => {
    // Intentionally empty
  },

  toggleTheme: () => {
    // Intentionally empty
  },
});

/**
 * Global Theme Context
 */
export const ThemeContext =
  createContext<ThemeContextType>(defaultContext);