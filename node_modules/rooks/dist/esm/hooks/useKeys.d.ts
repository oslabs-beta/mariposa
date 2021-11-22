import type { MutableRefObject } from 'react';
declare type Options = {
    /**
     * when boolean to enable and disable events, when passed false
     * remove the eventlistener if any
     */
    when?: boolean;
    /**
     * should the event logging be continuous
     */
    continuous?: boolean;
    /**
     * target ref on which the events should be listened. If no target is specified,
     * events are listened to on the document
     */
    target?: MutableRefObject<Document> | MutableRefObject<HTMLElement | null>;
};
/**
 * useKeys hook
 *
 * @param keysList
 * @param callback
 * @param opts
 */
declare function useKeys(keysList: string[], callback: (e: KeyboardEvent) => any, options_?: Options): void;
export { useKeys };
