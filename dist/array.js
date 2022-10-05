"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
Array.prototype.tail = function (n) {
    return this.slice(-n);
};
Array.prototype.last = function () {
    return this.tail(1)[0];
};
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
