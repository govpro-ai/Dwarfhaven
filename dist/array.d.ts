declare const _default: {};
export default _default;
declare global {
    interface Array<T> {
        /** Returns the last n elements from an array. */
        tail: (n: number) => T;
        /** Returns the very last element in an array (without popping). */
        last: () => T;
        /** Returns a random element from an array. */
        random: () => T;
    }
}
