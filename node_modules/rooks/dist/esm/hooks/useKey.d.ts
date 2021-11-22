import type { Ref } from 'react';
declare type Options = {
    /**
     * Condition which if true, will enable the event listeners
     */
    when?: boolean;
    /**
     * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
     */
    eventTypes?: Array<number | string>;
    /**
     * target ref on which the events should be listened. If no target is specified,
     * events are listened to on the window
     */
    target?: Ref<HTMLElement>;
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
declare function useKey(input: Array<number | string> | number | string, callback: (e: KeyboardEvent) => any, options_?: Options): void;
export { useKey };
