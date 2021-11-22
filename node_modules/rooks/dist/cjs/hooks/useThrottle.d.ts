/**
 * useThrottle
 * Throttles a function with a timeout and ensures
 * that the callback function runs at most once in that duration
 *
 * @param fn The callback to throttle
 * @param timeout Throttle timeout
 */
declare function useThrottle(function_: Function, timeout?: number): [(...args: any) => any, boolean];
export { useThrottle };
