function(e, t) {
    "use strict";

    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, o) {
        t = t || "&", n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var r = /\+/g;
        e = e.split(t);
        var s = 1e3;
        o && "number" == typeof o.maxKeys && (s = o.maxKeys);
        var c = e.length;
        s > 0 && c > s && (c = s);
        for (var l = 0; l < c; ++l) {
            var d, u, p, h, f = e[l].replace(r, "%20"),
                b = f.indexOf(n);
            b >= 0 ? (d = f.substr(0, b), u = f.substr(b + 1)) : (d = f, u = ""), p = decodeURIComponent(d), h = decodeURIComponent(u), i(a, p) ? Array.isArray(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
        }
        return a
    }
}
