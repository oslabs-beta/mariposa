import type { LegacyRef } from "react";
declare type UseDimensionsRefReturn = {
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    right: number;
    bottom: number;
} | null;
declare type UseDimensionsHook = [
    LegacyRef<HTMLDivElement> | undefined,
    UseDimensionsRefReturn,
    HTMLElement | null
];
declare type UseDimensionsRefArgs = {
    updateOnScroll?: boolean;
    updateOnResize?: boolean;
};
export declare const useDimensionsRef: ({ updateOnScroll, updateOnResize, }?: UseDimensionsRefArgs) => UseDimensionsHook;
export {};
