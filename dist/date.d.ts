declare global {
    interface Date {
        /** Converts a numerical index (0-11) to the matching month string. */
        toMonth: () => string;
        /** Converts a numerical index (0-6) to the matching day of the week. */
        toDay: () => string;
        /** Adds a number of days to a date and returns the result (**immutable**). */
        addDays: (days: number) => Date;
        /** Parses a JS Date to an Americanized date (`MM/DD/YYYY`) */
        toDate: () => string;
        /** Parses a JS Date to a (nice) Americanized date (`Day Mon DD`) */
        toNiceDate: () => string;
        /** Parses a JS Date to a (nicer) Americanized date (`DayOfWeek Month DD`) */
        toNicerDate: () => string;
        /** Parses a JS Date to 12-hour time (e.g. `12:34 PM`) */
        toTime: () => string;
        /** Parses a JS Date to Americanized date and 12-hour time (`MM/DD/YYYY 12:34 PM`) */
        toDateTime: () => string;
        /** Converts a JS Date to a friendly representation, relative to **today**.
         *
         * e.g.
         *
         * `Today, 12:34 PM`
         *
         * `Yesterday, 12:34 PM`
         *
         * `Tomorrow, 12:34 PM`
         *
         * `Last Monday, 12:34 PM`
         *
         * `12/31/2020, 12:34 PM`
         */
        toNicerDateTime: () => string;
        /** Converts a JS Date to a friendly representation, relative to **now**.
         *
         * e.g.
         *
         * `12:34 PM`
         *
         * `Mon 12:34 PM`
         *
         * `Fri 12:34 PM`
         *
         * `9/4`
         *
         * `12/31/2020`
         */
        toNiceDateTime: (n?: number) => string;
    }
}
export declare const toNiceDateTime: (datetime: Date | number) => string;
