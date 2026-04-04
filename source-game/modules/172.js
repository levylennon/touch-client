function(e, t, i) {
    var n, o, a; //! moment-timezone.js
    //! version : 0.5.45
    //! Copyright (c) JS Foundation and other contributors
    //! license : MIT
    //! github.com/moment/moment-timezone
    ! function(r, s) {
        "use strict";
        "object" == typeof e && e.exports ? e.exports = s(i(173)) : (o = [i(173)], n = s, a = "function" == typeof n ? n.apply(t, o) : n, !(void 0 !== a && (e.exports = a)))
    }(this, function(e) {
        "use strict";

        function t(e) {
            return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
        }

        function i(e) {
            var i, n = 0,
                o = e.split("."),
                a = o[0],
                r = o[1] || "",
                s = 1,
                c = 0,
                l = 1;
            for (45 === e.charCodeAt(0) && (n = 1, l = -1), n; n < a.length; n++) i = t(a.charCodeAt(n)), c = 60 * c + i;
            for (n = 0; n < r.length; n++) s /= 60, i = t(r.charCodeAt(n)), c += i * s;
            return c * l
        }

        function n(e) {
            for (var t = 0; t < e.length; t++) e[t] = i(e[t])
        }

        function o(e, t) {
            for (var i = 0; i < t; i++) e[i] = Math.round((e[i - 1] || 0) + 6e4 * e[i]);
            e[t - 1] = 1 / 0
        }

        function a(e, t) {
            var i, n = [];
            for (i = 0; i < t.length; i++) n[i] = e[t[i]];
            return n
        }

        function r(e) {
            var t = e.split("|"),
                i = t[2].split(" "),
                r = t[3].split(""),
                s = t[4].split(" ");
            return n(i), n(r), n(s), o(s, r.length), {
                name: t[0],
                abbrs: a(t[1].split(" "), r),
                offsets: a(i, r),
                untils: s,
                population: 0 | t[5]
            }
        }

        function s(e) {
            e && this._set(r(e))
        }

        function c(e, t) {
            var i = t.length;
            if (e < t[0]) return 0;
            if (i > 1 && t[i - 1] === 1 / 0 && e >= t[i - 2]) return i - 1;
            if (e >= t[i - 1]) return -1;
            for (var n, o = 0, a = i - 1; a - o > 1;) n = Math.floor((o + a) / 2), t[n] <= e ? o = n : a = n;
            return a
        }

        function l(e, t) {
            this.name = e, this.zones = t
        }

        function d(e) {
            var t = e.toTimeString(),
                i = t.match(/\([a-z ]+\)/i);
            i && i[0] ? (i = i[0].match(/[A-Z]/g), i = i ? i.join("") : void 0) : (i = t.match(/[A-Z]{3,5}/g), i = i ? i[0] : void 0), "GMT" === i && (i = void 0), this.at = +e, this.abbr = i, this.offset = e.getTimezoneOffset()
        }

        function u(e) {
            this.zone = e,
            this.offsetScore = 0,
            this.abbrScore = 0
        }

        function p(e, t) {
            for (var i, n; n = 6e4 * ((t.at - e.at) / 12e4 | 0);) i = new d(new Date(e.at + n)), i.offset === e.offset ? e = i : t = i;
            return e
        }

        function h() {
            var e, t, i, n, o = (new Date)
                .getFullYear() - 2,
                a = new d(new Date(o, 0, 1)),
                r = a.offset,
                s = [a];
            for (n = 1; n < 48; n++) i = new Date(o, n, 1)
                .getTimezoneOffset(), i !== r && (t = new d(new Date(o, n, 1)), e = p(a, t), s.push(e), s.push(new d(new Date(e.at + 6e4))), a = t, r = i);
            for (n = 0; n < 4; n++) s.push(new d(new Date(o + n, 0, 1))), s.push(new d(new Date(o + n, 6, 1)));
            return s
        }

        function f(e, t) {
            return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name)
        }

        function b(e, t) {
            var i, o;
            for (n(t), i = 0; i < t.length; i++) o = t[i], H[o] = H[o] || {}, H[o][e] = !0
        }

        function m(e) {
            var t, i, n, o, a = e.length,
                r = {},
                s = [],
                c = {};
            for (t = 0; t < a; t++)
                if (n = e[t].offset, !c.hasOwnProperty(n)) {
                    o = H[n] || {};
                    for (i in o) o.hasOwnProperty(i) && (r[i] = !0);
                    c[n] = !0
                } for (t in r) r.hasOwnProperty(t) && s.push(F[t]);
            return s
        }

        function M() {
            try {
                var e = Intl.DateTimeFormat()
                    .resolvedOptions()
                    .timeZone;
                if (e && e.length > 3) {
                    var t = F[_(e)];
                    if (t) return t;
                    L("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                }
            } catch (i) {}
            var n, o, a, r = h(),
                s = r.length,
                c = m(r),
                l = [];
            for (o = 0; o < c.length; o++) {
                for (n = new u(O(c[o]), s), a = 0; a < s; a++) n.scoreOffsetAt(r[a]);
                l.push(n)
            }
            return l.sort(f), l.length > 0 ? l[0].zone.name : void 0
        }

        function g(e) {
            return B && !e || (B = M()), B
        }

        function _(e) {
            return (e || "")
                .toLowerCase()
                .replace(/\//g, "_")
        }

        function A(e) {
            var t, i, n, o;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = e[t].split("|"), i = n[0], o = _(i), W[o] = e[t], F[o] = i, b(o, n[2].split(" "))
        }

        function O(e, t) {
            e = _(e);
            var i, n = W[e];
            return n instanceof s ? n : "string" == typeof n ? (n = new s(n), W[e] = n, n) : P[e] && t !== O && (i = O(P[e], O)) ? (n = W[e] = new s, n._set(i), n.name = F[e], n) : null
        }

        function v() {
            var e, t = [];
            for (e in F) F.hasOwnProperty(e) && (W[e] || W[P[e]]) && F[e] && t.push(F[e]);
            return t.sort()
        }

        function y() {
            return Object.keys(k)
        }

        function z(e) {
            var t, i, n, o;
            for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) i = e[t].split("|"), n = _(i[0]), o = _(i[1]), P[n] = o, F[n] = i[0], P[o] = n, F[o] = i[1]
        }

        function w(e) {
            var t, i, n, o;
            if (e && e.length)
                for (t = 0; t < e.length; t++) o = e[t].split("|"), i = o[0].toUpperCase(), n = o[1].split(" "), k[i] = new l(i, n)
        }

        function T(e) {
            return e = e.toUpperCase(), k[e] || null
        }

        function C(e, t) {
            if (e = T(e), !e) return null;
            var i = e.zones.sort();
            return t ? i.map(function(e) {
                var t = O(e);
                return {
                    name: e,
                    offset: t.utcOffset(new Date)
                }
            }) : i
        }

        function I(e) {
            A(e.zones), z(e.links), w(e.countries), N.dataVersion = e.version
        }

        function S(e) {
            return S.didShowError || (S.didShowError = !0, L("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!O(e)
        }

        function E(e) {
            var t = "X" === e._f || "x" === e._f;
            return !(!e._a || void 0 !== e._tzm || t)
        }

        function L(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e)
        }

        function N(t) {
            var i, n = Array.prototype.slice.call(arguments, 0, -1),
                o = arguments[arguments.length - 1],
                a = e.utc.apply(null, n);
            return !e.isMoment(t) && E(a) && (i = O(o)) && a.add(i.parse(a), "minutes"), a.tz(o), a
        }

        function R(e) {
            return function() {
                return this._z ? this._z.abbr(this) : e.call(this)
            }
        }

        function q(e) {
            return function() {
                return this._z = null, e.apply(this, arguments)
            }
        }

        function x(e) {
            return function() {
                return arguments.length > 0 && (this._z = null), e.apply(this, arguments)
            }
        }
        void 0 === e.version && e["default"] && (e = e["default"]);
        var B, D = "0.5.45",
            W = {},
            P = {},
            k = {},
            F = {},
            H = {};
        e && "string" == typeof e.version || L("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
        var U = e.version.split("."),
            G = +U[0],
            j = +U[1];
        (G < 2 || 2 === G && j < 6) && L("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), s.prototype = {
            _set: function(e) {
                this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
            },
            _index: function(e) {
                var t, i = +e,
                    n = this.untils;
                if (t = c(i, n), t >= 0) return t
            },
            countries: function() {
                var e = this.name;
                return Object.keys(k)
                    .filter(function(t) {
                        return k[t].zones.indexOf(e) !== -1
                    })
            },
            parse: function(e) {
                var t, i, n, o, a = +e,
                    r = this.offsets,
                    s = this.untils,
                    c = s.length - 1;
                for (o = 0; o < c; o++)
                    if (t = r[o], i = r[o + 1], n = r[o ? o - 1 : o], t < i && N.moveAmbiguousForward ? t = i : t > n && N.moveInvalidForward && (t = n), a < s[o] - 6e4 * t) return r[o];
                return r[c]
            },
            abbr: function(e) {
                return this.abbrs[this._index(e)]
            },
            offset: function(e) {
                return L("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
            },
            utcOffset: function(e) {
                return this.offsets[this._index(e)]
            }
        }, u.prototype.scoreOffsetAt = function(e) {
            this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at)
                .replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
        },
        N.version = D,
        N.dataVersion = "",
        N._zones = W,
        N._links = P,
        N._names = F,
        N._countries = k,
        N.add = A,
        N.link = z,
        N.load = I,
        N.zone = O,
        N.zoneExists = S,
        N.guess = g,
        N.names = v,
        N.Zone = s,
        N.unpack = r,
        N.unpackBase60 = i,
        N.needsOffset = E,
        N.moveInvalidForward = !0,
        N.moveAmbiguousForward = !1,
        N.countries = y,
        N.zonesForCountry = C;
        var Y = e.fn;
        e.tz = N, e.defaultZone = null, e.updateOffset = function(t, i) {
            var n, o = e.defaultZone;
            if (void 0 === t._z && (o && E(t) && !t._isUTC && t.isValid() && (t._d = e.utc(t._a)
                    ._d, t.utc()
                    .add(o.parse(t), "minutes")), t._z = o), t._z)
                if (n = t._z.utcOffset(t), Math.abs(n) < 16 && (n /= 60), void 0 !== t.utcOffset) {
                    var a = t._z;
                    t.utcOffset(-n, i), t._z = a
                } else t.zone(n, i)
        }, Y.tz = function(t, i) {
            if (t) {
                if ("string" != typeof t) throw new Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
                return this._z = O(t), this._z ? e.updateOffset(this, i) : L("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
            }
            if (this._z) return this._z.name
        }, Y.zoneName = R(Y.zoneName), Y.zoneAbbr = R(Y.zoneAbbr), Y.utc = q(Y.utc), Y.local = q(Y.local), Y.utcOffset = x(Y.utcOffset), e.tz.setDefault = function(t) {
            return (G < 2 || 2 === G && j < 9) && L("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? O(t) : null, e
        };
        var X = e.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(X) ? (X.push("_z"), X.push("_a")) : X && (X._z = null), e
    })
}
