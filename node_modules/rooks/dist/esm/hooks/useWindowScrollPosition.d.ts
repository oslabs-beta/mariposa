declare type ScrollPosition = {
    scrollX: number;
    scrollY: number;
};
/**
 *
 * useWindowScrollPosition hook
 * A React hook to get the scroll position of the window
 *
 * @returns an object containing scrollX and scrollY values
 */
declare function useWindowScrollPosition(): ScrollPosition;
export { useWindowScrollPosition };
