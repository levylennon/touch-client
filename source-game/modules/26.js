function(e, t) {
    "use strict";
    e.exports = function(e, t, i, n) {
        i = i || !1, n = n || "id", e = e.map(function(e) {
            return e.toString()
        });
        var o, a;
        if (o = i ? {} : [], t instanceof Array) {
            var r = t.length;
            for (a = 0; a < r; a++) t[a] && e.indexOf(t[a][n].toString()) !== -1 && (i ? o[t[a][n]] = t[a] : o.push(t[a]))
        } else
            for (a in t) t[a] && e.indexOf(t[a][n].toString()) !== -1 && (i ? o[t[a][n]] = t[a] : o.push(t[a]));
        return o
    }
}
