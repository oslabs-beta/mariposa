import type { MutableRefObject } from 'react';
/**
 * useBoundingclientRect hook
 *
 * @param ref The React ref whose ClientRect is needed
 * @returns ClientRect
 */
declare function useBoundingclientrect(ref: MutableRefObject<HTMLElement | null>): ClientRect | DOMRect | null;
export { useBoundingclientrect };
