declare type UndoStateOptions = {
    maxSize: number;
};
/**
 * useUndoState hook
 * Drop in replacement for useState hook but with undo functionality.
 *
 * @param {any} defaultValue
 * @param {UndoStateOptions} [{ maxSize }=defaultOptions]
 * @returns {[any, Function, Function]}
 */
declare const useUndoState: (defaultValue: any, options?: UndoStateOptions | undefined) => [any, (previousState: any) => any, () => void];
export { useUndoState };
