function(e, t) {
    "use strict";

    function i(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var i = e.indexOf("=");
        i === -1 && (i = t);
        var n = i === t ? 0 : 4 - i % 4;
        return [i, n]
    }

    function n(e) {
        var t = i(e),
            n = t[0],
            o = t[1];
        return 3 * (n + o) / 4 - o
    }

    function o(e, t, i) {
        return 3 * (t + i) / 4 - i
    }

    function a(e) {
        var t, n, a = i(e),
            r = a[0],
            s = a[1],
            c = new u(o(e, r, s)),
            l = 0,
            p = s > 0 ? r - 4 : r;
        for (n = 0; n < p; n += 4) t = d[e.charCodeAt(n)] << 18 | d[e.charCodeAt(n + 1)] << 12 | d[e.charCodeAt(n + 2)] << 6 | d[e.charCodeAt(n + 3)], c[l++] = t >> 16 & 255, c[l++] = t >> 8 & 255, c[l++] = 255 & t;
        return 2 === s && (t = d[e.charCodeAt(n)] << 2 | d[e.charCodeAt(n + 1)] >> 4, c[l++] = 255 & t), 1 === s && (t = d[e.charCodeAt(n)] << 10 | d[e.charCodeAt(n + 1)] << 4 | d[e.charCodeAt(n + 2)] >> 2, c[l++] = t >> 8 & 255, c[l++] = 255 & t), c
    }

    function r(e) {
        return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e]
    }

    function s(e, t, i) {
        for (var n, o = [], a = t; a < i; a += 3) n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(r(n));
        return o.join("")
    }

    function c(e) {
        for (var t, i = e.length, n = i % 3, o = [], a = 16383, r = 0, c = i - n; r < c; r += a) o.push(s(e, r, r + a > c ? c : r + a));
        return 1 === n ? (t = e[i - 1], o.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === n && (t = (e[i - 2] << 8) + e[i - 1], o.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), o.join("")
    }
    t.byteLength = n, t.toByteArray = a, t.fromByteArray = c;
    for (var l = [], d = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, f = p.length; h < f; ++h) l[h] = p[h], d[p.charCodeAt(h)] = h;
    d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63
}
