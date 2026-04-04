function(e, t, i) {
    var n;
    ! function(o) {
        "use strict";

        function a(e) {
            function t(e, i) {
                var n, o, a, r, s, c, d, u, p = this;
                if (!(p instanceof t)) return new t(e, i);
                if (null == i) {
                    if (e instanceof t) return p.s = e.s, p.e = e.e, void(p.c = (e = e.c) ? e.slice() : e);
                    if (c = "number" == typeof e, c && 0 * e == 0) {
                        if (p.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                            for (r = 0, s = e; s >= 10; s /= 10, r++);
                            return p.e = r, void(p.c = [e])
                        }
                        u = String(e)
                    } else {
                        if (u = String(e), !f.test(u)) return I(p, u, c);
                        p.s = 45 == u.charCodeAt(0) ? (u = u.slice(1), -1) : 1
                    }(r = u.indexOf(".")) > -1 && (u = u.replace(".", "")), (s = u.search(/e/i)) > 0 ? (r < 0 && (r = s), r += +u.slice(s + 1), u = u.substring(0, s)) : r < 0 && (r = u.length)
                } else {
                    if (l(i, 2, F.length, "Base"), u = String(e), 10 == i) return p = new t(e instanceof t ? e : u), h(p, L + p.e + 1, N);
                    if (c = "number" == typeof e) {
                        if (0 * e != 0) return I(p, u, c, i);
                        if (p.s = 1 / e < 0 ? (u = u.slice(1), -1) : 1, t.DEBUG && u.replace(/^0\.0*|\./, "")
                            .length > 15) throw Error(g + e);
                        c = !1
                    } else p.s = 45 === u.charCodeAt(0) ? (u = u.slice(1), -1) : 1;
                    for (n = F.slice(0, i), r = s = 0, d = u.length; s < d; s++)
                        if (n.indexOf(o = u.charAt(s)) < 0) {
                            if ("." == o) {
                                if (s > r) {
                                    r = d;
                                    continue
                                }
                            } else if (!a && (u == u.toUpperCase() && (u = u.toLowerCase()) || u == u.toLowerCase() && (u = u.toUpperCase()))) {
                                a = !0, s = -1, r = 0;
                                continue
                            }
                            return I(p, String(e), c, i)
                        } u = C(u, i, 10, p.s), (r = u.indexOf(".")) > -1 ? u = u.replace(".", "") : r = u.length
                }
                for (s = 0; 48 === u.charCodeAt(s); s++);
                for (d = u.length; 48 === u.charCodeAt(--d););
                if (u = u.slice(s, ++d)) {
                    if (d -= s, c && t.DEBUG && d > 15 && (e > O || e !== m(e))) throw Error(g + p.s * e);
                    if (r = r - s - 1, r > B) p.c = p.e = null;
                    else if (r < x) p.c = [p.e = 0];
                    else {
                        if (p.e = r, p.c = [], s = (r + 1) % A, r < 0 && (s += A), s < d) {
                            for (s && p.c.push(+u.slice(0, s)), d -= A; s < d;) p.c.push(+u.slice(s, s += A));
                            u = u.slice(s), s = A - u.length
                        } else s -= d;
                        for (; s--; u += "0");
                        p.c.push(+u)
                    }
                } else p.c = [p.e = 0]
            }

            function i(e, i, n, o) {
                var a, r, c, d, f;
                if (null == n ? n = N : l(n, 0, 8), !e.c) return e.toString();
                if (a = e.c[0], c = e.e, null == i) f = s(e.c), f = 1 == o || 2 == o && c <= R ? u(f, c) : p(f, c, "0");
                else if (e = h(new t(e), i, n), r = e.e, f = s(e.c), d = f.length, 1 == o || 2 == o && (i <= r || r <= R)) {
                    for (; d < i; f += "0", d++);
                    f = u(f, r)
                } else if (i -= c, f = p(f, r, "0"), r + 1 > d) {
                    if (--i > 0)
                        for (f += "."; i--; f += "0");
                } else if (i += r - d, i > 0)
                    for (r + 1 == d && (f += "."); i--; f += "0");
                return e.s < 0 && a ? "-" + f : f
            }

            function n(e, i) {
                for (var n, o = 1, a = new t(e[0]); o < e.length; o++) {
                    if (n = new t(e[o]), !n.s) {
                        a = n;
                        break
                    }
                    i.call(a, n) && (a = n)
                }
                return a
            }

            function o(e, t, i) {
                for (var n = 1, o = t.length; !t[--o]; t.pop());
                for (o = t[0]; o >= 10; o /= 10, n++);
                return (i = n + i * A - 1) > B ? e.c = e.e = null : i < x ? e.c = [e.e = 0] : (e.e = i, e.c = t), e
            }

            function h(e, t, i, n) {
                var o, a, r, s, c, l, d, u = e.c,
                    p = v;
                if (u) {
                    e: {
                        for (o = 1, s = u[0]; s >= 10; s /= 10, o++);
                        if (a = t - o, a < 0) a += A,
                        r = t,
                        c = u[l = 0],
                        d = c / p[o - r - 1] % 10 | 0;
                        else if (l = b((a + 1) / A), l >= u.length) {
                            if (!n) break e;
                            for (; u.length <= l; u.push(0));
                            c = d = 0, o = 1, a %= A, r = a - A + 1
                        } else {
                            for (c = s = u[l], o = 1; s >= 10; s /= 10, o++);
                            a %= A, r = a - A + o, d = r < 0 ? 0 : c / p[o - r - 1] % 10 | 0
                        }
                        if (n = n || t < 0 || null != u[l + 1] || (r < 0 ? c : c % p[o - r - 1]), n = i < 4 ? (d || n) && (0 == i || i == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == i || n || 6 == i && (a > 0 ? r > 0 ? c / p[o - r] : 0 : u[l - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), t < 1 || !u[0]) return u.length = 0,
                        n ? (t -= e.e + 1, u[0] = p[(A - t % A) % A], e.e = -t || 0) : u[0] = e.e = 0,
                        e;
                        if (0 == a ? (u.length = l, s = 1, l--) : (u.length = l + 1, s = p[A - a], u[l] = r > 0 ? m(c / p[o - r] % p[r]) * s : 0), n)
                            for (;;) {
                                if (0 == l) {
                                    for (a = 1, r = u[0]; r >= 10; r /= 10, a++);
                                    for (r = u[0] += s, s = 1; r >= 10; r /= 10, s++);
                                    a != s && (e.e++, u[0] == _ && (u[0] = 1));
                                    break
                                }
                                if (u[l] += s, u[l] != _) break;
                                u[l--] = 0, s = 1
                            }
                        for (a = u.length; 0 === u[--a]; u.pop());
                    }
                    e.e > B ? e.c = e.e = null : e.e < x && (e.c = [e.e = 0])
                }
                return e
            }

            function w(e) {
                var t, i = e.e;
                return null === i ? e.toString() : (t = s(e.c), t = i <= R || i >= q ? u(t, i) : p(t, i, "0"), e.s < 0 ? "-" + t : t)
            }
            var T, C, I, S = t.prototype = {
                    constructor: t,
                    toString: null,
                    valueOf: null
                },
                E = new t(1),
                L = 20,
                N = 4,
                R = -7,
                q = 21,
                x = -1e7,
                B = 1e7,
                D = !1,
                W = 1,
                P = 0,
                k = {
                    prefix: "",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    groupSeparator: ",",
                    decimalSeparator: ".",
                    fractionGroupSize: 0,
                    fractionGroupSeparator: " ",
                    suffix: ""
                },
                F = "0123456789abcdefghijklmnopqrstuvwxyz";
            return t.clone = a, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = function(e) {
                var t, i;
                if (null != e) {
                    if ("object" != typeof e) throw Error(M + "Object expected: " + e);
                    if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (i = e[t], l(i, 0, z, t), L = i), e.hasOwnProperty(t = "ROUNDING_MODE") && (i = e[t], l(i, 0, 8, t), N = i), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (i = e[t], i && i.pop ? (l(i[0], -z, 0, t), l(i[1], 0, z, t), R = i[0], q = i[1]) : (l(i, -z, z, t), R = -(q = i < 0 ? -i : i))), e.hasOwnProperty(t = "RANGE"))
                        if (i = e[t], i && i.pop) l(i[0], -z, -1, t), l(i[1], 1, z, t), x = i[0], B = i[1];
                        else {
                            if (l(i, -z, z, t), !i) throw Error(M + t + " cannot be zero: " + i);
                            x = -(B = i < 0 ? -i : i)
                        } if (e.hasOwnProperty(t = "CRYPTO")) {
                        if (i = e[t], i !== !!i) throw Error(M + t + " not true or false: " + i);
                        if (i) {
                            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw D = !i, Error(M + "crypto unavailable");
                            D = i
                        } else D = i
                    }
                    if (e.hasOwnProperty(t = "MODULO_MODE") && (i = e[t], l(i, 0, 9, t), W = i), e.hasOwnProperty(t = "POW_PRECISION") && (i = e[t], l(i, 0, z, t), P = i), e.hasOwnProperty(t = "FORMAT")) {
                        if (i = e[t], "object" != typeof i) throw Error(M + t + " not an object: " + i);
                        k = i
                    }
                    if (e.hasOwnProperty(t = "ALPHABET")) {
                        if (i = e[t], "string" != typeof i || /^.$|[+-.\s]|(.).*\1/.test(i)) throw Error(M + t + " invalid: " + i);
                        F = i
                    }
                }
                return {
                    DECIMAL_PLACES: L,
                    ROUNDING_MODE: N,
                    EXPONENTIAL_AT: [R, q],
                    RANGE: [x, B],
                    CRYPTO: D,
                    MODULO_MODE: W,
                    POW_PRECISION: P,
                    FORMAT: k,
                    ALPHABET: F
                }
            }, t.isBigNumber = function(e) {
                return e instanceof t || e && e._isBigNumber === !0 || !1
            }, t.maximum = t.max = function() {
                return n(arguments, S.lt)
            }, t.minimum = t.min = function() {
                return n(arguments, S.gt)
            }, t.random = function() {
                var e = 9007199254740992,
                    i = Math.random() * e & 2097151 ? function() {
                        return m(Math.random() * e)
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    };
                return function(e) {
                    var n, o, a, r, s, c = 0,
                        d = [],
                        u = new t(E);
                    if (null == e ? e = L : l(e, 0, z), r = b(e / A), D)
                        if (crypto.getRandomValues) {
                            for (n = crypto.getRandomValues(new Uint32Array(r *= 2)); c < r;) s = 131072 * n[c] + (n[c + 1] >>> 11), s >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[c] = o[0], n[c + 1] = o[1]) : (d.push(s % 1e14), c += 2);
                            c = r / 2
                        } else {
                            if (!crypto.randomBytes) throw D = !1, Error(M + "crypto unavailable");
                            for (n = crypto.randomBytes(r *= 7); c < r;) s = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6], s >= 9e15 ? crypto.randomBytes(7)
                                .copy(n, c) : (d.push(s % 1e14), c += 7);
                            c = r / 7
                        } if (!D)
                        for (; c < r;) s = i(), s < 9e15 && (d[c++] = s % 1e14);
                    for (r = d[--c], e %= A, r && e && (s = v[A - e], d[c] = m(r / s) * s); 0 === d[c]; d.pop(), c--);
                    if (c < 0) d = [a = 0];
                    else {
                        for (a = -1; 0 === d[0]; d.splice(0, 1), a -= A);
                        for (c = 1, s = d[0]; s >= 10; s /= 10, c++);
                        c < A && (a -= A - c)
                    }
                    return u.e = a, u.c = d, u
                }
            }(), t.sum = function() {
                for (var e = 1, i = arguments, n = new t(i[0]); e < i.length;) n = n.plus(i[e++]);
                return n
            }, C = function() {
                function e(e, t, i, n) {
                    for (var o, a, r = [0], s = 0, c = e.length; s < c;) {
                        for (a = r.length; a--; r[a] *= t);
                        for (r[0] += n.indexOf(e.charAt(s++)), o = 0; o < r.length; o++) r[o] > i - 1 && (null == r[o + 1] && (r[o + 1] = 0), r[o + 1] += r[o] / i | 0, r[o] %= i)
                    }
                    return r.reverse()
                }
                var i = "0123456789";
                return function(n, o, a, r, c) {
                    var l, d, u, h, f, b, m, M, g = n.indexOf("."),
                        _ = L,
                        A = N;
                    for (g >= 0 && (h = P, P = 0, n = n.replace(".", ""), M = new t(o), b = M.pow(n.length - g), P = h, M.c = e(p(s(b.c), b.e, "0"), 10, a, i), M.e = M.c.length), m = e(n, o, a, c ? (l = F, i) : (l = i, F)), u = h = m.length; 0 == m[--h]; m.pop());
                    if (!m[0]) return l.charAt(0);
                    if (g < 0 ? --u : (b.c = m, b.e = u, b.s = r, b = T(b, M, _, A, a), m = b.c, f = b.r, u = b.e), d = u + _ + 1, g = m[d], h = a / 2, f = f || d < 0 || null != m[d + 1], f = A < 4 ? (null != g || f) && (0 == A || A == (b.s < 0 ? 3 : 2)) : g > h || g == h && (4 == A || f || 6 == A && 1 & m[d - 1] || A == (b.s < 0 ? 8 : 7)), d < 1 || !m[0]) n = f ? p(l.charAt(1), -_, l.charAt(0)) : l.charAt(0);
                    else {
                        if (m.length = d, f)
                            for (--a; ++m[--d] > a;) m[d] = 0, d || (++u, m = [1].concat(m));
                        for (h = m.length; !m[--h];);
                        for (g = 0, n = ""; g <= h; n += l.charAt(m[g++]));
                        n = p(n, u, l.charAt(0))
                    }
                    return n
                }
            }(), T = function() {
                function e(e, t, i) {
                    var n, o, a, r, s = 0,
                        c = e.length,
                        l = t % y,
                        d = t / y | 0;
                    for (e = e.slice(); c--;) a = e[c] % y, r = e[c] / y | 0, n = d * a + r * l, o = l * a + n % y * y + s, s = (o / i | 0) + (n / y | 0) + d * r, e[c] = o % i;
                    return s && (e = [s].concat(e)), e
                }

                function i(e, t, i, n) {
                    var o, a;
                    if (i != n) a = i > n ? 1 : -1;
                    else
                        for (o = a = 0; o < i; o++)
                            if (e[o] != t[o]) {
                                a = e[o] > t[o] ? 1 : -1;
                                break
                            } return a
                }

                function n(e, t, i, n) {
                    for (var o = 0; i--;) e[i] -= o, o = e[i] < t[i] ? 1 : 0, e[i] = o * n + e[i] - t[i];
                    for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function(o, a, s, c, l) {
                    var d, u, p, f, b, M, g, O, v, y, z, w, T, C, I, S, E, L = o.s == a.s ? 1 : -1,
                        N = o.c,
                        R = a.c;
                    if (!(N && N[0] && R && R[0])) return new t(o.s && a.s && (N ? !R || N[0] != R[0] : R) ? N && 0 == N[0] || !R ? 0 * L : L / 0 : NaN);
                    for (O = new t(L), v = O.c = [], u = o.e - a.e, L = s + u + 1, l || (l = _, u = r(o.e / A) - r(a.e / A), L = L / A | 0), p = 0; R[p] == (N[p] || 0); p++);
                    if (R[p] > (N[p] || 0) && u--, L < 0) v.push(1), f = !0;
                    else {
                        for (C = N.length, S = R.length, p = 0, L += 2, b = m(l / (R[0] + 1)), b > 1 && (R = e(R, b, l), N = e(N, b, l), S = R.length, C = N.length), T = S, y = N.slice(0, S), z = y.length; z < S; y[z++] = 0);
                        E = R.slice(), E = [0].concat(E), I = R[0], R[1] >= l / 2 && I++;
                        do {
                            if (b = 0, d = i(R, y, S, z), d < 0) {
                                if (w = y[0], S != z && (w = w * l + (y[1] || 0)), b = m(w / I), b > 1)
                                    for (b >= l && (b = l - 1), M = e(R, b, l), g = M.length, z = y.length; 1 == i(M, y, g, z);) b--, n(M, S < g ? E : R, g, l), g = M.length, d = 1;
                                else 0 == b && (d = b = 1), M = R.slice(), g = M.length;
                                if (g < z && (M = [0].concat(M)), n(y, M, z, l), z = y.length, d == -1)
                                    for (; i(R, y, S, z) < 1;) b++, n(y, S < z ? E : R, z, l), z = y.length
                            } else 0 === d && (b++, y = [0]);
                            v[p++] = b, y[0] ? y[z++] = N[T] || 0 : (y = [N[T]], z = 1)
                        } while ((T++ < C || null != y[0]) && L--);
                        f = null != y[0], v[0] || v.splice(0, 1)
                    }
                    if (l == _) {
                        for (p = 1, L = v[0]; L >= 10; L /= 10, p++);
                        h(O, s + (O.e = p + u * A - 1) + 1, c, f)
                    } else O.e = u, O.r = +f;
                    return O
                }
            }(), I = function() {
                var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                    i = /^([^.]+)\.$/,
                    n = /^\.([^.]+)$/,
                    o = /^-?(Infinity|NaN)$/,
                    a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function(r, s, c, l) {
                    var d, u = c ? s : s.replace(a, "");
                    if (o.test(u)) r.s = isNaN(u) ? null : u < 0 ? -1 : 1, r.c = r.e = null;
                    else {
                        if (!c && (u = u.replace(e, function(e, t, i) {
                                return d = "x" == (i = i.toLowerCase()) ? 16 : "b" == i ? 2 : 8, l && l != d ? e : t
                            }), l && (d = l, u = u.replace(i, "$1")
                                .replace(n, "0.$1")), s != u)) return new t(u, d);
                        if (t.DEBUG) throw Error(M + "Not a" + (l ? " base " + l : "") + " number: " + s);
                        r.c = r.e = r.s = null
                    }
                }
            }(), S.absoluteValue = S.abs = function() {
                var e = new t(this);
                return e.s < 0 && (e.s = 1), e
            }, S.comparedTo = function(e, i) {
                return c(this, new t(e, i))
            }, S.decimalPlaces = S.dp = function(e, i) {
                var n, o, a, s = this;
                if (null != e) return l(e, 0, z), null == i ? i = N : l(i, 0, 8), h(new t(s), e + s.e + 1, i);
                if (!(n = s.c)) return null;
                if (o = ((a = n.length - 1) - r(this.e / A)) * A, a = n[a])
                    for (; a % 10 == 0; a /= 10, o--);
                return o < 0 && (o = 0), o
            }, S.dividedBy = S.div = function(e, i) {
                return T(this, new t(e, i), L, N)
            }, S.dividedToIntegerBy = S.idiv = function(e, i) {
                return T(this, new t(e, i), 0, 1)
            }, S.exponentiatedBy = S.pow = function(e, i) {
                var n, o, a, r, s, c, l, u, p, f = this;
                if (e = new t(e), e.c && !e.isInteger()) throw Error(M + "Exponent not an integer: " + w(e));
                if (null != i && (i = new t(i)), c = e.e > 14, !f.c || !f.c[0] || 1 == f.c[0] && !f.e && 1 == f.c.length || !e.c || !e.c[0]) return p = new t(Math.pow(+w(f), c ? 2 - d(e) : +w(e))), i ? p.mod(i) : p;
                if (l = e.s < 0, i) {
                    if (i.c ? !i.c[0] : !i.s) return new t(NaN);
                    o = !l && f.isInteger() && i.isInteger(), o && (f = f.mod(i))
                } else {
                    if (e.e > 9 && (f.e > 0 || f.e < -1 || (0 == f.e ? f.c[0] > 1 || c && f.c[1] >= 24e7 : f.c[0] < 8e13 || c && f.c[0] <= 9999975e7))) return r = f.s < 0 && d(e) ? -0 : 0, f.e > -1 && (r = 1 / r), new t(l ? 1 / r : r);
                    P && (r = b(P / A + 2))
                }
                for (c ? (n = new t(.5), l && (e.s = 1), u = d(e)) : (a = Math.abs(+w(e)), u = a % 2), p = new t(E);;) {
                    if (u) {
                        if (p = p.times(f), !p.c) break;
                        r ? p.c.length > r && (p.c.length = r) : o && (p = p.mod(i))
                    }
                    if (a) {
                        if (a = m(a / 2), 0 === a) break;
                        u = a % 2
                    } else if (e = e.times(n), h(e, e.e + 1, 1), e.e > 14) u = d(e);
                    else {
                        if (a = +w(e), 0 === a) break;
                        u = a % 2
                    }
                    f = f.times(f), r ? f.c && f.c.length > r && (f.c.length = r) : o && (f = f.mod(i))
                }
                return o ? p : (l && (p = E.div(p)), i ? p.mod(i) : r ? h(p, P, N, s) : p)
            }, S.integerValue = function(e) {
                var i = new t(this);
                return null == e ? e = N : l(e, 0, 8), h(i, i.e + 1, e)
            }, S.isEqualTo = S.eq = function(e, i) {
                return 0 === c(this, new t(e, i))
            }, S.isFinite = function() {
                return !!this.c
            }, S.isGreaterThan = S.gt = function(e, i) {
                return c(this, new t(e, i)) > 0
            }, S.isGreaterThanOrEqualTo = S.gte = function(e, i) {
                return 1 === (i = c(this, new t(e, i))) || 0 === i
            }, S.isInteger = function() {
                return !!this.c && r(this.e / A) > this.c.length - 2
            }, S.isLessThan = S.lt = function(e, i) {
                return c(this, new t(e, i)) < 0
            }, S.isLessThanOrEqualTo = S.lte = function(e, i) {
                return (i = c(this, new t(e, i))) === -1 || 0 === i
            }, S.isNaN = function() {
                return !this.s
            }, S.isNegative = function() {
                return this.s < 0
            }, S.isPositive = function() {
                return this.s > 0
            }, S.isZero = function() {
                return !!this.c && 0 == this.c[0]
            }, S.minus = function(e, i) {
                var n, a, s, c, l = this,
                    d = l.s;
                if (e = new t(e, i), i = e.s, !d || !i) return new t(NaN);
                if (d != i) return e.s = -i, l.plus(e);
                var u = l.e / A,
                    p = e.e / A,
                    h = l.c,
                    f = e.c;
                if (!u || !p) {
                    if (!h || !f) return h ? (e.s = -i, e) : new t(f ? l : NaN);
                    if (!h[0] || !f[0]) return f[0] ? (e.s = -i, e) : new t(h[0] ? l : 3 == N ? -0 : 0)
                }
                if (u = r(u), p = r(p), h = h.slice(), d = u - p) {
                    for ((c = d < 0) ? (d = -d, s = h) : (p = u, s = f), s.reverse(), i = d; i--; s.push(0));
                    s.reverse()
                } else
                    for (a = (c = (d = h.length) < (i = f.length)) ? d : i, d = i = 0; i < a; i++)
                        if (h[i] != f[i]) {
                            c = h[i] < f[i];
                            break
                        } if (c && (s = h, h = f, f = s, e.s = -e.s), i = (a = f.length) - (n = h.length), i > 0)
                    for (; i--; h[n++] = 0);
                for (i = _ - 1; a > d;) {
                    if (h[--a] < f[a]) {
                        for (n = a; n && !h[--n]; h[n] = i);
                        --h[n], h[a] += _
                    }
                    h[a] -= f[a]
                }
                for (; 0 == h[0]; h.splice(0, 1), --p);
                return h[0] ? o(e, h, p) : (e.s = 3 == N ? -1 : 1, e.c = [e.e = 0], e)
            }, S.modulo = S.mod = function(e, i) {
                var n, o, a = this;
                return e = new t(e, i), !a.c || !e.s || e.c && !e.c[0] ? new t(NaN) : !e.c || a.c && !a.c[0] ? new t(a) : (9 == W ? (o = e.s, e.s = 1, n = T(a, e, 0, 3), e.s = o, n.s *= o) : n = T(a, e, 0, W), e = a.minus(n.times(e)), e.c[0] || 1 != W || (e.s = a.s), e)
            }, S.multipliedBy = S.times = function(e, i) {
                var n, a, s, c, l, d, u, p, h, f, b, m, M, g, O, v = this,
                    z = v.c,
                    w = (e = new t(e, i))
                    .c;
                if (!(z && w && z[0] && w[0])) return !v.s || !e.s || z && !z[0] && !w || w && !w[0] && !z ? e.c = e.e = e.s = null : (e.s *= v.s, z && w ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                for (a = r(v.e / A) + r(e.e / A), e.s *= v.s, u = z.length, f = w.length, u < f && (M = z, z = w, w = M, s = u, u = f, f = s), s = u + f, M = []; s--; M.push(0));
                for (g = _, O = y, s = f; --s >= 0;) {
                    for (n = 0, b = w[s] % O, m = w[s] / O | 0, l = u, c = s + l; c > s;) p = z[--l] % O, h = z[l] / O | 0, d = m * p + h * b, p = b * p + d % O * O + M[c] + n, n = (p / g | 0) + (d / O | 0) + m * h, M[c--] = p % g;
                    M[c] = n
                }
                return n ? ++a : M.splice(0, 1), o(e, M, a)
            }, S.negated = function() {
                var e = new t(this);
                return e.s = -e.s || null, e
            }, S.plus = function(e, i) {
                var n, a = this,
                    s = a.s;
                if (e = new t(e, i), i = e.s, !s || !i) return new t(NaN);
                if (s != i) return e.s = -i, a.minus(e);
                var c = a.e / A,
                    l = e.e / A,
                    d = a.c,
                    u = e.c;
                if (!c || !l) {
                    if (!d || !u) return new t(s / 0);
                    if (!d[0] || !u[0]) return u[0] ? e : new t(d[0] ? a : 0 * s)
                }
                if (c = r(c), l = r(l), d = d.slice(), s = c - l) {
                    for (s > 0 ? (l = c, n = u) : (s = -s, n = d), n.reverse(); s--; n.push(0));
                    n.reverse()
                }
                for (s = d.length, i = u.length, s - i < 0 && (n = u, u = d, d = n, i = s), s = 0; i;) s = (d[--i] = d[i] + u[i] + s) / _ | 0, d[i] = _ === d[i] ? 0 : d[i] % _;
                return s && (d = [s].concat(d), ++l), o(e, d, l)
            }, S.precision = S.sd = function(e, i) {
                var n, o, a, r = this;
                if (null != e && e !== !!e) return l(e, 1, z), null == i ? i = N : l(i, 0, 8), h(new t(r), e, i);
                if (!(n = r.c)) return null;
                if (a = n.length - 1, o = a * A + 1, a = n[a]) {
                    for (; a % 10 == 0; a /= 10, o--);
                    for (a = n[0]; a >= 10; a /= 10, o++);
                }
                return e && r.e + 1 > o && (o = r.e + 1), o
            }, S.shiftedBy = function(e) {
                return l(e, -O, O), this.times("1e" + e)
            }, S.squareRoot = S.sqrt = function() {
                var e, i, n, o, a, c = this,
                    l = c.c,
                    d = c.s,
                    u = c.e,
                    p = L + 4,
                    f = new t("0.5");
                if (1 !== d || !l || !l[0]) return new t(!d || d < 0 && (!l || l[0]) ? NaN : l ? c : 1 / 0);
                if (d = Math.sqrt(+w(c)), 0 == d || d == 1 / 0 ? (i = s(l), (i.length + u) % 2 == 0 && (i += "0"), d = Math.sqrt(+i), u = r((u + 1) / 2) - (u < 0 || u % 2), d == 1 / 0 ? i = "1e" + u : (i = d.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + u), n = new t(i)) : n = new t(d + ""), n.c[0])
                    for (u = n.e, d = u + p, d < 3 && (d = 0);;)
                        if (a = n, n = f.times(a.plus(T(c, a, p, 1))), s(a.c)
                            .slice(0, d) === (i = s(n.c))
                            .slice(0, d)) {
                            if (n.e < u && --d, i = i.slice(d - 3, d + 1), "9999" != i && (o || "4999" != i)) {
                                +i && (+i.slice(1) || "5" != i.charAt(0)) || (h(n, n.e + L + 2, 1), e = !n.times(n)
                                    .eq(c));
                                break
                            }
                            if (!o && (h(a, a.e + L + 2, 0), a.times(a)
                                    .eq(c))) {
                                n = a;
                                break
                            }
                            p += 4, d += 4, o = 1
                        } return h(n, n.e + L + 1, N, e)
            }, S.toExponential = function(e, t) {
                return null != e && (l(e, 0, z), e++), i(this, e, t, 1)
            }, S.toFixed = function(e, t) {
                return null != e && (l(e, 0, z), e = e + this.e + 1), i(this, e, t)
            }, S.toFormat = function(e, t, i) {
                var n, o = this;
                if (null == i) null != e && t && "object" == typeof t ? (i = t, t = null) : e && "object" == typeof e ? (i = e, e = t = null) : i = k;
                else if ("object" != typeof i) throw Error(M + "Argument not an object: " + i);
                if (n = o.toFixed(e, t), o.c) {
                    var a, r = n.split("."),
                        s = +i.groupSize,
                        c = +i.secondaryGroupSize,
                        l = i.groupSeparator || "",
                        d = r[0],
                        u = r[1],
                        p = o.s < 0,
                        h = p ? d.slice(1) : d,
                        f = h.length;
                    if (c && (a = s, s = c, c = a, f -= a), s > 0 && f > 0) {
                        for (a = f % s || s, d = h.substr(0, a); a < f; a += s) d += l + h.substr(a, s);
                        c > 0 && (d += l + h.slice(a)), p && (d = "-" + d)
                    }
                    n = u ? d + (i.decimalSeparator || "") + ((c = +i.fractionGroupSize) ? u.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (i.fractionGroupSeparator || "")) : u) : d
                }
                return (i.prefix || "") + n + (i.suffix || "")
            }, S.toFraction = function(e) {
                var i, n, o, a, r, c, l, d, u, p, h, f, b = this,
                    m = b.c;
                if (null != e && (l = new t(e), !l.isInteger() && (l.c || 1 !== l.s) || l.lt(E))) throw Error(M + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + w(l));
                if (!m) return new t(b);
                for (i = new t(E), u = n = new t(E), o = d = new t(E), f = s(m), r = i.e = f.length - b.e - 1, i.c[0] = v[(c = r % A) < 0 ? A + c : c], e = !e || l.comparedTo(i) > 0 ? r > 0 ? i : u : l, c = B, B = 1 / 0, l = new t(f), d.c[0] = 0; p = T(l, i, 0, 1), a = n.plus(p.times(o)), 1 != a.comparedTo(e);) n = o, o = a, u = d.plus(p.times(a = u)), d = a, i = l.minus(p.times(a = i)), l = a;
                return a = T(e.minus(n), o, 0, 1), d = d.plus(a.times(u)), n = n.plus(a.times(o)), d.s = u.s = b.s, r = 2 * r, h = T(u, o, r, N)
                    .minus(b)
                    .abs()
                    .comparedTo(T(d, n, r, N)
                        .minus(b)
                        .abs()) < 1 ? [u, o] : [d, n], B = c, h
            }, S.toNumber = function() {
                return +w(this)
            }, S.toPrecision = function(e, t) {
                return null != e && l(e, 1, z), i(this, e, t, 2)
            }, S.toString = function(e) {
                var t, i = this,
                    n = i.s,
                    o = i.e;
                return null === o ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (t = s(i.c), null == e ? t = o <= R || o >= q ? u(t, o) : p(t, o, "0") : (l(e, 2, F.length, "Base"), t = C(p(t, o, "0"), 10, e, n, !0)), n < 0 && i.c[0] && (t = "-" + t)), t
            }, S.valueOf = S.toJSON = function() {
                return w(this)
            }, S._isBigNumber = !0, "function" == typeof Symbol && "symbol" == typeof Symbol.iterator && (S[Symbol.toStringTag] = "BigNumber", S[Symbol["for"]("nodejs.util.inspect.custom")] = S.valueOf), null != e && t.set(e), t
        }

        function r(e) {
            var t = 0 | e;
            return e > 0 || e === t ? t : t - 1
        }

        function s(e) {
            for (var t, i, n = 1, o = e.length, a = e[0] + ""; n < o;) {
                for (t = e[n++] + "", i = A - t.length; i--; t = "0" + t);
                a += t
            }
            for (o = a.length; 48 === a.charCodeAt(--o););
            return a.slice(0, o + 1 || 1)
        }

        function c(e, t) {
            var i, n, o = e.c,
                a = t.c,
                r = e.s,
                s = t.s,
                c = e.e,
                l = t.e;
            if (!r || !s) return null;
            if (i = o && !o[0], n = a && !a[0], i || n) return i ? n ? 0 : -s : r;
            if (r != s) return r;
            if (i = r < 0, n = c == l, !o || !a) return n ? 0 : !o ^ i ? 1 : -1;
            if (!n) return c > l ^ i ? 1 : -1;
            for (s = (c = o.length) < (l = a.length) ? c : l, r = 0; r < s; r++)
                if (o[r] != a[r]) return o[r] > a[r] ^ i ? 1 : -1;
            return c == l ? 0 : c > l ^ i ? 1 : -1
        }

        function l(e, t, i, n) {
            if (e < t || e > i || e !== (e < 0 ? b(e) : m(e))) throw Error(M + (n || "Argument") + ("number" == typeof e ? e < t || e > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
        }

        function d(e) {
            var t = e.c.length - 1;
            return r(e.e / A) == t && e.c[t] % 2 != 0
        }

        function u(e, t) {
            return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
        }

        function p(e, t, i) {
            var n, o;
            if (t < 0) {
                for (o = i + "."; ++t; o += i);
                e = o + e
            } else if (n = e.length, ++t > n) {
                for (o = i, t -= n; --t; o += i);
                e += o
            } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
            return e
        }
        var h, f = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            b = Math.ceil,
            m = Math.floor,
            M = "[BigNumber Error] ",
            g = M + "Number primitive has more than 15 significant digits: ",
            _ = 1e14,
            A = 14,
            O = 9007199254740991,
            v = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            y = 1e7,
            z = 1e9;
        h = a(), h["default"] = h.BigNumber = h, n = function() {
            return h
        }.call(t, i, t, e), !(void 0 !== n && (e.exports = n))
    }(this)
}
