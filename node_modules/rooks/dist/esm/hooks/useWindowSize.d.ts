declare type WindowDimensions = {
    innerWidth: number | null;
    innerHeight: number | null;
    outerWidth: number | null;
    outerHeight: number | null;
};
/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 */
export declare function useWindowSize(): WindowDimensions;
export {};
