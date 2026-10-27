function(e, t, i) {
    // PATH FINDER
    function n(e, t) {
        this.i = e,
        this.j = t,
        this.floor = -1,
        this.zone = -1,
        this.speed = 1,
        this.weight = 0,
        this.candidateRef = null
    }

    function o(e, t) {
        void 0 !== e && 1 & e.l 
            ? ( t.floor = e.f || 0,
                t.zone = e.z || 0,
                t.speed = 1 + (e.s || 0) / 10, t.zone !== z && (y = !1)) 
            : ( t.floor = -1, t.zone = -1)
    }

    function a(e, t, i, n, o) {
        this.i = e,
        this.j = t,
        this.w = i,
        this.d = n,
        this.path = o
    }

    function r(e, t) {
        return e.floor === t.floor || e.zone === t.zone && (y || 0 !== e.zone || Math.abs(e.floor - t.floor) <= m)
    }

    function s(e, t, i, n) {
        return r(e, t) && (r(e, i) || r(e, n))
    }

    function c(e, t, i, n, o, r) {
        var s = e.i,
            c = e.j,
            l = Math.sqrt((i - s) * (i - s) + (n - c) * (n - c));
        if (t = t / e.speed + e.weight, null === e.candidateRef) {
            var d = new a(s, c, r.w + t, l, r);
            o.push(d), e.candidateRef = d
        } else {
            var u = e.candidateRef.w,
                p = r.w + t;
            p < u && (e.candidateRef.w = p, e.candidateRef.path = r)
        }
    }

    function l(e, t, i, n, o) {
        var a = e.i,
            l = e.j,
            d = _[a][l],
            u = _[a - 1][l],
            p = _[a][l - 1],
            h = _[a][l + 1],
            f = _[a + 1][l],
            b = 1;
        r(d, u) && c(u, b, t, i, n, e), r(d, f) && c(f, b, t, i, n, e), r(d, p) && c(p, b, t, i, n, e), r(d, h) && c(h, b, t, i, n, e);
        var m = _[a - 1][l - 1],
            M = _[a - 1][l + 1],
            g = _[a + 1][l - 1],
            A = _[a + 1][l + 1],
            O = Math.sqrt(2);
        o && (s(d, m, u, p) && c(m, O, t, i, n, e), s(d, g, f, p) && c(g, O, t, i, n, e), s(d, M, u, h) && c(M, O, t, i, n, e), s(d, A, f, h) && c(A, O, t, i, n, e))
    }

    function d(e) {
        if (!Array.isArray(e) || e.length < 2) return !1;
        for (var t = h(e[0]), i = 1, n = e.length; i < n; i += 1) {
            var o = e[i],
                a = h(o);
            if (Math.abs(t.x - a.x) > 1) return !1;
            if (Math.abs(t.y - a.y) > 1) return !1;
            t = a
        }
        return !0
    }

    function u(e) {
        if (!Array.isArray(e)) return [];
        if (e.length < 2) return e;
        var t = [];
        t.push(e[0]);
        for (var i = h(e[0]), n = 1, o = e.length; n < o; n += 1) {
            var a, r, s = e[n],
                c = h(s),
                l = Math.abs(c.x - i.x),
                d = Math.abs(c.y - i.y);
            if (0 === l || 0 === d) {
                if (l > 1)
                    for (a = c.x > i.x ? 1 : -1, i.x += a; i.x !== c.x;) t.push(f(i.x, i.y)), i.x += a;
                if (d > 1)
                    for (r = c.y > i.y ? 1 : -1, i.y += r; i.y !== c.y;) t.push(f(i.x, i.y)), i.y += r
            } else if (l === d)
                for (a = c.x > i.x ? 1 : -1, r = c.y > i.y ? 1 : -1, i.x += a, i.y += r; i.y !== c.y;) t.push(f(i.x, i.y)), i.x += a, i.y += r;
            i = c, t.push(s)
        }
        return t
    }
    for (var p = i(735), h = p.getMapPointFromCellId, f = p.getCellIdFromMapPoint, b = 10, m = 11.825, M = 35, g = 36, _ = [], A = 0; A < M; A += 1) {
        for (var O = [], v = 0; v < g; v += 1) O[v] = new n(A, v);
        _[A] = O
    }
    var y, z;
    t.fillPathGrid = function(e) {
        z = e.cells[0].z || 0, y = !0;
        for (var t = 0; t < M; t += 1)
            for (var i = _[t], n = 0; n < g; n += 1) {
                var a = f(t - 1, n - 1),
                    r = i[n],
                    s = e.cells[a];
                o(s, r)
            }
    },
    t.updateCellPath = function(e, t) {
        var i = p.getMapPointFromCellId(e),
            n = _[i.x + 1][i.y + 1];
        o(t, n)
    },
    t.getPath = function(e, t, i, n, o) {
        var s, c;
        n = void 0 === n || Boolean(n);
        var d = h(e),
            u = h(t),
            p = d.x + 1,
            m = d.y + 1,
            M = _[p][m];
        if (M.zone === -1) {
            for (var g = null, A = 1 / 0, O = 1 / 0, v = -1; v <= 1; v += 1)
                for (var y = -1; y <= 1; y += 1)
                    if (0 !== v || 0 !== y) {
                        var z = _[p + v][m + y];
                        if (z.zone !== -1) {
                            var w = Math.abs(z.f - M.f),
                                T = Math.abs(v) + Math.abs(y);
                            (null === g || w < O || w <= O && T < A) && (g = z, A = T, O = w)
                        }
                    } return null !== g ? [e, f(g.i - 1, g.j - 1)] : (console.error(new Error("[pathFinder.getPath] Player is stuck in " + p + "/" + m)), [e])
        }
        var C,
            I,
            S = u.x + 1,
            E = u.y + 1;
        for (I in i) C = h(I), _[C.x + 1][C.y + 1].weight += b;
        for (var L = [], N = [], R = Math.sqrt((p - S) * (p - S) + (m - E) * (m - E)), q = new a(p, m, 0, R, null), x = null, B = q; q.i !== S || q.j !== E;) {
            l(q, S, E, L, n);
            var D = L.length;
            if (0 === D) {
                q = B;
                break
            }
            var W = 1 / 0,
                P = 0;
            for (s = 0; s < D; s += 1) c = L[s], c.w + c.d < W && (q = c, W = c.w + c.d, P = s);
            if (N.push(q), L.splice(P, 1), 0 === q.d || o && q.d < 1.5 && r(_[S][E], _[q.i][q.j])) {
                if (null === x || q.w < x.w) {
                    x = q, B = q;
                    var k = [];
                    for (s = 0; s < L.length; s += 1) c = L[s], c.w + c.d < x.w ? k.push(c) : _[c.i][c.j].candidateRef = null;
                    L = k
                }
            } else q.d < B.d && (B = q)
        }
        for (s = 0; s < L.length; s += 1) c = L[s], _[c.i][c.j].candidateRef = null;
        for (var F = 0; F < N.length; F += 1) q = N[F], _[q.i][q.j].candidateRef = null;
        for (I in i) C = h(I), _[C.x + 1][C.y + 1].weight -= b;
        for (var H = []; null !== B;) H.unshift(f(B.i - 1, B.j - 1)), B = B.path;
        return H
    },
    t.getAccessibleCells = function(e, t) {
        e += 1, t += 1;
        var i = _[e][t],
            n = _[e - 1][t],
            o = _[e][t - 1],
            a = _[e][t + 1],
            s = _[e + 1][t],
            c = [];
        return r(i, n) && c.push({
            i: n.i - 1,
            j: n.j - 1
        }), r(i, s) && c.push({
            i: s.i - 1,
            j: s.j - 1
        }), r(i, o) && c.push({
            i: o.i - 1,
            j: o.j - 1
        }), r(i, a) && c.push({
            i: a.i - 1,
            j: a.j - 1
        }), c
    },
    t.compressPath = function(e) {
        for (var t, i, n = [], o = e[0], a = -1, r = 0; r < e.length; r++) {
            var s, c = e[r],
                l = h(c);
            s = 0 === r ? -1 : l.y === i ? l.x > t ? 7 : 3 : l.x === t ? l.y > i ? 1 : 5 : l.x > t ? l.y > i ? 0 : 6 : l.y > i ? 2 : 4, s !== a && (n.push(o + (s << 12)), a = s), o = c, t = l.x, i = l.y
        }
        return n.push(o + (a << 12)), n
    },
    t.normalizePath = function(e) {
        return d(e) ? e : u(e)
    },
    t.logPath = function(e) {
        e = e || [];
        var t, i, n = [];
        for (t = 0; t < 33; t += 1)
            for (n.push([]), i = 0; i < 34; i += 1) void 0 === f(t, i) ? n[t][i] = "    " : n[t][i] = "[  ]";
        for (var o = 0, a = e.length; o < a; o += 1) {
            var r = e[o],
                s = h(r),
                c = o < 10 ? "0" : "";
            n[s.x][s.y] = "[" + c + o + "]"
        }
        var l = "";
        for (i = 0; i < 34; i += 1) {
            for (t = 0; t < 33; t += 1) l += n[t][i];
            l += "\n"
        }
        return l
    }
}
