import { useGlobalObjectEventListener } from './useGlobalObjectEventListener';
/**
 *
 * useOnWindowResize hook
 *
 * Fires a callback when window resizes
 *
 * @param {Function} callback Callback to be called before unmount
 * @param {boolean} when When the handler should be applied
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 */
function useOnWindowResize(callback, when, isLayoutEffect) {
    if (when === void 0) { when = true; }
    if (isLayoutEffect === void 0) { isLayoutEffect = false; }
    useGlobalObjectEventListener(window, 'resize', callback, { passive: true }, when, isLayoutEffect);
}
export { useOnWindowResize };
