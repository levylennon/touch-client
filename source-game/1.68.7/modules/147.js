function(e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    t.read = function(e, t, i, n, o) {
        var a, r, s = 8 * o - n - 1,
            c = (1 << s) - 1,
            l = c >> 1,
            d = -7,
            u = i ? o - 1 : 0,
            p = i ? -1 : 1,
            h = e[t + u];
        for (u += p, a = h & (1 << -d) - 1, h >>= -d, d += s; d > 0; a = 256 * a + e[t + u], u += p, d -= 8);
        for (r = a & (1 << -d) - 1, a >>= -d, d += n; d > 0; r = 256 * r + e[t + u], u += p, d -= 8);
        if (0 === a) a = 1 - l;
        else {
            if (a === c) return r ? NaN : (h ? -1 : 1) * (1 / 0);
            r += Math.pow(2, n), a -= l
        }
        return (h ? -1 : 1) * r * Math.pow(2, a - n)
    }, t.write = function(e, t, i, n, o, a) {
        var r, s, c, l = 8 * a - o - 1,
            d = (1 << l) - 1,
            u = d >> 1,
            p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : a - 1,
            f = n ? 1 : -1,
            b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = d) : (r = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -r)) < 1 && (r--, c *= 2), t += r + u >= 1 ? p / c : p * Math.pow(2, 1 - u), t * c >= 2 && (r++, c /= 2), r + u >= d ? (s = 0, r = d) : r + u >= 1 ? (s = (t * c - 1) * Math.pow(2, o), r += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, o), r = 0)); o >= 8; e[i + h] = 255 & s, h += f, s /= 256, o -= 8);
        for (r = r << o | s, l += o; l > 0; e[i + h] = 255 & r, h += f, r /= 256, l -= 8);
        e[i + h - f] |= 128 * b
    }
}
