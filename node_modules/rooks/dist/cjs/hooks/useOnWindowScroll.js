"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnWindowScroll = void 0;
var useGlobalObjectEventListener_1 = require("./useGlobalObjectEventListener");
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
    useGlobalObjectEventListener_1.useGlobalObjectEventListener(window, "scroll", callback, { passive: true }, when, isLayoutEffect);
}
exports.useOnWindowScroll = useOnWindowScroll;
