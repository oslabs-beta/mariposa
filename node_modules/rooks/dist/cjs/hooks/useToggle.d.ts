/**
 * Use toggle hook helps you easily toggle a value
 *
 * @param initialValue Initial value of the toggle
 * @param toggleFunction A toggle function. This allows for non boolean toggles
 */
export declare function useToggle(initialValue?: any, toggleFunction?: (state: any, action: any) => any): [any, (action: any) => any];
