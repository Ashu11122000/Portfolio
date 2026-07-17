import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

/**
 * ==========================================================
 * useLocalStorage
 * ==========================================================
 *
 * Ultra Premium localStorage Hook
 *
 * Features
 * ----------
 * ✓ Generic
 * ✓ SSR Safe
 * ✓ Functional Updates
 * ✓ Cross Tab Sync
 * ✓ React 19 Ready
 * ✓ Type Safe
 * ✓ Stable Setter
 * ✓ Automatic JSON Handling
 *
 * ==========================================================
 */

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  /**
   * Read value.
   */
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item
        ? (JSON.parse(item) as T)
        : initialValue;
    } catch {
      console.error(
        `Error reading localStorage key "${key}"`,
      );

      return initialValue;
    }
  }, [key, initialValue]);

  /**
   * State
   */
  const [storedValue, setStoredValue] = useState<T>(readValue);

  /**
   * Update value.
   */
  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (value) => {
      setStoredValue((previous) => {
        const valueToStore =
          typeof value === "function"
            ? (value as (prev: T) => T)(previous)
            : value;

        try {
          if (typeof window !== "undefined") {
            window.localStorage.setItem(
              key,
              JSON.stringify(valueToStore),
            );
          }
        } catch {
          console.error(
            `Error setting localStorage key "${key}"`,
          );
        }

        return valueToStore;
      });
    },
    [key],
  );

  /**
   * Reload if key changes.
   */
  useEffect(() => {
    // Avoid unconditional synchronous setState in effects which can cause
    // cascading renders. Only update if the value actually changed.
    const value = readValue();

    const updateStoredValue = () => setStoredValue(value);

    try {
      const changed = JSON.stringify(value) !== JSON.stringify(storedValue);

      if (changed) {
        Promise.resolve().then(updateStoredValue);
      }
    } catch {
      // Fallback to setting value if comparison fails for any reason
      Promise.resolve().then(updateStoredValue);
    }
  }, [key, readValue, storedValue]);

  /**
   * Sync between tabs.
   */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(readValue());
      }
    };

    window.addEventListener(
      "storage",
      handleStorage,
    );

    return () =>
      window.removeEventListener(
        "storage",
        handleStorage,
      );
  }, [key, readValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;