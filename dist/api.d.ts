export declare const post: (url: string, data: any, token: string) => Promise<any>;
declare global {
    interface Window {
        post: (url: string, data: any, token: string) => Promise<any>;
    }
}
