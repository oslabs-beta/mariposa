import { useEffect, useRef, useCallback } from 'react';
import { doesIdentifierMatchKeyboardEvent } from '../utils/doesIdentifierMatchKeyboardEvent';
/**
 * defaultOptions which will be merged with passed in options
 */
var defaultOptions = {
    continuous: false,
    when: true,
};
/**
 * useKeys hook
 *
 * @param keysList
 * @param callback
 * @param opts
 */
function useKeys(keysList, callback, options_) {
    var options = Object.assign({}, defaultOptions, options_);
    var target = options.target, when = options.when, continuous = options.continuous;
    var savedCallback = useRef(callback);
    /**
     * PressedKeyMapping will do the bookkeeping the pressed keys
     */
    var pressedKeyMappingRef = useRef({});
    var PressedKeyMapping = pressedKeyMappingRef.current;
    /**
     *  First useEffect is to remember the latest callback
     */
    useEffect(function () {
        savedCallback.current = callback;
    });
    /**
     * handleKeyDown
     *
     * @param   {KeyboardEvent}  event
     * KeyDown event handler which will wrap the passed in callback
     */
    var handleKeyDown = useCallback(function (event) {
        var pressedKeyIdentifier = null;
        var areAllKeysFromListPressed = false;
        // First detect the key that was pressed;
        keysList.forEach(function (identifier) {
            if (doesIdentifierMatchKeyboardEvent(event, identifier)) {
                PressedKeyMapping[identifier] = true;
                pressedKeyIdentifier = identifier;
            }
        });
        if (keysList.every(function (identifier) { return Boolean(PressedKeyMapping[identifier]); })) {
            areAllKeysFromListPressed = true;
        }
        if (areAllKeysFromListPressed) {
            if (savedCallback.current) {
                savedCallback.current(event);
            }
            /**
             * If not continuous
             * disable identifier immediately
             */
            if (!continuous && pressedKeyIdentifier !== null) {
                PressedKeyMapping[pressedKeyIdentifier] = false;
            }
        }
    }, [keysList, continuous]);
    /**
     * [handleKeyUp]
     *
     * @param   {KeyboardEvent}  event
     *
     * KeyUp event handler which will update the keys pressed state in PressedKeyMapping
     */
    var handleKeyUp = useCallback(function (event) {
        keysList.forEach(function (identifier) {
            if (doesIdentifierMatchKeyboardEvent(event, identifier)) {
                PressedKeyMapping[identifier] = undefined;
            }
        });
    }, []);
    /**
     * Responsible for setting up the event listener and removing event listeners
     */
    useEffect(function () {
        if (when && typeof window !== 'undefined') {
            var targetNode_1 = target && target.current ? target.current : document;
            if (targetNode_1) {
                targetNode_1.addEventListener('keydown', handleKeyDown);
                targetNode_1.addEventListener('keyup', handleKeyUp);
            }
            return function () {
                if (targetNode_1)
                    targetNode_1.removeEventListener('keydown', handleKeyDown);
                if (targetNode_1)
                    targetNode_1.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, [when, target, keysList, handleKeyDown, handleKeyUp]);
}
export { useKeys };
