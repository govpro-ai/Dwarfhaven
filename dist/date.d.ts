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
