import { useRef, useEffect } from 'react';
/**
 * usePreviousDifferent hook for React
 * It returns the past value which was different from the current one.
 *
 * @param currentValue The value whose previously different value is to be tracked
 * @returns The previous value
 */
function usePreviousDifferent(currentValue) {
    var previousRef = useRef(null);
    var previousRef2 = useRef(null);
    useEffect(function () {
        previousRef2.current = previousRef.current;
        previousRef.current = currentValue;
    }, [currentValue]);
    return currentValue === previousRef.current
        ? previousRef2.current
        : previousRef.current;
}
export { usePreviousDifferent };
