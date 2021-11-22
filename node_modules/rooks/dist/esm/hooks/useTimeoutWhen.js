import { useRef, useEffect } from 'react';
/**
 * A setTimeout hook that calls a callback after a timeout duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the timeout
 */
function useTimeoutWhen(callback_, timeoutDelayMs, when) {
    if (timeoutDelayMs === void 0) { timeoutDelayMs = 0; }
    if (when === void 0) { when = true; }
    var savedRefCallback = useRef();
    useEffect(function () {
        savedRefCallback.current = callback_;
    });
    function callback() {
        savedRefCallback.current && savedRefCallback.current();
    }
    useEffect(function () {
        if (when) {
            var timeout_1 = window.setTimeout(callback, timeoutDelayMs);
            return function () {
                window.clearTimeout(timeout_1);
            };
        }
    }, [when]);
}
export { useTimeoutWhen };
