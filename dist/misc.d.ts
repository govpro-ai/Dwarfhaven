declare const _default: null;
export default _default;
declare global {
    interface Window {
        downloadAndFillImage: (url: string, imgId: string, tries?: number) => Promise<any>;
        app: any;
        copy: (t: string) => void;
        insertElementAtCursor: (el: Node) => void;
    }
    const Vue: any;
}
