declare function useQueueState(initialList: any[]): [
    any[],
    {
        enqueue: (item: any) => number;
        dequeue: () => any | undefined;
        peek: () => any | undefined;
        length: number;
    }
];
export { useQueueState };
