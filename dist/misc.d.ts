declare const _default: null;
export default _default;
declare global {
    interface Window {
        /** Copies a string to the clipboard. */
        copy: (t: string) => void;
        /** Inserts an element at the cursor caret. */
        insertElementAtCursor: (el: Node) => void;
        /** Converts a string into a data URL */
        toDataURL: (src: string, outputFormat: string) => Promise<string>;
    }
    const Vue: any;
}
