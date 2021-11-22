import { useEffect, useRef, useCallback } from "react";
/**
 *  useOutsideClick hook
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 */
function useOutsideClick(ref, handler, when) {
    if (when === void 0) { when = true; }
    var savedHandler = useRef(handler);
    var memoizedCallback = useCallback(function (e) {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            savedHandler.current(e);
        }
    }, []);
    useEffect(function () {
        savedHandler.current = handler;
    });
    useEffect(function () {
        if (when) {
            document.addEventListener("click", memoizedCallback, true);
            document.addEventListener("ontouchstart", memoizedCallback, true);
            return function () {
                document.removeEventListener("click", memoizedCallback, true);
                document.removeEventListener("ontouchstart", memoizedCallback, true);
            };
        }
    }, [ref, handler, when]);
}
export { useOutsideClick };
