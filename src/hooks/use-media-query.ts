import { useSyncExternalStore } from "react";

function subscribe(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

/**
 * Wraps `matchMedia` in useSyncExternalStore rather than the common
 * useState+useEffect pattern — that pattern sets state synchronously on
 * mount, which triggers an extra render and is flagged by the React
 * Compiler's purity checks (react-hooks/set-state-in-effect).
 */
export function useMediaQuery(query: string, serverSnapshot = false) {
  return useSyncExternalStore(
    subscribe(query),
    () => window.matchMedia(query).matches,
    () => serverSnapshot,
  );
}
