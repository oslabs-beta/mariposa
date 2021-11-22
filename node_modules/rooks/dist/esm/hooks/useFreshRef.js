import { useEffect, useRef } from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';
/**
 * useFreshRef
 *
 * @param value The value which needs to be fresh at all times. Probably
 * best used with functions
 * @param preferLayoutEffect Should the value be updated using a layout effect
 * or a passive effect. Defaults to false.
 * @returns A ref containing the fresh value
 */
function useFreshRef(value, preferLayoutEffect) {
    if (preferLayoutEffect === void 0) { preferLayoutEffect = false; }
    var useEffectToUse = preferLayoutEffect ? useIsomorphicEffect : useEffect;
    var ref = useRef(value);
    useEffectToUse(function () {
        ref.current = value;
    });
    return ref;
}
export { useFreshRef };
