/// <reference types="react" />
declare type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
declare type InputHandler = {
    /**
     * The current value of the input
     */
    value: any;
    /**
     * Function to handle onChange of an input element
     *
     * @param event The input change event
     */
    onChange: (e: InputChangeEvent) => void;
};
declare type Options = {
    /**
     * validate
     *
     * Validator function which can be used to prevent updates
     *
     * @param {any} New value
     * @param {any} Current value
     * @returns {boolean} Whether an update should happen or not
     *
     * */
    validate?: (newValue: any, currentValue: any) => boolean;
};
/**
 *
 * useInput Hook
 *
 * Handles an input's value and onChange props internally to
 * make text input creation process easier
 *
 * @param {any} [initialValue=""] Initial value of the input
 * @param {Options} [opts={}] Options object
 * @returns {InputHandler} Input handler with value and onChange
 */
declare function useInput(initialValue?: any, options?: Options): InputHandler;
export { useInput };
