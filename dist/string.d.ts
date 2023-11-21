declare const _default: null;
export default _default;
declare global {
    interface StringConstructor {
        /** Generates a random hexadecimal string of specified length. */
        random: (length: number) => string;
    }
    interface String {
        /** Capitalizes the first letter of a string. */
        capitalize: () => string;
        /** Encodes a string to hexadecimal. */
        hexEncode: () => string;
        /** Gets the domain of a URL. */
        getDomain: () => string | null;
        /** Gets the avatar of an email address.
         * Requires BoringAvatars and jdenticon to be loaded.
         * Relies on a SVG2PNG polyfill.
        */
        getAvatar: (opts: {
            defaultTo?: string;
            useBoringAvatars?: boolean;
            useJdenticon?: boolean;
            colorPalette?: string[];
        }) => Promise<string | null>;
    }
    interface Array<T> {
        /** Joins up to `to` elements of an array with the specified separator. */
        joinTo: (to: number, separator: string) => string;
    }
    interface Window {
        BoringAvatars: any;
        SVG2PNG: any;
        jdenticon: any;
    }
    const CryptoJS: any;
}
