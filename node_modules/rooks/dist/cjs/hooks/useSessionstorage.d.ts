declare type StorageHandlerAsObject = {
    value: any;
    set: (newValue: any) => void;
    remove: () => void;
};
declare type StorageHandlerAsArray = [any, (newValue: any) => void, () => void];
declare type StorageHandler = StorageHandlerAsArray & StorageHandlerAsObject;
/**
 * useSessionstorage
 * Tracks a value within sessionStorage and updates it
 *
 * @param key Key of the value to be stored
 * @param defaultValue Default value of the stored item
 */
declare function useSessionstorage(key: string, defaultValue?: any): StorageHandler;
export { useSessionstorage };
