import { useGlobalObjectEventListener } from "./useGlobalObjectEventListener";
/**
 *
 * useOnWindowScroll hook
 * Fires a callback when window scroll
 *
 * @param {Function} callback Callback to be called before unmount
 * @param {boolean} when When the handler should be applied
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 */
function useOnWindowScroll(callback, when, isLayoutEffect) {
    if (when === void 0) { when = true; }
    if (isLayoutEffect === void 0) { isLayoutEffect = false; }
    useGlobalObjectEventListener(window, "scroll", callback, { passive: true }, when, isLayoutEffect);
}
export { useOnWindowScroll };
