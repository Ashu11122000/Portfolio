import AppRouter from "./router/AppRouter";

/**
 * ==========================================================
 * App
 * ==========================================================
 *
 * Root application component.
 *
 * Responsibilities
 * ----------------
 * ✓ Bootstrap the application
 * ✓ Render the router
 * ✓ Keep the root component minimal
 *
 * ==========================================================
 */

export default function App() {
  return <AppRouter />;
}