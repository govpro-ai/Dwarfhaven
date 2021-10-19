declare const _default: null;
export default _default;
declare global {
    interface Array<T> {
        tail: (n: number) => T;
        last: () => T;
        random: () => T;
    }
}
