declare function useStackState(initialList: any[]): [
    any[],
    {
        push: (item: any) => number;
        pop: () => any | undefined;
        peek: () => any | undefined;
        length: number;
    },
    any[]
];
export { useStackState };
