declare type UseTimeoutHandler = {
    start: () => any;
    clear: () => any;
    stop: () => any;
    isActive: boolean;
};
/**
 * A setTimeout hook that calls a callback after a timeout duration
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 */
declare function useTimeout(callback_: () => void, timeoutDelayMs?: number): UseTimeoutHandler;
export { useTimeout };
