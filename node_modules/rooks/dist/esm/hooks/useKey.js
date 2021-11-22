import { useEffect, useCallback, useRef, useMemo } from 'react';
import { doesIdentifierMatchKeyboardEvent } from '../utils/doesIdentifierMatchKeyboardEvent';
var defaultOptions = {
    eventTypes: ['keydown'],
    when: true,
};
/**
 * useKey hook
 *
 * Fires a callback on keyboard events like keyDown, keyPress and keyUp
 *
 * @param {[string|number]} keyList
 * @param {Function} callback
 * @param {Options} options
 */
function useKey(input, callback, options_) {
    var keyList = useMemo(function () {
        if (Array.isArray(input)) {
            return input;
        }
        else {
            return [input];
        }
    }, [input]);
    var options = Object.assign({}, defaultOptions, options_);
    var when = options.when, eventTypes = options.eventTypes;
    var callbackRef = useRef(callback);
    var target = options.target;
    useEffect(function () {
        callbackRef.current = callback;
    });
    var handle = useCallback(function (e) {
        if (keyList.some(function (identifier) {
            return doesIdentifierMatchKeyboardEvent(e, identifier);
        })) {
            callbackRef.current(e);
        }
    }, [keyList]);
    useEffect(function () {
        if (when && typeof window !== 'undefined') {
            var targetNode_1 = target ? target.current : window;
            eventTypes.forEach(function (eventType) {
                targetNode_1 && targetNode_1.addEventListener(eventType, handle);
            });
            return function () {
                eventTypes.forEach(function (eventType) {
                    targetNode_1 && targetNode_1.removeEventListener(eventType, handle);
                });
            };
        }
    }, [when, eventTypes, keyList, target, callback]);
}
export { useKey };
