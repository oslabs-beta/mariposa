import type { RefElementOrNull } from '../utils/utils';
/**
 *  useEventListenerRef hook
 *
 *  A react hook to an event listener to an element
 *  Returns a ref
 *
 * @param {string} eventName The event to track
 * @param {Function} callback The callback to be called on event
 * @param {object} conditions The options to be passed to the event listener
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 * @returns {Function} A callback ref that can be used as ref prop
 */
declare function useEventListenerRef(eventName: string, callback: (...args: any) => void, listenerOptions?: any, isLayoutEffect?: boolean): (refElement: RefElementOrNull<HTMLElement>) => void;
export { useEventListenerRef };
