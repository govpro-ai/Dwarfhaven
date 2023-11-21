export declare const toast: (text: string) => null;
declare global {
    interface Window {
        /** Placeholder: this function exists for polyfill purposes. */
        toast: (text: string) => null;
    }
}
