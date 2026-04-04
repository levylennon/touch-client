function(e, t, i) {
    function n(e) {
        var t = _ * (e[0] - b),
            i = _ * e[1],
            n = (t + i) / A + m,
            o = (i - t) / O + M;
        return n = ~~Math.round(n), o = ~~Math.round(2 * o) / 2 - d, {
            x: n,
            y: o
        }
    }

    function o(e, t) {
        t[e] ? delete t[e] : t[e] = !0
    }

    function a(e, t) {
        var i = s.getMapPointFromCellId(e);
        o(i.x + ":" + i.y + ":H", t), o(i.x + 1 + ":" + i.y + ":V", t), o(i.x + ":" + (i.y + 1) + ":H", t), o(i.x + ":" + i.y + ":V", t)
    }

    function r(e) {
        for (var t = {}, i = 0; i < e.length; i++) a(e[i], t);
        t = Object.keys(t);
        for (var o = [], r = 0; r < t.length; r++) {
            var s = t[r].split(":");
            s[0] = ~~s[0], s[1] = ~~s[1];
            var c = n(s);
            "H" === s[2] ? s[0] += 1 : s[1] += 1;
            var d = n(s);
            o.push(new l(c.x, c.y, d.x, d.y))
        }
        return o
    }
    var s = i(735),
        c = i(13),
        l = i(1175),
        d = c.GRID_ALTITUDE_OFFSET,
        u = c.CELL_WIDTH,
        p = c.CELL_HEIGHT,
        h = .325,
        f = 1.338,
        b = 20.225,
        m = c.HORIZONTAL_OFFSET - u / 2 - h,
        M = c.VERTICAL_OFFSET - p / 2 - f,
        g = Math.sqrt(2),
        _ = g / 2,
        A = g / u,
        O = g / p;
    e.exports.getZoneOutlines = r
}
