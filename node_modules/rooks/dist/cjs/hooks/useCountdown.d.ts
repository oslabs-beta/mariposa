declare type CountdownOptions = {
    interval?: number;
    onDown?: Function;
    onEnd?: Function;
};
/**
 *
 * useCountdown
 * Easy way to countdown until a given endtime in intervals
 *
 * @param endTime Time to countdown
 * @param options  Countdown options
 */
declare function useCountdown(endTime: Date, options?: CountdownOptions): number;
export { useCountdown };
