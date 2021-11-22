import { useReducer } from 'react';
var defaultToggleFunction = function (v) { return !v; };
/**
 * Use toggle hook helps you easily toggle a value
 *
 * @param initialValue Initial value of the toggle
 * @param toggleFunction A toggle function. This allows for non boolean toggles
 */
export function useToggle(initialValue, toggleFunction) {
    if (initialValue === void 0) { initialValue = false; }
    if (toggleFunction === void 0) { toggleFunction = defaultToggleFunction; }
    return useReducer(toggleFunction, initialValue);
}
