declare type EventCallback = (this: Document, event_: any) => any;
declare type OnChangeEventCallback = (this: Document, event_: any, isOpen: boolean) => any;
declare type NoopFunction = () => void;
declare type FullscreenApi = {
    isEnabled: boolean;
    toggle: NoopFunction | ((element?: HTMLElement) => Promise<unknown>);
    /** @deprecated Please use useFullScreen({onChange : function() {}}) instead. */
    onChange: NoopFunction | ((callback: OnChangeEventCallback) => void);
    /** @deprecated Please use useFullScreen({onError : function() {}}) instead. */
    onError: NoopFunction | ((callback: EventCallback) => void);
    request: NoopFunction | ((element?: HTMLElement) => Promise<unknown>);
    exit: NoopFunction | (() => Promise<unknown>);
    isFullscreen: boolean;
    element: HTMLElement | null | undefined;
};
declare type RequestFullscreenOptions = {
    navigationUI?: string | "auto" | "hide" | "show";
};
declare type FullScreenOptions = {
    onChange?: OnChangeEventCallback;
    onError?: EventCallback;
    requestFullscreenOptions?: RequestFullscreenOptions;
};
/**
 * useFullscreen
 * A hook that helps make the document fullscreen
 */
declare function useFullscreen(options?: FullScreenOptions): FullscreenApi | undefined;
export { useFullscreen };
