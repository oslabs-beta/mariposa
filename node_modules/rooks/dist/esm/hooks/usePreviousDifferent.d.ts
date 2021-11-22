/**
 * usePreviousDifferent hook for React
 * It returns the past value which was different from the current one.
 *
 * @param currentValue The value whose previously different value is to be tracked
 * @returns The previous value
 */
declare function usePreviousDifferent<T>(currentValue: T): T | null;
export { usePreviousDifferent };
