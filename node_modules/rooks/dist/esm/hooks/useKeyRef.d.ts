import type { CallbackRef } from '../utils/utils';
declare type Options = {
    /**
     * Condition which if true, will enable the event listeners
     */
    when?: boolean;
    /**
     * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
     */
    eventTypes?: Array<number | string>;
};
/**
 * useKeyRef hook
 *
 * Fires a callback on keyboard events like keyDown, keyPress and keyUp
 *
 * @param {[string|number]} keyList
 * @param {Function} callback
 * @param {Options} options
 * @returns callbackRef
 */
declare function useKeyRef(input: Array<number | string> | number | string, callback: (e: KeyboardEvent) => any, options_?: Options): CallbackRef;
export { useKeyRef };
