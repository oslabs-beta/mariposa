/**
 * useMediaMatch
 *
 * A react hook that signals whether or not a media query is matched.
 *
 * @param query The media query to signal on. Example, `"print"` will signal
 * `true` when previewing in print mode, and `false` otherwise.
 * @returns Whether or not the media query is currently matched.
 */
declare function useMediaMatch(query: string): boolean;
export { useMediaMatch };
