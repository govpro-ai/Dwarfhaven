declare const _default: null;
export default _default;
declare global {
    interface StringConstructor {
        random: (length: number) => string;
    }
    interface String {
        capitalize: () => string;
        hexEncode: () => string;
        getDomain: () => string | null;
        getAvatar: (opts: {
            defaultTo?: string;
            useBoringAvatars?: boolean;
            useJdenticon?: boolean;
        }) => Promise<string | null>;
    }
    interface Array<T> {
        joinTo: (to: number, separator: string) => string;
    }
    interface Window {
        BoringAvatars: any;
        SVG2PNG: any;
        jdenticon: any;
    }
}
