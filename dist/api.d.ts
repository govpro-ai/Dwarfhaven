/** Sets the API URL. */
export declare const setAPI: (url: string) => string;
/** Sends a POST request to an endpoint under the API (set using setAPI). */
export declare const POST: (endpoint: string, data: any, token: string) => Promise<any>;
declare global {
    interface Window {
        POST: (endpoint: string, data: any, token: string) => Promise<any>;
        setAPI: (url: string) => void;
    }
}
