/**
 * useEffectOnceWhen hook
 *
 * It fires a callback once when a condition is true or become true.
 * Fires the callback at most one time.
 *
 * @param callback The callback to fire
 * @param when The condition which needs to be true
 */
declare function useEffectOnceWhen(callback: () => void, when?: boolean): void;
export { useEffectOnceWhen };
