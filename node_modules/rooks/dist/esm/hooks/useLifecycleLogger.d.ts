/**
 * useLifecycleLogger hook
 * logs parameters as component transitions through lifecycles
 *
 * @param componentName Name of the component
 * @param rest
 */
declare const useLifecycleLogger: (componentName?: string, ...otherArgs: unknown[]) => void;
export { useLifecycleLogger };
