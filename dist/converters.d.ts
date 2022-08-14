declare const _default: null;
export default _default;
declare global {
    interface Window {
        unescapeHTML: (s: string) => string;
        html2Text: (html: string) => string;
        html2Element: (html: string) => ChildNode | null;
        objectId2Date: (id: string) => Date;
        channel2Hex: (c: number) => string;
        rgb2Hex: (r: number, g: number, b: number) => string;
        rgbIsDark: (r: number, g: number, b: number) => boolean;
        image2Color: (url: string, dark?: boolean) => Promise<string | null>;
        ext2FontAwesomeIcon: (ext: string) => string;
        ext2SVGIcon: (ext: string) => string;
        ColorThief: any;
    }
}
