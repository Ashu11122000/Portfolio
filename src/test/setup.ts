/**
 * ==========================================================
 * Vitest Setup
 * ==========================================================
 *
 * Global test setup for the Portfolio application.
 *
 * Responsibilities
 * ----------------
 * ✓ Extends Vitest with Testing Library matchers
 * ✓ Runs before every test file
 * ✓ Provides DOM assertions such as:
 *   - toBeInTheDocument()
 *   - toBeVisible()
 *   - toHaveTextContent()
 *   - toHaveAttribute()
 *   - toHaveClass()
 *   - toHaveValue()
 *
 * Additional global mocks and test configuration can be
 * added here as the project grows.
 *
 * ==========================================================
 */

import "@testing-library/jest-dom/vitest";