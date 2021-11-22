import type { Dispatch, SetStateAction } from "react";
/**
 * useLocalstorageState hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} initialState - Default initial value
 */
declare function useLocalstorageState<S>(key: string, initialState?: S | (() => S)): [S, Dispatch<SetStateAction<S>>, () => void];
export { useLocalstorageState };
