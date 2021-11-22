import type { CallbackRef } from '../utils/utils';
/**
 *
 * useInViewRef hook
 *
 * Returns a mutation observer for a React Ref and true/false when element enters/leaves the viewport. Also fires a callback.
 *
 * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
 * @param {IntersectionObserverInit} options
 */
declare function useInViewRef(callback?: IntersectionObserverCallback, options?: IntersectionObserverInit): [CallbackRef, boolean];
export { useInViewRef };
