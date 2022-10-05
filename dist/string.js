"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
// NOTE: only returns hexadecimal digits, can change radix to change base
String.random = length => {
    let str = '';
    while (str.length < length)
        str += Math.random().toString(16).substring(2);
    return str.substring(0, length);
};
String.prototype.hexEncode = function () {
    let hex;
    let result = '';
    let i;
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += (hex).slice(-2);
    }
    return result;
};
Array.prototype.joinTo = function (to, separator) {
    const toJoin = this.slice(0, to);
    if (this.length > toJoin.length) {
        return toJoin.join(separator || ',') + ' + ' + (this.length - toJoin.length);
    }
    else
        return toJoin.join(separator || ',');
};
String.prototype.getDomain = function () {
    try {
        let url;
        if (!this.startsWith('http://') && !this.startsWith('https://')) {
            url = new window.URL('http://' + this);
        }
        else {
            url = new window.URL(this.valueOf());
        }
        return url.host;
    }
    catch (e) {
        return null;
    }
};
String.prototype.getAvatar = async function ({ defaultTo = 'assets/img/avatar.png', useBoringAvatars = true, useJdenticon = false, colorPalette = ["#F6F6F6", "#FFFFFF", "#2B4192", "#486FFF", "#486FFF"] }) {
    const email = this.toString();
    // look for gravatar first
    const hash = CryptoJS.MD5(email);
    const s = await fetch('https://www.gravatar.com/avatar/' + hash.toString() + '?d=404');
    if (s.status != 404)
        return 'https://www.gravatar.com/avatar/' + hash.toString() + '?d=404';
    const mailProviders = [
        'gmail.com',
        'office365.com',
        'live.com',
        'hotmail.com',
        'outlook.com',
        '@aol.com',
        'yahoo.com',
        '@me.com',
        '@icloud.com',
    ];
    const specialProviders = {
        'gmail.com': 'assets/img/gmail.png',
        'hotmail.com': 'assets/img/microsoft.png',
        'outlook.com': 'assets/img/microsoft.png',
        'live.com': 'assets/img/microsoft.png',
        'office365.com': 'assets/img/microsoft.png',
    };
    const fallback = () => {
        if (useBoringAvatars) {
            try {
                const svg = window.BoringAvatars.beam.default(email, colorPalette);
                return window.SVG2PNG(svg);
            }
            catch (e) {
                return defaultTo;
            }
        }
        else if (useJdenticon) {
            try {
                const svg = window.jdenticon.toSvg(email, 200);
                return window.SVG2PNG(svg);
            }
            catch (e) {
                return defaultTo;
            }
        }
        // if (specialProviders[provider]) return specialProviders[provider]
        return defaultTo;
    };
    const provider = mailProviders.filter(provider => email.endsWith(provider))?.[0];
    if (provider) {
        //? mass mail providers should show jdenticon/boring avatars instead of generic logos :)
        return fallback();
    }
    // try asking clearbit if they know
    const u = 'https://logo.clearbit.com/' + email.split('@')[1];
    const s2 = await fetch(u);
    if (s2.status != 200) {
        // still no? try the fallback
        return fallback();
    }
    return u;
};
