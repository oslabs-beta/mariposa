import type { RefElementOrNull } from '../utils/utils';
/**
 * useRefElement hook for React
 * Helps bridge gap between callback ref and state
 * Manages the element called with callback ref api using state variable
 */
declare function useRefElement<T>(): [
    (refElement: RefElementOrNull<T>) => void,
    RefElementOrNull<T>
];
export { useRefElement };
