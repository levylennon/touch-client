function(e, t, i) {
    function n(e, t, i, n) {
        var o = [];
        0 === i && o.push([e, t, 0]);
        for (var a = i || 1; a <= n; a++)
            for (var r = 0; r < a; r++) {
                var s = a - r;
                o.push([e + r, t - s, a]), o.push([e + s, t + r, a]), o.push([e - r, t + s, a]), o.push([e - s, t - r, a])
            }
        return o
    }

    function o(e, t, i, n) {
        var o = [];
        0 === i && o.push([e, t, 0]);
        for (var a = i || 1; a <= n; a++) o.push([e - a, t, a]), o.push([e + a, t, a]), o.push([e, t - a, a]), o.push([e, t + a, a]);
        return o
    }

    function a(e, t, i, n) {
        var o = [];
        0 === i && o.push([e, t, 0]);
        for (var a = i || 1; a <= n; a++) o.push([e - a, t - a, a]), o.push([e - a, t + a, a]), o.push([e + a, t - a, a]), o.push([e + a, t + a, a]);
        return o
    }

    function r(e, t, i, n) {
        var o = [];
        0 === i && o.push([e, t, 0]);
        for (var a = i || 1; a <= n; a++) o.push([e - a, t, a]), o.push([e + a, t, a]), o.push([e, t - a, a]), o.push([e, t + a, a]), o.push([e - a, t - a, a]), o.push([e - a, t + a, a]), o.push([e + a, t - a, a]), o.push([e + a, t + a, a]);
        return o
    }

    function s(e, t, i, n) {
        var o = [];
        0 === i && o.push([e, t, 0]);
        for (var a = i || 1; a <= n; a++) {
            o.push([e - a, t, a]), o.push([e + a, t, a]), o.push([e, t - a, a]), o.push([e, t + a, a]), o.push([e - a, t - a, a]), o.push([e - a, t + a, a]), o.push([e + a, t - a, a]), o.push([e + a, t + a, a]);
            for (var r = 1; r < a; r++) o.push([e + a, t + r, a]), o.push([e + a, t - r, a]), o.push([e - a, t + r, a]), o.push([e - a, t - r, a]), o.push([e + r, t + a, a]), o.push([e - r, t + a, a]), o.push([e + r, t - a, a]), o.push([e - r, t - a, a])
        }
        return o
    }

    function c(e, t, i, n, o, a) {
        for (var r = [], s = i; s <= n; s++) {
            var c = e + s * o,
                l = t + s * a;
            r.push([c, l, s]);
            for (var d = 1; d <= s; d++) r.push([c + d * a, l - d * o, s]), r.push([c - d * a, l + d * o, s])
        }
        return r
    }

    function l(e, t, i, n, o, a) {
        var r = [];
        0 === i && r.push([e, t, 0]);
        for (var s = i || 1; s <= n; s++) {
            var c = e - s * o,
                l = t - s * a;
            r.push([c + s * a, l - s * o, s]), r.push([c - s * a, l + s * o, s])
        }
        return r
    }

    function d(e, t, i, n) {
        for (var o = [], a = i || 1; a <= n; a++) {
            o.push([e - a, t, a]), o.push([e + a, t, a]), o.push([e, t - a, a]), o.push([e, t + a, a]);
            for (var r = 1; r < a; r++) o.push([e + a, t + r, a]), o.push([e + a, t - r, a]), o.push([e - a, t + r, a]), o.push([e - a, t - r, a]), o.push([e + r, t + a, a]), o.push([e - r, t + a, a]), o.push([e + r, t - a, a]), o.push([e - r, t - a, a])
        }
        return o
    }

    function u(e, t, i, n, o, a) {
        for (var r = [], s = i; s <= n; s++) r.push([e + o * s, t + a * s, s]);
        return r
    }

    function p(e, t, i, o) {
        return n(e, t, o, o)
    }

    function h(e, t, i, o) {
        return n(e, t, o, O)
    }

    function f(e, t, i, n, o, a) {
        var r = [];
        0 === i && r.push([e, t, 0]);
        for (var s = i || 1; s <= n; s++) r.push([e + a * s, t - o * s, s]), r.push([e - a * s, t + o * s, s]);
        return r
    }

    function b(e, t, i, n) {
        for (var o = M.getMapPointFromCellId(t), a = n(o.x, o.y, 0, i), r = [], s = 0; s < a.length; s++) {
            var c = M.getCellIdFromMapPoint(a[s][0], a[s][1]);
            if (void 0 !== c) {
                var l = e[c].l || 0;
                1 === (5 & l) && r.push(c)
            }
        }
        return r
    }
    var m = i(342),
        M = i(735),
        g = i(343),
        _ = i(14),
        A = _(),
        O = 39;
    t.getSpellRange = function(e, t, i) {
        var r, s = M.getMapPointFromCellId(t);
        return r = i.castInLine && i.castInDiagonal ? o(s.x, s.y, i.minRange, i.range)
            .concat(a(s.x, s.y, i.minRange, i.range)) : i.castInLine ? o(s.x, s.y, i.minRange, i.range) : i.castInDiagonal ? a(s.x, s.y, i.minRange, i.range) : n(s.x, s.y, i.minRange, i.range)
    }, t.getCircleArea = function(e, t, i) {
        return b(e, t, i, n)
    }, t.getCrossArea = function(e, t, i) {
        return b(e, t, i, o)
    };
    var v = {
        0: null,
        P: null,
        A: null,
        a: null,
        D: null,
        ";": null,
        l: null,
        X: {
            fn: o,
            hasDirection: !1,
            withoutCenter: !1
        },
        L: {
            fn: u,
            hasDirection: !0,
            withoutCenter: !1
        },
        T: {
            fn: f,
            hasDirection: !0,
            withoutCenter: !1
        },
        C: {
            fn: n,
            hasDirection: !1,
            withoutCenter: !1
        },
        O: {
            fn: p,
            hasDirection: !1,
            withoutCenter: !1
        },
        "+": {
            fn: a,
            hasDirection: !1,
            withoutCenter: !1
        },
        G: {
            fn: s,
            hasDirection: !1,
            withoutCenter: !1
        },
        V: {
            fn: c,
            hasDirection: !0,
            withoutCenter: !1
        },
        W: {
            fn: d,
            hasDirection: !1,
            withoutCenter: !1
        },
        "/": {
            fn: u,
            hasDirection: !0,
            withoutCenter: !1
        },
        "-": {
            fn: f,
            hasDirection: !0,
            withoutCenter: !1
        },
        U: {
            fn: l,
            hasDirection: !0,
            withoutCenter: !1
        },
        Q: {
            fn: o,
            hasDirection: !1,
            withoutCenter: !0
        },
        "#": {
            fn: a,
            hasDirection: !1,
            withoutCenter: !0
        },
        "*": {
            fn: r,
            hasDirection: !1,
            withoutCenter: !1
        },
        I: {
            fn: h,
            hasDirection: !1,
            withoutCenter: !1
        }
    };
    t.getSpellEffectZone = function(e, t, i, n) {
        var o = {},
            a = v[n.zoneShape];
        if (a) {
            var r, s, c = M.getMapPointFromCellId(i);
            if (a.hasDirection) {
                var l = M.getMapPointFromCellId(t);
                r = c.x === l.x ? 0 : c.x > l.x ? 1 : -1, s = c.y === l.y ? 0 : c.y > l.y ? 1 : -1
            }
            for (var d = a.withoutCenter ? n.zoneMinSize || 1 : n.zoneMinSize, u = a.fn(c.x, c.y, d, n.zoneSize, r, s), p = 0; p < u.length; p++) {
                var h = M.getCellIdFromMapPoint(u[p][0], u[p][1]);
                if (void 0 !== h) {
                    var f = e[h].l || 0;
                    if (1 === (5 & f)) {
                        var b;
                        b = A.foreground.fightIsUserTurn ? g.areaOfEffect : g.areaOfEffectEnemyTurn, o[h] = new m(h, u[p][2], b)
                    }
                }
            }
        } else void 0 === a && console.error(new Error("Incorrect Effect shape id: " + n.zoneShape)), o[i] = new m(i, 0, A.foreground.fightIsUserTurn ? g.areaOfEffect : g.areaOfEffectEnemyTurn);
        return o
    }, t.getShapeCenterCells = function(e, t, i) {
        if (!i || "null" === i) return [t];
        var n = i.split("|");
        return n.forEach(function(i) {
            var n = i.split(",");
            switch (n[0]) {
                case "SbC":
                    t = M.getCellBySymmetry(e, t)
            }
        }), [t]
    }
}
