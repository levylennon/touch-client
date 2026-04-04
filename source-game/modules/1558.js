function(e, t) {
    t.getLine = function(e, t, i, n) {
        var o = "x",
            a = "y",
            r = [],
            s = {
                x: e + .5,
                y: t + .5
            },
            c = {
                x: i + .5,
                y: n + .5
            },
            l = {
                x: 0,
                y: 0
            },
            d = 0;
        if (Math.abs(s.x - c.x) === Math.abs(s.y - c.y)) {
            d = Math.abs(s.x - c.x), l.x = c.x > s.x ? 1 : -1, l.y = c.y > s.y ? 1 : -1;
            for (var u = 0; u < d; u++) r.push({
                x: Math.floor(s.x + l.x),
                y: Math.floor(s.y + l.y)
            }), s.x += l.x, s.y += l.y
        } else {
            var p = a,
                h = o;
            Math.abs(s.x - c.x) > Math.abs(s.y - c.y) && (p = o, h = a), d = Math.abs(s[p] - c[p]), l[p] = c[p] >= s[p] ? 1 : -1, l[h] = c[h] > s[h] ? Math.abs(s[h] - c[h]) / d : -Math.abs(s[h] - c[h]) / d;
            for (var f = 0; f < d; f++) {
                var b = [],
                    m = Math.round(1e4 * s[h] + 5e3 * l[h]) / 1e4,
                    M = Math.round(1e4 * s[h] + 15e3 * l[h]) / 1e4;
                Math.floor(m) === Math.floor(M) ? (b = [Math.floor(s[h] + l[h])], m === b[0] && M < b[0] && (b = [Math.ceil(s[h] + l[h])]), M === b[0] && m < b[0] && (b = [Math.ceil(s[h] + l[h])])) : Math.ceil(m) === Math.ceil(M) ? (b = [Math.ceil(s[h] + l[h])], m === b[0] && M < b[0] && (b = [Math.floor(s[h] + l[h])]), M === b[0] && m < b[0] && (b = [Math.floor(s[h] + l[h])])) : b = [Math.floor(m), Math.floor(M)];
                for (var g in b) p === o ? r.push({
                    x: Math.floor(s.x + l.x),
                    y: b[g]
                }) : r.push({
                    x: b[g],
                    y: Math.floor(s.y + l.y)
                });
                s.x += l.x, s.y += l.y
            }
        }
        return r
    }
}
