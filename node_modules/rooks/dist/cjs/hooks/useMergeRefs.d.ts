import type { CallbackRef, AnyRef } from '../utils/utils';
/**
 * useMergeRefs
 * Merges multiple refs into a single function ref.
 * Takes any number of refs.
 * Refs can be mutable refs or function refs.
 *
 * @param refs
 */
declare function useMergeReferences(...references: AnyRef[]): CallbackRef | null;
export { useMergeReferences as useMergeRefs };
