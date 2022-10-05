declare const _default: {};
export default _default;
declare global {
    interface Array<T> {
        tail: (n: number) => T;
        last: () => T;
        random: () => T;
    }
}
