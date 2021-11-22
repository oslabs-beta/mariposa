import { useEffect } from 'react';
/**
 * useWillUnmount hook
 * Fires a callback just before component unmounts
 *
 * @param {Function} callback Callback to be called before unmount
 */
function useWillUnmount(callback) {
    // run only once
    useEffect(function () {
        return callback;
    }, []);
}
export { useWillUnmount };
