export declare class DOMRectPolyfill implements DOMRect {
    static fromRect(rect?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }): DOMRectPolyfill;
    constructor(x?: number, y?: number, width?: number, height?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get left(): number;
    toJSON(): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
    };
}
