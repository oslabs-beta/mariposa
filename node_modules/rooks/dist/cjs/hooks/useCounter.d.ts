declare type CounterHandler = {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (amount: number) => void;
    decrementBy: (amount: number) => void;
    reset: () => void;
};
/**
 *
 * @typedef handler
 * @type {Object}
 * @property {number} value The value of the counter
 * @property {Function}  increment Increment counter value by 1
 * @property {Function} decrement Decrement counter value by 1
 * @property {Function} incrementBy Increment counter by incrAmount
 * @property {Function} decrementBy Decrement counter by decrAmount
 * @property {Function} reset Reset counter to initialValue
 */
/**
 * Counter hook
 *
 * @param {number} initialValue The initial value of the counter
 * @returns {handler} A handler to interact with the counter
 */
declare function useCounter(initialValue: number): CounterHandler;
export { useCounter };
