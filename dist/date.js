"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNiceDateTime = void 0;
Date.prototype.toMonth = function () {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ][this.getMonth()];
};
Date.prototype.toDay = function () {
    return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ][this.getDay()];
};
//! immutable
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.toDate = function () {
    return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`;
};
Date.prototype.toNiceDate = function () {
    return `${this.toDay().slice(0, 3)} ${this.toMonth().slice(0, 3)} ${this.getDate()}`;
};
Date.prototype.toNicerDate = function () {
    return `${this.toDay()} ${this.toMonth()} ${this.getDate()}`;
};
Date.prototype.toTime = function () {
    return this.toISOString().slice(11, 11 + 8);
};
Date.prototype.toDateTime = function () {
    return this.toDate() + ' ' + this.toTime();
};
Date.prototype.toNicerDateTime = function () {
    const now = new Date();
    const tomorrow = now.addDays(1);
    const yesterday = now.addDays(-1);
    const diff = this.valueOf() - now.valueOf();
    const days = diff / (1000 * 60 * 60 * 24);
    if (Math.abs(days) < 2) {
        if (this.getDate() == now.getDate())
            return 'Today, ' + this.toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: '2-digit'
            });
        if (this.getDate() == tomorrow.getDate())
            return 'Tomorrow, ' + this.toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: '2-digit'
            });
        if (this.getDate() == yesterday.getDate())
            return 'Yesterday, ' + this.toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: '2-digit'
            });
    }
    if (days < 0 && days > -7) {
        return 'Last ' + this.toLocaleDateString('en-us', {
            weekday: 'long',
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    if (days > 0 && days < 7) {
        return this.toLocaleDateString('en-us', {
            weekday: 'long',
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    return this.toDateTime();
};
Date.prototype.toNiceDateTime = function (n = 7) {
    const now = new Date();
    const diff = this.valueOf() - now.valueOf();
    const days = diff / (1000 * 60 * 60 * 24);
    if (Math.abs(days) < 1 && this.getDate() == now.getDate()) {
        return this.toLocaleTimeString('en-us', {
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    if (Math.abs(days) < n) {
        return this.toLocaleDateString('en-us', {
            weekday: 'short',
            hour: 'numeric',
            minute: '2-digit'
        });
    }
    if (Math.abs(days) < 365) {
        return this.toLocaleDateString('en-us', {
            month: 'numeric',
            day: 'numeric'
        });
    }
    return this.toDate();
};
const toNiceDateTime = (datetime) => (new Date(datetime)).toNiceDateTime();
exports.toNiceDateTime = toNiceDateTime;
