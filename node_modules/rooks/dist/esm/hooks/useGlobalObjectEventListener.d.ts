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
declare function useGlobalObjectEventListener(globalObject: Document | Window, eventName: string, callback: (...args: any) => void, listenerOptions?: any, when?: boolean, isLayoutEffect?: boolean): void;
export { useGlobalObjectEventListener };
