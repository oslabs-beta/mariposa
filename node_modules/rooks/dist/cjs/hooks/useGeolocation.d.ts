declare type IGetGeoLocation = {
    lat?: number;
    lng?: number;
    isError: boolean;
    message: string;
};
declare type IOptions = {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
    when?: boolean;
};
/**
 * useGeolocation
 * Gets the geolocation data as a hook
 *
 * @param geoLocationOptions Geolocation options
 */
declare function useGeolocation(geoLocationOptions?: IOptions): IGetGeoLocation | null;
export { useGeolocation };
