import type { RefObject } from 'react';
/**
 * useFreshRef
 *
 * @param value The value which needs to be fresh at all times. Probably
 * best used with functions
 * @param preferLayoutEffect Should the value be updated using a layout effect
 * or a passive effect. Defaults to false.
 * @returns A ref containing the fresh value
 */
declare function useFreshRef<T>(value: T, preferLayoutEffect?: boolean): RefObject<T>;
export { useFreshRef };
