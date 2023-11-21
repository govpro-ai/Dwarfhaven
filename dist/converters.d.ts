declare const _default: {};
export default _default;
declare global {
    interface Window {
        /** Unescapes HTML to a string representation */
        unescapeHTML: (s: string) => string;
        /** Parses text from HTML string */
        html2Text: (html: string) => string;
        /** Converts HTML to string to a valid DOM element */
        html2Element: (html: string) => ChildNode | null;
        /** Converts an ObjectID (e.g. from MongoDB) to a Date */
        objectId2Date: (id: string) => Date;
        /** Converts an RGB channel (0-255) to a 2-digit hex */
        channel2Hex: (c: number) => string;
        /** Converts RGB channels to a 6-digit hex code, without leading `#` */
        rgb2Hex: (r: number, g: number, b: number) => string;
        /** Returns `true` if the color is considered "dark" for contrast purposes */
        rgbIsDark: (r: number, g: number, b: number) => boolean;
        /** Identifies the accent color (returned as hex code without leading `#`). */
        image2Color: (url: string, dark?: boolean) => Promise<string | null>;
        /** Converts a file extension to a FontAwesom icon. */
        ext2FontAwesomeIcon: (ext: string) => string;
        /** Converts a file extension to an SVG icon. */
        ext2SVGIcon: (ext: string) => string;
        /** Decodes a JWT token to a JSON object */
        decodeJWT: (token: string) => any;
        ColorThief: any;
    }
}
