declare type StorageHandlerAsObject = {
    value: any;
    set: (newValue: any) => void;
    remove: () => void;
};
declare type StorageHandlerAsArray = [any, (newValue: any) => void, () => void];
declare type StorageHandler = StorageHandlerAsArray & StorageHandlerAsObject;
/**
 * useLocalstorage hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} defaultValue - Default initial value
 */
declare function useLocalstorage(key: string, defaultValue?: any): StorageHandler;
export { useLocalstorage };
