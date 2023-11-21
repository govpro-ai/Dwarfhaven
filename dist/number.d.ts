declare const _default: null;
export default _default;
declare global {
    interface Number {
        /** Converts a number of seconds to 12-hour time (`12:34 PM`). */
        secondsToTimestring: () => string;
        /** Converts a number of bytes to a human-readable bytes (power-of-2). */
        toFilesize: () => string;
    }
}
