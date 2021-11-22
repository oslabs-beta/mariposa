/**
 * A setTimeout hook that calls a callback after a timeout duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the timeout
 */
declare function useTimeoutWhen(callback_: () => void, timeoutDelayMs?: number, when?: boolean): void;
export { useTimeoutWhen };
