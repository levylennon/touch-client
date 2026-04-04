function(e, t, i) {
    function n(e, t, i) {
        var n = e + i.points[0].x,
            o = t + i.points[0].y;
        n < i.min.x ? n = i.min.x : n > i.max.x && (n = i.max.x), o < i.min.y ? o = i.min.y : o > i.max.y && (o = i.max.y);
        for (var a = [], r = 0, s = 0, c = i.points.length, l = 1; l < c; l++) {
            var d = i.points[l - 1].x,
                u = i.points[l - 1].y,
                p = i.points[l].x,
                h = i.points[l].y,
                f = h - u,
                b = -(p - d),
                m = -f * p - b * h;
            (d >= n && n >= p || d <= n && n <= p) && 0 !== b && (s = (f * n + m) / -b, a.push({
                x: n,
                y: s
            })), (u >= o && o >= h || u <= o && o <= h) && 0 !== f && (r = (b * o + m) / -f, a.push({
                x: r,
                y: o
            }))
        }
        return a
    }

    function o(e, t) {
        return !(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) > 100)
    }

    function a(e, t) {
        for (var i = e[0], n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)), o = 0; o < e.length; o += 1) {
            var a = e[o],
                r = Math.sqrt(Math.pow(a.x - t.x, 2) + Math.pow(a.y - t.y, 2));
            r < n && (i = a, n = r)
        }
        return i
    }

    function r(e, t) {
        if (!(e.max.x && e.max.y && t.max.x && t.max.y && e.max.x - e.min.x !== 0 && e.max.y - e.min.y !== 0)) return e;
        var i = {};
        p.shallowCopyProperties(e, i, p.getOwnProperties(e));
        var n = (t.max.x - t.min.x) / (e.max.x - e.min.x),
            o = (t.max.y - t.min.y) / (e.max.y - e.min.y);
        return e.max.x *= n, e.max.y *= o, i.schema.forEach(function(t) {
            t.min.x *= n, t.min.y *= o, t.max.x *= n, t.max.y *= o, e.max.x = e.max.x < t.max.x ? t.max.x : e.max.x, e.max.y = e.max.y < t.max.y ? t.max.y : e.max.y, t.points.forEach(function(e) {
                e.x *= n, e.y *= o
            })
        }), i
    }

    function s(e, t) {
        if (!e.max.x || !e.max.y || e.max.x - e.min.x === 0 || e.max.y - e.min.y === 0) return e;
        var i = JSON.parse(JSON.stringify(e)),
            n = .8 * t.height / e.max.y;
        i.max.x *= n, i.max.y *= n, i.schema.forEach(function(e) {
            e.min.x *= n, e.min.y *= n, e.max.x *= n, e.max.y *= n, e.points.forEach(function(e) {
                e.x *= n, e.y *= n
            })
        });
        var o = .5 * t.width - .5 * i.max.x,
            a = .5 * t.height - .5 * i.max.y;
        return i.schema.forEach(function(e) {
            e.min.x += o, e.max.x += o, e.min.y += a, e.max.y += a, e.points.forEach(function(e) {
                e.x += o, e.y += a
            })
        }), i
    }

    function c(e, t, i) {
        i = i || {};
        var n = i.big ? 20 : 50,
            o = i.big ? 100 : 30,
            a = Math.abs(180 * Math.atan2(e.y, e.x) / Math.PI),
            r = Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2)),
            s = Math.abs(180 * Math.atan2(t.y, t.x) / Math.PI),
            c = Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2));
        return !(Math.abs(s - a) > n || Math.abs(c - r) > o)
    }

    function l(e) {
        var t = {};
        p.shallowCopyProperties(e, t, p.getOwnProperties(e));
        var i = t.min.x,
            n = t.min.y;
        return t.schema.forEach(function(e) {
            e.min.x -= i, e.min.y -= n, e.max.x -= i, e.max.y -= n, e.points.forEach(function(e) {
                e.x -= i, e.y -= n
            })
        }), t.max.x -= i, t.max.y -= n, t.min.x = 0, t.min.y = 0, t
    }

    function d(e, t) {
        var i = {};
        if (i.stroke = e[0], i.modelStroke = t[0], e.length < 2) return i;
        for (var n = Math.sqrt(Math.pow(i.stroke.points[0].x - i.modelStroke.points[0].x, 2) + Math.pow(i.stroke.points[0].y - i.modelStroke.points[0].y, 2)), o = Math.sqrt(Math.pow(i.stroke.points[i.stroke.points.length - 1].x - i.modelStroke.points[i.modelStroke.points.length - 1].x, 2) + Math.pow(i.stroke.points[i.stroke.points.length - 1].y - i.modelStroke.points[i.modelStroke.points.length - 1].y, 2)), a = n + o, r = 1; r < e.length; r += 1) {
            var s = e[r],
                c = t[r];
            n = Math.sqrt(Math.pow(s.points[0].x - c.points[0].x, 2) + Math.pow(s.points[0].y - c.points[0].y, 2)), o = Math.sqrt(Math.pow(s.points[s.points.length - 1].x - c.points[c.points.length - 1].x, 2) + Math.pow(s.points[s.points.length - 1].y - c.points[c.points.length - 1].y, 2));
            var l = n + o;
            l < a && (a = l, i.stroke = e[r], i.modelStroke = t[r])
        }
        return i
    }

    function u(e, t) {
        if (e.schema.length !== t.schema.length || 0 === t.schema.length) return !1;
        for (var i = [], r = {}; i.length !== t.schema.length;) i.push(!1);
        e.schema.forEach(function(e) {
            for (var n = e.points.length, s = e.points[0], l = e.points[n - 1], d = [s, l], u = {
                    x: l.x - s.x,
                    y: l.y - s.y
                }, p = 0; p < t.schema.length; p++) {
                var h = {};
                if (i[p] !== !0) {
                    var f = t.schema[p],
                        b = f.points.length,
                        m = {},
                        M = {},
                        g = !1,
                        _ = a(d, f.points[0]),
                        A = a(d, f.points[b - 1]),
                        O = _.x === s.x && _.y === s.y,
                        v = A.x === l.x && A.y === l.y;
                    if (O && o(s, f.points[0])) {
                        if (m = f.points[0], !v || !o(l, f.points[b - 1])) continue;
                        M = f.points[b - 1]
                    } else {
                        if (v || !o(s, f.points[b - 1])) continue;
                        if (m = f.points[b - 1], O || !o(l, f.points[0])) continue;
                        M = f.points[0], g = !0, h = JSON.parse(JSON.stringify(f)), h.points.reverse()
                    }
                    var y = {
                        x: M.x - m.x,
                        y: M.y - m.y
                    };
                    c(u, y, {
                        big: !0
                    }) && (void 0 === r[p] ? (r[p] = {}, r[p].stroke = [], r[p].strokeModel = [], r[p].stroke.push(e), r[p].strokeModel.push(g ? h : f)) : (r[p].stroke.push(e), r[p].strokeModel.push(g ? h : f)))
                }
            }
        });
        for (var s = {}, l = {}, u = 0; u < t.schema.length && r[u]; u++) {
            for (var p = d(r[u].stroke, r[u].strokeModel), h = p.modelStroke, f = p.stroke, b = h.points[0], m = !1, M = 0; M < h.points.length - 1; M++) {
                var g = h.points[M],
                    _ = h.points[M + 1],
                    A = {
                        x: _.x - g.x,
                        y: _.y - g.y
                    },
                    O = {};
                s = {};
                var v = (_.y - b.y) * ((f.max.y - f.min.y) / (h.max.y - h.min.y)),
                    y = (g.y - b.y) * ((f.max.y - f.min.y) / (h.max.y - h.min.y)),
                    z = (_.x - b.x) * ((f.max.x - f.min.x) / (h.max.x - h.min.x)),
                    w = (g.x - b.x) * ((f.max.x - f.min.x) / (h.max.x - h.min.x));
                if (s = a(n(z, v, f), _), l = a(n(w, y, f), g), O = {
                        x: _.x - g.x,
                        y: s.y - l.y
                    }, !c(O, A)) {
                    m = !1;
                    break
                }
                m = !0
            }
            if (!m) break;
            i[u] = !0
        }
        return i.every(Boolean)
    }
    var p = i(32);
    t.rescale = r, t.adaptToCanvasSize = s, t.sensorModification = l, t.compareStrokes = u
}
