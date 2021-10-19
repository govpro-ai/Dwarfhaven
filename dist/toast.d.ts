export declare const toast: (text: string) => null;
declare global {
    interface Window {
        toast: (text: string) => null;
    }
}
