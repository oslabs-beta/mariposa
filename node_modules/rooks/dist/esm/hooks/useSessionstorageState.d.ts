import type { Dispatch, SetStateAction } from "react";
/**
 * useSessionstorageState hook
 * Tracks a value within sessionStorage and updates it
 *
 * @param {string} key - Key of the sessionStorage object
 * @param {any} initialState - Default initial value
 */
declare function useSessionstorageState<S>(key: string, initialState?: S | (() => S)): [S, Dispatch<SetStateAction<S>>, () => void];
export { useSessionstorageState };
