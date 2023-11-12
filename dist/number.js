"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
Number.prototype.secondsToTimestring = function () {
    return new Date(this.valueOf() * 1000).toISOString().substr(11, 8);
};
Number.prototype.toFilesize = function () {
    const byte = 1;
    const kilobyte = byte * 1024;
    const megabyte = kilobyte * 1024;
    const gigabyte = megabyte * 1024;
    if (this > gigabyte)
        return (this.valueOf() / gigabyte).toFixed(2) + ' GB';
    if (this > megabyte)
        return (this.valueOf() / megabyte).toFixed(2) + ' MB';
    if (this > kilobyte)
        return (this.valueOf() / kilobyte).toFixed(2) + ' KB';
    return this + ' bytes';
};
