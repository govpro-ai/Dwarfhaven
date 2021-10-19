declare const _default: null;
export default _default;
declare global {
    interface Number {
        secondsToTimestring: () => string;
        toFilesize: () => string;
    }
}
