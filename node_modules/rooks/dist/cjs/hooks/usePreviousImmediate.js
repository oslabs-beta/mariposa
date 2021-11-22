"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreviousImmediate = void 0;
var react_1 = require("react");
/**
 * usePreviousImmediate hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
function usePreviousImmediate(currentValue) {
    var previousRef = react_1.useRef(null);
    react_1.useEffect(function () {
        previousRef.current = currentValue;
    });
    return previousRef.current;
}
exports.usePreviousImmediate = usePreviousImmediate;
