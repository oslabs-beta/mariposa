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
declare function useOnWindowResize(callback: (event: any) => void, when?: boolean, isLayoutEffect?: boolean): void;
export { useOnWindowResize };
