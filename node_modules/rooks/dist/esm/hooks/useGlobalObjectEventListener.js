import { useEffect } from "react";
import { useFreshTick } from "./useFreshTick";
import { useIsomorphicEffect } from "./useIsomorphicEffect";
/**
 *  useGlobalObjectEventListener hook
 *
 *  A react hook to an event listener to a global object
 *
 * @param {Window|Document} globalObject The global object to add event onto
 * @param {string} eventName The event to track
 * @param {Function} callback The callback to be called on event
 * @param {object} conditions The options to be passed to the event listener
 * @param {boolean} when Should the event listener be active
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 * @returns {undefined}
 */
function useGlobalObjectEventListener(globalObject, eventName, callback, listenerOptions, when, isLayoutEffect) {
    if (listenerOptions === void 0) { listenerOptions = {}; }
    if (when === void 0) { when = true; }
    if (isLayoutEffect === void 0) { isLayoutEffect = false; }
    var freshCallback = useFreshTick(callback);
    var capture = listenerOptions.capture, passive = listenerOptions.passive, once = listenerOptions.once;
    var useEffectToRun = isLayoutEffect ? useIsomorphicEffect : useEffect;
    useEffectToRun(function () {
        if (typeof globalObject !== "undefined" &&
            globalObject.addEventListener &&
            when) {
            globalObject.addEventListener(eventName, freshCallback, listenerOptions);
            return function () {
                globalObject.removeEventListener(eventName, freshCallback, listenerOptions);
            };
        }
    }, [eventName, capture, passive, once]);
}
export { useGlobalObjectEventListener };
