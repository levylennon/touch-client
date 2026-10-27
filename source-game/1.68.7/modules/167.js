function(e, t, i) {
    var n;
    (function(e, o) {
        ! function(a) {
            function r(e) {
                throw RangeError(N[e])
            }

            function s(e, t) {
                for (var i = e.length, n = []; i--;) n[i] = t(e[i]);
                return n
            }

            function c(e, t) {
                var i = e.split("@"),
                    n = "";
                i.length > 1 && (n = i[0] + "@", e = i[1]), e = e.replace(L, ".");
                var o = e.split("."),
                    a = s(o, t)
                    .join(".");
                return n + a
            }

            function l(e) {
                for (var t, i, n = [], o = 0, a = e.length; o < a;) t = e.charCodeAt(o++), t >= 55296 && t <= 56319 && o < a ? (i = e.charCodeAt(o++), 56320 == (64512 & i) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), o--)) : n.push(t);
                return n
            }

            function d(e) {
                return s(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += x(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += x(e)
                    })
                    .join("")
            }

            function u(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : O
            }

            function p(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function h(e, t, i) {
                var n = 0;
                for (e = i ? q(e / w) : e >> 1, e += q(e / t); e > R * y >> 1; n += O) e = q(e / R);
                return q(n + (R + 1) * e / (e + z))
            }

            function f(e) {
                var t, i, n, o, a, s, c, l, p, f, b = [],
                    m = e.length,
                    M = 0,
                    g = C,
                    _ = T;
                for (i = e.lastIndexOf(I), i < 0 && (i = 0), n = 0; n < i; ++n) e.charCodeAt(n) >= 128 && r("not-basic"), b.push(e.charCodeAt(n));
                for (o = i > 0 ? i + 1 : 0; o < m;) {
                    for (a = M, s = 1, c = O; o >= m && r("invalid-input"), l = u(e.charCodeAt(o++)), (l >= O || l > q((A - M) / s)) && r("overflow"), M += l * s, p = c <= _ ? v : c >= _ + y ? y : c - _, !(l < p); c += O) f = O - p, s > q(A / f) && r("overflow"), s *= f;
                    t = b.length + 1, _ = h(M - a, t, 0 == a), q(M / t) > A - g && r("overflow"), g += q(M / t), M %= t, b.splice(M++, 0, g)
                }
                return d(b)
            }

            function b(e) {
                var t, i, n, o, a, s, c, d, u, f, b, m, M, g, _, z = [];
                for (e = l(e), m = e.length, t = C, i = 0, a = T, s = 0; s < m; ++s) b = e[s], b < 128 && z.push(x(b));
                for (n = o = z.length, o && z.push(I); n < m;) {
                    for (c = A, s = 0; s < m; ++s) b = e[s], b >= t && b < c && (c = b);
                    for (M = n + 1, c - t > q((A - i) / M) && r("overflow"), i += (c - t) * M, t = c, s = 0; s < m; ++s)
                        if (b = e[s], b < t && ++i > A && r("overflow"), b == t) {
                            for (d = i, u = O; f = u <= a ? v : u >= a + y ? y : u - a, !(d < f); u += O) _ = d - f, g = O - f, z.push(x(p(f + _ % g, 0))), d = q(_ / g);
                            z.push(x(p(d, 0))), a = h(i, M, n == o), i = 0, ++n
                        }++ i, ++t
                }
                return z.join("")
            }

            function m(e) {
                return c(e, function(e) {
                    return S.test(e) ? f(e.slice(4)
                        .toLowerCase()) : e
                })
            }

            function M(e) {
                return c(e, function(e) {
                    return E.test(e) ? "xn--" + b(e) : e
                })
            }
            var g = ("object" == typeof t && t && !t.nodeType && t, "object" == typeof e && e && !e.nodeType && e, "object" == typeof o && o);
            g.global !== g && g.window !== g && g.self !== g || (a = g);
            var _, A = 2147483647,
                O = 36,
                v = 1,
                y = 26,
                z = 38,
                w = 700,
                T = 72,
                C = 128,
                I = "-",
                S = /^xn--/,
                E = /[^\x20-\x7E]/,
                L = /[\x2E\u3002\uFF0E\uFF61]/g,
                N = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                R = O - v,
                q = Math.floor,
                x = String.fromCharCode;
            _ = {
                version: "1.3.2",
                ucs2: {
                    decode: l,
                    encode: d
                },
                decode: f,
                encode: b,
                toASCII: M,
                toUnicode: m
            }, n = function() {
                return _
            }.call(t, i, t, e), !(void 0 !== n && (e.exports = n))
        }(this)
    })
    .call(t, i(20)(e), function() {
        return this
    }())
}
