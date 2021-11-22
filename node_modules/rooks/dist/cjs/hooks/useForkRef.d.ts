import type { CallbackRef, AnyRef } from '../utils/utils';
/**
 * useForkRef
 * Joins refs together and returns a combination of the two as a new ref
 *
 * @param refA
 * @param refB
 */
declare function useForkRef(refA: AnyRef, refB: AnyRef): CallbackRef | null;
export { useForkRef };
