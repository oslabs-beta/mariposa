declare type SelectHandler<T> = {
    index: number;
    item: T;
    setIndex: (newIndex: number) => void;
    setItem: (newItem: T) => void;
};
/**
 * useSelect hook
 * Helps easily select a value from a list of values
 *
 * @param list List of values to select a value from
 * @param [initialIndex=0] Initial index which is selected
 * @returns handler
 */
declare function useSelect<T>(list: T[], initialIndex?: number): SelectHandler<T>;
export { useSelect };
