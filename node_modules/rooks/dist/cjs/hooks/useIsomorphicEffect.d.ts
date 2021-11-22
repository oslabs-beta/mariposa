import { useEffect } from 'react';
/**
 * useIsomorphicEffect
 * Resolves to useEffect when "window" is not in scope and useLayout effect in the browser
 *
 * @param {Function} callback Callback function to be called on mount
 */
declare const useIsomorphicEffect: typeof useEffect;
export { useIsomorphicEffect };
