import { useEffect, useRef } from 'react';
/**
 * useEffectOnceWhen hook
 *
 * It fires a callback once when a condition is true or become true.
 * Fires the callback at most one time.
 *
 * @param callback The callback to fire
 * @param when The condition which needs to be true
 */
function useEffectOnceWhen(callback, when) {
    if (when === void 0) { when = true; }
    var hasRunOnceRef = useRef(false);
    var callbackRef = useRef(callback);
    useEffect(function () {
        callbackRef.current = callback;
    });
    useEffect(function () {
        if (when && !hasRunOnceRef.current) {
            callbackRef.current();
            hasRunOnceRef.current = true;
        }
    }, [when]);
}
export { useEffectOnceWhen };
