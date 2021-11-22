/**
 *  useDidUpdate hook
 *
 *  Fires a callback on component update
 *  Can take in a list of conditions to fire callback when one of the
 *  conditions changes
 *  Will fire callback's cleanup function on update
 *
 * @param {Function} callback The callback and its cleanup to be called on update
 * @param {Array} conditions The list of variables which trigger update when they are changed
 * @returns {undefined}
 */
declare function useUpdateEffect(callback: () => any, conditions?: any[]): void;
export { useUpdateEffect };
