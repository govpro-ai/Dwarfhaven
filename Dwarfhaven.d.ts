/*
Until I figure out a good way to handle Dwarfhaven imports, copy paste this declarations file where you need Dwarfhaven, then do:
import "./Dwarfhaven"
*/
declare global {
    interface Date {
        toMonth: () => string;
        addDays: (days: number) => Date;
        toDate: () => string;
        toTime: () => string;
        toDateTime: () => string;
        toNicerDateTime: () => string;
        toNiceDateTime: (n?: number) => string;
    }
}
export declare const toNiceDateTime: (datetime: Date | number) => string;

export declare const toast: (text: string) => null;
declare global {
    interface Window {
        toast: (text: string) => null;
    }
}

export declare const post: (url: string, data: any, token: string) => Promise<any>;
declare global {
    interface Window {
        post: (url: string, data: any, token: string) => Promise<any>;
    }
}

declare global {
    interface Window {
        downloadAndFillImage: (url: string, imgId: string, tries?: number) => Promise<any>;
        app: any;
        copy: (t: string) => void;
        insertElementAtCursor: (el: Node) => void;
    }
}

declare global {
    interface Array<T> {
        tail: (n: number) => T;
        last: () => T;
        random: () => T;
    }
}

declare global {
    interface Number {
        secondsToTimestring: () => string;
        toFilesize: () => string;
    }
}

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
            colorPalette?: string[];
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
        ColorThief: any;
    }
}

