"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.setAPI = void 0;
let API = 'https://mail.helloaiko.com';
/** Sets the API URL. */
const setAPI = (url) => API = url;
exports.setAPI = setAPI;
/** Sends a POST request to an endpoint under the API (set using setAPI). */
const POST = async (endpoint, data, token) => {
    const s = await fetch(API + endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json",
            'x-access-token': token || ""
        }
    }).catch(e => console.error("Error in sending request:", e));
    if (!s)
        return null;
    if (s.status != 200) {
        const d = await s.json().catch(_ => _);
        console.error("Server returned error. Code:", s.status, "& Data:", d);
        return {
            error: s.status,
            msg: d?.error ?? "No or invalid error message received."
        };
    }
    const d = await s.json().catch(e => console.error("Error when consuming JSON from server:", e));
    if (!d)
        return null;
    if (d.error)
        throw d.error;
    return d;
};
exports.POST = POST;
window.POST = exports.POST;
window.setAPI = exports.setAPI;
