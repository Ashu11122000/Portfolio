import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

/**
 * ==========================================================
 * useTheme Hook
 * ==========================================================
 *
 * Access the global theme state.
 *
 * Features
 * ----------
 * ✓ Type Safe
 * ✓ React 19 Ready
 * ✓ Lightweight
 * ✓ Memo Friendly
 *
 * ==========================================================
 */

export default function useTheme() {
  return useContext(ThemeContext);
}