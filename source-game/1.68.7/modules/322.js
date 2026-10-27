function(e, t, i) {
    (function(e) {
        ! function(e, i) {
            i(t)
        }(this, function(t) {
            "use strict";

            function i(e) {
                var t = e["default"];
                if ("function" == typeof t) {
                    var i = function n() {
                        if (this instanceof n) {
                            var e = [null];
                            e.push.apply(e, arguments);
                            var i = Function.bind.apply(t, e);
                            return new i
                        }
                        return t.apply(this, arguments)
                    };
                    i.prototype = t.prototype
                } else i = {};
                return Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), Object.keys(e)
                    .forEach(function(t) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        Object.defineProperty(i, t, n.get ? n : {
                            enumerable: !0,
                            get: function() {
                                return e[t]
                            }
                        })
                    }), i
            }

            function n() {
                Or = !0;
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, i = e.length; t < i; ++t) gr[t] = e[t], _r[e.charCodeAt(t)] = t;
                _r["-".charCodeAt(0)] = 62, _r["_".charCodeAt(0)] = 63
            }

            function o(e) {
                Or || n();
                var t, i, o, a, r, s, c = e.length;
                if (c % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                r = "=" === e[c - 2] ? 2 : "=" === e[c - 1] ? 1 : 0, s = new Ar(3 * c / 4 - r), o = r > 0 ? c - 4 : c;
                var l = 0;
                for (t = 0, i = 0; t < o; t += 4, i += 3) a = _r[e.charCodeAt(t)] << 18 | _r[e.charCodeAt(t + 1)] << 12 | _r[e.charCodeAt(t + 2)] << 6 | _r[e.charCodeAt(t + 3)], s[l++] = a >> 16 & 255, s[l++] = a >> 8 & 255, s[l++] = 255 & a;
                return 2 === r ? (a = _r[e.charCodeAt(t)] << 2 | _r[e.charCodeAt(t + 1)] >> 4, s[l++] = 255 & a) : 1 === r && (a = _r[e.charCodeAt(t)] << 10 | _r[e.charCodeAt(t + 1)] << 4 | _r[e.charCodeAt(t + 2)] >> 2, s[l++] = a >> 8 & 255, s[l++] = 255 & a), s
            }

            function a(e) {
                return gr[e >> 18 & 63] + gr[e >> 12 & 63] + gr[e >> 6 & 63] + gr[63 & e]
            }

            function r(e, t, i) {
                for (var n, o = [], r = t; r < i; r += 3) n = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], o.push(a(n));
                return o.join("")
            }

            function s(e) {
                Or || n();
                for (var t, i = e.length, o = i % 3, a = "", s = [], c = 16383, l = 0, d = i - o; l < d; l += c) s.push(r(e, l, l + c > d ? d : l + c));
                return 1 === o ? (t = e[i - 1], a += gr[t >> 2], a += gr[t << 4 & 63], a += "==") : 2 === o && (t = (e[i - 2] << 8) + e[i - 1], a += gr[t >> 10], a += gr[t >> 4 & 63], a += gr[t << 2 & 63], a += "="), s.push(a), s.join("")
            }

            function c(e, t, i, n, o) {
                var a, r, s = 8 * o - n - 1,
                    c = (1 << s) - 1,
                    l = c >> 1,
                    d = -7,
                    u = i ? o - 1 : 0,
                    p = i ? -1 : 1,
                    h = e[t + u];
                for (u += p, a = h & (1 << -d) - 1, h >>= -d, d += s; d > 0; a = 256 * a + e[t + u], u += p, d -= 8);
                for (r = a & (1 << -d) - 1, a >>= -d, d += n; d > 0; r = 256 * r + e[t + u], u += p, d -= 8);
                if (0 === a) a = 1 - l;
                else {
                    if (a === c) return r ? NaN : (h ? -1 : 1) * (1 / 0);
                    r += Math.pow(2, n), a -= l
                }
                return (h ? -1 : 1) * r * Math.pow(2, a - n)
            }

            function l(e, t, i, n, o, a) {
                var r, s, c, l = 8 * a - o - 1,
                    d = (1 << l) - 1,
                    u = d >> 1,
                    p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = n ? 0 : a - 1,
                    f = n ? 1 : -1,
                    b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = d) : (r = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -r)) < 1 && (r--, c *= 2), t += r + u >= 1 ? p / c : p * Math.pow(2, 1 - u), t * c >= 2 && (r++, c /= 2), r + u >= d ? (s = 0, r = d) : r + u >= 1 ? (s = (t * c - 1) * Math.pow(2, o), r += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, o), r = 0)); o >= 8; e[i + h] = 255 & s, h += f, s /= 256, o -= 8);
                for (r = r << o | s, l += o; l > 0; e[i + h] = 255 & r, h += f, r /= 256, l -= 8);
                e[i + h - f] |= 128 * b
            }

            function d() {
                return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function u(e, t) {
                if (d() < t) throw new RangeError("Invalid typed array length");
                return p.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = p.prototype) : (null === e && (e = new p(t)), e.length = t), e
            }

            function p(e, t, i) {
                if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p)) return new p(e, t, i);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return m(this, e)
                }
                return h(this, e, t, i)
            }

            function h(e, t, i, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? _(e, t, i, n) : "string" == typeof t ? M(e, t, i) : A(e, t)
            }

            function f(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function b(e, t, i, n) {
                return f(t), t <= 0 ? u(e, t) : void 0 !== i ? "string" == typeof n ? u(e, t)
                    .fill(i, n) : u(e, t)
                    .fill(i) : u(e, t)
            }

            function m(e, t) {
                if (f(t), e = u(e, t < 0 ? 0 : 0 | O(t)), !p.TYPED_ARRAY_SUPPORT)
                    for (var i = 0; i < t; ++i) e[i] = 0;
                return e
            }

            function M(e, t, i) {
                if ("string" == typeof i && "" !== i || (i = "utf8"), !p.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | z(t, i);
                e = u(e, n);
                var o = e.write(t, i);
                return o !== n && (e = e.slice(0, o)), e
            }

            function g(e, t) {
                var i = t.length < 0 ? 0 : 0 | O(t.length);
                e = u(e, i);
                for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
                return e
            }

            function _(e, t, i, n) {
                if (t.byteLength, i < 0 || t.byteLength < i) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, i) : new Uint8Array(t, i, n), p.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = p.prototype) : e = g(e, t), e
            }

            function A(e, t) {
                if (y(t)) {
                    var i = 0 | O(t.length);
                    return e = u(e, i), 0 === e.length ? e : (t.copy(e, 0, 0, i), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || ne(t.length) ? u(e, 0) : g(e, t);
                    if ("Buffer" === t.type && yr(t.data)) return g(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function O(e) {
                if (e >= d()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + d()
                    .toString(16) + " bytes");
                return 0 | e
            }

            function v(e) {
                return +e != e && (e = 0), p.alloc(+e)
            }

            function y(e) {
                return !(null == e || !e._isBuffer)
            }

            function z(e, t) {
                if (y(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var i = e.length;
                if (0 === i) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return i;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return Z(e)
                            .length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * i;
                    case "hex":
                        return i >>> 1;
                    case "base64":
                        return te(e)
                            .length;
                    default:
                        if (n) return Z(e)
                            .length;
                        t = ("" + t)
                            .toLowerCase(), n = !0
                }
            }

            function w(e, t, i) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
                if (i >>>= 0, t >>>= 0, i <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return k(this, t, i);
                    case "utf8":
                    case "utf-8":
                        return B(this, t, i);
                    case "ascii":
                        return W(this, t, i);
                    case "latin1":
                    case "binary":
                        return P(this, t, i);
                    case "base64":
                        return x(this, t, i);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return F(this, t, i);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "")
                            .toLowerCase(), n = !0
                }
            }

            function T(e, t, i) {
                var n = e[t];
                e[t] = e[i], e[i] = n
            }

            function C(e, t, i, n, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = o ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
                    if (o) return -1;
                    i = e.length - 1
                } else if (i < 0) {
                    if (!o) return -1;
                    i = 0
                }
                if ("string" == typeof t && (t = p.from(t, n)), y(t)) return 0 === t.length ? -1 : I(e, t, i, n, o);
                if ("number" == typeof t) return t = 255 & t, p.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : I(e, [t], i, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function I(e, t, i, n, o) {
                function a(e, t) {
                    return 1 === r ? e[t] : e.readUInt16BE(t * r)
                }
                var r = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== n && (n = String(n)
                        .toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    r = 2, s /= 2, c /= 2, i /= 2
                }
                var l;
                if (o) {
                    var d = -1;
                    for (l = i; l < s; l++)
                        if (a(e, l) === a(t, d === -1 ? 0 : l - d)) {
                            if (d === -1 && (d = l), l - d + 1 === c) return d * r
                        } else d !== -1 && (l -= l - d), d = -1
                } else
                    for (i + c > s && (i = s - c), l = i; l >= 0; l--) {
                        for (var u = !0, p = 0; p < c; p++)
                            if (a(e, l + p) !== a(t, p)) {
                                u = !1;
                                break
                            } if (u) return l
                    }
                return -1
            }

            function S(e, t, i, n) {
                i = Number(i) || 0;
                var o = e.length - i;
                n ? (n = Number(n), n > o && (n = o)) : n = o;
                var a = t.length;
                if (a % 2 !== 0) throw new TypeError("Invalid hex string");
                n > a / 2 && (n = a / 2);
                for (var r = 0; r < n; ++r) {
                    var s = parseInt(t.substr(2 * r, 2), 16);
                    if (isNaN(s)) return r;
                    e[i + r] = s
                }
                return r
            }

            function E(e, t, i, n) {
                return ie(Z(t, e.length - i), e, i, n)
            }

            function L(e, t, i, n) {
                return ie($(t), e, i, n)
            }

            function N(e, t, i, n) {
                return L(e, t, i, n)
            }

            function R(e, t, i, n) {
                return ie(te(t), e, i, n)
            }

            function q(e, t, i, n) {
                return ie(ee(t, e.length - i), e, i, n)
            }

            function x(e, t, i) {
                return s(0 === t && i === e.length ? e : e.slice(t, i))
            }

            function B(e, t, i) {
                i = Math.min(e.length, i);
                for (var n = [], o = t; o < i;) {
                    var a = e[o],
                        r = null,
                        s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                    if (o + s <= i) {
                        var c, l, d, u;
                        switch (s) {
                            case 1:
                                a < 128 && (r = a);
                                break;
                            case 2:
                                c = e[o + 1], 128 === (192 & c) && (u = (31 & a) << 6 | 63 & c, u > 127 && (r = u));
                                break;
                            case 3:
                                c = e[o + 1], l = e[o + 2], 128 === (192 & c) && 128 === (192 & l) && (u = (15 & a) << 12 | (63 & c) << 6 | 63 & l, u > 2047 && (u < 55296 || u > 57343) && (r = u));
                                break;
                            case 4:
                                c = e[o + 1], l = e[o + 2], d = e[o + 3], 128 === (192 & c) && 128 === (192 & l) && 128 === (192 & d) && (u = (15 & a) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & d, u > 65535 && u < 1114112 && (r = u))
                        }
                    }
                    null === r ? (r = 65533, s = 1) : r > 65535 && (r -= 65536, n.push(r >>> 10 & 1023 | 55296), r = 56320 | 1023 & r), n.push(r), o += s
                }
                return D(n)
            }

            function D(e) {
                var t = e.length;
                if (t <= Tr) return String.fromCharCode.apply(String, e);
                for (var i = "", n = 0; n < t;) i += String.fromCharCode.apply(String, e.slice(n, n += Tr));
                return i
            }

            function W(e, t, i) {
                var n = "";
                i = Math.min(e.length, i);
                for (var o = t; o < i; ++o) n += String.fromCharCode(127 & e[o]);
                return n
            }

            function P(e, t, i) {
                var n = "";
                i = Math.min(e.length, i);
                for (var o = t; o < i; ++o) n += String.fromCharCode(e[o]);
                return n
            }

            function k(e, t, i) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!i || i < 0 || i > n) && (i = n);
                for (var o = "", a = t; a < i; ++a) o += J(e[a]);
                return o
            }

            function F(e, t, i) {
                for (var n = e.slice(t, i), o = "", a = 0; a < n.length; a += 2) o += String.fromCharCode(n[a] + 256 * n[a + 1]);
                return o
            }

            function H(e, t, i) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > i) throw new RangeError("Trying to access beyond buffer length")
            }

            function U(e, t, i, n, o, a) {
                if (!y(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < a) throw new RangeError('"value" argument is out of bounds');
                if (i + n > e.length) throw new RangeError("Index out of range")
            }

            function G(e, t, i, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, a = Math.min(e.length - i, 2); o < a; ++o) e[i + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
            }

            function j(e, t, i, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, a = Math.min(e.length - i, 4); o < a; ++o) e[i + o] = t >>> 8 * (n ? o : 3 - o) & 255
            }

            function Y(e, t, i, n, o, a) {
                if (i + n > e.length) throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("Index out of range")
            }

            function X(e, t, i, n, o) {
                return o || Y(e, t, i, 4), l(e, t, i, n, 23, 4), i + 4
            }

            function V(e, t, i, n, o) {
                return o || Y(e, t, i, 8), l(e, t, i, n, 52, 8), i + 8
            }

            function Q(e) {
                if (e = K(e)
                    .replace(Cr, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function K(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function J(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function Z(e, t) {
                t = t || 1 / 0;
                for (var i, n = e.length, o = null, a = [], r = 0; r < n; ++r) {
                    if (i = e.charCodeAt(r), i > 55295 && i < 57344) {
                        if (!o) {
                            if (i > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (r + 1 === n) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            o = i;
                            continue
                        }
                        if (i < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), o = i;
                            continue
                        }
                        i = (o - 55296 << 10 | i - 56320) + 65536
                    } else o && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (o = null, i < 128) {
                        if ((t -= 1) < 0) break;
                        a.push(i)
                    } else if (i < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(i >> 6 | 192, 63 & i | 128)
                    } else if (i < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                    } else {
                        if (!(i < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        a.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                    }
                }
                return a
            }

            function $(e) {
                for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
                return t
            }

            function ee(e, t) {
                for (var i, n, o, a = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) i = e.charCodeAt(r), n = i >> 8, o = i % 256, a.push(o), a.push(n);
                return a
            }

            function te(e) {
                return o(Q(e))
            }

            function ie(e, t, i, n) {
                for (var o = 0; o < n && !(o + i >= t.length || o >= e.length); ++o) t[o + i] = e[o];
                return o
            }

            function ne(e) {
                return e !== e
            }

            function oe(e) {
                return null != e && (!!e._isBuffer || ae(e) || re(e))
            }

            function ae(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }

            function re(e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && ae(e.slice(0, 0))
            }

            function se(e, t, i) {
                var n = t.length,
                    o = xr(t, e._cache);
                return e._cache = e._cache.slice(n), e._prev = qr.concat([e._prev, i ? t : o]), o
            }

            function ce(e, t, i) {
                var n = e._cipher.encryptBlock(e._prev),
                    o = n[0] ^ t;
                return e._prev = Dr.concat([e._prev.slice(1), Dr.from([i ? t : o])]), o
            }

            function le(e, t, i) {
                for (var n, o, a, r = -1, s = 8, c = 0; ++r < s;) n = e._cipher.encryptBlock(e._prev), o = t & 1 << 7 - r ? 128 : 0, a = n[0] ^ o, c += (128 & a) >> r % 8, e._prev = de(e._prev, i ? o : a);
                return c
            }

            function de(e, t) {
                var i = e.length,
                    n = -1,
                    o = Pr.allocUnsafe(e.length);
                for (e = Pr.concat([e, Pr.from([t])]); ++n < i;) o[n] = e[n] << 1 | e[n + 1] >> 7;
                return o
            }

            function ue(e) {
                return e._prev = e._cipher.encryptBlock(e._prev), e._prev
            }

            function pe(e) {
                for (var t, i = e.length; i--;) {
                    if (t = e.readUInt8(i), 255 !== t) {
                        t++, e.writeUInt8(t, i);
                        break
                    }
                    e.writeUInt8(0, i)
                }
            }

            function he(e) {
                var t = e._cipher.encryptBlockRaw(e._prev);
                return Yr(e._prev), t
            }

            function fe(e) {
                ns.isBuffer(e) || (e = ns.from(e));
                for (var t = e.length / 4 | 0, i = new Array(t), n = 0; n < t; n++) i[n] = e.readUInt32BE(4 * n);
                return i
            }

            function be(e) {
                for (var t = 0; t < e.length; e++) e[t] = 0
            }

            function me(e, t, i, n, o) {
                for (var a, r, s, c, l = i[0], d = i[1], u = i[2], p = i[3], h = e[0] ^ t[0], f = e[1] ^ t[1], b = e[2] ^ t[2], m = e[3] ^ t[3], M = 4, g = 1; g < o; g++) a = l[h >>> 24] ^ d[f >>> 16 & 255] ^ u[b >>> 8 & 255] ^ p[255 & m] ^ t[M++], r = l[f >>> 24] ^ d[b >>> 16 & 255] ^ u[m >>> 8 & 255] ^ p[255 & h] ^ t[M++], s = l[b >>> 24] ^ d[m >>> 16 & 255] ^ u[h >>> 8 & 255] ^ p[255 & f] ^ t[M++], c = l[m >>> 24] ^ d[h >>> 16 & 255] ^ u[f >>> 8 & 255] ^ p[255 & b] ^ t[M++], h = a, f = r, b = s, m = c;
                return a = (n[h >>> 24] << 24 | n[f >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & m]) ^ t[M++], r = (n[f >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[m >>> 8 & 255] << 8 | n[255 & h]) ^ t[M++], s = (n[b >>> 24] << 24 | n[m >>> 16 & 255] << 16 | n[h >>> 8 & 255] << 8 | n[255 & f]) ^ t[M++], c = (n[m >>> 24] << 24 | n[h >>> 16 & 255] << 16 | n[f >>> 8 & 255] << 8 | n[255 & b]) ^ t[M++], a >>>= 0, r >>>= 0, s >>>= 0, c >>>= 0, [a, r, s, c]
            }

            function Me(e) {
                this._key = fe(e), this._reset()
            }

            function ge() {}

            function _e() {
                _e.init.call(this)
            }

            function Ae(e) {
                return void 0 === e._maxListeners ? _e.defaultMaxListeners : e._maxListeners
            }

            function Oe(e, t, i) {
                if (t) e.call(i);
                else
                    for (var n = e.length, o = Le(e, n), a = 0; a < n; ++a) o[a].call(i)
            }

            function ve(e, t, i, n) {
                if (t) e.call(i, n);
                else
                    for (var o = e.length, a = Le(e, o), r = 0; r < o; ++r) a[r].call(i, n)
            }

            function ye(e, t, i, n, o) {
                if (t) e.call(i, n, o);
                else
                    for (var a = e.length, r = Le(e, a), s = 0; s < a; ++s) r[s].call(i, n, o)
            }

            function ze(e, t, i, n, o, a) {
                if (t) e.call(i, n, o, a);
                else
                    for (var r = e.length, s = Le(e, r), c = 0; c < r; ++c) s[c].call(i, n, o, a)
            }

            function we(e, t, i, n) {
                if (t) e.apply(i, n);
                else
                    for (var o = e.length, a = Le(e, o), r = 0; r < o; ++r) a[r].apply(i, n)
            }

            function Te(e, t, i, n) {
                var o, a, r;
                if ("function" != typeof i) throw new TypeError('"listener" argument must be a function');
                if (a = e._events, a ? (a.newListener && (e.emit("newListener", t, i.listener ? i.listener : i), a = e._events), r = a[t]) : (a = e._events = new ge, e._eventsCount = 0), r) {
                    if ("function" == typeof r ? r = a[t] = n ? [i, r] : [r, i] : n ? r.unshift(i) : r.push(i), !r.warned && (o = Ae(e), o && o > 0 && r.length > o)) {
                        r.warned = !0;
                        var s = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = r.length, Ce(s)
                    }
                } else r = a[t] = i, ++e._eventsCount;
                return e
            }

            function Ce(e) {
                "function" == typeof console.warn ? console.warn(e) : console.log(e)
            }

            function Ie(e, t, i) {
                function n() {
                    e.removeListener(t, n), o || (o = !0, i.apply(e, arguments))
                }
                var o = !1;
                return n.listener = i, n
            }

            function Se(e) {
                var t = this._events;
                if (t) {
                    var i = t[e];
                    if ("function" == typeof i) return 1;
                    if (i) return i.length
                }
                return 0
            }

            function Ee(e, t) {
                for (var i = t, n = i + 1, o = e.length; n < o; i += 1, n += 1) e[i] = e[n];
                e.pop()
            }

            function Le(e, t) {
                for (var i = new Array(t); t--;) i[t] = e[t];
                return i
            }

            function Ne(e) {
                for (var t = new Array(e.length), i = 0; i < t.length; ++i) t[i] = e[i].listener || e[i];
                return t
            }

            function Re() {
                throw new Error("setTimeout has not been defined")
            }

            function qe() {
                throw new Error("clearTimeout has not been defined")
            }

            function xe(e) {
                if (cs === setTimeout) return setTimeout(e, 0);
                if ((cs === Re || !cs) && setTimeout) return cs = setTimeout, setTimeout(e, 0);
                try {
                    return cs(e, 0)
                } catch (t) {
                    try {
                        return cs.call(null, e, 0)
                    } catch (t) {
                        return cs.call(this, e, 0)
                    }
                }
            }

            function Be(e) {
                if (ls === clearTimeout) return clearTimeout(e);
                if ((ls === qe || !ls) && clearTimeout) return ls = clearTimeout, clearTimeout(e);
                try {
                    return ls(e)
                } catch (t) {
                    try {
                        return ls.call(null, e)
                    } catch (t) {
                        return ls.call(this, e)
                    }
                }
            }

            function De() {
                ps && ds && (ps = !1, ds.length ? us = ds.concat(us) : hs = -1, us.length && We())
            }

            function We() {
                if (!ps) {
                    var e = xe(De);
                    ps = !0;
                    for (var t = us.length; t;) {
                        for (ds = us, us = []; ++hs < t;) ds && ds[hs].run();
                        hs = -1, t = us.length
                    }
                    ds = null, ps = !1, Be(e)
                }
            }

            function Pe(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                us.push(new ke(e, t)), 1 !== us.length || ps || xe(We)
            }

            function ke(e, t) {
                this.fun = e, this.array = t
            }

            function Fe() {}

            function He(e) {
                throw new Error("process.binding is not supported")
            }

            function Ue() {
                return "/"
            }

            function Ge(e) {
                throw new Error("process.chdir is not supported")
            }

            function je() {
                return 0
            }

            function Ye(e) {
                var t = .001 * Ns.call(Ls),
                    i = Math.floor(t),
                    n = Math.floor(t % 1 * 1e9);
                return e && (i -= e[0], n -= e[1], n < 0 && (i--, n += 1e9)), [i, n]
            }

            function Xe() {
                var e = new Date,
                    t = e - Rs;
                return t / 1e3
            }

            function Ve(e) {
                if (!pt(e)) {
                    for (var t = [], i = 0; i < arguments.length; i++) t.push(Je(arguments[i]));
                    return t.join(" ")
                }
                for (var i = 1, n = arguments, o = n.length, a = String(e)
                        .replace(Ds, function(e) {
                            if ("%%" === e) return "%";
                            if (i >= o) return e;
                            switch (e) {
                                case "%s":
                                    return String(n[i++]);
                                case "%d":
                                    return Number(n[i++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(n[i++])
                                    } catch (t) {
                                        return "[Circular]"
                                    }
                                default:
                                    return e
                            }
                        }), r = n[i]; i < o; r = n[++i]) a += lt(r) || !mt(r) ? " " + r : " " + Je(r);
                return a
            }

            function Qe(e, t) {
                function i() {
                    if (!n) {
                        if (qs.throwDeprecation) throw new Error(t);
                        qs.traceDeprecation ? console.trace(t) : console.error(t), n = !0
                    }
                    return e.apply(this, arguments)
                }
                if (ft(Mr.process)) return function() {
                    return Qe(e, t)
                        .apply(this, arguments)
                };
                if (qs.noDeprecation === !0) return e;
                var n = !1;
                return i
            }

            function Ke(e) {
                if (ft(xs) && (xs = qs.env.NODE_DEBUG || ""), e = e.toUpperCase(), !Ws[e])
                    if (new RegExp("\\b" + e + "\\b", "i")
                        .test(xs)) {
                        var t = 0;
                        Ws[e] = function() {
                            var i = Ve.apply(null, arguments);
                            console.error("%s %d: %s", e, t, i)
                        }
                    } else Ws[e] = function() {};
                return Ws[e]
            }

            function Je(e, t) {
                var i = {
                    seen: [],
                    stylize: $e
                };
                return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), ct(t) ? i.showHidden = t : t && Tt(i, t), ft(i.showHidden) && (i.showHidden = !1), ft(i.depth) && (i.depth = 2), ft(i.colors) && (i.colors = !1), ft(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = Ze), tt(i, e, i.depth)
            }

            function Ze(e, t) {
                var i = Je.styles[t];
                return i ? "[" + Je.colors[i][0] + "m" + e + "[" + Je.colors[i][1] + "m" : e
            }

            function $e(e, t) {
                return e
            }

            function et(e) {
                var t = {};
                return e.forEach(function(e, i) {
                    t[e] = !0
                }), t
            }

            function tt(e, t, i) {
                if (e.customInspect && t && _t(t.inspect) && t.inspect !== Je && (!t.constructor || t.constructor.prototype !== t)) {
                    var n = t.inspect(i, e);
                    return pt(n) || (n = tt(e, n, i)), n
                }
                var o = it(e, t);
                if (o) return o;
                var a = Object.keys(t),
                    r = et(a);
                if (e.showHidden && (a = Object.getOwnPropertyNames(t)), gt(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return nt(t);
                if (0 === a.length) {
                    if (_t(t)) {
                        var s = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + s + "]", "special")
                    }
                    if (bt(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (Mt(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (gt(t)) return nt(t)
                }
                var c = "",
                    l = !1,
                    d = ["{", "}"];
                if (st(t) && (l = !0, d = ["[", "]"]), _t(t)) {
                    var u = t.name ? ": " + t.name : "";
                    c = " [Function" + u + "]"
                }
                if (bt(t) && (c = " " + RegExp.prototype.toString.call(t)), Mt(t) && (c = " " + Date.prototype.toUTCString.call(t)), gt(t) && (c = " " + nt(t)), 0 === a.length && (!l || 0 == t.length)) return d[0] + c + d[1];
                if (i < 0) return bt(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(t);
                var p;
                return p = l ? ot(e, t, i, r, a) : a.map(function(n) {
                    return at(e, t, i, r, n, l)
                }), e.seen.pop(), rt(p, c, d)
            }

            function it(e, t) {
                if (ft(t)) return e.stylize("undefined", "undefined");
                if (pt(t)) {
                    var i = "'" + JSON.stringify(t)
                        .replace(/^"|"$/g, "")
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"') + "'";
                    return e.stylize(i, "string")
                }
                return ut(t) ? e.stylize("" + t, "number") : ct(t) ? e.stylize("" + t, "boolean") : lt(t) ? e.stylize("null", "null") : void 0
            }

            function nt(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function ot(e, t, i, n, o) {
                for (var a = [], r = 0, s = t.length; r < s; ++r) Ct(t, String(r)) ? a.push(at(e, t, i, n, String(r), !0)) : a.push("");
                return o.forEach(function(o) {
                    o.match(/^\d+$/) || a.push(at(e, t, i, n, o, !0))
                }), a
            }

            function at(e, t, i, n, o, a) {
                var r, s, c;
                if (c = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), Ct(n, o) || (r = "[" + o + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = lt(i) ? tt(e, c.value, null) : tt(e, c.value, i - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n")
                        .map(function(e) {
                            return "  " + e
                        })
                        .join("\n")
                        .substr(2) : "\n" + s.split("\n")
                        .map(function(e) {
                            return "   " + e
                        })
                        .join("\n"))) : s = e.stylize("[Circular]", "special")), ft(r)) {
                    if (a && o.match(/^\d+$/)) return s;
                    r = JSON.stringify("" + o), r.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (r = r.substr(1, r.length - 2), r = e.stylize(r, "name")) : (r = r.replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'"), r = e.stylize(r, "string"))
                }
                return r + ": " + s
            }

            function rt(e, t, i) {
                var n = e.reduce(function(e, t) {
                    return t.indexOf("\n") >= 0, e + t.replace(/\u001b\[\d\d?m/g, "")
                        .length + 1
                }, 0);
                return n > 60 ? i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1] : i[0] + t + " " + e.join(", ") + " " + i[1]
            }

            function st(e) {
                return Array.isArray(e)
            }

            function ct(e) {
                return "boolean" == typeof e
            }

            function lt(e) {
                return null === e
            }

            function dt(e) {
                return null == e
            }

            function ut(e) {
                return "number" == typeof e
            }

            function pt(e) {
                return "string" == typeof e
            }

            function ht(e) {
                return "symbol" == typeof e
            }

            function ft(e) {
                return void 0 === e
            }

            function bt(e) {
                return mt(e) && "[object RegExp]" === vt(e)
            }

            function mt(e) {
                return "object" == typeof e && null !== e
            }

            function Mt(e) {
                return mt(e) && "[object Date]" === vt(e)
            }

            function gt(e) {
                return mt(e) && ("[object Error]" === vt(e) || e instanceof Error)
            }

            function _t(e) {
                return "function" == typeof e
            }

            function At(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function Ot(e) {
                return p.isBuffer(e)
            }

            function vt(e) {
                return Object.prototype.toString.call(e)
            }

            function yt(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }

            function zt() {
                var e = new Date,
                    t = [yt(e.getHours()), yt(e.getMinutes()), yt(e.getSeconds())].join(":");
                return [e.getDate(), Ps[e.getMonth()], t].join(" ")
            }

            function wt() {
                console.log("%s - %s", zt(), Ve.apply(null, arguments))
            }

            function Tt(e, t) {
                if (!t || !mt(t)) return e;
                for (var i = Object.keys(t), n = i.length; n--;) e[i[n]] = t[i[n]];
                return e
            }

            function Ct(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function It() {
                this.head = null, this.tail = null, this.length = 0
            }

            function St(e) {
                if (e && !Hs(e)) throw new Error("Unknown encoding: " + e)
            }

            function Et(e) {
                switch (this.encoding = (e || "utf8")
                    .toLowerCase()
                    .replace(/[-_]/, ""), St(e), this.encoding) {
                    case "utf8":
                        this.surrogateSize = 3;
                        break;
                    case "ucs2":
                    case "utf16le":
                        this.surrogateSize = 2, this.detectIncompleteChar = Nt;
                        break;
                    case "base64":
                        this.surrogateSize = 3, this.detectIncompleteChar = Rt;
                        break;
                    default:
                        return void(this.write = Lt)
                }
                this.charBuffer = new p(6), this.charReceived = 0, this.charLength = 0
            }

            function Lt(e) {
                return e.toString(this.encoding)
            }

            function Nt(e) {
                this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
            }

            function Rt(e) {
                this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
            }

            function qt(e, t, i) {
                return "function" == typeof e.prependListener ? e.prependListener(t, i) : void(e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i))
            }

            function xt(e, t) {
                return e.listeners(t)
                    .length
            }

            function Bt(e, t) {
                e = e || {}, this.objectMode = !!e.objectMode, t instanceof Ci && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                var i = e.highWaterMark,
                    n = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n, this.highWaterMark = ~~this.highWaterMark, this.buffer = new It, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (this.decoder = new Et(e.encoding), this.encoding = e.encoding)
            }

            function Dt(e) {
                return this instanceof Dt ? (this._readableState = new Bt(e, this), this.readable = !0, e && "function" == typeof e.read && (this._read = e.read), void _e.call(this)) : new Dt(e)
            }

            function Wt(e, t, i, n, o) {
                var a = Ht(t, i);
                if (a) e.emit("error", a);
                else if (null === i) t.reading = !1, Ut(e, t);
                else if (t.objectMode || i && i.length > 0)
                    if (t.ended && !o) {
                        var r = new Error("stream.push() after EOF");
                        e.emit("error", r)
                    } else if (t.endEmitted && o) {
                    var s = new Error("stream.unshift() after end event");
                    e.emit("error", s)
                } else {
                    var c;
                    !t.decoder || o || n || (i = t.decoder.write(i), c = !t.objectMode && 0 === i.length), o || (t.reading = !1), c || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", i), e.read(0)) : (t.length += t.objectMode ? 1 : i.length, o ? t.buffer.unshift(i) : t.buffer.push(i), t.needReadable && Gt(e))), Yt(e, t)
                } else o || (t.reading = !1);
                return Pt(t)
            }

            function Pt(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }

            function kt(e) {
                return e >= js ? e = js : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16,
                    e++), e
            }

            function Ft(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = kt(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function Ht(e, t) {
                var i = null;
                return p.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")), i
            }

            function Ut(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var i = t.decoder.end();
                        i && i.length && (t.buffer.push(i), t.length += t.objectMode ? 1 : i.length)
                    }
                    t.ended = !0, Gt(e)
                }
            }

            function Gt(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (Gs("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? Pe(jt, e) : jt(e))
            }

            function jt(e) {
                Gs("emit readable"), e.emit("readable"), Zt(e)
            }

            function Yt(e, t) {
                t.readingMore || (t.readingMore = !0, Pe(Xt, e, t))
            }

            function Xt(e, t) {
                for (var i = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (Gs("maybeReadMore read 0"), e.read(0), i !== t.length);) i = t.length;
                t.readingMore = !1
            }

            function Vt(e) {
                return function() {
                    var t = e._readableState;
                    Gs("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && e.listeners("data")
                        .length && (t.flowing = !0, Zt(e))
                }
            }

            function Qt(e) {
                Gs("readable nexttick read 0"), e.read(0)
            }

            function Kt(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, Pe(Jt, e, t))
            }

            function Jt(e, t) {
                t.reading || (Gs("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), Zt(e), t.flowing && !t.reading && e.read(0)
            }

            function Zt(e) {
                var t = e._readableState;
                for (Gs("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function $t(e, t) {
                if (0 === t.length) return null;
                var i;
                return t.objectMode ? i = t.buffer.shift() : !e || e >= t.length ? (i = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : i = ei(e, t.buffer, t.decoder), i
            }

            function ei(e, t, i) {
                var n;
                return e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : i ? ti(e, t) : ii(e, t), n
            }

            function ti(e, t) {
                var i = t.head,
                    n = 1,
                    o = i.data;
                for (e -= o.length; i = i.next;) {
                    var a = i.data,
                        r = e > a.length ? a.length : e;
                    if (o += r === a.length ? a : a.slice(0, e), e -= r, 0 === e) {
                        r === a.length ? (++n, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = a.slice(r));
                        break
                    }++n
                }
                return t.length -= n, o
            }

            function ii(e, t) {
                var i = p.allocUnsafe(e),
                    n = t.head,
                    o = 1;
                for (n.data.copy(i), e -= n.data.length; n = n.next;) {
                    var a = n.data,
                        r = e > a.length ? a.length : e;
                    if (a.copy(i, i.length - e, 0, r), e -= r, 0 === e) {
                        r === a.length ? (++o, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = a.slice(r));
                        break
                    }++o
                }
                return t.length -= o, i
            }

            function ni(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, Pe(oi, t, e))
            }

            function oi(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function ai(e, t) {
                for (var i = 0, n = e.length; i < n; i++) t(e[i], i)
            }

            function ri(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            }

            function si() {}

            function ci(e, t, i) {
                this.chunk = e, this.encoding = t, this.callback = i, this.next = null
            }

            function li(e, t) {
                Object.defineProperty(this, "buffer", {
                    get: Qe(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                }), e = e || {}, this.objectMode = !!e.objectMode, t instanceof Ci && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                var i = e.highWaterMark,
                    n = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var o = e.decodeStrings === !1;
                this.decodeStrings = !o, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    gi(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Ti(this)
            }

            function di(e) {
                return this instanceof di || this instanceof Ci ? (this._writableState = new li(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev)), void _e.call(this)) : new di(e)
            }

            function ui(e, t) {
                var i = new Error("write after end");
                e.emit("error", i), Pe(t, i)
            }

            function pi(e, t, i, n) {
                var o = !0,
                    a = !1;
                return null === i ? a = new TypeError("May not write null values to stream") : p.isBuffer(i) || "string" == typeof i || void 0 === i || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), Pe(n, a), o = !1), o
            }

            function hi(e, t, i) {
                return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = p.from(t, i)), t
            }

            function fi(e, t, i, n, o) {
                i = hi(t, i, n), p.isBuffer(i) && (n = "buffer");
                var a = t.objectMode ? 1 : i.length;
                t.length += a;
                var r = t.length < t.highWaterMark;
                if (r || (t.needDrain = !0), t.writing || t.corked) {
                    var s = t.lastBufferedRequest;
                    t.lastBufferedRequest = new ci(i, n, o), s ? s.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else bi(e, t, !1, a, i, n, o);
                return r
            }

            function bi(e, t, i, n, o, a, r) {
                t.writelen = n, t.writecb = r, t.writing = !0, t.sync = !0, i ? e._writev(o, t.onwrite) : e._write(o, a, t.onwrite), t.sync = !1
            }

            function mi(e, t, i, n, o) {
                --t.pendingcb, i ? Pe(o, n) : o(n), e._writableState.errorEmitted = !0, e.emit("error", n)
            }

            function Mi(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function gi(e, t) {
                var i = e._writableState,
                    n = i.sync,
                    o = i.writecb;
                if (Mi(i), t) mi(e, i, n, t, o);
                else {
                    var a = vi(i);
                    a || i.corked || i.bufferProcessing || !i.bufferedRequest || Oi(e, i), n ? Pe(_i, e, i, a, o) : _i(e, i, a, o)
                }
            }

            function _i(e, t, i, n) {
                i || Ai(e, t), t.pendingcb--, n(), zi(e, t)
            }

            function Ai(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function Oi(e, t) {
                t.bufferProcessing = !0;
                var i = t.bufferedRequest;
                if (e._writev && i && i.next) {
                    var n = t.bufferedRequestCount,
                        o = new Array(n),
                        a = t.corkedRequestsFree;
                    a.entry = i;
                    for (var r = 0; i;) o[r] = i, i = i.next, r += 1;
                    bi(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new Ti(t)
                } else {
                    for (; i;) {
                        var s = i.chunk,
                            c = i.encoding,
                            l = i.callback,
                            d = t.objectMode ? 1 : s.length;
                        if (bi(e, t, !1, d, s, c, l), i = i.next, t.writing) break
                    }
                    null === i && (t.lastBufferedRequest = null)
                }
                t.bufferedRequestCount = 0, t.bufferedRequest = i, t.bufferProcessing = !1
            }

            function vi(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function yi(e, t) {
                t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
            }

            function zi(e, t) {
                var i = vi(t);
                return i && (0 === t.pendingcb ? (yi(e, t), t.finished = !0, e.emit("finish")) : yi(e, t)), i
            }

            function wi(e, t, i) {
                t.ending = !0, zi(e, t), i && (t.finished ? Pe(i) : e.once("finish", i)), t.ended = !0, e.writable = !1
            }

            function Ti(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function(i) {
                    var n = t.entry;
                    for (t.entry = null; n;) {
                        var o = n.callback;
                        e.pendingcb--, o(i), n = n.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }
            }

            function Ci(e) {
                return this instanceof Ci ? (Dt.call(this, e), di.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", Ii)) : new Ci(e)
            }

            function Ii() {
                this.allowHalfOpen || this._writableState.ended || Pe(Si, this)
            }

            function Si(e) {
                e.end()
            }

            function Ei(e) {
                this.afterTransform = function(t, i) {
                    return Li(e, t, i)
                }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
            }

            function Li(e, t, i) {
                var n = e._transformState;
                n.transforming = !1;
                var o = n.writecb;
                if (!o) return e.emit("error", new Error("no writecb in Transform class"));
                n.writechunk = null, n.writecb = null, null !== i && void 0 !== i && e.push(i), o(t);
                var a = e._readableState;
                a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && e._read(a.highWaterMark)
            }

            function Ni(e) {
                if (!(this instanceof Ni)) return new Ni(e);
                Ci.call(this, e), this._transformState = new Ei(this);
                var t = this;
                this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() {
                    "function" == typeof this._flush ? this._flush(function(e) {
                        Ri(t, e)
                    }) : Ri(t)
                })
            }

            function Ri(e, t) {
                if (t) return e.emit("error", t);
                var i = e._writableState,
                    n = e._transformState;
                if (i.length) throw new Error("Calling transform done when ws.length != 0");
                if (n.transforming) throw new Error("Calling transform done when still transforming");
                return e.push(null)
            }

            function qi(e) {
                return this instanceof qi ? void Ni.call(this, e) : new qi(e)
            }

            function xi() {
                _e.call(this)
            }

            function Bi(e) {
                nc.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this["final"] = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }

            function Di(e) {
                return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)]
            }

            function Wi(e) {
                var t = sc.allocUnsafe(16);
                return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
            }

            function Pi(e) {
                this.h = e, this.state = sc.alloc(16, 0), this.cache = sc.allocUnsafe(0)
            }

            function ki(e, t) {
                var i = 0;
                e.length !== t.length && i++;
                for (var n = Math.min(e.length, t.length), o = 0; o < n; ++o) i += e[o] ^ t[o];
                return i
            }

            function Fi(e, t, i) {
                if (12 === t.length) return e._finID = uc.concat([t, uc.from([0, 0, 0, 1])]), uc.concat([t, uc.from([0, 0, 0, 2])]);
                var n = new fc(i),
                    o = t.length,
                    a = o % 16;
                n.update(t), a && (a = 16 - a, n.update(uc.alloc(a, 0))), n.update(uc.alloc(8, 0));
                var r = 8 * o,
                    s = uc.alloc(8);
                s.writeUIntBE(r, 0, 8), n.update(s), e._finID = n.state;
                var c = uc.from(e._finID);
                return mc(c), c
            }

            function Hi(e, t, i, n) {
                pc.call(this);
                var o = uc.alloc(4, 0);
                this._cipher = new dc.AES(t);
                var a = this._cipher.encryptBlock(o);
                this._ghash = new fc(a), i = Fi(this, i, a), this._prev = uc.from(i), this._cache = uc.allocUnsafe(0), this._secCache = uc.allocUnsafe(0), this._decrypt = n, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
            }

            function Ui(e, t, i, n) {
                Ac.call(this), this._cipher = new gc.AES(t), this._prev = _c.from(i), this._cache = _c.allocUnsafe(0), this._secCache = _c.allocUnsafe(0), this._decrypt = n, this._mode = e
            }

            function Gi() {
                function e(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t)
                                .enumerable
                        })), i.push.apply(i, n)
                    }
                    return i
                }

                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var o = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? e(Object(o), !0)
                            .forEach(function(e) {
                                i(t, e, o[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o))
                            .forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                            })
                    }
                    return t
                }

                function i(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function a(e, t, i) {
                    return t && o(e.prototype, t), i && o(e, i), e
                }

                function r(e, t, i) {
                    c.prototype.copy.call(e, t, i)
                }
                if (yc) return vc;
                yc = 1;
                var s = Rr,
                    c = s.Buffer,
                    l = Ic,
                    d = l.inspect,
                    u = d && d.custom || "inspect";
                return vc = function() {
                    function e() {
                        n(this, e), this.head = null, this.tail = null, this.length = 0
                    }
                    return a(e, [{
                        key: "push",
                        value: function(e) {
                            var t = {
                                data: e,
                                next: null
                            };
                            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                        }
                    }, {
                        key: "unshift",
                        value: function(e) {
                            var t = {
                                data: e,
                                next: this.head
                            };
                            0 === this.length && (this.tail = t), this.head = t, ++this.length
                        }
                    }, {
                        key: "shift",
                        value: function() {
                            if (0 !== this.length) {
                                var e = this.head.data;
                                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                            }
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.head = this.tail = null, this.length = 0
                        }
                    }, {
                        key: "join",
                        value: function(e) {
                            if (0 === this.length) return "";
                            for (var t = this.head, i = "" + t.data; t = t.next;) i += e + t.data;
                            return i
                        }
                    }, {
                        key: "concat",
                        value: function(e) {
                            if (0 === this.length) return c.alloc(0);
                            for (var t = c.allocUnsafe(e >>> 0), i = this.head, n = 0; i;) r(i.data, t, n), n += i.data.length, i = i.next;
                            return t
                        }
                    }, {
                        key: "consume",
                        value: function(e, t) {
                            var i;
                            return e < this.head.data.length ? (i = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : i = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), i
                        }
                    }, {
                        key: "first",
                        value: function() {
                            return this.head.data
                        }
                    }, {
                        key: "_getString",
                        value: function(e) {
                            var t = this.head,
                                i = 1,
                                n = t.data;
                            for (e -= n.length; t = t.next;) {
                                var o = t.data,
                                    a = e > o.length ? o.length : e;
                                if (n += a === o.length ? o : o.slice(0, e), e -= a, 0 === e) {
                                    a === o.length ? (++i, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = o.slice(a));
                                    break
                                }++i
                            }
                            return this.length -= i, n
                        }
                    }, {
                        key: "_getBuffer",
                        value: function(e) {
                            var t = c.allocUnsafe(e),
                                i = this.head,
                                n = 1;
                            for (i.data.copy(t), e -= i.data.length; i = i.next;) {
                                var o = i.data,
                                    a = e > o.length ? o.length : e;
                                if (o.copy(t, t.length - e, 0, a), e -= a, 0 === e) {
                                    a === o.length ? (++n, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = o.slice(a));
                                    break
                                }++n
                            }
                            return this.length -= n, t
                        }
                    }, {
                        key: u,
                        value: function(e, i) {
                            return d(this, t({}, i, {
                                depth: 0,
                                customInspect: !1
                            }))
                        }
                    }]), e
                }()
            }

            function ji(e, t) {
                var i = this,
                    n = this._readableState && this._readableState.destroyed,
                    o = this._writableState && this._writableState.destroyed;
                return n || o ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, qs.nextTick(Qi, this, e)) : qs.nextTick(Qi, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                    !t && e ? i._writableState ? i._writableState.errorEmitted ? qs.nextTick(Xi, i) : (i._writableState.errorEmitted = !0, qs.nextTick(Yi, i, e)) : qs.nextTick(Yi, i, e) : t ? (qs.nextTick(Xi, i), t(e)) : qs.nextTick(Xi, i)
                }), this)
            }

            function Yi(e, t) {
                Qi(e, t), Xi(e)
            }

            function Xi(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function Vi() {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
            }

            function Qi(e, t) {
                e.emit("error", t)
            }

            function Ki(e, t) {
                var i = e._readableState,
                    n = e._writableState;
                i && i.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
            }

            function Ji(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function Zi(e, t, i) {
                function n(e, i, n) {
                    return "string" == typeof t ? t : t(e, i, n)
                }
                i || (i = Error);
                var o = function(e) {
                    function t(t, i, o) {
                        return e.call(this, n(t, i, o)) || this
                    }
                    return Ji(t, e), t
                }(i);
                o.prototype.name = i.name, o.prototype.code = e, Lc[e] = o
            }

            function $i(e, t) {
                if (Array.isArray(e)) {
                    var i = e.length;
                    return e = e.map(function(e) {
                            return String(e)
                        }), i > 2 ? "one of ".concat(t, " ")
                        .concat(e.slice(0, i - 1)
                            .join(", "), ", or ") + e[i - 1] : 2 === i ? "one of ".concat(t, " ")
                        .concat(e[0], " or ")
                        .concat(e[1]) : "of ".concat(t, " ")
                        .concat(e[0])
                }
                return "of ".concat(t, " ")
                    .concat(String(e))
            }

            function en(e, t, i) {
                return e.substr(!i || i < 0 ? 0 : +i, t.length) === t
            }

            function tn(e, t, i) {
                return (void 0 === i || i > e.length) && (i = e.length), e.substring(i - t.length, i) === t
            }

            function nn(e, t, i) {
                return "number" != typeof i && (i = 0), !(i + t.length > e.length) && e.indexOf(t, i) !== -1
            }

            function on(e, t, i) {
                return null != e.highWaterMark ? e.highWaterMark : t ? e[i] : null
            }

            function an(e, t, i, n) {
                var o = on(t, n, i);
                if (null != o) {
                    if (!isFinite(o) || Math.floor(o) !== o || o < 0) {
                        var a = n ? i : "highWaterMark";
                        throw new Hc(a, o)
                    }
                    return Math.floor(o)
                }
                return e.objectMode ? 16 : 16384
            }

            function rn(e, t) {
                function i() {
                    if (!n) {
                        if (sn("throwDeprecation")) throw new Error(t);
                        sn("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                    }
                    return e.apply(this, arguments)
                }
                if (sn("noDeprecation")) return e;
                var n = !1;
                return i
            }

            function sn(e) {
                try {
                    if (!hr.localStorage) return !1
                } catch (t) {
                    return !1
                }
                var i = hr.localStorage[e];
                return null != i && "true" === String(i)
                    .toLowerCase()
            }

            function cn() {
                function e(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function() {
                        v(t, e)
                    }
                }

                function t(e) {
                    return T.from(e)
                }

                function i(e) {
                    return T.isBuffer(e) || e instanceof C
                }

                function n() {}

                function o(t, i, n) {
                    y = y || ln(), t = t || {}, "boolean" != typeof n && (n = i instanceof y), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = E(this, t, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                    var o = t.decodeStrings === !1;
                    this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                        h(i, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = t.emitClose !== !1, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this)
                }

                function a(e) {
                    y = y || ln();
                    var t = this instanceof y;
                    return t || F.call(a, this) ? (this._writableState = new o(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e["final"] && (this._final = e["final"])), void w.call(this)) : new a(e)
                }

                function r(e, t) {
                    var i = new W;
                    k(e, i), qs.nextTick(t, i)
                }

                function s(e, t, i, n) {
                    var o;
                    return null === i ? o = new D : "string" == typeof i || t.objectMode || (o = new N("chunk", ["string", "Buffer"], i)), !o || (k(e, o), qs.nextTick(n, o), !1)
                }

                function c(e, t, i) {
                    return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = T.from(t, i)), t
                }

                function l(e, t, i, n, o, a) {
                    if (!i) {
                        var r = c(t, n, o);
                        n !== r && (i = !0, o = "buffer", n = r)
                    }
                    var s = t.objectMode ? 1 : n.length;
                    t.length += s;
                    var l = t.length < t.highWaterMark;
                    if (l || (t.needDrain = !0), t.writing || t.corked) {
                        var u = t.lastBufferedRequest;
                        t.lastBufferedRequest = {
                            chunk: n,
                            encoding: o,
                            isBuf: i,
                            callback: a,
                            next: null
                        }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                    } else d(e, t, !1, s, n, o, a);
                    return l
                }

                function d(e, t, i, n, o, a, r) {
                    t.writelen = n, t.writecb = r, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new B("write")) : i ? e._writev(o, t.onwrite) : e._write(o, a, t.onwrite), t.sync = !1
                }

                function u(e, t, i, n, o) {
                    --t.pendingcb, i ? (qs.nextTick(o, n), qs.nextTick(A, e, t), e._writableState.errorEmitted = !0, k(e, n)) : (o(n), e._writableState.errorEmitted = !0, k(e, n), A(e, t))
                }

                function p(e) {
                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                }

                function h(e, t) {
                    var i = e._writableState,
                        n = i.sync,
                        o = i.writecb;
                    if ("function" != typeof o) throw new q;
                    if (p(i), t) u(e, i, n, t, o);
                    else {
                        var a = M(i) || e.destroyed;
                        a || i.corked || i.bufferProcessing || !i.bufferedRequest || m(e, i), n ? qs.nextTick(f, e, i, a, o) : f(e, i, a, o)
                    }
                }

                function f(e, t, i, n) {
                    i || b(e, t), t.pendingcb--, n(), A(e, t)
                }

                function b(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }

                function m(t, i) {
                    i.bufferProcessing = !0;
                    var n = i.bufferedRequest;
                    if (t._writev && n && n.next) {
                        var o = i.bufferedRequestCount,
                            a = new Array(o),
                            r = i.corkedRequestsFree;
                        r.entry = n;
                        for (var s = 0, c = !0; n;) a[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
                        a.allBuffers = c, d(t, i, !0, i.length, a, "", r.finish), i.pendingcb++, i.lastBufferedRequest = null, r.next ? (i.corkedRequestsFree = r.next, r.next = null) : i.corkedRequestsFree = new e(i), i.bufferedRequestCount = 0
                    } else {
                        for (; n;) {
                            var l = n.chunk,
                                u = n.encoding,
                                p = n.callback,
                                h = i.objectMode ? 1 : l.length;
                            if (d(t, i, !1, h, l, u, p), n = n.next, i.bufferedRequestCount--, i.writing) break
                        }
                        null === n && (i.lastBufferedRequest = null)
                    }
                    i.bufferedRequest = n, i.bufferProcessing = !1
                }

                function M(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }

                function g(e, t) {
                    e._final(function(i) {
                        t.pendingcb--, i && k(e, i), t.prefinished = !0, e.emit("prefinish"), A(e, t)
                    })
                }

                function _(e, t) {
                    t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, qs.nextTick(g, e, t)))
                }

                function A(e, t) {
                    var i = M(t);
                    if (i && (_(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                        var n = e._readableState;
                        (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                    }
                    return i
                }

                function O(e, t, i) {
                    t.ending = !0, A(e, t), i && (t.finished ? qs.nextTick(i) : e.once("finish", i)), t.ended = !0, e.writable = !1
                }

                function v(e, t, i) {
                    var n = e.entry;
                    for (e.entry = null; n;) {
                        var o = n.callback;
                        t.pendingcb--, o(i), n = n.next
                    }
                    t.corkedRequestsFree.next = e
                }
                if (Rc) return Nc;
                Rc = 1, Nc = a;
                var y;
                a.WritableState = o;
                var z = {
                        deprecate: Gc
                    },
                    w = Cc,
                    T = Rr.Buffer,
                    C = hr.Uint8Array || function() {},
                    I = Sc,
                    S = Uc,
                    E = S.getHighWaterMark,
                    L = Ec.codes,
                    N = L.ERR_INVALID_ARG_TYPE,
                    R = L.ERR_METHOD_NOT_IMPLEMENTED,
                    q = L.ERR_MULTIPLE_CALLBACK,
                    x = L.ERR_STREAM_CANNOT_PIPE,
                    B = L.ERR_STREAM_DESTROYED,
                    D = L.ERR_STREAM_NULL_VALUES,
                    W = L.ERR_STREAM_WRITE_AFTER_END,
                    P = L.ERR_UNKNOWN_ENCODING,
                    k = I.errorOrDestroy;
                tc(a, w), o.prototype.getBuffer = function() {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    },
                    function() {
                        try {
                            Object.defineProperty(o.prototype, "buffer", {
                                get: z.deprecate(function() {
                                    return this.getBuffer()
                                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }();
                var F;
                return "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (F = Function.prototype[Symbol.hasInstance], Object.defineProperty(a, Symbol.hasInstance, {
                    value: function(e) {
                        return !!F.call(this, e) || this === a && (e && e._writableState instanceof o)
                    }
                })) : F = function(e) {
                    return e instanceof this
                }, a.prototype.pipe = function() {
                    k(this, new x)
                }, a.prototype.write = function(e, o, a) {
                    var c = this._writableState,
                        d = !1,
                        u = !c.objectMode && i(e);
                    return u && !T.isBuffer(e) && (e = t(e)), "function" == typeof o && (a = o, o = null), u ? o = "buffer" : o || (o = c.defaultEncoding), "function" != typeof a && (a = n), c.ending ? r(this, a) : (u || s(this, c, e, a)) && (c.pendingcb++, d = l(this, c, u, e, o, a)), d
                }, a.prototype.cork = function() {
                    this._writableState.corked++
                }, a.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || m(this, e))
                }, a.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "")
                            .toLowerCase()) > -1)) throw new P(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(a.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(a.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), a.prototype._write = function(e, t, i) {
                    i(new R("_write()"))
                }, a.prototype._writev = null, a.prototype.end = function(e, t, i) {
                    var n = this._writableState;
                    return "function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || O(this, n, i), this
                }, Object.defineProperty(a.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(a.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), a.prototype.destroy = I.destroy, a.prototype._undestroy = I.undestroy, a.prototype._destroy = function(e, t) {
                    t(e)
                }, Nc
            }

            function ln() {
                function e(i) {
                    return this instanceof e ? (o.call(this, i), a.call(this, i), this.allowHalfOpen = !0, void(i && (i.readable === !1 && (this.readable = !1), i.writable === !1 && (this.writable = !1), i.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", t))))) : new e(i)
                }

                function t() {
                    this._writableState.ended || qs.nextTick(i, this)
                }

                function i(e) {
                    e.end()
                }
                if (xc) return qc;
                xc = 1;
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t
                };
                qc = e;
                var o = mn(),
                    a = cn();
                tc(e, o);
                for (var r = n(a.prototype), s = 0; s < r.length; s++) {
                    var c = r[s];
                    e.prototype[c] || (e.prototype[c] = a.prototype[c])
                }
                return Object.defineProperty(e.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), Object.defineProperty(e.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(e.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(e.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                    }
                }), qc
            }

            function dn(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                        e.apply(this, n)
                    }
                }
            }

            function un() {}

            function pn(e) {
                return e.setHeader && "function" == typeof e.abort
            }

            function hn(e, t, i) {
                if ("function" == typeof t) return hn(e, null, t);
                t || (t = {}), i = dn(i || un);
                var n = t.readable || t.readable !== !1 && e.readable,
                    o = t.writable || t.writable !== !1 && e.writable,
                    a = function() {
                        e.writable || s()
                    },
                    r = e._writableState && e._writableState.finished,
                    s = function() {
                        o = !1, r = !0, n || i.call(e)
                    },
                    c = e._readableState && e._readableState.endEmitted,
                    l = function() {
                        n = !1, c = !0, o || i.call(e)
                    },
                    d = function(t) {
                        i.call(e, t)
                    },
                    u = function() {
                        var t;
                        return n && !c ? (e._readableState && e._readableState.ended || (t = new jc), i.call(e, t)) : o && !r ? (e._writableState && e._writableState.ended || (t = new jc), i.call(e, t)) : void 0
                    },
                    p = function() {
                        e.req.on("finish", s)
                    };
                return pn(e) ? (e.on("complete", s), e.on("abort", u), e.req ? p() : e.on("request", p)) : o && !e._writableState && (e.on("end", a), e.on("close", a)), e.on("end", l), e.on("finish", s), t.error !== !1 && e.on("error", d), e.on("close", u),
                    function() {
                        e.removeListener("complete", s), e.removeListener("abort", u), e.removeListener("request", p), e.req && e.req.removeListener("finish", s), e.removeListener("end", a), e.removeListener("close", a), e.removeListener("finish", s), e.removeListener("end", l), e.removeListener("error", d), e.removeListener("close", u)
                    }
            }

            function fn() {
                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function t(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }

                function i(e) {
                    var i = e[s];
                    if (null !== i) {
                        var n = e[h].read();
                        null !== n && (e[u] = null, e[s] = null, e[c] = null, i(t(n, !1)))
                    }
                }

                function n(e) {
                    qs.nextTick(i, e)
                }

                function o(e, i) {
                    return function(n, o) {
                        e.then(function() {
                            return i[d] ? void n(t(void 0, !0)) : void i[p](n, o)
                        }, o)
                    }
                }
                if (Dc) return Bc;
                Dc = 1;
                var a, r = Yc,
                    s = Symbol("lastResolve"),
                    c = Symbol("lastReject"),
                    l = Symbol("error"),
                    d = Symbol("ended"),
                    u = Symbol("lastPromise"),
                    p = Symbol("handlePromise"),
                    h = Symbol("stream"),
                    f = Object.getPrototypeOf(function() {}),
                    b = Object.setPrototypeOf((a = {
                        get stream() {
                            return this[h]
                        },
                        next: function() {
                            var e = this,
                                i = this[l];
                            if (null !== i) return Promise.reject(i);
                            if (this[d]) return Promise.resolve(t(void 0, !0));
                            if (this[h].destroyed) return new Promise(function(i, n) {
                                qs.nextTick(function() {
                                    e[l] ? n(e[l]) : i(t(void 0, !0))
                                })
                            });
                            var n, a = this[u];
                            if (a) n = new Promise(o(a, this));
                            else {
                                var r = this[h].read();
                                if (null !== r) return Promise.resolve(t(r, !1));
                                n = new Promise(this[p])
                            }
                            return this[u] = n, n
                        }
                    }, e(a, Symbol.asyncIterator, function() {
                        return this
                    }), e(a, "return", function() {
                        var e = this;
                        return new Promise(function(i, n) {
                            e[h].destroy(null, function(e) {
                                return e ? void n(e) : void i(t(void 0, !0))
                            })
                        })
                    }), a), f),
                    m = function(i) {
                        var o, a = Object.create(b, (o = {}, e(o, h, {
                            value: i,
                            writable: !0
                        }), e(o, s, {
                            value: null,
                            writable: !0
                        }), e(o, c, {
                            value: null,
                            writable: !0
                        }), e(o, l, {
                            value: null,
                            writable: !0
                        }), e(o, d, {
                            value: i._readableState.endEmitted,
                            writable: !0
                        }), e(o, p, {
                            value: function(e, i) {
                                var n = a[h].read();
                                n ? (a[u] = null, a[s] = null, a[c] = null, e(t(n, !1))) : (a[s] = e, a[c] = i)
                            },
                            writable: !0
                        }), o));
                        return a[u] = null, r(i, function(e) {
                            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                var i = a[c];
                                return null !== i && (a[u] = null, a[s] = null, a[c] = null, i(e)), void(a[l] = e)
                            }
                            var n = a[s];
                            null !== n && (a[u] = null, a[s] = null, a[c] = null, n(t(void 0, !0))), a[d] = !0
                        }), i.on("readable", n.bind(null, a)), a
                    };
                return Bc = m
            }

            function bn() {
                return Pc ? Wc : (Pc = 1, Wc = function() {
                    throw new Error("Readable.from is not available in the browser")
                })
            }

            function mn() {
                function e(e) {
                    return S.from(e)
                }

                function t(e) {
                    return S.isBuffer(e) || e instanceof E
                }

                function i(e, t, i) {
                    return "function" == typeof e.prependListener ? e.prependListener(t, i) : void(e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i))
                }

                function n(e, t, i) {
                    w = w || ln(), e = e || {}, "boolean" != typeof i && (i = t instanceof w), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = W(this, e, "readableHighWaterMark", i), this.buffer = new x, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = e.emitClose !== !1, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (N || (N = Zs.StringDecoder), this.decoder = new N(e.encoding), this.encoding = e.encoding)
                }

                function o(e) {
                    if (w = w || ln(), !(this instanceof o)) return new o(e);
                    var t = this instanceof w;
                    this._readableState = new n(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), I.call(this)
                }

                function a(t, i, n, o, a) {
                    T("readableAddChunk", i);
                    var c = t._readableState;
                    if (null === i) c.reading = !1, d(t, c);
                    else {
                        var l;
                        if (a || (l = s(c, i)), l) G(t, l);
                        else if (c.objectMode || i && i.length > 0)
                            if ("string" == typeof i || c.objectMode || Object.getPrototypeOf(i) === S.prototype || (i = e(i)), o) c.endEmitted ? G(t, new U) : r(t, c, i, !0);
                            else if (c.ended) G(t, new F);
                        else {
                            if (c.destroyed) return !1;
                            c.reading = !1, c.decoder && !n ? (i = c.decoder.write(i), c.objectMode || 0 !== i.length ? r(t, c, i, !1) : h(t, c)) : r(t, c, i, !1)
                        } else o || (c.reading = !1, h(t, c))
                    }
                    return !c.ended && (c.length < c.highWaterMark || 0 === c.length)
                }

                function r(e, t, i, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", i)) : (t.length += t.objectMode ? 1 : i.length, n ? t.buffer.unshift(i) : t.buffer.push(i), t.needReadable && u(e)), h(e, t)
                }

                function s(e, i) {
                    var n;
                    return t(i) || "string" == typeof i || void 0 === i || e.objectMode || (n = new k("chunk", ["string", "Buffer", "Uint8Array"], i)), n
                }

                function c(e) {
                    return e >= Y ? e = Y : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }

                function l(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = c(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                }

                function d(e, t) {
                    if (T("onEofChunk"), !t.ended) {
                        if (t.decoder) {
                            var i = t.decoder.end();
                            i && i.length && (t.buffer.push(i), t.length += t.objectMode ? 1 : i.length)
                        }
                        t.ended = !0, t.sync ? u(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, p(e)))
                    }
                }

                function u(e) {
                    var t = e._readableState;
                    T("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (T("emitReadable", t.flowing), t.emittedReadable = !0, qs.nextTick(p, e))
                }

                function p(e) {
                    var t = e._readableState;
                    T("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, A(e)
                }

                function h(e, t) {
                    t.readingMore || (t.readingMore = !0, qs.nextTick(f, e, t))
                }

                function f(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                        var i = t.length;
                        if (T("maybeReadMore read 0"), e.read(0), i === t.length) break
                    }
                    t.readingMore = !1
                }

                function b(e) {
                    return function() {
                        var t = e._readableState;
                        T("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && C(e, "data") && (t.flowing = !0, A(e))
                    }
                }

                function m(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }

                function M(e) {
                    T("readable nexttick read 0"), e.read(0)
                }

                function g(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, qs.nextTick(_, e, t))
                }

                function _(e, t) {
                    T("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), A(e), t.flowing && !t.reading && e.read(0)
                }

                function A(e) {
                    var t = e._readableState;
                    for (T("flow", t.flowing); t.flowing && null !== e.read(););
                }

                function O(e, t) {
                    if (0 === t.length) return null;
                    var i;
                    return t.objectMode ? i = t.buffer.shift() : !e || e >= t.length ? (i = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : i = t.buffer.consume(e, t.decoder), i
                }

                function v(e) {
                    var t = e._readableState;
                    T("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, qs.nextTick(y, t, e))
                }

                function y(e, t) {
                    if (T("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                        var i = t._writableState;
                        (!i || i.autoDestroy && i.finished) && t.destroy()
                    }
                }

                function z(e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1
                }
                if (Fc) return kc;
                Fc = 1, kc = o;
                var w;
                o.ReadableState = n, Tc.EventEmitter;
                var T, C = function(e, t) {
                        return e.listeners(t)
                            .length
                    },
                    I = Cc,
                    S = Rr.Buffer,
                    E = hr.Uint8Array || function() {},
                    L = Ic;
                T = L && L.debuglog ? L.debuglog("stream") : function() {};
                var N, R, q, x = Gi(),
                    B = Sc,
                    D = Uc,
                    W = D.getHighWaterMark,
                    P = Ec.codes,
                    k = P.ERR_INVALID_ARG_TYPE,
                    F = P.ERR_STREAM_PUSH_AFTER_EOF,
                    H = P.ERR_METHOD_NOT_IMPLEMENTED,
                    U = P.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                tc(o, I);
                var G = B.errorOrDestroy,
                    j = ["error", "close", "destroy", "pause", "resume"];
                Object.defineProperty(o.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }), o.prototype.destroy = B.destroy, o.prototype._undestroy = B.undestroy, o.prototype._destroy = function(e, t) {
                    t(e)
                }, o.prototype.push = function(e, t) {
                    var i, n = this._readableState;
                    return n.objectMode ? i = !0 : "string" == typeof e && (t = t || n.defaultEncoding, t !== n.encoding && (e = S.from(e, t), t = ""), i = !0), a(this, e, t, !1, i)
                }, o.prototype.unshift = function(e) {
                    return a(this, e, null, !0, !1)
                }, o.prototype.isPaused = function() {
                    return this._readableState.flowing === !1
                }, o.prototype.setEncoding = function(e) {
                    N || (N = Zs.StringDecoder);
                    var t = new N(e);
                    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var i = this._readableState.buffer.head, n = ""; null !== i;) n += t.write(i.data), i = i.next;
                    return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
                };
                var Y = 1073741824;
                return o.prototype.read = function(e) {
                    T("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        i = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return T("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? v(this) : u(this), null;
                    if (e = l(e, t), 0 === e && t.ended) return 0 === t.length && v(this), null;
                    var n = t.needReadable;
                    T("need readable", n), (0 === t.length || t.length - e < t.highWaterMark) && (n = !0, T("length less than watermark", n)), t.ended || t.reading ? (n = !1, T("reading or ended", n)) : n && (T("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = l(i, t)));
                    var o;
                    return o = e > 0 ? O(e, t) : null, null === o ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), i !== e && t.ended && v(this)), null !== o && this.emit("data", o), o
                }, o.prototype._read = function(e) {
                    G(this, new H("_read()"))
                }, o.prototype.pipe = function(e, t) {
                    function n(e, t) {
                        T("onunpipe"), e === u && t && t.hasUnpiped === !1 && (t.hasUnpiped = !0, a())
                    }

                    function o() {
                        T("onend"), e.end()
                    }

                    function a() {
                        T("cleanup"), e.removeListener("close", c), e.removeListener("finish", l), e.removeListener("drain", m), e.removeListener("error", s), e.removeListener("unpipe", n), u.removeListener("end", o), u.removeListener("end", d), u.removeListener("data", r), M = !0, !p.awaitDrain || e._writableState && !e._writableState.needDrain || m()
                    }

                    function r(t) {
                        T("ondata");
                        var i = e.write(t);
                        T("dest.write", i), i === !1 && ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && z(p.pipes, e) !== -1) && !M && (T("false write response, pause", p.awaitDrain), p.awaitDrain++), u.pause())
                    }

                    function s(t) {
                        T("onerror", t), d(), e.removeListener("error", s), 0 === C(e, "error") && G(e, t)
                    }

                    function c() {
                        e.removeListener("finish", l), d()
                    }

                    function l() {
                        T("onfinish"), e.removeListener("close", c), d()
                    }

                    function d() {
                        T("unpipe"), u.unpipe(e)
                    }
                    var u = this,
                        p = this._readableState;
                    switch (p.pipesCount) {
                        case 0:
                            p.pipes = e;
                            break;
                        case 1:
                            p.pipes = [p.pipes, e];
                            break;
                        default:
                            p.pipes.push(e)
                    }
                    p.pipesCount += 1, T("pipe count=%d opts=%j", p.pipesCount, t);
                    var h = (!t || t.end !== !1) && e !== qs.stdout && e !== qs.stderr,
                        f = h ? o : d;
                    p.endEmitted ? qs.nextTick(f) : u.once("end", f), e.on("unpipe", n);
                    var m = b(u);
                    e.on("drain", m);
                    var M = !1;
                    return u.on("data", r), i(e, "error", s), e.once("close", c), e.once("finish", l), e.emit("pipe", u), p.flowing || (T("pipe resume"), u.resume()), e
                }, o.prototype.unpipe = function(e) {
                    var t = this._readableState,
                        i = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, i), this);
                    if (!e) {
                        var n = t.pipes,
                            o = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var a = 0; a < o; a++) n[a].emit("unpipe", this, {
                            hasUnpiped: !1
                        });
                        return this
                    }
                    var r = z(t.pipes, e);
                    return r === -1 ? this : (t.pipes.splice(r, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, i), this)
                }, o.prototype.on = function(e, t) {
                    var i = I.prototype.on.call(this, e, t),
                        n = this._readableState;
                    return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== !1 && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, T("on readable", n.length, n.reading), n.length ? u(this) : n.reading || qs.nextTick(M, this))), i
                }, o.prototype.addListener = o.prototype.on, o.prototype.removeListener = function(e, t) {
                    var i = I.prototype.removeListener.call(this, e, t);
                    return "readable" === e && qs.nextTick(m, this), i
                }, o.prototype.removeAllListeners = function(e) {
                    var t = I.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || qs.nextTick(m, this), t
                }, o.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (T("resume"), e.flowing = !e.readableListening, g(this, e)), e.paused = !1, this
                }, o.prototype.pause = function() {
                    return T("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (T("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                }, o.prototype.wrap = function(e) {
                    var t = this,
                        i = this._readableState,
                        n = !1;
                    e.on("end", function() {
                        if (T("wrapped end"), i.decoder && !i.ended) {
                            var e = i.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(o) {
                        if (T("wrapped data"), i.decoder && (o = i.decoder.write(o)), (!i.objectMode || null !== o && void 0 !== o) && (i.objectMode || o && o.length)) {
                            var a = t.push(o);
                            a || (n = !0, e.pause())
                        }
                    });
                    for (var o in e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    }(o));
                    for (var a = 0; a < j.length; a++) e.on(j[a], this.emit.bind(this, j[a]));
                    return this._read = function(t) {
                        T("wrapped _read", t), n && (n = !1, e.resume())
                    }, this
                }, "function" == typeof Symbol && (o.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === R && (R = fn()), R(this)
                }), Object.defineProperty(o.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }), Object.defineProperty(o.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }), Object.defineProperty(o.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }), o._fromList = O, Object.defineProperty(o.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }), "function" == typeof Symbol && (o.from = function(e, t) {
                    return void 0 === q && (q = bn()), q(o, e, t)
                }), kc
            }

            function Mn(e, t) {
                var i = this._transformState;
                i.transforming = !1;
                var n = i.writecb;
                if (null === n) return this.emit("error", new Kc);
                i.writechunk = null, i.writecb = null, null != t && this.push(t), n(e);
                var o = this._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
            }

            function gn(e) {
                return this instanceof gn ? ($c.call(this, e), this._transformState = {
                    afterTransform: Mn.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), void this.on("prefinish", _n)) : new gn(e)
            }

            function _n() {
                var e = this;
                "function" != typeof this._flush || this._readableState.destroyed ? An(this, null, null) : this._flush(function(t, i) {
                    An(e, t, i)
                })
            }

            function An(e, t, i) {
                if (t) return e.emit("error", t);
                if (null != i && e.push(i), e._writableState.length) throw new Zc;
                if (e._transformState.transforming) throw new Jc;
                return e.push(null)
            }

            function On(e) {
                return this instanceof On ? void tl.call(this, e) : new On(e)
            }

            function vn(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(void 0, arguments))
                }
            }

            function yn(e) {
                if (e) throw e
            }

            function zn(e) {
                return e.setHeader && "function" == typeof e.abort
            }

            function wn(e, t, i, n) {
                n = vn(n);
                var o = !1;
                e.on("close", function() {
                    o = !0
                }), void 0 === il && (il = Yc), il(e, {
                    readable: t,
                    writable: i
                }, function(e) {
                    return e ? n(e) : (o = !0, void n())
                });
                var a = !1;
                return function(t) {
                    if (!o && !a) return a = !0, zn(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void n(t || new al("pipe"))
                }
            }

            function Tn(e) {
                e()
            }

            function Cn(e, t) {
                return e.pipe(t)
            }

            function In(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? yn : e.pop() : yn
            }

            function Sn() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                var n = In(t);
                if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new ol("streams");
                var o, a = t.map(function(e, i) {
                    var r = i < t.length - 1,
                        s = i > 0;
                    return wn(e, r, s, function(e) {
                        o || (o = e), e && a.forEach(Tn), r || (a.forEach(Tn), n(o))
                    })
                });
                return t.reduce(Cn)
            }

            function En(e, t) {
                if (!sl.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
            }

            function Ln(e) {
                cl.call(this), this._block = sl.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
            }

            function Nn() {
                pl.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function Rn(e, t) {
                return e << t | e >>> 32 - t
            }

            function qn(e, t, i, n, o, a, r) {
                return Rn(e + (t & i | ~t & n) + o + a | 0, r) + t | 0
            }

            function xn(e, t, i, n, o, a, r) {
                return Rn(e + (t & n | i & ~n) + o + a | 0, r) + t | 0
            }

            function Bn(e, t, i, n, o, a, r) {
                return Rn(e + (t ^ i ^ n) + o + a | 0, r) + t | 0
            }

            function Dn(e, t, i, n, o, a, r) {
                return Rn(e + (i ^ (t | ~n)) + o + a | 0, r) + t | 0
            }

            function Wn(e, t, i, n) {
                if (ml.isBuffer(e) || (e = ml.from(e, "binary")), t && (ml.isBuffer(t) || (t = ml.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length");
                for (var o = i / 8, a = ml.alloc(o), r = ml.alloc(n || 0), s = ml.alloc(0); o > 0 || n > 0;) {
                    var c = new Ml;
                    c.update(s), c.update(e), t && c.update(t), s = c.digest();
                    var l = 0;
                    if (o > 0) {
                        var d = a.length - o;
                        l = Math.min(o, s.length), s.copy(a, d, 0, l), o -= l
                    }
                    if (l < s.length && n > 0) {
                        var u = r.length - n,
                            p = Math.min(n, s.length - l);
                        s.copy(r, u, l, l + p), n -= p
                    }
                }
                return s.fill(0), {
                    key: a,
                    iv: r
                }
            }

            function Pn(e, t, i) {
                yl.call(this), this._cache = new kn, this._cipher = new zl.AES(t), this._prev = Ol.from(i), this._mode = e, this._autopadding = !0
            }

            function kn() {
                this.cache = Ol.allocUnsafe(0)
            }

            function Fn(e, t, i) {
                var n = _l[e.toLowerCase()];
                if (!n) throw new TypeError("invalid suite type");
                if ("string" == typeof t && (t = Ol.from(t)), t.length !== n.key / 8) throw new TypeError("invalid key length " + t.length);
                if ("string" == typeof i && (i = Ol.from(i)), "GCM" !== n.mode && i.length !== n.iv) throw new TypeError("invalid iv length " + i.length);
                return "stream" === n.type ? new vl(n.module, t, i) : "auth" === n.type ? new Al(n.module, t, i) : new Pn(n.module, t, i)
            }

            function Hn(e, t) {
                var i = _l[e.toLowerCase()];
                if (!i) throw new TypeError("invalid suite type");
                var n = wl(t, !1, i.key, i.iv);
                return Fn(e, n.key, n.iv)
            }

            function Un(e, t, i) {
                Rl.call(this), this._cache = new Gn, this._last = void 0, this._cipher = new ql.AES(t), this._prev = El.from(i), this._mode = e, this._autopadding = !0
            }

            function Gn() {
                this.cache = El.allocUnsafe(0)
            }

            function jn(e) {
                var t = e[15];
                if (t < 1 || t > 16) throw new Error("unable to decrypt data");
                for (var i = -1; ++i < t;)
                    if (e[i + (16 - t)] !== t) throw new Error("unable to decrypt data");
                if (16 !== t) return e.slice(0, 16 - t)
            }

            function Yn(e, t, i) {
                var n = Ll[e.toLowerCase()];
                if (!n) throw new TypeError("invalid suite type");
                if ("string" == typeof i && (i = El.from(i)), "GCM" !== n.mode && i.length !== n.iv) throw new TypeError("invalid iv length " + i.length);
                if ("string" == typeof t && (t = El.from(t)), t.length !== n.key / 8) throw new TypeError("invalid key length " + t.length);
                return "stream" === n.type ? new Nl(n.module, t, i, (!0)) : "auth" === n.type ? new Sl(n.module, t, i, (!0)) : new Un(n.module, t, i)
            }

            function Xn(e, t) {
                var i = Ll[e.toLowerCase()];
                if (!i) throw new TypeError("invalid suite type");
                var n = xl(t, !1, i.key, i.iv);
                return Yn(e, n.key, n.iv)
            }

            function Vn() {
                return Object.keys(Pl)
            }

            function Qn(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }

            function Kn(e) {
                this.rand = e
            }

            function Jn(e, t) {
                this.type = e, this.p = new gd(t.p, 16), this.red = t.prime ? gd.red(t.prime) : gd.mont(this.p), this.zero = new gd(0)
                    .toRed(this.red), this.one = new gd(1)
                    .toRed(this.red), this.two = new gd(2)
                    .toRed(this.red), this.n = t.n && new gd(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var i = this.n && this.p.div(this.n);
                !i || i.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function Zn(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }

            function $n(e) {
                Cd.call(this, "short", e), this.a = new wd(e.a, 16)
                    .toRed(this.red), this.b = new wd(e.b, 16)
                    .toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed()
                    .cmpn(0), this.threeA = 0 === this.a.fromRed()
                    .sub(this.p)
                    .cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function eo(e, t, i, n) {
                Cd.BasePoint.call(this, e, "affine"), null === t && null === i ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new wd(t, 16), this.y = new wd(i, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function to(e, t, i, n) {
                Cd.BasePoint.call(this, e, "jacobian"), null === t && null === i && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new wd(0)) : (this.x = new wd(t, 16), this.y = new wd(i, 16), this.z = new wd(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }

            function io(e) {
                Nd.call(this, "mont", e), this.a = new Ed(e.a, 16)
                    .toRed(this.red), this.b = new Ed(e.b, 16)
                    .toRed(this.red), this.i4 = new Ed(4)
                    .toRed(this.red)
                    .redInvm(), this.two = new Ed(2)
                    .toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function no(e, t, i) {
                Nd.BasePoint.call(this, e, "projective"), null === t && null === i ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new Ed(t, 16), this.z = new Ed(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }

            function oo(e) {
                this.twisted = 1 !== (0 | e.a), this.mOneA = this.twisted && (0 | e.a) === -1, this.extended = this.mOneA, Wd.call(this, "edwards", e), this.a = new Bd(e.a, 16)
                    .umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new Bd(e.c, 16)
                    .toRed(this.red), this.c2 = this.c.redSqr(), this.d = new Bd(e.d, 16)
                    .toRed(this.red), this.dd = this.d.redAdd(this.d), Pd(!this.twisted || 0 === this.c.fromRed()
                        .cmpn(1)), this.oneC = 1 === (0 | e.c)
            }

            function ao(e, t, i, n, o) {
                Wd.BasePoint.call(this, e, "projective"), null === t && null === i && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new Bd(t, 16), this.y = new Bd(i, 16), this.z = n ? new Bd(n, 16) : this.curve.one, this.t = o && new Bd(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }

            function ro(e, t) {
                return 55296 === (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 === (64512 & e.charCodeAt(t + 1)))
            }

            function so(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var i = [];
                if ("string" == typeof e)
                    if (t) {
                        if ("hex" === t)
                            for (e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 !== 0 && (e = "0" + e), o = 0; o < e.length; o += 2) i.push(parseInt(e[o] + e[o + 1], 16))
                    } else
                        for (var n = 0, o = 0; o < e.length; o++) {
                            var a = e.charCodeAt(o);
                            a < 128 ? i[n++] = a : a < 2048 ? (i[n++] = a >> 6 | 192, i[n++] = 63 & a | 128) : ro(e, o) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++o)), i[n++] = a >> 18 | 240, i[n++] = a >> 12 & 63 | 128, i[n++] = a >> 6 & 63 | 128, i[n++] = 63 & a | 128) : (i[n++] = a >> 12 | 224, i[n++] = a >> 6 & 63 | 128, i[n++] = 63 & a | 128)
                        } else
                            for (o = 0; o < e.length; o++) i[o] = 0 | e[o];
                return i
            }

            function co(e) {
                for (var t = "", i = 0; i < e.length; i++) t += po(e[i].toString(16));
                return t
            }

            function lo(e) {
                var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24;
                return t >>> 0
            }

            function uo(e, t) {
                for (var i = "", n = 0; n < e.length; n++) {
                    var o = e[n];
                    "little" === t && (o = lo(o)), i += ho(o.toString(16))
                }
                return i
            }

            function po(e) {
                return 1 === e.length ? "0" + e : e
            }

            function ho(e) {
                return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
            }

            function fo(e, t, i, n) {
                var o = i - t;
                Gd(o % 4 === 0);
                for (var a = new Array(o / 4), r = 0, s = t; r < a.length; r++, s += 4) {
                    var c;
                    c = "big" === n ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s], a[r] = c >>> 0
                }
                return a
            }

            function bo(e, t) {
                for (var i = new Array(4 * e.length), n = 0, o = 0; n < e.length; n++, o += 4) {
                    var a = e[n];
                    "big" === t ? (i[o] = a >>> 24, i[o + 1] = a >>> 16 & 255, i[o + 2] = a >>> 8 & 255, i[o + 3] = 255 & a) : (i[o + 3] = a >>> 24, i[o + 2] = a >>> 16 & 255, i[o + 1] = a >>> 8 & 255, i[o] = 255 & a)
                }
                return i
            }

            function mo(e, t) {
                return e >>> t | e << 32 - t
            }

            function Mo(e, t) {
                return e << t | e >>> 32 - t
            }

            function go(e, t) {
                return e + t >>> 0
            }

            function _o(e, t, i) {
                return e + t + i >>> 0
            }

            function Ao(e, t, i, n) {
                return e + t + i + n >>> 0
            }

            function Oo(e, t, i, n, o) {
                return e + t + i + n + o >>> 0
            }

            function vo(e, t, i, n) {
                var o = e[t],
                    a = e[t + 1],
                    r = n + a >>> 0,
                    s = (r < n ? 1 : 0) + i + o;
                e[t] = s >>> 0, e[t + 1] = r
            }

            function yo(e, t, i, n) {
                var o = t + n >>> 0,
                    a = (o < t ? 1 : 0) + e + i;
                return a >>> 0
            }

            function zo(e, t, i, n) {
                var o = t + n;
                return o >>> 0
            }

            function wo(e, t, i, n, o, a, r, s) {
                var c = 0,
                    l = t;
                l = l + n >>> 0, c += l < t ? 1 : 0, l = l + a >>> 0, c += l < a ? 1 : 0, l = l + s >>> 0, c += l < s ? 1 : 0;
                var d = e + i + o + r + c;
                return d >>> 0
            }

            function To(e, t, i, n, o, a, r, s) {
                var c = t + n + a + s;
                return c >>> 0
            }

            function Co(e, t, i, n, o, a, r, s, c, l) {
                var d = 0,
                    u = t;
                u = u + n >>> 0, d += u < t ? 1 : 0, u = u + a >>> 0, d += u < a ? 1 : 0, u = u + s >>> 0, d += u < s ? 1 : 0, u = u + l >>> 0, d += u < l ? 1 : 0;
                var p = e + i + o + r + c + d;
                return p >>> 0
            }

            function Io(e, t, i, n, o, a, r, s, c, l) {
                var d = t + n + a + s + l;
                return d >>> 0
            }

            function So(e, t, i) {
                var n = t << 32 - i | e >>> i;
                return n >>> 0
            }

            function Eo(e, t, i) {
                var n = e << 32 - i | t >>> i;
                return n >>> 0
            }

            function Lo(e, t, i) {
                return e >>> i
            }

            function No(e, t, i) {
                var n = e << 32 - i | t >>> i;
                return n >>> 0
            }

            function Ro() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }

            function qo(e, t, i, n) {
                return 0 === e ? xo(t, i, n) : 1 === e || 3 === e ? Do(t, i, n) : 2 === e ? Bo(t, i, n) : void 0
            }

            function xo(e, t, i) {
                return e & t ^ ~e & i
            }

            function Bo(e, t, i) {
                return e & t ^ e & i ^ t & i
            }

            function Do(e, t, i) {
                return e ^ t ^ i
            }

            function Wo(e) {
                return Zd(e, 2) ^ Zd(e, 13) ^ Zd(e, 22)
            }

            function Po(e) {
                return Zd(e, 6) ^ Zd(e, 11) ^ Zd(e, 25)
            }

            function ko(e) {
                return Zd(e, 7) ^ Zd(e, 18) ^ e >>> 3
            }

            function Fo(e) {
                return Zd(e, 17) ^ Zd(e, 19) ^ e >>> 10
            }

            function Ho() {
                return this instanceof Ho ? (ru.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.W = new Array(80))) : new Ho
            }

            function Uo() {
                return this instanceof Uo ? (vu.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = yu, void(this.W = new Array(64))) : new Uo
            }

            function Go() {
                return this instanceof Go ? (Tu.call(this), void(this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])) : new Go
            }

            function jo() {
                return this instanceof jo ? (Hu.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = Uu, void(this.W = new Array(160))) : new jo
            }

            function Yo(e, t, i, n, o) {
                var a = e & i ^ ~e & o;
                return a < 0 && (a += 4294967296), a
            }

            function Xo(e, t, i, n, o, a) {
                var r = t & n ^ ~t & a;
                return r < 0 && (r += 4294967296), r
            }

            function Vo(e, t, i, n, o) {
                var a = e & i ^ e & o ^ i & o;
                return a < 0 && (a += 4294967296), a
            }

            function Qo(e, t, i, n, o, a) {
                var r = t & n ^ t & a ^ n & a;
                return r < 0 && (r += 4294967296), r
            }

            function Ko(e, t) {
                var i = Lu(e, t, 28),
                    n = Lu(t, e, 2),
                    o = Lu(t, e, 7),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function Jo(e, t) {
                var i = Nu(e, t, 28),
                    n = Nu(t, e, 2),
                    o = Nu(t, e, 7),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function Zo(e, t) {
                var i = Lu(e, t, 14),
                    n = Lu(e, t, 18),
                    o = Lu(t, e, 9),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function $o(e, t) {
                var i = Nu(e, t, 14),
                    n = Nu(e, t, 18),
                    o = Nu(t, e, 9),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function ea(e, t) {
                var i = Lu(e, t, 1),
                    n = Lu(e, t, 8),
                    o = Ru(e, t, 7),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function ta(e, t) {
                var i = Nu(e, t, 1),
                    n = Nu(e, t, 8),
                    o = qu(e, t, 7),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function ia(e, t) {
                var i = Lu(e, t, 19),
                    n = Lu(t, e, 29),
                    o = Ru(e, t, 6),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function na(e, t) {
                var i = Nu(e, t, 19),
                    n = Nu(t, e, 29),
                    o = qu(e, t, 6),
                    a = i ^ n ^ o;
                return a < 0 && (a += 4294967296), a
            }

            function oa() {
                return this instanceof oa ? (Yu.call(this), void(this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])) : new oa
            }

            function aa() {
                return this instanceof aa ? (tp.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void(this.endian = "little")) : new aa
            }

            function ra(e, t, i, n) {
                return e <= 15 ? t ^ i ^ n : e <= 31 ? t & i | ~t & n : e <= 47 ? (t | ~i) ^ n : e <= 63 ? t & n | i & ~n : t ^ (i | ~n)
            }

            function sa(e) {
                return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
            }

            function ca(e) {
                return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
            }

            function la(e, t, i) {
                return this instanceof la ? (this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, void this._init(rp.toArray(t, i))) : new la(e, t, i)
            }

            function da() {
                return dp ? lp : (dp = 1, lp = {
                    doubles: {
                        step: 4,
                        points: [
                            ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                            ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                            ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                            ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                            ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                            ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                            ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                            ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                            ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                            ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                            ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                            ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                            ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                            ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                            ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                            ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                            ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                            ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                            ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                            ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                            ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                            ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                            ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                            ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                            ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                            ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                            ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                            ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                            ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                            ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                            ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                            ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                            ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                            ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                            ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                            ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                            ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                            ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                            ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                            ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                            ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                            ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                            ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                            ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                            ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                            ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                            ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                            ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                            ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                            ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                            ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                            ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                            ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                            ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                            ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                            ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                            ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                            ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                            ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                            ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                            ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                            ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                            ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                            ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                            ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                        ]
                    },
                    naf: {
                        wnd: 7,
                        points: [
                            ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                            ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                            ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                            ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                            ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                            ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                            ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                            ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                            ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                            ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                            ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                            ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                            ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                            ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                            ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                            ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                            ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                            ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                            ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                            ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                            ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                            ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                            ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                            ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                            ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                            ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                            ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                            ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                            ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                            ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                            ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                            ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                            ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                            ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                            ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                            ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                            ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                            ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                            ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                            ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                            ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                            ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                            ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                            ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                            ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                            ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                            ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                            ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                            ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                            ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                            ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                            ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                            ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                            ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                            ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                            ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                            ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                            ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                            ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                            ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                            ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                            ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                            ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                            ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                            ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                            ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                            ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                            ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                            ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                            ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                            ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                            ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                            ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                            ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                            ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                            ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                            ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                            ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                            ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                            ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                            ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                            ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                            ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                            ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                            ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                            ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                            ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                            ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                            ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                            ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                            ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                            ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                            ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                            ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                            ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                            ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                            ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                            ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                            ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                            ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                            ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                            ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                            ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                            ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                            ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                            ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                            ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                            ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                            ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                            ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                            ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                            ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                            ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                            ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                            ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                            ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                            ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                            ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                            ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                            ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                            ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                            ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                            ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                            ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                            ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                            ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                            ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                        ]
                    }
                })
            }

            function ua(e) {
                if (!(this instanceof ua)) return new ua(e);
                this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var t = pp.toArray(e.entropy, e.entropyEnc || "hex"),
                    i = pp.toArray(e.nonce, e.nonceEnc || "hex"),
                    n = pp.toArray(e.pers, e.persEnc || "hex");
                hp(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, i, n)
            }

            function pa(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }

            function ha(e, t) {
                return e instanceof ha ? e : void(this._importDER(e, t) || (Op(e.r && e.s, "Signature without r or s"), this.r = new _p(e.r, 16), this.s = new _p(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam))
            }

            function fa() {
                this.place = 0
            }

            function ba(e, t) {
                var i = e[t.place++];
                if (!(128 & i)) return i;
                var n = 15 & i;
                if (0 === n || n > 4) return !1;
                for (var o = 0, a = 0, r = t.place; a < n; a++, r++) o <<= 8, o |= e[r], o >>>= 0;
                return !(o <= 127) && (t.place = r, o)
            }

            function ma(e) {
                for (var t = 0, i = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < i;) t++;
                return 0 === t ? e : e.slice(t)
            }

            function Ma(e, t) {
                if (t < 128) return void e.push(t);
                var i = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | i); --i;) e.push(t >>> (i << 3) & 255);
                e.push(t)
            }

            function ga(e) {
                return this instanceof ga ? ("string" == typeof e && (Ip(Object.prototype.hasOwnProperty.call(Tp, e), "Unknown curve " + e), e = Tp[e]), e instanceof Tp.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), void(this.hash = e.hash || e.curve.hash)) : new ga(e)
            }

            function _a(e, t) {
                this.eddsa = e, this._secret = qp(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = qp(t.pub)
            }

            function Aa(e, t) {
                this.eddsa = e, "object" != typeof t && (t = Fp(t)), Array.isArray(t) && (t = {
                    R: t.slice(0, e.encodingLength),
                    S: t.slice(e.encodingLength)
                }), Pp(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof Dp && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
            }

            function Oa(e) {
                return Yp("ed25519" === e, "only tested with ed25519 so far"), this instanceof Oa ? (e = Gp[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point()
                    .constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), void(this.hash = Up.sha512)) : new Oa(e)
            }

            function va(e) {
                this.curveType = eh[e], this.curveType || (this.curveType = {
                    name: e
                }), this.curve = new Jp.ec(this.curveType.name), this.keys = void 0
            }

            function ya(e, t, i) {
                Array.isArray(e) || (e = e.toArray());
                var n = new p(e);
                if (i && n.length < i) {
                    var o = new p(i - n.length);
                    o.fill(0), n = p.concat([o, n])
                }
                return t ? n.toString(t) : n
            }

            function za() {
                dh.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
            }

            function wa(e, t) {
                return e << t | e >>> 32 - t
            }

            function Ta(e, t, i, n, o, a, r, s) {
                return wa(e + (t ^ i ^ n) + a + r | 0, s) + o | 0
            }

            function Ca(e, t, i, n, o, a, r, s) {
                return wa(e + (t & i | ~t & n) + a + r | 0, s) + o | 0
            }

            function Ia(e, t, i, n, o, a, r, s) {
                return wa(e + ((t | ~i) ^ n) + a + r | 0, s) + o | 0
            }

            function Sa(e, t, i, n, o, a, r, s) {
                return wa(e + (t & n | i & ~n) + a + r | 0, s) + o | 0
            }

            function Ea(e, t, i, n, o, a, r, s) {
                return wa(e + (t ^ (i | ~n)) + a + r | 0, s) + o | 0
            }

            function La(e, t) {
                this._block = Ah.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
            }

            function Na() {
                this.init(), this._w = Th, yh.call(this, 64, 56)
            }

            function Ra(e) {
                return e << 5 | e >>> 27
            }

            function qa(e) {
                return e << 30 | e >>> 2
            }

            function xa(e, t, i, n) {
                return 0 === e ? t & i | ~t & n : 2 === e ? t & i | t & n | i & n : t ^ i ^ n
            }

            function Ba() {
                this.init(), this._w = Nh, Sh.call(this, 64, 56)
            }

            function Da(e) {
                return e << 1 | e >>> 31
            }

            function Wa(e) {
                return e << 5 | e >>> 27
            }

            function Pa(e) {
                return e << 30 | e >>> 2
            }

            function ka(e, t, i, n) {
                return 0 === e ? t & i | ~t & n : 2 === e ? t & i | t & n | i & n : t ^ i ^ n
            }

            function Fa() {
                this.init(), this._w = Wh, xh.call(this, 64, 56)
            }

            function Ha(e, t, i) {
                return i ^ e & (t ^ i)
            }

            function Ua(e, t, i) {
                return e & t | i & (e | t)
            }

            function Ga(e) {
                return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
            }

            function ja(e) {
                return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
            }

            function Ya(e) {
                return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
            }

            function Xa(e) {
                return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
            }

            function Va() {
                this.init(), this._w = Gh, Hh.call(this, 64, 56)
            }

            function Qa() {
                this.init(), this._w = Kh, Xh.call(this, 128, 112)
            }

            function Ka(e, t, i) {
                return i ^ e & (t ^ i)
            }

            function Ja(e, t, i) {
                return e & t | i & (e | t)
            }

            function Za(e, t) {
                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
            }

            function $a(e, t) {
                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
            }

            function er(e, t) {
                return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
            }

            function tr(e, t) {
                return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
            }

            function ir(e, t) {
                return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
            }

            function nr(e, t) {
                return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
            }

            function or(e, t) {
                return e >>> 0 < t >>> 0 ? 1 : 0
            }

            function ar() {
                this.init(), this._w = nf, ef.call(this, 128, 112)
            }

            function rr(e, t, i) {
                var n = sr(e),
                    o = "sha512" === e || "sha384" === e ? 128 : 64;
                t.length > o ? t = n(t) : t.length < o && (t = uf.concat([t, bf], o));
                for (var a = uf.allocUnsafe(o + mf[e]), r = uf.allocUnsafe(o + mf[e]), s = 0; s < o; s++) a[s] = 54 ^ t[s], r[s] = 92 ^ t[s];
                var c = uf.allocUnsafe(o + i + 4);
                a.copy(c, 0, 0, o), this.ipad1 = c, this.ipad2 = a, this.opad = r, this.alg = e, this.blocksize = o, this.hash = n, this.size = mf[e]
            }

            function sr(e) {
                function t(t) {
                    return df(e)
                        .update(t)
                        .digest()
                }

                function i(e) {
                    return (new lf)
                        .update(e)
                        .digest()
                }
                return "rmd160" === e || "ripemd160" === e ? i : "md5" === e ? cf : t
            }

            function cr(e, t, i, n, o) {
                pf(i, n), e = ff(e, hf, "Password"), t = ff(t, hf, "Salt"), o = o || "sha1";
                var a = new rr(o, e, t.length),
                    r = uf.allocUnsafe(n),
                    s = uf.allocUnsafe(t.length + 4);
                t.copy(s, 0, 0, t.length);
                for (var c = 0, l = mf[o], d = Math.ceil(n / l), u = 1; u <= d; u++) {
                    s.writeUInt32BE(u, t.length);
                    for (var p = a.run(s, a.ipad1), h = p, f = 1; f < i; f++) {
                        h = a.run(h, a.ipad2);
                        for (var b = 0; b < l; b++) p[b] ^= h[b]
                    }
                    p.copy(r, c), c += l
                }
                return r
            }

            function lr(e) {
                if (hr.process && !hr.process.browser) return Promise.resolve(!1);
                if (!wf || !wf.importKey || !wf.deriveBits) return Promise.resolve(!1);
                if (void 0 !== Cf[e]) return Cf[e];
                Mf = Mf || Af.alloc(8);
                var t = ur(Mf, Mf, 10, 128, e)
                    .then(function() {
                        return !0
                    })["catch"](function() {
                        return !1
                    });
                return Cf[e] = t, t
            }

            function dr() {
                return gf ? gf : gf = hr.process && hr.process.nextTick ? hr.process.nextTick : hr.queueMicrotask ? hr.queueMicrotask : hr.setImmediate ? hr.setImmediate : hr.setTimeout
            }

            function ur(e, t, i, n, o) {
                return wf.importKey("raw", e, {
                        name: "PBKDF2"
                    }, !1, ["deriveBits"])
                    .then(function(e) {
                        return wf.deriveBits({
                            name: "PBKDF2",
                            salt: t,
                            iterations: i,
                            hash: {
                                name: o
                            }
                        }, e, n << 3)
                    })
                    .then(function(e) {
                        return Af.from(e)
                    })
            }

            function pr(e, t) {
                e.then(function(e) {
                    dr()(function() {
                        t(null, e)
                    })
                }, function(e) {
                    dr()(function() {
                        t(e)
                    })
                })
            }
            var hr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {},
                fr = {},
                br = {};
            br.encrypt = function(e, t) {
                return e._cipher.encryptBlock(t)
            }, br.decrypt = function(e, t) {
                return e._cipher.decryptBlock(t)
            };
            var mr = {},
                Mr = "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                gr = [],
                _r = [],
                Ar = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                Or = !1,
                vr = {}.toString,
                yr = Array.isArray || function(e) {
                    return "[object Array]" == vr.call(e)
                },
                zr = 50;
            p.TYPED_ARRAY_SUPPORT = void 0 === Mr.TYPED_ARRAY_SUPPORT || Mr.TYPED_ARRAY_SUPPORT;
            var wr = d();
            p.poolSize = 8192, p._augment = function(e) {
                return e.__proto__ = p.prototype, e
            }, p.from = function(e, t, i) {
                return h(null, e, t, i)
            }, p.TYPED_ARRAY_SUPPORT && (p.prototype.__proto__ = Uint8Array.prototype, p.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && p[Symbol.species] === p), p.alloc = function(e, t, i) {
                return b(null, e, t, i)
            }, p.allocUnsafe = function(e) {
                return m(null, e)
            }, p.allocUnsafeSlow = function(e) {
                return m(null, e)
            }, p.isBuffer = oe, p.compare = function(e, t) {
                if (!y(e) || !y(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var i = e.length, n = t.length, o = 0, a = Math.min(i, n); o < a; ++o)
                    if (e[o] !== t[o]) {
                        i = e[o], n = t[o];
                        break
                    } return i < n ? -1 : n < i ? 1 : 0
            }, p.isEncoding = function(e) {
                switch (String(e)
                    .toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, p.concat = function(e, t) {
                if (!yr(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return p.alloc(0);
                var i;
                if (void 0 === t)
                    for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
                var n = p.allocUnsafe(t),
                    o = 0;
                for (i = 0; i < e.length; ++i) {
                    var a = e[i];
                    if (!y(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, o), o += a.length
                }
                return n
            }, p.byteLength = z, p.prototype._isBuffer = !0, p.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) T(this, t, t + 1);
                return this
            }, p.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) T(this, t, t + 3), T(this, t + 1, t + 2);
                return this
            }, p.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) T(this, t, t + 7), T(this, t + 1, t + 6), T(this, t + 2, t + 5), T(this, t + 3, t + 4);
                return this
            }, p.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? B(this, 0, e) : w.apply(this, arguments)
            }, p.prototype.equals = function(e) {
                if (!y(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === p.compare(this, e)
            }, p.prototype.inspect = function() {
                var e = "",
                    t = zr;
                return this.length > 0 && (e = this.toString("hex", 0, t)
                    .match(/.{2}/g)
                    .join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, p.prototype.compare = function(e, t, i, n, o) {
                if (!y(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === i && (i = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || i > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && t >= i) return 0;
                if (n >= o) return -1;
                if (t >= i) return 1;
                if (t >>>= 0, i >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
                for (var a = o - n, r = i - t, s = Math.min(a, r), c = this.slice(n, o), l = e.slice(t, i), d = 0; d < s; ++d)
                    if (c[d] !== l[d]) {
                        a = c[d], r = l[d];
                        break
                    } return a < r ? -1 : r < a ? 1 : 0
            }, p.prototype.includes = function(e, t, i) {
                return this.indexOf(e, t, i) !== -1
            }, p.prototype.indexOf = function(e, t, i) {
                return C(this, e, t, i, !0)
            }, p.prototype.lastIndexOf = function(e, t, i) {
                return C(this, e, t, i, !1)
            }, p.prototype.write = function(e, t, i, n) {
                if (void 0 === t) n = "utf8", i = this.length, t = 0;
                else if (void 0 === i && "string" == typeof t) n = t, i = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t = 0 | t, isFinite(i) ? (i = 0 | i, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
                }
                var o = this.length - t;
                if ((void 0 === i || i > o) && (i = o), e.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var a = !1;;) switch (n) {
                    case "hex":
                        return S(this, e, t, i);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, t, i);
                    case "ascii":
                        return L(this, e, t, i);
                    case "latin1":
                    case "binary":
                        return N(this, e, t, i);
                    case "base64":
                        return R(this, e, t, i);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return q(this, e, t, i);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n)
                            .toLowerCase(), a = !0
                }
            }, p.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var Tr = 4096;
            p.prototype.slice = function(e, t) {
                var i = this.length;
                e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < e && (t = e);
                var n;
                if (p.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = p.prototype;
                else {
                    var o = t - e;
                    n = new p(o, (void 0));
                    for (var a = 0; a < o; ++a) n[a] = this[a + e]
                }
                return n
            }, p.prototype.readUIntLE = function(e, t, i) {
                e = 0 | e, t = 0 | t, i || H(e, t, this.length);
                for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256);) n += this[e + a] * o;
                return n
            }, p.prototype.readUIntBE = function(e, t, i) {
                e = 0 | e, t = 0 | t, i || H(e, t, this.length);
                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, p.prototype.readUInt8 = function(e, t) {
                return t || H(e, 1, this.length), this[e]
            }, p.prototype.readUInt16LE = function(e, t) {
                return t || H(e, 2, this.length), this[e] | this[e + 1] << 8
            }, p.prototype.readUInt16BE = function(e, t) {
                return t || H(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, p.prototype.readUInt32LE = function(e, t) {
                return t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, p.prototype.readUInt32BE = function(e, t) {
                return t || H(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, p.prototype.readIntLE = function(e, t, i) {
                e = 0 | e, t = 0 | t, i || H(e, t, this.length);
                for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256);) n += this[e + a] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n
            }, p.prototype.readIntBE = function(e, t, i) {
                e = 0 | e, t = 0 | t, i || H(e, t, this.length);
                for (var n = t, o = 1, a = this[e + --n]; n > 0 && (o *= 256);) a += this[e + --n] * o;
                return o *= 128, a >= o && (a -= Math.pow(2, 8 * t)), a
            }, p.prototype.readInt8 = function(e, t) {
                return t || H(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
            }, p.prototype.readInt16LE = function(e, t) {
                t || H(e, 2, this.length);
                var i = this[e] | this[e + 1] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, p.prototype.readInt16BE = function(e, t) {
                t || H(e, 2, this.length);
                var i = this[e + 1] | this[e] << 8;
                return 32768 & i ? 4294901760 | i : i
            }, p.prototype.readInt32LE = function(e, t) {
                return t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, p.prototype.readInt32BE = function(e, t) {
                return t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, p.prototype.readFloatLE = function(e, t) {
                return t || H(e, 4, this.length), c(this, e, !0, 23, 4)
            }, p.prototype.readFloatBE = function(e, t) {
                return t || H(e, 4, this.length), c(this, e, !1, 23, 4)
            }, p.prototype.readDoubleLE = function(e, t) {
                return t || H(e, 8, this.length), c(this, e, !0, 52, 8)
            }, p.prototype.readDoubleBE = function(e, t) {
                return t || H(e, 8, this.length), c(this, e, !1, 52, 8)
            }, p.prototype.writeUIntLE = function(e, t, i, n) {
                if (e = +e, t = 0 | t, i = 0 | i, !n) {
                    var o = Math.pow(2, 8 * i) - 1;
                    U(this, e, t, i, o, 0)
                }
                var a = 1,
                    r = 0;
                for (this[t] = 255 & e; ++r < i && (a *= 256);) this[t + r] = e / a & 255;
                return t + i
            }, p.prototype.writeUIntBE = function(e, t, i, n) {
                if (e = +e, t = 0 | t, i = 0 | i, !n) {
                    var o = Math.pow(2, 8 * i) - 1;
                    U(this, e, t, i, o, 0)
                }
                var a = i - 1,
                    r = 1;
                for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) this[t + a] = e / r & 255;
                return t + i
            }, p.prototype.writeUInt8 = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 1, 255, 0), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, p.prototype.writeUInt16LE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : G(this, e, t, !0), t + 2
            }, p.prototype.writeUInt16BE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : G(this, e, t, !1), t + 2
            }, p.prototype.writeUInt32LE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4
            }, p.prototype.writeUInt32BE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
            }, p.prototype.writeIntLE = function(e, t, i, n) {
                if (e = +e, t = 0 | t, !n) {
                    var o = Math.pow(2, 8 * i - 1);
                    U(this, e, t, i, o - 1, -o)
                }
                var a = 0,
                    r = 1,
                    s = 0;
                for (this[t] = 255 & e; ++a < i && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
                return t + i
            }, p.prototype.writeIntBE = function(e, t, i, n) {
                if (e = +e, t = 0 | t, !n) {
                    var o = Math.pow(2, 8 * i - 1);
                    U(this, e, t, i, o - 1, -o)
                }
                var a = i - 1,
                    r = 1,
                    s = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
                return t + i
            }, p.prototype.writeInt8 = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 1, 127, -128), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, p.prototype.writeInt16LE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : G(this, e, t, !0), t + 2
            }, p.prototype.writeInt16BE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : G(this, e, t, !1), t + 2
            }, p.prototype.writeInt32LE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 4, 2147483647, -2147483648), p.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
            }, p.prototype.writeInt32BE = function(e, t, i) {
                return e = +e, t = 0 | t, i || U(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
            }, p.prototype.writeFloatLE = function(e, t, i) {
                return X(this, e, t, !0, i)
            }, p.prototype.writeFloatBE = function(e, t, i) {
                return X(this, e, t, !1, i)
            }, p.prototype.writeDoubleLE = function(e, t, i) {
                return V(this, e, t, !0, i)
            }, p.prototype.writeDoubleBE = function(e, t, i) {
                return V(this, e, t, !1, i)
            }, p.prototype.copy = function(e, t, i, n) {
                if (i || (i = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < i && (n = i), n === i) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i);
                var o, a = n - i;
                if (this === e && i < t && t < n)
                    for (o = a - 1; o >= 0; --o) e[o + t] = this[o + i];
                else if (a < 1e3 || !p.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < a; ++o) e[o + t] = this[o + i];
                else Uint8Array.prototype.set.call(e, this.subarray(i, i + a), t);
                return a
            }, p.prototype.fill = function(e, t, i, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !p.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e = 255 & e);
                if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
                if (i <= t) return this;
                t >>>= 0, i = void 0 === i ? this.length : i >>> 0, e || (e = 0);
                var a;
                if ("number" == typeof e)
                    for (a = t; a < i; ++a) this[a] = e;
                else {
                    var r = y(e) ? e : Z(new p(e, n)
                            .toString()),
                        s = r.length;
                    for (a = 0; a < i - t; ++a) this[a + t] = r[a % s]
                }
                return this
            };
            var Cr = /[^+\/0-9A-Za-z-_]/g,
                Ir = Object.freeze({
                    __proto__: null,
                    Buffer: p,
                    INSPECT_MAX_BYTES: zr,
                    SlowBuffer: v,
                    isBuffer: oe,
                    kMaxLength: wr
                }),
                Sr = function(e, t) {
                    for (var i = Math.min(e.length, t.length), n = new p(i), o = 0; o < i; ++o) n[o] = e[o] ^ t[o];
                    return n
                },
                Er = Sr;
            mr.encrypt = function(e, t) {
                var i = Er(t, e._prev);
                return e._prev = e._cipher.encryptBlock(i), e._prev
            }, mr.decrypt = function(e, t) {
                var i = e._prev;
                e._prev = t;
                var n = e._cipher.decryptBlock(t);
                return Er(n, i)
            };
            var Lr = {},
                Nr = {
                    exports: {}
                },
                Rr = i(Ir); /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            ! function(e, t) {
                function i(e, t) {
                    for (var i in e) t[i] = e[i]
                }

                function n(e, t, i) {
                    return a(e, t, i)
                }
                var o = Rr,
                    a = o.Buffer;
                a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = o : (i(o, t), t.Buffer = n), n.prototype = Object.create(a.prototype), i(a, n), n.from = function(e, t, i) {
                    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                    return a(e, t, i)
                }, n.alloc = function(e, t, i) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    var n = a(e);
                    return void 0 !== t ? "string" == typeof i ? n.fill(t, i) : n.fill(t) : n.fill(0), n
                }, n.allocUnsafe = function(e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return a(e)
                }, n.allocUnsafeSlow = function(e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return o.SlowBuffer(e)
                }
            }(Nr, Nr.exports);
            var qr = Nr.exports.Buffer,
                xr = Sr;
            Lr.encrypt = function(e, t, i) {
                for (var n, o = qr.allocUnsafe(0); t.length;) {
                    if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = qr.allocUnsafe(0)), !(e._cache.length <= t.length)) {
                        o = qr.concat([o, se(e, t, i)]);
                        break
                    }
                    n = e._cache.length, o = qr.concat([o, se(e, t.slice(0, n), i)]), t = t.slice(n)
                }
                return o
            };
            var Br = {},
                Dr = Nr.exports.Buffer;
            Br.encrypt = function(e, t, i) {
                for (var n = t.length, o = Dr.allocUnsafe(n), a = -1; ++a < n;) o[a] = ce(e, t[a], i);
                return o
            };
            var Wr = {},
                Pr = Nr.exports.Buffer;
            Wr.encrypt = function(e, t, i) {
                for (var n = t.length, o = Pr.allocUnsafe(n), a = -1; ++a < n;) o[a] = le(e, t[a], i);
                return o
            };
            var kr = {},
                Fr = Sr;
            kr.encrypt = function(e, t) {
                for (; e._cache.length < t.length;) e._cache = p.concat([e._cache, ue(e)]);
                var i = e._cache.slice(0, t.length);
                return e._cache = e._cache.slice(t.length), Fr(t, i)
            };
            var Hr = {},
                Ur = pe,
                Gr = Sr,
                jr = Nr.exports.Buffer,
                Yr = Ur,
                Xr = 16;
            Hr.encrypt = function(e, t) {
                var i = Math.ceil(t.length / Xr),
                    n = e._cache.length;
                e._cache = jr.concat([e._cache, jr.allocUnsafe(i * Xr)]);
                for (var o = 0; o < i; o++) {
                    var a = he(e),
                        r = n + o * Xr;
                    e._cache.writeUInt32BE(a[0], r + 0), e._cache.writeUInt32BE(a[1], r + 4), e._cache.writeUInt32BE(a[2], r + 8), e._cache.writeUInt32BE(a[3], r + 12)
                }
                var s = e._cache.slice(0, t.length);
                return e._cache = e._cache.slice(t.length), Gr(t, s)
            };
            var Vr = {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                Qr = {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                Kr = {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                Jr = {
                    "aes-128-ecb": {
                        cipher: "AES",
                        key: 128,
                        iv: 0,
                        mode: "ECB",
                        type: "block"
                    },
                    "aes-192-ecb": {
                        cipher: "AES",
                        key: 192,
                        iv: 0,
                        mode: "ECB",
                        type: "block"
                    },
                    "aes-256-ecb": {
                        cipher: "AES",
                        key: 256,
                        iv: 0,
                        mode: "ECB",
                        type: "block"
                    },
                    "aes-128-cbc": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "CBC",
                        type: "block"
                    },
                    "aes-192-cbc": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "CBC",
                        type: "block"
                    },
                    "aes-256-cbc": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "CBC",
                        type: "block"
                    },
                    aes128: Vr,
                    aes192: Qr,
                    aes256: Kr,
                    "aes-128-cfb": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "CFB",
                        type: "stream"
                    },
                    "aes-192-cfb": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "CFB",
                        type: "stream"
                    },
                    "aes-256-cfb": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "CFB",
                        type: "stream"
                    },
                    "aes-128-cfb8": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "CFB8",
                        type: "stream"
                    },
                    "aes-192-cfb8": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "CFB8",
                        type: "stream"
                    },
                    "aes-256-cfb8": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "CFB8",
                        type: "stream"
                    },
                    "aes-128-cfb1": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "CFB1",
                        type: "stream"
                    },
                    "aes-192-cfb1": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "CFB1",
                        type: "stream"
                    },
                    "aes-256-cfb1": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "CFB1",
                        type: "stream"
                    },
                    "aes-128-ofb": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "OFB",
                        type: "stream"
                    },
                    "aes-192-ofb": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "OFB",
                        type: "stream"
                    },
                    "aes-256-ofb": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "OFB",
                        type: "stream"
                    },
                    "aes-128-ctr": {
                        cipher: "AES",
                        key: 128,
                        iv: 16,
                        mode: "CTR",
                        type: "stream"
                    },
                    "aes-192-ctr": {
                        cipher: "AES",
                        key: 192,
                        iv: 16,
                        mode: "CTR",
                        type: "stream"
                    },
                    "aes-256-ctr": {
                        cipher: "AES",
                        key: 256,
                        iv: 16,
                        mode: "CTR",
                        type: "stream"
                    },
                    "aes-128-gcm": {
                        cipher: "AES",
                        key: 128,
                        iv: 12,
                        mode: "GCM",
                        type: "auth"
                    },
                    "aes-192-gcm": {
                        cipher: "AES",
                        key: 192,
                        iv: 12,
                        mode: "GCM",
                        type: "auth"
                    },
                    "aes-256-gcm": {
                        cipher: "AES",
                        key: 256,
                        iv: 12,
                        mode: "GCM",
                        type: "auth"
                    }
                },
                Zr = {
                    ECB: br,
                    CBC: mr,
                    CFB: Lr,
                    CFB8: Br,
                    CFB1: Wr,
                    OFB: kr,
                    CTR: Hr,
                    GCM: Hr
                },
                $r = Jr;
            for (var es in $r) $r[es].module = Zr[$r[es].mode];
            var ts = $r,
                is = {},
                ns = Nr.exports.Buffer,
                os = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                as = function() {
                    for (var e = new Array(256), t = 0; t < 256; t++) t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
                    for (var i = [], n = [], o = [
                            [],
                            [],
                            [],
                            []
                        ], a = [
                            [],
                            [],
                            [],
                            []
                        ], r = 0, s = 0, c = 0; c < 256; ++c) {
                        var l = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                        l = l >>> 8 ^ 255 & l ^ 99, i[r] = l, n[l] = r;
                        var d = e[r],
                            u = e[d],
                            p = e[u],
                            h = 257 * e[l] ^ 16843008 * l;
                        o[0][r] = h << 24 | h >>> 8, o[1][r] = h << 16 | h >>> 16, o[2][r] = h << 8 | h >>> 24, o[3][r] = h, h = 16843009 * p ^ 65537 * u ^ 257 * d ^ 16843008 * r, a[0][l] = h << 24 | h >>> 8, a[1][l] = h << 16 | h >>> 16, a[2][l] = h << 8 | h >>> 24, a[3][l] = h, 0 === r ? r = s = 1 : (r = d ^ e[e[e[p ^ d]]], s ^= e[e[s]])
                    }
                    return {
                        SBOX: i,
                        INV_SBOX: n,
                        SUB_MIX: o,
                        INV_SUB_MIX: a
                    }
                }();
            Me.blockSize = 16, Me.keySize = 32, Me.prototype.blockSize = Me.blockSize, Me.prototype.keySize = Me.keySize, Me.prototype._reset = function() {
                for (var e = this._key, t = e.length, i = t + 6, n = 4 * (i + 1), o = [], a = 0; a < t; a++) o[a] = e[a];
                for (a = t; a < n; a++) {
                    var r = o[a - 1];
                    a % t === 0 ? (r = r << 8 | r >>> 24, r = as.SBOX[r >>> 24] << 24 | as.SBOX[r >>> 16 & 255] << 16 | as.SBOX[r >>> 8 & 255] << 8 | as.SBOX[255 & r], r ^= os[a / t | 0] << 24) : t > 6 && a % t === 4 && (r = as.SBOX[r >>> 24] << 24 | as.SBOX[r >>> 16 & 255] << 16 | as.SBOX[r >>> 8 & 255] << 8 | as.SBOX[255 & r]), o[a] = o[a - t] ^ r
                }
                for (var s = [], c = 0; c < n; c++) {
                    var l = n - c,
                        d = o[l - (c % 4 ? 0 : 4)];
                    c < 4 || l <= 4 ? s[c] = d : s[c] = as.INV_SUB_MIX[0][as.SBOX[d >>> 24]] ^ as.INV_SUB_MIX[1][as.SBOX[d >>> 16 & 255]] ^ as.INV_SUB_MIX[2][as.SBOX[d >>> 8 & 255]] ^ as.INV_SUB_MIX[3][as.SBOX[255 & d]]
                }
                this._nRounds = i, this._keySchedule = o, this._invKeySchedule = s
            }, Me.prototype.encryptBlockRaw = function(e) {
                return e = fe(e), me(e, this._keySchedule, as.SUB_MIX, as.SBOX, this._nRounds)
            }, Me.prototype.encryptBlock = function(e) {
                var t = this.encryptBlockRaw(e),
                    i = ns.allocUnsafe(16);
                return i.writeUInt32BE(t[0], 0), i.writeUInt32BE(t[1], 4), i.writeUInt32BE(t[2], 8), i.writeUInt32BE(t[3], 12), i
            }, Me.prototype.decryptBlock = function(e) {
                e = fe(e);
                var t = e[1];
                e[1] = e[3], e[3] = t;
                var i = me(e, this._invKeySchedule, as.INV_SUB_MIX, as.INV_SBOX, this._nRounds),
                    n = ns.allocUnsafe(16);
                return n.writeUInt32BE(i[0], 0), n.writeUInt32BE(i[3], 4), n.writeUInt32BE(i[2], 8), n.writeUInt32BE(i[1], 12), n
            }, Me.prototype.scrub = function() {
                be(this._keySchedule), be(this._invKeySchedule), be(this._key)
            }, is.AES = Me;
            var rs;
            ge.prototype = Object.create(null), _e.EventEmitter = _e, _e.usingDomains = !1, _e.prototype.domain = void 0, _e.prototype._events = void 0, _e.prototype._maxListeners = void 0, _e.defaultMaxListeners = 10, _e.init = function() {
                this.domain = null, _e.usingDomains && rs.active, this._events && this._events !== Object.getPrototypeOf(this)
                    ._events || (this._events = new ge, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, _e.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
                return this._maxListeners = e, this
            }, _e.prototype.getMaxListeners = function() {
                return Ae(this)
            }, _e.prototype.emit = function(e) {
                var t, i, n, o, a, r, s, c = "error" === e;
                if (r = this._events) c = c && null == r.error;
                else if (!c) return !1;
                if (s = this.domain, c) {
                    if (t = arguments[1], !s) {
                        if (t instanceof Error) throw t;
                        var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw l.context = t, l
                    }
                    return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = s, t.domainThrown = !1, s.emit("error", t), !1
                }
                if (i = r[e], !i) return !1;
                var d = "function" == typeof i;
                switch (n = arguments.length) {
                    case 1:
                        Oe(i, d, this);
                        break;
                    case 2:
                        ve(i, d, this, arguments[1]);
                        break;
                    case 3:
                        ye(i, d, this, arguments[1], arguments[2]);
                        break;
                    case 4:
                        ze(i, d, this, arguments[1], arguments[2], arguments[3]);
                        break;
                    default:
                        for (o = new Array(n - 1), a = 1; a < n; a++) o[a - 1] = arguments[a];
                        we(i, d, this, o)
                }
                return !0
            }, _e.prototype.addListener = function(e, t) {
                return Te(this, e, t, !1)
            }, _e.prototype.on = _e.prototype.addListener, _e.prototype.prependListener = function(e, t) {
                return Te(this, e, t, !0)
            }, _e.prototype.once = function(e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.on(e, Ie(this, e, t)), this
            }, _e.prototype.prependOnceListener = function(e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.prependListener(e, Ie(this, e, t)), this
            }, _e.prototype.removeListener = function(e, t) {
                var i, n, o, a, r;
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                if (n = this._events, !n) return this;
                if (i = n[e], !i) return this;
                if (i === t || i.listener && i.listener === t) 0 === --this._eventsCount ? this._events = new ge : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || t));
                else if ("function" != typeof i) {
                    for (o = -1, a = i.length; a-- > 0;)
                        if (i[a] === t || i[a].listener && i[a].listener === t) {
                            r = i[a].listener, o = a;
                            break
                        } if (o < 0) return this;
                    if (1 === i.length) {
                        if (i[0] = void 0, 0 === --this._eventsCount) return this._events = new ge, this;
                        delete n[e]
                    } else Ee(i, o);
                    n.removeListener && this.emit("removeListener", e, r || t)
                }
                return this
            }, _e.prototype.off = function(e, t) {
                return this.removeListener(e, t)
            }, _e.prototype.removeAllListeners = function(e) {
                var t, i;
                if (i = this._events, !i) return this;
                if (!i.removeListener) return 0 === arguments.length ? (this._events = new ge, this._eventsCount = 0) : i[e] && (0 === --this._eventsCount ? this._events = new ge : delete i[e]), this;
                if (0 === arguments.length) {
                    for (var n, o = Object.keys(i), a = 0; a < o.length; ++a) n = o[a], "removeListener" !== n && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = new ge, this._eventsCount = 0, this
                }
                if (t = i[e], "function" == typeof t) this.removeListener(e, t);
                else if (t)
                    do this.removeListener(e, t[t.length - 1]); while (t[0]);
                return this
            }, _e.prototype.listeners = function(e) {
                var t, i, n = this._events;
                return n ? (t = n[e], i = t ? "function" == typeof t ? [t.listener || t] : Ne(t) : []) : i = [], i
            }, _e.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : Se.call(e, t)
            }, _e.prototype.listenerCount = Se, _e.prototype.eventNames = function() {
                return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
            };
            var ss = Object.freeze({
                    __proto__: null,
                    "default": _e,
                    EventEmitter: _e
                }),
                cs = Re,
                ls = qe;
            "function" == typeof Mr.setTimeout && (cs = setTimeout), "function" == typeof Mr.clearTimeout && (ls = clearTimeout);
            var ds, us = [],
                ps = !1,
                hs = -1;
            ke.prototype.run = function() {
                this.fun.apply(null, this.array)
            };
            var fs, bs = "browser",
                ms = "browser",
                Ms = !0,
                gs = {},
                _s = [],
                As = "",
                Os = {},
                vs = {},
                ys = {},
                zs = Fe,
                ws = Fe,
                Ts = Fe,
                Cs = Fe,
                Is = Fe,
                Ss = Fe,
                Es = Fe,
                Ls = Mr.performance || {},
                Ns = Ls.now || Ls.mozNow || Ls.msNow || Ls.oNow || Ls.webkitNow || function() {
                    return (new Date)
                        .getTime()
                },
                Rs = new Date,
                qs = {
                    nextTick: Pe,
                    title: bs,
                    browser: Ms,
                    env: gs,
                    argv: _s,
                    version: As,
                    versions: Os,
                    on: zs,
                    addListener: ws,
                    once: Ts,
                    off: Cs,
                    removeListener: Is,
                    removeAllListeners: Ss,
                    emit: Es,
                    binding: He,
                    cwd: Ue,
                    chdir: Ge,
                    umask: je,
                    hrtime: Ye,
                    platform: ms,
                    release: vs,
                    config: ys,
                    uptime: Xe
                };
            fs = "function" == typeof Object.create ? function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : function(e, t) {
                e.super_ = t;
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
            };
            var xs, Bs = fs,
                Ds = /%[sdj%]/g,
                Ws = {};
            Je.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, Je.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            var Ps = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ks = {
                    inherits: Bs,
                    _extend: Tt,
                    log: wt,
                    isBuffer: Ot,
                    isPrimitive: At,
                    isFunction: _t,
                    isError: gt,
                    isDate: Mt,
                    isObject: mt,
                    isRegExp: bt,
                    isUndefined: ft,
                    isSymbol: ht,
                    isString: pt,
                    isNumber: ut,
                    isNullOrUndefined: dt,
                    isNull: lt,
                    isBoolean: ct,
                    isArray: st,
                    inspect: Je,
                    deprecate: Qe,
                    format: Ve,
                    debuglog: Ke
                },
                Fs = Object.freeze({
                    __proto__: null,
                    format: Ve,
                    deprecate: Qe,
                    debuglog: Ke,
                    inspect: Je,
                    isArray: st,
                    isBoolean: ct,
                    isNull: lt,
                    isNullOrUndefined: dt,
                    isNumber: ut,
                    isString: pt,
                    isSymbol: ht,
                    isUndefined: ft,
                    isRegExp: bt,
                    isObject: mt,
                    isDate: Mt,
                    isError: gt,
                    isFunction: _t,
                    isPrimitive: At,
                    isBuffer: Ot,
                    log: wt,
                    inherits: Bs,
                    _extend: Tt,
                    "default": ks
                });
            It.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, It.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, It.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, It.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, It.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, i = "" + t.data; t = t.next;) i += e + t.data;
                return i
            }, It.prototype.concat = function(e) {
                if (0 === this.length) return p.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t = p.allocUnsafe(e >>> 0), i = this.head, n = 0; i;) i.data.copy(t, n), n += i.data.length, i = i.next;
                return t
            };
            var Hs = p.isEncoding || function(e) {
                switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };
            Et.prototype.write = function(e) {
                for (var t = ""; this.charLength;) {
                    var i = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                    if (e.copy(this.charBuffer, this.charReceived, 0, i), this.charReceived += i, this.charReceived < this.charLength) return "";
                    e = e.slice(i, e.length), t = this.charBuffer.slice(0, this.charLength)
                        .toString(this.encoding);
                    var n = t.charCodeAt(t.length - 1);
                    if (!(n >= 55296 && n <= 56319)) {
                        if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                        break
                    }
                    this.charLength += this.surrogateSize, t = ""
                }
                this.detectIncompleteChar(e);
                var o = e.length;
                this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, o), o -= this.charReceived), t += e.toString(this.encoding, 0, o);
                var o = t.length - 1,
                    n = t.charCodeAt(o);
                if (n >= 55296 && n <= 56319) {
                    var a = this.surrogateSize;
                    return this.charLength += a, this.charReceived += a, this.charBuffer.copy(this.charBuffer, a, 0, a), e.copy(this.charBuffer, 0, 0, a), t.substring(0, o)
                }
                return t
            }, Et.prototype.detectIncompleteChar = function(e) {
                for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                    var i = e[e.length - t];
                    if (1 == t && i >> 5 == 6) {
                        this.charLength = 2;
                        break
                    }
                    if (t <= 2 && i >> 4 == 14) {
                        this.charLength = 3;
                        break
                    }
                    if (t <= 3 && i >> 3 == 30) {
                        this.charLength = 4;
                        break
                    }
                }
                this.charReceived = t
            }, Et.prototype.end = function(e) {
                var t = "";
                if (e && e.length && (t = this.write(e)), this.charReceived) {
                    var i = this.charReceived,
                        n = this.charBuffer,
                        o = this.encoding;
                    t += n.slice(0, i)
                        .toString(o)
                }
                return t
            };
            var Us = Object.freeze({
                __proto__: null,
                StringDecoder: Et
            });
            Dt.ReadableState = Bt;
            var Gs = Ke("stream");
            Bs(Dt, _e), Dt.prototype.push = function(e, t) {
                var i = this._readableState;
                return i.objectMode || "string" != typeof e || (t = t || i.defaultEncoding, t !== i.encoding && (e = p.from(e, t), t = "")), Wt(this, i, e, t, !1)
            }, Dt.prototype.unshift = function(e) {
                var t = this._readableState;
                return Wt(this, t, e, "", !0)
            }, Dt.prototype.isPaused = function() {
                return this._readableState.flowing === !1
            }, Dt.prototype.setEncoding = function(e) {
                return this._readableState.decoder = new Et(e), this._readableState.encoding = e, this
            };
            var js = 8388608;
            Dt.prototype.read = function(e) {
                Gs("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    i = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return Gs("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? ni(this) : Gt(this), null;
                if (e = Ft(e, t), 0 === e && t.ended) return 0 === t.length && ni(this), null;
                var n = t.needReadable;
                Gs("need readable", n), (0 === t.length || t.length - e < t.highWaterMark) && (n = !0, Gs("length less than watermark", n)), t.ended || t.reading ? (n = !1, Gs("reading or ended", n)) : n && (Gs("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = Ft(i, t)));
                var o;
                return o = e > 0 ? $t(e, t) : null, null === o ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), i !== e && t.ended && ni(this)), null !== o && this.emit("data", o), o
            }, Dt.prototype._read = function(e) {
                this.emit("error", new Error("not implemented"))
            }, Dt.prototype.pipe = function(e, t) {
                function i(e) {
                    Gs("onunpipe"), e === d && o()
                }

                function n() {
                    Gs("onend"), e.end()
                }

                function o() {
                    Gs("cleanup"), e.removeListener("close", s), e.removeListener("finish", c), e.removeListener("drain", f), e.removeListener("error", r), e.removeListener("unpipe", i), d.removeListener("end", n), d.removeListener("end", o), d.removeListener("data", a), b = !0, !u.awaitDrain || e._writableState && !e._writableState.needDrain || f()
                }

                function a(t) {
                    Gs("ondata"), m = !1;
                    var i = e.write(t);
                    !1 !== i || m || ((1 === u.pipesCount && u.pipes === e || u.pipesCount > 1 && ri(u.pipes, e) !== -1) && !b && (Gs("false write response, pause", d._readableState.awaitDrain), d._readableState.awaitDrain++, m = !0), d.pause())
                }

                function r(t) {
                    Gs("onerror", t), l(), e.removeListener("error", r), 0 === xt(e, "error") && e.emit("error", t)
                }

                function s() {
                    e.removeListener("finish", c), l()
                }

                function c() {
                    Gs("onfinish"), e.removeListener("close", s), l()
                }

                function l() {
                    Gs("unpipe"), d.unpipe(e)
                }
                var d = this,
                    u = this._readableState;
                switch (u.pipesCount) {
                    case 0:
                        u.pipes = e;
                        break;
                    case 1:
                        u.pipes = [u.pipes, e];
                        break;
                    default:
                        u.pipes.push(e)
                }
                u.pipesCount += 1, Gs("pipe count=%d opts=%j", u.pipesCount, t);
                var p = !t || t.end !== !1,
                    h = p ? n : o;
                u.endEmitted ? Pe(h) : d.once("end", h), e.on("unpipe", i);
                var f = Vt(d);
                e.on("drain", f);
                var b = !1,
                    m = !1;
                return d.on("data", a), qt(e, "error", r), e.once("close", s), e.once("finish", c), e.emit("pipe", d), u.flowing || (Gs("pipe resume"), d.resume()), e
            }, Dt.prototype.unpipe = function(e) {
                var t = this._readableState;
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
                if (!e) {
                    var i = t.pipes,
                        n = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < n; o++) i[o].emit("unpipe", this);
                    return this
                }
                var a = ri(t.pipes, e);
                return a === -1 ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
            }, Dt.prototype.on = function(e, t) {
                var i = _e.prototype.on.call(this, e, t);
                if ("data" === e) this._readableState.flowing !== !1 && this.resume();
                else if ("readable" === e) {
                    var n = this._readableState;
                    n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && Gt(this) : Pe(Qt, this))
                }
                return i
            }, Dt.prototype.addListener = Dt.prototype.on, Dt.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (Gs("resume"), e.flowing = !0, Kt(this, e)), this
            }, Dt.prototype.pause = function() {
                return Gs("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (Gs("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, Dt.prototype.wrap = function(e) {
                var t = this._readableState,
                    i = !1,
                    n = this;
                e.on("end", function() {
                    if (Gs("wrapped end"), t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        e && e.length && n.push(e)
                    }
                    n.push(null)
                }), e.on("data", function(o) {
                    if (Gs("wrapped data"), t.decoder && (o = t.decoder.write(o)), (!t.objectMode || null !== o && void 0 !== o) && (t.objectMode || o && o.length)) {
                        var a = n.push(o);
                        a || (i = !0, e.pause())
                    }
                });
                for (var o in e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(o));
                var a = ["error", "close", "destroy", "pause", "resume"];
                return ai(a, function(t) {
                    e.on(t, n.emit.bind(n, t))
                }), n._read = function(t) {
                    Gs("wrapped _read", t), i && (i = !1, e.resume())
                }, n
            }, Dt._fromList = $t, di.WritableState = li, Bs(di, _e), li.prototype.getBuffer = function() {
                for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                return t
            }, di.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe, not readable"))
            }, di.prototype.write = function(e, t, i) {
                var n = this._writableState,
                    o = !1;
                return "function" == typeof t && (i = t, t = null), p.isBuffer(e) ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof i && (i = si), n.ended ? ui(this, i) : pi(this, n, e, i) && (n.pendingcb++, o = fi(this, n, e, t, i)), o
            }, di.prototype.cork = function() {
                var e = this._writableState;
                e.corked++
            }, di.prototype.uncork = function() {
                var e = this._writableState;
                e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || Oi(this, e))
            }, di.prototype.setDefaultEncoding = function(e) {
                if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "")
                        .toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                return this._writableState.defaultEncoding = e, this
            }, di.prototype._write = function(e, t, i) {
                i(new Error("not implemented"))
            }, di.prototype._writev = null, di.prototype.end = function(e, t, i) {
                var n = this._writableState;
                "function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || wi(this, n, i)
            }, Bs(Ci, Dt);
            for (var Ys = Object.keys(di.prototype), Xs = 0; Xs < Ys.length; Xs++) {
                var Vs = Ys[Xs];
                Ci.prototype[Vs] || (Ci.prototype[Vs] = di.prototype[Vs])
            }
            Bs(Ni, Ci), Ni.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, Ci.prototype.push.call(this, e, t)
            }, Ni.prototype._transform = function(e, t, i) {
                throw new Error("Not implemented")
            }, Ni.prototype._write = function(e, t, i) {
                var n = this._transformState;
                if (n.writecb = i, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var o = this._readableState;
                    (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                }
            }, Ni.prototype._read = function(e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }, Bs(qi, Ni), qi.prototype._transform = function(e, t, i) {
                i(null, e)
            }, Bs(xi, _e), xi.Readable = Dt, xi.Writable = di, xi.Duplex = Ci, xi.Transform = Ni, xi.PassThrough = qi, xi.Stream = xi, xi.prototype.pipe = function(e, t) {
                function i(t) {
                    e.writable && !1 === e.write(t) && c.pause && c.pause()
                }

                function n() {
                    c.readable && c.resume && c.resume()
                }

                function o() {
                    l || (l = !0, e.end())
                }

                function a() {
                    l || (l = !0, "function" == typeof e.destroy && e.destroy())
                }

                function r(e) {
                    if (s(), 0 === _e.listenerCount(this, "error")) throw e
                }

                function s() {
                    c.removeListener("data", i), e.removeListener("drain", n), c.removeListener("end", o), c.removeListener("close", a), c.removeListener("error", r), e.removeListener("error", r), c.removeListener("end", s), c.removeListener("close", s), e.removeListener("close", s)
                }
                var c = this;
                c.on("data", i), e.on("drain", n), e._isStdio || t && t.end === !1 || (c.on("end", o), c.on("close", a));
                var l = !1;
                return c.on("error", r), e.on("error", r), c.on("end", s), c.on("close", s), e.on("close", s), e.emit("pipe", c), e
            };
            var Qs, Ks = Object.freeze({
                    __proto__: null,
                    "default": xi,
                    Readable: Dt,
                    Writable: di,
                    Duplex: Ci,
                    Transform: Ni,
                    PassThrough: qi,
                    Stream: xi
                }),
                Js = i(Ks),
                Zs = i(Us);
            Qs = "function" == typeof Object.create ? function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : function(e, t) {
                e.super_ = t;
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
            };
            var $s = Qs,
                ec = Object.freeze({
                    __proto__: null,
                    "default": $s
                }),
                tc = i(ec),
                ic = Nr.exports.Buffer,
                nc = Js.Transform,
                oc = Zs.StringDecoder,
                ac = tc;
            ac(Bi, nc), Bi.prototype.update = function(e, t, i) {
                "string" == typeof e && (e = ic.from(e, t));
                var n = this._update(e);
                return this.hashMode ? this : (i && (n = this._toString(n, i)), n)
            }, Bi.prototype.setAutoPadding = function() {}, Bi.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }, Bi.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }, Bi.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }, Bi.prototype._transform = function(e, t, i) {
                var n;
                try {
                    this.hashMode ? this._update(e) : this.push(this._update(e))
                } catch (o) {
                    n = o
                } finally {
                    i(n)
                }
            }, Bi.prototype._flush = function(e) {
                var t;
                try {
                    this.push(this.__final())
                } catch (i) {
                    t = i
                }
                e(t)
            }, Bi.prototype._finalOrDigest = function(e) {
                var t = this.__final() || ic.alloc(0);
                return e && (t = this._toString(t, e, !0)), t
            }, Bi.prototype._toString = function(e, t, i) {
                if (this._decoder || (this._decoder = new oc(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
                var n = this._decoder.write(e);
                return i && (n += this._decoder.end()), n
            };
            var rc = Bi,
                sc = Nr.exports.Buffer,
                cc = sc.alloc(16, 0);
            Pi.prototype.ghash = function(e) {
                for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
                this._multiply()
            }, Pi.prototype._multiply = function() {
                for (var e, t, i, n = Di(this.h), o = [0, 0, 0, 0], a = -1; ++a < 128;) {
                    for (t = 0 !== (this.state[~~(a / 8)] & 1 << 7 - a % 8), t && (o[0] ^= n[0], o[1] ^= n[1], o[2] ^= n[2], o[3] ^= n[3]), i = 0 !== (1 & n[3]), e = 3; e > 0; e--) n[e] = n[e] >>> 1 | (1 & n[e - 1]) << 31;
                    n[0] = n[0] >>> 1, i && (n[0] = n[0] ^ 225 << 24)
                }
                this.state = Wi(o)
            }, Pi.prototype.update = function(e) {
                this.cache = sc.concat([this.cache, e]);
                for (var t; this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
            }, Pi.prototype["final"] = function(e, t) {
                return this.cache.length && this.ghash(sc.concat([this.cache, cc], 16)), this.ghash(Wi([0, e, 0, t])), this.state
            };
            var lc = Pi,
                dc = is,
                uc = Nr.exports.Buffer,
                pc = rc,
                hc = tc,
                fc = lc,
                bc = Sr,
                mc = Ur;
            hc(Hi, pc), Hi.prototype._update = function(e) {
                if (!this._called && this._alen) {
                    var t = 16 - this._alen % 16;
                    t < 16 && (t = uc.alloc(t, 0), this._ghash.update(t))
                }
                this._called = !0;
                var i = this._mode.encrypt(this, e);
                return this._decrypt ? this._ghash.update(e) : this._ghash.update(i), this._len += e.length, i
            }, Hi.prototype._final = function() {
                if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
                var e = bc(this._ghash["final"](8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
                if (this._decrypt && ki(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
                this._authTag = e, this._cipher.scrub()
            }, Hi.prototype.getAuthTag = function() {
                if (this._decrypt || !uc.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
                return this._authTag
            }, Hi.prototype.setAuthTag = function(e) {
                if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
                this._authTag = e
            }, Hi.prototype.setAAD = function(e) {
                if (this._called) throw new Error("Attempting to set AAD in unsupported state");
                this._ghash.update(e), this._alen += e.length
            };
            var Mc = Hi,
                gc = is,
                _c = Nr.exports.Buffer,
                Ac = rc,
                Oc = tc;
            Oc(Ui, Ac), Ui.prototype._update = function(e) {
                return this._mode.encrypt(this, e, this._decrypt)
            }, Ui.prototype._final = function() {
                this._cipher.scrub()
            };
            var vc, yc, zc = Ui,
                wc = {
                    exports: {}
                },
                Tc = i(ss),
                Cc = Tc.EventEmitter,
                Ic = i(Fs),
                Sc = {
                    destroy: ji,
                    undestroy: Vi,
                    errorOrDestroy: Ki
                },
                Ec = {},
                Lc = {};
            Zi("ERR_INVALID_OPT_VALUE", function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"'
            }, TypeError), Zi("ERR_INVALID_ARG_TYPE", function(e, t, i) {
                var n;
                "string" == typeof t && en(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
                var o;
                if (tn(e, " argument")) o = "The ".concat(e, " ")
                    .concat(n, " ")
                    .concat($i(t, "type"));
                else {
                    var a = nn(e, ".") ? "property" : "argument";
                    o = 'The "'.concat(e, '" ')
                        .concat(a, " ")
                        .concat(n, " ")
                        .concat($i(t, "type"))
                }
                return o += ". Received type ".concat(typeof i)
            }, TypeError), Zi("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), Zi("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                return "The " + e + " method is not implemented"
            }), Zi("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), Zi("ERR_STREAM_DESTROYED", function(e) {
                return "Cannot call " + e + " after a stream was destroyed"
            }), Zi("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), Zi("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), Zi("ERR_STREAM_WRITE_AFTER_END", "write after end"), Zi("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), Zi("ERR_UNKNOWN_ENCODING", function(e) {
                return "Unknown encoding: " + e
            }, TypeError), Zi("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Ec.codes = Lc;
            var Nc, Rc, qc, xc, Bc, Dc, Wc, Pc, kc, Fc, Hc = Ec.codes.ERR_INVALID_OPT_VALUE,
                Uc = {
                    getHighWaterMark: an
                },
                Gc = rn,
                jc = Ec.codes.ERR_STREAM_PREMATURE_CLOSE,
                Yc = hn,
                Xc = gn,
                Vc = Ec.codes,
                Qc = Vc.ERR_METHOD_NOT_IMPLEMENTED,
                Kc = Vc.ERR_MULTIPLE_CALLBACK,
                Jc = Vc.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                Zc = Vc.ERR_TRANSFORM_WITH_LENGTH_0,
                $c = ln();
            tc(gn, $c), gn.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, $c.prototype.push.call(this, e, t)
            }, gn.prototype._transform = function(e, t, i) {
                i(new Qc("_transform()"))
            }, gn.prototype._write = function(e, t, i) {
                var n = this._transformState;
                if (n.writecb = i, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var o = this._readableState;
                    (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                }
            }, gn.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, gn.prototype._destroy = function(e, t) {
                $c.prototype._destroy.call(this, e, function(e) {
                    t(e)
                })
            };
            var el = On,
                tl = Xc;
            tc(On, tl), On.prototype._transform = function(e, t, i) {
                i(null, e)
            };
            var il, nl = Ec.codes,
                ol = nl.ERR_MISSING_ARGS,
                al = nl.ERR_STREAM_DESTROYED,
                rl = Sn;
            ! function(e, t) {
                t = e.exports = mn(), t.Stream = t, t.Readable = t, t.Writable = cn(), t.Duplex = ln(), t.Transform = Xc, t.PassThrough = el, t.finished = Yc, t.pipeline = rl
            }(wc, wc.exports);
            var sl = Nr.exports.Buffer,
                cl = wc.exports.Transform,
                ll = tc;
            ll(Ln, cl), Ln.prototype._transform = function(e, t, i) {
                var n = null;
                try {
                    this.update(e, t)
                } catch (o) {
                    n = o
                }
                i(n)
            }, Ln.prototype._flush = function(e) {
                var t = null;
                try {
                    this.push(this.digest())
                } catch (i) {
                    t = i
                }
                e(t)
            }, Ln.prototype.update = function(e, t) {
                if (En(e, "Data"), this._finalized) throw new Error("Digest already called");
                sl.isBuffer(e) || (e = sl.from(e, t));
                for (var i = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize;) {
                    for (var o = this._blockOffset; o < this._blockSize;) i[o++] = e[n++];
                    this._update(), this._blockOffset = 0
                }
                for (; n < e.length;) i[this._blockOffset++] = e[n++];
                for (var a = 0, r = 8 * e.length; r > 0; ++a) this._length[a] += r, r = this._length[a] / 4294967296 | 0, r > 0 && (this._length[a] -= 4294967296 * r);
                return this
            }, Ln.prototype._update = function() {
                throw new Error("_update is not implemented")
            }, Ln.prototype.digest = function(e) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = !0;
                var t = this._digest();
                void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
                for (var i = 0; i < 4; ++i) this._length[i] = 0;
                return t
            }, Ln.prototype._digest = function() {
                throw new Error("_digest is not implemented")
            };
            var dl = Ln,
                ul = tc,
                pl = dl,
                hl = Nr.exports.Buffer,
                fl = new Array(16);
            ul(Nn, pl), Nn.prototype._update = function() {
                for (var e = fl, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
                var i = this._a,
                    n = this._b,
                    o = this._c,
                    a = this._d;
                i = qn(i, n, o, a, e[0], 3614090360, 7), a = qn(a, i, n, o, e[1], 3905402710, 12), o = qn(o, a, i, n, e[2], 606105819, 17), n = qn(n, o, a, i, e[3], 3250441966, 22), i = qn(i, n, o, a, e[4], 4118548399, 7), a = qn(a, i, n, o, e[5], 1200080426, 12), o = qn(o, a, i, n, e[6], 2821735955, 17), n = qn(n, o, a, i, e[7], 4249261313, 22), i = qn(i, n, o, a, e[8], 1770035416, 7), a = qn(a, i, n, o, e[9], 2336552879, 12), o = qn(o, a, i, n, e[10], 4294925233, 17), n = qn(n, o, a, i, e[11], 2304563134, 22), i = qn(i, n, o, a, e[12], 1804603682, 7), a = qn(a, i, n, o, e[13], 4254626195, 12), o = qn(o, a, i, n, e[14], 2792965006, 17), n = qn(n, o, a, i, e[15], 1236535329, 22), i = xn(i, n, o, a, e[1], 4129170786, 5), a = xn(a, i, n, o, e[6], 3225465664, 9), o = xn(o, a, i, n, e[11], 643717713, 14), n = xn(n, o, a, i, e[0], 3921069994, 20), i = xn(i, n, o, a, e[5], 3593408605, 5), a = xn(a, i, n, o, e[10], 38016083, 9), o = xn(o, a, i, n, e[15], 3634488961, 14), n = xn(n, o, a, i, e[4], 3889429448, 20), i = xn(i, n, o, a, e[9], 568446438, 5), a = xn(a, i, n, o, e[14], 3275163606, 9), o = xn(o, a, i, n, e[3], 4107603335, 14), n = xn(n, o, a, i, e[8], 1163531501, 20), i = xn(i, n, o, a, e[13], 2850285829, 5), a = xn(a, i, n, o, e[2], 4243563512, 9), o = xn(o, a, i, n, e[7], 1735328473, 14), n = xn(n, o, a, i, e[12], 2368359562, 20), i = Bn(i, n, o, a, e[5], 4294588738, 4), a = Bn(a, i, n, o, e[8], 2272392833, 11), o = Bn(o, a, i, n, e[11], 1839030562, 16), n = Bn(n, o, a, i, e[14], 4259657740, 23), i = Bn(i, n, o, a, e[1], 2763975236, 4), a = Bn(a, i, n, o, e[4], 1272893353, 11), o = Bn(o, a, i, n, e[7], 4139469664, 16), n = Bn(n, o, a, i, e[10], 3200236656, 23), i = Bn(i, n, o, a, e[13], 681279174, 4), a = Bn(a, i, n, o, e[0], 3936430074, 11), o = Bn(o, a, i, n, e[3], 3572445317, 16), n = Bn(n, o, a, i, e[6], 76029189, 23), i = Bn(i, n, o, a, e[9], 3654602809, 4), a = Bn(a, i, n, o, e[12], 3873151461, 11), o = Bn(o, a, i, n, e[15], 530742520, 16), n = Bn(n, o, a, i, e[2], 3299628645, 23), i = Dn(i, n, o, a, e[0], 4096336452, 6), a = Dn(a, i, n, o, e[7], 1126891415, 10), o = Dn(o, a, i, n, e[14], 2878612391, 15), n = Dn(n, o, a, i, e[5], 4237533241, 21), i = Dn(i, n, o, a, e[12], 1700485571, 6), a = Dn(a, i, n, o, e[3], 2399980690, 10), o = Dn(o, a, i, n, e[10], 4293915773, 15), n = Dn(n, o, a, i, e[1], 2240044497, 21), i = Dn(i, n, o, a, e[8], 1873313359, 6), a = Dn(a, i, n, o, e[15], 4264355552, 10), o = Dn(o, a, i, n, e[6], 2734768916, 15), n = Dn(n, o, a, i, e[13], 1309151649, 21), i = Dn(i, n, o, a, e[4], 4149444226, 6), a = Dn(a, i, n, o, e[11], 3174756917, 10), o = Dn(o, a, i, n, e[2], 718787259, 15), n = Dn(n, o, a, i, e[9], 3951481745, 21), this._a = this._a + i | 0, this._b = this._b + n | 0, this._c = this._c + o | 0, this._d = this._d + a | 0
            }, Nn.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
                    this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var e = hl.allocUnsafe(16);
                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
            };
            var bl = Nn,
                ml = Nr.exports.Buffer,
                Ml = bl,
                gl = Wn,
                _l = ts,
                Al = Mc,
                Ol = Nr.exports.Buffer,
                vl = zc,
                yl = rc,
                zl = is,
                wl = gl,
                Tl = tc;
            Tl(Pn, yl), Pn.prototype._update = function(e) {
                this._cache.add(e);
                for (var t, i, n = []; t = this._cache.get();) i = this._mode.encrypt(this, t), n.push(i);
                return Ol.concat(n)
            };
            var Cl = Ol.alloc(16, 16);
            Pn.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
                if (!e.equals(Cl)) throw this._cipher.scrub(), new Error("data not multiple of block length")
            }, Pn.prototype.setAutoPadding = function(e) {
                return this._autopadding = !!e, this
            }, kn.prototype.add = function(e) {
                this.cache = Ol.concat([this.cache, e])
            }, kn.prototype.get = function() {
                if (this.cache.length > 15) {
                    var e = this.cache.slice(0, 16);
                    return this.cache = this.cache.slice(16), e
                }
                return null
            }, kn.prototype.flush = function() {
                for (var e = 16 - this.cache.length, t = Ol.allocUnsafe(e), i = -1; ++i < e;) t.writeUInt8(e, i);
                return Ol.concat([this.cache, t])
            }, fr.createCipheriv = Fn, fr.createCipher = Hn;
            var Il = {},
                Sl = Mc,
                El = Nr.exports.Buffer,
                Ll = ts,
                Nl = zc,
                Rl = rc,
                ql = is,
                xl = gl,
                Bl = tc;
            Bl(Un, Rl), Un.prototype._update = function(e) {
                this._cache.add(e);
                for (var t, i, n = []; t = this._cache.get(this._autopadding);) i = this._mode.decrypt(this, t), n.push(i);
                return El.concat(n)
            }, Un.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) return jn(this._mode.decrypt(this, e));
                if (e) throw new Error("data not multiple of block length")
            }, Un.prototype.setAutoPadding = function(e) {
                return this._autopadding = !!e, this
            }, Gn.prototype.add = function(e) {
                this.cache = El.concat([this.cache, e])
            }, Gn.prototype.get = function(e) {
                var t;
                if (e) {
                    if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
                } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
                return null
            }, Gn.prototype.flush = function() {
                if (this.cache.length) return this.cache
            }, Il.createDecipher = Xn, Il.createDecipheriv = Yn, t.getCiphers = void 0;
            var Dl = fr,
                Wl = Il,
                Pl = Jr,
                kl = Dl.createCipher,
                Fl = Dl.createCipheriv,
                Hl = Wl.createDecipher,
                Ul = Wl.createDecipheriv;
            t.getCiphers = Vn;
            var Gl = {},
                jl = "elliptic",
                Yl = "6.5.4",
                Xl = "EC cryptography",
                Vl = "lib/elliptic.js",
                Ql = ["lib"],
                Kl = {
                    lint: "eslint lib test",
                    "lint:fix": "npm run lint -- --fix",
                    unit: "istanbul test _mocha --reporter=spec test/index.js",
                    test: "npm run lint && npm run unit",
                    version: "grunt dist && git add dist/"
                },
                Jl = {
                    type: "git",
                    url: "git@github.com:indutny/elliptic"
                },
                Zl = ["EC", "Elliptic", "curve", "Cryptography"],
                $l = "Fedor Indutny <fedor@indutny.com>",
                ed = "MIT",
                td = {
                    url: "https://github.com/indutny/elliptic/issues"
                },
                id = "https://github.com/indutny/elliptic",
                nd = {
                    brfs: "^2.0.2",
                    coveralls: "^3.1.0",
                    eslint: "^7.6.0",
                    grunt: "^1.2.1",
                    "grunt-browserify": "^5.3.0",
                    "grunt-cli": "^1.3.2",
                    "grunt-contrib-connect": "^3.0.0",
                    "grunt-contrib-copy": "^1.0.0",
                    "grunt-contrib-uglify": "^5.0.0",
                    "grunt-mocha-istanbul": "^5.0.2",
                    "grunt-saucelabs": "^9.0.1",
                    istanbul: "^0.4.5",
                    mocha: "^8.0.1"
                },
                od = {
                    "bn.js": "^4.11.9",
                    brorand: "^1.1.0",
                    "hash.js": "^1.0.0",
                    "hmac-drbg": "^1.0.1",
                    inherits: "^2.0.4",
                    "minimalistic-assert": "^1.0.1",
                    "minimalistic-crypto-utils": "^1.0.1"
                },
                ad = {
                    name: jl,
                    version: Yl,
                    description: Xl,
                    main: Vl,
                    files: Ql,
                    scripts: Kl,
                    repository: Jl,
                    keywords: Zl,
                    author: $l,
                    license: ed,
                    bugs: td,
                    homepage: id,
                    devDependencies: nd,
                    dependencies: od
                },
                rd = {},
                sd = {
                    exports: {}
                };
            ! function(e) {
                ! function(e, t) {
                    function i(e, t) {
                        if (!e) throw new Error(t || "Assertion failed")
                    }

                    function n(e, t) {
                        e.super_ = t;
                        var i = function() {};
                        i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
                    }

                    function o(e, t, i) {
                        return o.isBN(e) ? e : (this.negative = 0, this.words = null, this.length = 0, this.red = null, void(null !== e && ("le" !== t && "be" !== t || (i = t, t = 10), this._init(e || 0, t || 10, i || "be"))))
                    }

                    function a(e, t) {
                        var i = e.charCodeAt(t);
                        return i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : i - 48 & 15
                    }

                    function r(e, t, i) {
                        var n = a(e, i);
                        return i - 1 >= t && (n |= a(e, i - 1) << 4), n
                    }

                    function s(e, t, i, n) {
                        for (var o = 0, a = Math.min(e.length, i), r = t; r < a; r++) {
                            var s = e.charCodeAt(r) - 48;
                            o *= n, o += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                        }
                        return o
                    }

                    function c(e) {
                        for (var t = new Array(e.bitLength()), i = 0; i < t.length; i++) {
                            var n = i / 26 | 0,
                                o = i % 26;
                            t[i] = (e.words[n] & 1 << o) >>> o
                        }
                        return t
                    }

                    function l(e, t, i) {
                        i.negative = t.negative ^ e.negative;
                        var n = e.length + t.length | 0;
                        i.length = n, n = n - 1 | 0;
                        var o = 0 | e.words[0],
                            a = 0 | t.words[0],
                            r = o * a,
                            s = 67108863 & r,
                            c = r / 67108864 | 0;
                        i.words[0] = s;
                        for (var l = 1; l < n; l++) {
                            for (var d = c >>> 26, u = 67108863 & c, p = Math.min(l, t.length - 1), h = Math.max(0, l - e.length + 1); h <= p; h++) {
                                var f = l - h | 0;
                                o = 0 | e.words[f], a = 0 | t.words[h], r = o * a + u, d += r / 67108864 | 0, u = 67108863 & r
                            }
                            i.words[l] = 0 | u, c = 0 | d
                        }
                        return 0 !== c ? i.words[l] = 0 | c : i.length--, i.strip()
                    }

                    function d(e, t, i) {
                        i.negative = t.negative ^ e.negative, i.length = e.length + t.length;
                        for (var n = 0, o = 0, a = 0; a < i.length - 1; a++) {
                            var r = o;
                            o = 0;
                            for (var s = 67108863 & n, c = Math.min(a, t.length - 1), l = Math.max(0, a - e.length + 1); l <= c; l++) {
                                var d = a - l,
                                    u = 0 | e.words[d],
                                    p = 0 | t.words[l],
                                    h = u * p,
                                    f = 67108863 & h;
                                r = r + (h / 67108864 | 0) | 0, f = f + s | 0, s = 67108863 & f, r = r + (f >>> 26) | 0, o += r >>> 26, r &= 67108863
                            }
                            i.words[a] = s, n = r, r = o
                        }
                        return 0 !== n ? i.words[a] = n : i.length--, i.strip()
                    }

                    function u(e, t, i) {
                        var n = new p;
                        return n.mulp(e, t, i)
                    }

                    function p(e, t) {
                        this.x = e, this.y = t
                    }

                    function h(e, t) {
                        this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1)
                            .iushln(this.n)
                            .isub(this.p), this.tmp = this._tmp()
                    }

                    function f() {
                        h.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function b() {
                        h.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function m() {
                        h.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function M() {
                        h.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function g(e) {
                        if ("string" == typeof e) {
                            var t = o._prime(e);
                            this.m = t.p, this.prime = t
                        } else i(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                    }

                    function _(e) {
                        g.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1)
                            .iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r)
                            .isubn(1)
                            .div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                    var A;
                    try {
                        A = "undefined" != typeof window && "undefined" != typeof window.Buffer ? window.Buffer : Rr.Buffer
                    } catch (O) {}
                    o.isBN = function(e) {
                        return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                    }, o.max = function(e, t) {
                        return e.cmp(t) > 0 ? e : t
                    }, o.min = function(e, t) {
                        return e.cmp(t) < 0 ? e : t
                    }, o.prototype._init = function(e, t, n) {
                        if ("number" == typeof e) return this._initNumber(e, t, n);
                        if ("object" == typeof e) return this._initArray(e, t, n);
                        "hex" === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36), e = e.toString()
                            .replace(/\s+/g, "");
                        var o = 0;
                        "-" === e[0] && (o++, this.negative = 1), o < e.length && (16 === t ? this._parseHex(e, o, n) : (this._parseBase(e, t, o), "le" === n && this._initArray(this.toArray(), t, n)))
                    }, o.prototype._initNumber = function(e, t, n) {
                        e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (i(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
                    }, o.prototype._initArray = function(e, t, n) {
                        if (i("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                        for (var o = 0; o < this.length; o++) this.words[o] = 0;
                        var a, r, s = 0;
                        if ("be" === n)
                            for (o = e.length - 1, a = 0; o >= 0; o -= 3) r = e[o] | e[o - 1] << 8 | e[o - 2] << 16, this.words[a] |= r << s & 67108863, this.words[a + 1] = r >>> 26 - s & 67108863, s += 24, s >= 26 && (s -= 26, a++);
                        else if ("le" === n)
                            for (o = 0, a = 0; o < e.length; o += 3) r = e[o] | e[o + 1] << 8 | e[o + 2] << 16, this.words[a] |= r << s & 67108863, this.words[a + 1] = r >>> 26 - s & 67108863, s += 24, s >= 26 && (s -= 26, a++);
                        return this.strip()
                    }, o.prototype._parseHex = function(e, t, i) {
                        this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, a = 0,
                            s = 0;
                        if ("be" === i)
                            for (n = e.length - 1; n >= t; n -= 2) o = r(e, t, n) << a, this.words[s] |= 67108863 & o, a >= 18 ? (a -= 18, s += 1, this.words[s] |= o >>> 26) : a += 8;
                        else {
                            var c = e.length - t;
                            for (n = c % 2 === 0 ? t + 1 : t; n < e.length; n += 2) o = r(e, t, n) << a, this.words[s] |= 67108863 & o, a >= 18 ? (a -= 18, s += 1, this.words[s] |= o >>> 26) : a += 8
                        }
                        this.strip()
                    }, o.prototype._parseBase = function(e, t, i) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, o = 1; o <= 67108863; o *= t) n++;
                        n--, o = o / t | 0;
                        for (var a = e.length - i, r = a % n, c = Math.min(a, a - r) + i, l = 0, d = i; d < c; d += n) l = s(e, d, d + n, t), this.imuln(o), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
                        if (0 !== r) {
                            var u = 1;
                            for (l = s(e, d, e.length, t), d = 0; d < r; d++) u *= t;
                            this.imuln(u), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l)
                        }
                        this.strip()
                    }, o.prototype.copy = function(e) {
                        e.words = new Array(this.length);
                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                        e.length = this.length, e.negative = this.negative, e.red = this.red
                    }, o.prototype.clone = function() {
                        var e = new o(null);
                        return this.copy(e), e
                    }, o.prototype._expand = function(e) {
                        for (; this.length < e;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        y = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        z = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(e, t) {
                        e = e || 10, t = 0 | t || 1;
                        var n;
                        if (16 === e || "hex" === e) {
                            n = "";
                            for (var o = 0, a = 0, r = 0; r < this.length; r++) {
                                var s = this.words[r],
                                    c = (16777215 & (s << o | a))
                                    .toString(16);
                                a = s >>> 24 - o & 16777215, n = 0 !== a || r !== this.length - 1 ? v[6 - c.length] + c + n : c + n, o += 2, o >= 26 && (o -= 26, r--)
                            }
                            for (0 !== a && (n = a.toString(16) + n); n.length % t !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var l = y[e],
                                d = z[e];
                            n = "";
                            var u = this.clone();
                            for (u.negative = 0; !u.isZero();) {
                                var p = u.modn(d)
                                    .toString(e);
                                u = u.idivn(d), n = u.isZero() ? p + n : v[l - p.length] + p + n
                            }
                            for (this.isZero() && (n = "0" + n); n.length % t !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        i(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var e = this.words[0];
                        return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(e, t) {
                        return i("undefined" != typeof A), this.toArrayLike(A, e, t)
                    }, o.prototype.toArray = function(e, t) {
                        return this.toArrayLike(Array, e, t)
                    }, o.prototype.toArrayLike = function(e, t, n) {
                        var o = this.byteLength(),
                            a = n || Math.max(1, o);
                        i(o <= a, "byte array longer than desired length"), i(a > 0, "Requested array length <= 0"), this.strip();
                        var r, s, c = "le" === t,
                            l = new e(a),
                            d = this.clone();
                        if (c) {
                            for (s = 0; !d.isZero(); s++) r = d.andln(255), d.iushrn(8), l[s] = r;
                            for (; s < a; s++) l[s] = 0
                        } else {
                            for (s = 0; s < a - o; s++) l[s] = 0;
                            for (s = 0; !d.isZero(); s++) r = d.andln(255), d.iushrn(8), l[a - s - 1] = r
                        }
                        return l
                    }, Math.clz32 ? o.prototype._countBits = function(e) {
                        return 32 - Math.clz32(e)
                    } : o.prototype._countBits = function(e) {
                        var t = e,
                            i = 0;
                        return t >= 4096 && (i += 13, t >>>= 13), t >= 64 && (i += 7, t >>>= 7), t >= 8 && (i += 4, t >>>= 4), t >= 2 && (i += 2, t >>>= 2), i + t
                    }, o.prototype._zeroBits = function(e) {
                        if (0 === e) return 26;
                        var t = e,
                            i = 0;
                        return 0 === (8191 & t) && (i += 13, t >>>= 13), 0 === (127 & t) && (i += 7, t >>>= 7), 0 === (15 & t) && (i += 4, t >>>= 4), 0 === (3 & t) && (i += 2, t >>>= 2), 0 === (1 & t) && i++, i
                    }, o.prototype.bitLength = function() {
                        var e = this.words[this.length - 1],
                            t = this._countBits(e);
                        return 26 * (this.length - 1) + t
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var e = 0, t = 0; t < this.length; t++) {
                            var i = this._zeroBits(this.words[t]);
                            if (e += i, 26 !== i) break
                        }
                        return e
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(e) {
                        return 0 !== this.negative ? this.abs()
                            .inotn(e)
                            .iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(e) {
                        return this.testn(e - 1) ? this.notn(e)
                            .iaddn(1)
                            .ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone()
                            .ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(e) {
                        for (; this.length < e.length;) this.words[this.length++] = 0;
                        for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                        return this.strip()
                    }, o.prototype.ior = function(e) {
                        return i(0 === (this.negative | e.negative)), this.iuor(e)
                    }, o.prototype.or = function(e) {
                        return this.length > e.length ? this.clone()
                            .ior(e) : e.clone()
                            .ior(this)
                    }, o.prototype.uor = function(e) {
                        return this.length > e.length ? this.clone()
                            .iuor(e) : e.clone()
                            .iuor(this)
                    }, o.prototype.iuand = function(e) {
                        var t;
                        t = this.length > e.length ? e : this;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] & e.words[i];
                        return this.length = t.length, this.strip()
                    }, o.prototype.iand = function(e) {
                        return i(0 === (this.negative | e.negative)), this.iuand(e)
                    }, o.prototype.and = function(e) {
                        return this.length > e.length ? this.clone()
                            .iand(e) : e.clone()
                            .iand(this)
                    }, o.prototype.uand = function(e) {
                        return this.length > e.length ? this.clone()
                            .iuand(e) : e.clone()
                            .iuand(this)
                    }, o.prototype.iuxor = function(e) {
                        var t, i;
                        this.length > e.length ? (t = this, i = e) : (t = e, i = this);
                        for (var n = 0; n < i.length; n++) this.words[n] = t.words[n] ^ i.words[n];
                        if (this !== t)
                            for (; n < t.length; n++) this.words[n] = t.words[n];
                        return this.length = t.length, this.strip()
                    }, o.prototype.ixor = function(e) {
                        return i(0 === (this.negative | e.negative)), this.iuxor(e)
                    }, o.prototype.xor = function(e) {
                        return this.length > e.length ? this.clone()
                            .ixor(e) : e.clone()
                            .ixor(this)
                    }, o.prototype.uxor = function(e) {
                        return this.length > e.length ? this.clone()
                            .iuxor(e) : e.clone()
                            .iuxor(this)
                    }, o.prototype.inotn = function(e) {
                        i("number" == typeof e && e >= 0);
                        var t = 0 | Math.ceil(e / 26),
                            n = e % 26;
                        this._expand(t), n > 0 && t--;
                        for (var o = 0; o < t; o++) this.words[o] = 67108863 & ~this.words[o];
                        return n > 0 && (this.words[o] = ~this.words[o] & 67108863 >> 26 - n), this.strip()
                    }, o.prototype.notn = function(e) {
                        return this.clone()
                            .inotn(e)
                    }, o.prototype.setn = function(e, t) {
                        i("number" == typeof e && e >= 0);
                        var n = e / 26 | 0,
                            o = e % 26;
                        return this._expand(n + 1), t ? this.words[n] = this.words[n] | 1 << o : this.words[n] = this.words[n] & ~(1 << o), this.strip()
                    }, o.prototype.iadd = function(e) {
                        var t;
                        if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                        var i, n;
                        this.length > e.length ? (i = this, n = e) : (i = e, n = this);
                        for (var o = 0, a = 0; a < n.length; a++) t = (0 | i.words[a]) + (0 | n.words[a]) + o, this.words[a] = 67108863 & t, o = t >>> 26;
                        for (; 0 !== o && a < i.length; a++) t = (0 | i.words[a]) + o, this.words[a] = 67108863 & t, o = t >>> 26;
                        if (this.length = i.length, 0 !== o) this.words[this.length] = o, this.length++;
                        else if (i !== this)
                            for (; a < i.length; a++) this.words[a] = i.words[a];
                        return this
                    }, o.prototype.add = function(e) {
                        var t;
                        return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone()
                            .iadd(e) : e.clone()
                            .iadd(this)
                    }, o.prototype.isub = function(e) {
                        if (0 !== e.negative) {
                            e.negative = 0;
                            var t = this.iadd(e);
                            return e.negative = 1, t._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                        var i = this.cmp(e);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        var n, o;
                        i > 0 ? (n = this, o = e) : (n = e, o = this);
                        for (var a = 0, r = 0; r < o.length; r++) t = (0 | n.words[r]) - (0 | o.words[r]) + a, a = t >> 26, this.words[r] = 67108863 & t;
                        for (; 0 !== a && r < n.length; r++) t = (0 | n.words[r]) + a, a = t >> 26, this.words[r] = 67108863 & t;
                        if (0 === a && r < n.length && n !== this)
                            for (; r < n.length; r++) this.words[r] = n.words[r];
                        return this.length = Math.max(this.length, r), n !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(e) {
                        return this.clone()
                            .isub(e)
                    };
                    var w = function(e, t, i) {
                        var n, o, a, r = e.words,
                            s = t.words,
                            c = i.words,
                            l = 0,
                            d = 0 | r[0],
                            u = 8191 & d,
                            p = d >>> 13,
                            h = 0 | r[1],
                            f = 8191 & h,
                            b = h >>> 13,
                            m = 0 | r[2],
                            M = 8191 & m,
                            g = m >>> 13,
                            _ = 0 | r[3],
                            A = 8191 & _,
                            O = _ >>> 13,
                            v = 0 | r[4],
                            y = 8191 & v,
                            z = v >>> 13,
                            w = 0 | r[5],
                            T = 8191 & w,
                            C = w >>> 13,
                            I = 0 | r[6],
                            S = 8191 & I,
                            E = I >>> 13,
                            L = 0 | r[7],
                            N = 8191 & L,
                            R = L >>> 13,
                            q = 0 | r[8],
                            x = 8191 & q,
                            B = q >>> 13,
                            D = 0 | r[9],
                            W = 8191 & D,
                            P = D >>> 13,
                            k = 0 | s[0],
                            F = 8191 & k,
                            H = k >>> 13,
                            U = 0 | s[1],
                            G = 8191 & U,
                            j = U >>> 13,
                            Y = 0 | s[2],
                            X = 8191 & Y,
                            V = Y >>> 13,
                            Q = 0 | s[3],
                            K = 8191 & Q,
                            J = Q >>> 13,
                            Z = 0 | s[4],
                            $ = 8191 & Z,
                            ee = Z >>> 13,
                            te = 0 | s[5],
                            ie = 8191 & te,
                            ne = te >>> 13,
                            oe = 0 | s[6],
                            ae = 8191 & oe,
                            re = oe >>> 13,
                            se = 0 | s[7],
                            ce = 8191 & se,
                            le = se >>> 13,
                            de = 0 | s[8],
                            ue = 8191 & de,
                            pe = de >>> 13,
                            he = 0 | s[9],
                            fe = 8191 & he,
                            be = he >>> 13;
                        i.negative = e.negative ^ t.negative, i.length = 19, n = Math.imul(u, F), o = Math.imul(u, H), o = o + Math.imul(p, F) | 0, a = Math.imul(p, H);
                        var me = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(f, F), o = Math.imul(f, H), o = o + Math.imul(b, F) | 0, a = Math.imul(b, H), n = n + Math.imul(u, G) | 0, o = o + Math.imul(u, j) | 0, o = o + Math.imul(p, G) | 0, a = a + Math.imul(p, j) | 0;
                        var Me = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(M, F), o = Math.imul(M, H), o = o + Math.imul(g, F) | 0, a = Math.imul(g, H), n = n + Math.imul(f, G) | 0, o = o + Math.imul(f, j) | 0, o = o + Math.imul(b, G) | 0, a = a + Math.imul(b, j) | 0, n = n + Math.imul(u, X) | 0, o = o + Math.imul(u, V) | 0, o = o + Math.imul(p, X) | 0, a = a + Math.imul(p, V) | 0;
                        var ge = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(A, F), o = Math.imul(A, H), o = o + Math.imul(O, F) | 0, a = Math.imul(O, H), n = n + Math.imul(M, G) | 0, o = o + Math.imul(M, j) | 0, o = o + Math.imul(g, G) | 0, a = a + Math.imul(g, j) | 0, n = n + Math.imul(f, X) | 0, o = o + Math.imul(f, V) | 0, o = o + Math.imul(b, X) | 0, a = a + Math.imul(b, V) | 0, n = n + Math.imul(u, K) | 0, o = o + Math.imul(u, J) | 0, o = o + Math.imul(p, K) | 0, a = a + Math.imul(p, J) | 0;
                        var _e = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(y, F), o = Math.imul(y, H), o = o + Math.imul(z, F) | 0, a = Math.imul(z, H), n = n + Math.imul(A, G) | 0, o = o + Math.imul(A, j) | 0, o = o + Math.imul(O, G) | 0, a = a + Math.imul(O, j) | 0, n = n + Math.imul(M, X) | 0, o = o + Math.imul(M, V) | 0, o = o + Math.imul(g, X) | 0, a = a + Math.imul(g, V) | 0, n = n + Math.imul(f, K) | 0, o = o + Math.imul(f, J) | 0, o = o + Math.imul(b, K) | 0, a = a + Math.imul(b, J) | 0, n = n + Math.imul(u, $) | 0, o = o + Math.imul(u, ee) | 0, o = o + Math.imul(p, $) | 0, a = a + Math.imul(p, ee) | 0;
                        var Ae = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(T, F), o = Math.imul(T, H), o = o + Math.imul(C, F) | 0, a = Math.imul(C, H), n = n + Math.imul(y, G) | 0, o = o + Math.imul(y, j) | 0, o = o + Math.imul(z, G) | 0, a = a + Math.imul(z, j) | 0, n = n + Math.imul(A, X) | 0, o = o + Math.imul(A, V) | 0, o = o + Math.imul(O, X) | 0, a = a + Math.imul(O, V) | 0, n = n + Math.imul(M, K) | 0, o = o + Math.imul(M, J) | 0, o = o + Math.imul(g, K) | 0, a = a + Math.imul(g, J) | 0, n = n + Math.imul(f, $) | 0, o = o + Math.imul(f, ee) | 0, o = o + Math.imul(b, $) | 0, a = a + Math.imul(b, ee) | 0, n = n + Math.imul(u, ie) | 0, o = o + Math.imul(u, ne) | 0, o = o + Math.imul(p, ie) | 0, a = a + Math.imul(p, ne) | 0;
                        var Oe = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(S, F), o = Math.imul(S, H), o = o + Math.imul(E, F) | 0, a = Math.imul(E, H), n = n + Math.imul(T, G) | 0, o = o + Math.imul(T, j) | 0, o = o + Math.imul(C, G) | 0, a = a + Math.imul(C, j) | 0, n = n + Math.imul(y, X) | 0, o = o + Math.imul(y, V) | 0, o = o + Math.imul(z, X) | 0, a = a + Math.imul(z, V) | 0, n = n + Math.imul(A, K) | 0, o = o + Math.imul(A, J) | 0, o = o + Math.imul(O, K) | 0, a = a + Math.imul(O, J) | 0, n = n + Math.imul(M, $) | 0, o = o + Math.imul(M, ee) | 0, o = o + Math.imul(g, $) | 0, a = a + Math.imul(g, ee) | 0, n = n + Math.imul(f, ie) | 0, o = o + Math.imul(f, ne) | 0, o = o + Math.imul(b, ie) | 0, a = a + Math.imul(b, ne) | 0, n = n + Math.imul(u, ae) | 0, o = o + Math.imul(u, re) | 0, o = o + Math.imul(p, ae) | 0, a = a + Math.imul(p, re) | 0;
                        var ve = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(N, F), o = Math.imul(N, H), o = o + Math.imul(R, F) | 0, a = Math.imul(R, H), n = n + Math.imul(S, G) | 0, o = o + Math.imul(S, j) | 0, o = o + Math.imul(E, G) | 0, a = a + Math.imul(E, j) | 0, n = n + Math.imul(T, X) | 0, o = o + Math.imul(T, V) | 0, o = o + Math.imul(C, X) | 0, a = a + Math.imul(C, V) | 0, n = n + Math.imul(y, K) | 0, o = o + Math.imul(y, J) | 0, o = o + Math.imul(z, K) | 0, a = a + Math.imul(z, J) | 0, n = n + Math.imul(A, $) | 0, o = o + Math.imul(A, ee) | 0, o = o + Math.imul(O, $) | 0, a = a + Math.imul(O, ee) | 0, n = n + Math.imul(M, ie) | 0, o = o + Math.imul(M, ne) | 0, o = o + Math.imul(g, ie) | 0, a = a + Math.imul(g, ne) | 0, n = n + Math.imul(f, ae) | 0, o = o + Math.imul(f, re) | 0, o = o + Math.imul(b, ae) | 0, a = a + Math.imul(b, re) | 0, n = n + Math.imul(u, ce) | 0, o = o + Math.imul(u, le) | 0, o = o + Math.imul(p, ce) | 0, a = a + Math.imul(p, le) | 0;
                        var ye = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(x, F), o = Math.imul(x, H), o = o + Math.imul(B, F) | 0, a = Math.imul(B, H), n = n + Math.imul(N, G) | 0, o = o + Math.imul(N, j) | 0, o = o + Math.imul(R, G) | 0, a = a + Math.imul(R, j) | 0, n = n + Math.imul(S, X) | 0, o = o + Math.imul(S, V) | 0, o = o + Math.imul(E, X) | 0, a = a + Math.imul(E, V) | 0, n = n + Math.imul(T, K) | 0, o = o + Math.imul(T, J) | 0, o = o + Math.imul(C, K) | 0, a = a + Math.imul(C, J) | 0, n = n + Math.imul(y, $) | 0, o = o + Math.imul(y, ee) | 0, o = o + Math.imul(z, $) | 0, a = a + Math.imul(z, ee) | 0, n = n + Math.imul(A, ie) | 0, o = o + Math.imul(A, ne) | 0, o = o + Math.imul(O, ie) | 0, a = a + Math.imul(O, ne) | 0, n = n + Math.imul(M, ae) | 0, o = o + Math.imul(M, re) | 0, o = o + Math.imul(g, ae) | 0, a = a + Math.imul(g, re) | 0, n = n + Math.imul(f, ce) | 0, o = o + Math.imul(f, le) | 0, o = o + Math.imul(b, ce) | 0, a = a + Math.imul(b, le) | 0, n = n + Math.imul(u, ue) | 0, o = o + Math.imul(u, pe) | 0, o = o + Math.imul(p, ue) | 0, a = a + Math.imul(p, pe) | 0;
                        var ze = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, n = Math.imul(W, F), o = Math.imul(W, H), o = o + Math.imul(P, F) | 0, a = Math.imul(P, H), n = n + Math.imul(x, G) | 0, o = o + Math.imul(x, j) | 0, o = o + Math.imul(B, G) | 0, a = a + Math.imul(B, j) | 0, n = n + Math.imul(N, X) | 0, o = o + Math.imul(N, V) | 0, o = o + Math.imul(R, X) | 0, a = a + Math.imul(R, V) | 0, n = n + Math.imul(S, K) | 0, o = o + Math.imul(S, J) | 0, o = o + Math.imul(E, K) | 0, a = a + Math.imul(E, J) | 0, n = n + Math.imul(T, $) | 0, o = o + Math.imul(T, ee) | 0, o = o + Math.imul(C, $) | 0, a = a + Math.imul(C, ee) | 0, n = n + Math.imul(y, ie) | 0, o = o + Math.imul(y, ne) | 0, o = o + Math.imul(z, ie) | 0, a = a + Math.imul(z, ne) | 0, n = n + Math.imul(A, ae) | 0, o = o + Math.imul(A, re) | 0, o = o + Math.imul(O, ae) | 0, a = a + Math.imul(O, re) | 0, n = n + Math.imul(M, ce) | 0, o = o + Math.imul(M, le) | 0, o = o + Math.imul(g, ce) | 0, a = a + Math.imul(g, le) | 0, n = n + Math.imul(f, ue) | 0, o = o + Math.imul(f, pe) | 0, o = o + Math.imul(b, ue) | 0, a = a + Math.imul(b, pe) | 0, n = n + Math.imul(u, fe) | 0, o = o + Math.imul(u, be) | 0, o = o + Math.imul(p, fe) | 0, a = a + Math.imul(p, be) | 0;
                        var we = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(W, G), o = Math.imul(W, j), o = o + Math.imul(P, G) | 0, a = Math.imul(P, j), n = n + Math.imul(x, X) | 0, o = o + Math.imul(x, V) | 0, o = o + Math.imul(B, X) | 0, a = a + Math.imul(B, V) | 0, n = n + Math.imul(N, K) | 0, o = o + Math.imul(N, J) | 0, o = o + Math.imul(R, K) | 0, a = a + Math.imul(R, J) | 0, n = n + Math.imul(S, $) | 0, o = o + Math.imul(S, ee) | 0, o = o + Math.imul(E, $) | 0, a = a + Math.imul(E, ee) | 0, n = n + Math.imul(T, ie) | 0, o = o + Math.imul(T, ne) | 0, o = o + Math.imul(C, ie) | 0, a = a + Math.imul(C, ne) | 0, n = n + Math.imul(y, ae) | 0, o = o + Math.imul(y, re) | 0, o = o + Math.imul(z, ae) | 0, a = a + Math.imul(z, re) | 0, n = n + Math.imul(A, ce) | 0, o = o + Math.imul(A, le) | 0, o = o + Math.imul(O, ce) | 0, a = a + Math.imul(O, le) | 0, n = n + Math.imul(M, ue) | 0, o = o + Math.imul(M, pe) | 0, o = o + Math.imul(g, ue) | 0, a = a + Math.imul(g, pe) | 0, n = n + Math.imul(f, fe) | 0, o = o + Math.imul(f, be) | 0, o = o + Math.imul(b, fe) | 0, a = a + Math.imul(b, be) | 0;
                        var Te = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(W, X), o = Math.imul(W, V), o = o + Math.imul(P, X) | 0, a = Math.imul(P, V), n = n + Math.imul(x, K) | 0, o = o + Math.imul(x, J) | 0, o = o + Math.imul(B, K) | 0, a = a + Math.imul(B, J) | 0, n = n + Math.imul(N, $) | 0, o = o + Math.imul(N, ee) | 0, o = o + Math.imul(R, $) | 0, a = a + Math.imul(R, ee) | 0, n = n + Math.imul(S, ie) | 0, o = o + Math.imul(S, ne) | 0, o = o + Math.imul(E, ie) | 0, a = a + Math.imul(E, ne) | 0, n = n + Math.imul(T, ae) | 0, o = o + Math.imul(T, re) | 0, o = o + Math.imul(C, ae) | 0, a = a + Math.imul(C, re) | 0, n = n + Math.imul(y, ce) | 0, o = o + Math.imul(y, le) | 0, o = o + Math.imul(z, ce) | 0, a = a + Math.imul(z, le) | 0, n = n + Math.imul(A, ue) | 0, o = o + Math.imul(A, pe) | 0, o = o + Math.imul(O, ue) | 0, a = a + Math.imul(O, pe) | 0, n = n + Math.imul(M, fe) | 0, o = o + Math.imul(M, be) | 0, o = o + Math.imul(g, fe) | 0, a = a + Math.imul(g, be) | 0;
                        var Ce = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(W, K), o = Math.imul(W, J), o = o + Math.imul(P, K) | 0, a = Math.imul(P, J), n = n + Math.imul(x, $) | 0, o = o + Math.imul(x, ee) | 0, o = o + Math.imul(B, $) | 0, a = a + Math.imul(B, ee) | 0, n = n + Math.imul(N, ie) | 0, o = o + Math.imul(N, ne) | 0, o = o + Math.imul(R, ie) | 0, a = a + Math.imul(R, ne) | 0, n = n + Math.imul(S, ae) | 0, o = o + Math.imul(S, re) | 0, o = o + Math.imul(E, ae) | 0, a = a + Math.imul(E, re) | 0, n = n + Math.imul(T, ce) | 0, o = o + Math.imul(T, le) | 0, o = o + Math.imul(C, ce) | 0, a = a + Math.imul(C, le) | 0, n = n + Math.imul(y, ue) | 0, o = o + Math.imul(y, pe) | 0, o = o + Math.imul(z, ue) | 0, a = a + Math.imul(z, pe) | 0, n = n + Math.imul(A, fe) | 0, o = o + Math.imul(A, be) | 0, o = o + Math.imul(O, fe) | 0, a = a + Math.imul(O, be) | 0;
                        var Ie = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(W, $), o = Math.imul(W, ee), o = o + Math.imul(P, $) | 0, a = Math.imul(P, ee), n = n + Math.imul(x, ie) | 0, o = o + Math.imul(x, ne) | 0, o = o + Math.imul(B, ie) | 0, a = a + Math.imul(B, ne) | 0, n = n + Math.imul(N, ae) | 0, o = o + Math.imul(N, re) | 0, o = o + Math.imul(R, ae) | 0, a = a + Math.imul(R, re) | 0, n = n + Math.imul(S, ce) | 0, o = o + Math.imul(S, le) | 0, o = o + Math.imul(E, ce) | 0, a = a + Math.imul(E, le) | 0, n = n + Math.imul(T, ue) | 0, o = o + Math.imul(T, pe) | 0, o = o + Math.imul(C, ue) | 0, a = a + Math.imul(C, pe) | 0, n = n + Math.imul(y, fe) | 0, o = o + Math.imul(y, be) | 0, o = o + Math.imul(z, fe) | 0, a = a + Math.imul(z, be) | 0;
                        var Se = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(W, ie), o = Math.imul(W, ne), o = o + Math.imul(P, ie) | 0, a = Math.imul(P, ne), n = n + Math.imul(x, ae) | 0, o = o + Math.imul(x, re) | 0, o = o + Math.imul(B, ae) | 0, a = a + Math.imul(B, re) | 0, n = n + Math.imul(N, ce) | 0, o = o + Math.imul(N, le) | 0, o = o + Math.imul(R, ce) | 0, a = a + Math.imul(R, le) | 0, n = n + Math.imul(S, ue) | 0, o = o + Math.imul(S, pe) | 0, o = o + Math.imul(E, ue) | 0, a = a + Math.imul(E, pe) | 0, n = n + Math.imul(T, fe) | 0, o = o + Math.imul(T, be) | 0, o = o + Math.imul(C, fe) | 0, a = a + Math.imul(C, be) | 0;
                        var Ee = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(W, ae), o = Math.imul(W, re), o = o + Math.imul(P, ae) | 0, a = Math.imul(P, re), n = n + Math.imul(x, ce) | 0, o = o + Math.imul(x, le) | 0, o = o + Math.imul(B, ce) | 0, a = a + Math.imul(B, le) | 0, n = n + Math.imul(N, ue) | 0, o = o + Math.imul(N, pe) | 0, o = o + Math.imul(R, ue) | 0, a = a + Math.imul(R, pe) | 0, n = n + Math.imul(S, fe) | 0, o = o + Math.imul(S, be) | 0, o = o + Math.imul(E, fe) | 0, a = a + Math.imul(E, be) | 0;
                        var Le = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, n = Math.imul(W, ce), o = Math.imul(W, le), o = o + Math.imul(P, ce) | 0, a = Math.imul(P, le), n = n + Math.imul(x, ue) | 0, o = o + Math.imul(x, pe) | 0, o = o + Math.imul(B, ue) | 0, a = a + Math.imul(B, pe) | 0, n = n + Math.imul(N, fe) | 0, o = o + Math.imul(N, be) | 0, o = o + Math.imul(R, fe) | 0, a = a + Math.imul(R, be) | 0;
                        var Ne = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(W, ue), o = Math.imul(W, pe), o = o + Math.imul(P, ue) | 0, a = Math.imul(P, pe), n = n + Math.imul(x, fe) | 0, o = o + Math.imul(x, be) | 0, o = o + Math.imul(B, fe) | 0, a = a + Math.imul(B, be) | 0;
                        var Re = (l + n | 0) + ((8191 & o) << 13) | 0;
                        l = (a + (o >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(W, fe), o = Math.imul(W, be), o = o + Math.imul(P, fe) | 0, a = Math.imul(P, be);
                        var qe = (l + n | 0) + ((8191 & o) << 13) | 0;
                        return l = (a + (o >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, c[0] = me, c[1] = Me, c[2] = ge, c[3] = _e, c[4] = Ae, c[5] = Oe, c[6] = ve, c[7] = ye, c[8] = ze, c[9] = we, c[10] = Te, c[11] = Ce, c[12] = Ie, c[13] = Se, c[14] = Ee, c[15] = Le, c[16] = Ne, c[17] = Re, c[18] = qe, 0 !== l && (c[19] = l, i.length++), i
                    };
                    Math.imul || (w = l), o.prototype.mulTo = function(e, t) {
                        var i, n = this.length + e.length;
                        return i = 10 === this.length && 10 === e.length ? w(this, e, t) : n < 63 ? l(this, e, t) : n < 1024 ? d(this, e, t) : u(this, e, t)
                    }, p.prototype.makeRBT = function(e) {
                        for (var t = new Array(e), i = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, i, e);
                        return t
                    }, p.prototype.revBin = function(e, t, i) {
                        if (0 === e || e === i - 1) return e;
                        for (var n = 0, o = 0; o < t; o++) n |= (1 & e) << t - o - 1, e >>= 1;
                        return n
                    }, p.prototype.permute = function(e, t, i, n, o, a) {
                        for (var r = 0; r < a; r++) n[r] = t[e[r]], o[r] = i[e[r]]
                    }, p.prototype.transform = function(e, t, i, n, o, a) {
                        this.permute(a, e, t, i, n, o);
                        for (var r = 1; r < o; r <<= 1)
                            for (var s = r << 1, c = Math.cos(2 * Math.PI / s), l = Math.sin(2 * Math.PI / s), d = 0; d < o; d += s)
                                for (var u = c, p = l, h = 0; h < r; h++) {
                                    var f = i[d + h],
                                        b = n[d + h],
                                        m = i[d + h + r],
                                        M = n[d + h + r],
                                        g = u * m - p * M;
                                    M = u * M + p * m, m = g, i[d + h] = f + m, n[d + h] = b + M, i[d + h + r] = f - m, n[d + h + r] = b - M, h !== s && (g = c * u - l * p, p = c * p + l * u, u = g)
                                }
                    }, p.prototype.guessLen13b = function(e, t) {
                        var i = 1 | Math.max(t, e),
                            n = 1 & i,
                            o = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) o++;
                        return 1 << o + 1 + n
                    }, p.prototype.conjugate = function(e, t, i) {
                        if (!(i <= 1))
                            for (var n = 0; n < i / 2; n++) {
                                var o = e[n];
                                e[n] = e[i - n - 1], e[i - n - 1] = o, o = t[n], t[n] = -t[i - n - 1], t[i - n - 1] = -o
                            }
                    }, p.prototype.normalize13b = function(e, t) {
                        for (var i = 0, n = 0; n < t / 2; n++) {
                            var o = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + i;
                            e[n] = 67108863 & o, i = o < 67108864 ? 0 : o / 67108864 | 0
                        }
                        return e
                    }, p.prototype.convert13b = function(e, t, n, o) {
                        for (var a = 0, r = 0; r < t; r++) a += 0 | e[r], n[2 * r] = 8191 & a, a >>>= 13, n[2 * r + 1] = 8191 & a, a >>>= 13;
                        for (r = 2 * t; r < o; ++r) n[r] = 0;
                        i(0 === a), i(0 === (a & -8192))
                    }, p.prototype.stub = function(e) {
                        for (var t = new Array(e), i = 0; i < e; i++) t[i] = 0;
                        return t
                    }, p.prototype.mulp = function(e, t, i) {
                        var n = 2 * this.guessLen13b(e.length, t.length),
                            o = this.makeRBT(n),
                            a = this.stub(n),
                            r = new Array(n),
                            s = new Array(n),
                            c = new Array(n),
                            l = new Array(n),
                            d = new Array(n),
                            u = new Array(n),
                            p = i.words;
                        p.length = n, this.convert13b(e.words, e.length, r, n), this.convert13b(t.words, t.length, l, n), this.transform(r, a, s, c, n, o), this.transform(l, a, d, u, n, o);
                        for (var h = 0; h < n; h++) {
                            var f = s[h] * d[h] - c[h] * u[h];
                            c[h] = s[h] * u[h] + c[h] * d[h], s[h] = f
                        }
                        return this.conjugate(s, c, n), this.transform(s, c, p, a, n, o), this.conjugate(p, a, n), this.normalize13b(p, n), i.negative = e.negative ^ t.negative, i.length = e.length + t.length, i.strip()
                    }, o.prototype.mul = function(e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                    }, o.prototype.mulf = function(e) {
                        var t = new o(null);
                        return t.words = new Array(this.length + e.length), u(this, e, t)
                    }, o.prototype.imul = function(e) {
                        return this.clone()
                            .mulTo(e, this)
                    }, o.prototype.imuln = function(e) {
                        i("number" == typeof e), i(e < 67108864);
                        for (var t = 0, n = 0; n < this.length; n++) {
                            var o = (0 | this.words[n]) * e,
                                a = (67108863 & o) + (67108863 & t);
                            t >>= 26, t += o / 67108864 | 0, t += a >>> 26, this.words[n] = 67108863 & a
                        }
                        return 0 !== t && (this.words[n] = t, this.length++), this
                    }, o.prototype.muln = function(e) {
                        return this.clone()
                            .imuln(e)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(e) {
                        var t = c(e);
                        if (0 === t.length) return new o(1);
                        for (var i = this, n = 0; n < t.length && 0 === t[n]; n++, i = i.sqr());
                        if (++n < t.length)
                            for (var a = i.sqr(); n < t.length; n++, a = a.sqr()) 0 !== t[n] && (i = i.mul(a));
                        return i
                    }, o.prototype.iushln = function(e) {
                        i("number" == typeof e && e >= 0);
                        var t, n = e % 26,
                            o = (e - n) / 26,
                            a = 67108863 >>> 26 - n << 26 - n;
                        if (0 !== n) {
                            var r = 0;
                            for (t = 0; t < this.length; t++) {
                                var s = this.words[t] & a,
                                    c = (0 | this.words[t]) - s << n;
                                this.words[t] = c | r, r = s >>> 26 - n
                            }
                            r && (this.words[t] = r, this.length++)
                        }
                        if (0 !== o) {
                            for (t = this.length - 1; t >= 0; t--) this.words[t + o] = this.words[t];
                            for (t = 0; t < o; t++) this.words[t] = 0;
                            this.length += o
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(e) {
                        return i(0 === this.negative), this.iushln(e)
                    }, o.prototype.iushrn = function(e, t, n) {
                        i("number" == typeof e && e >= 0);
                        var o;
                        o = t ? (t - t % 26) / 26 : 0;
                        var a = e % 26,
                            r = Math.min((e - a) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> a << a,
                            c = n;
                        if (o -= r, o = Math.max(0, o), c) {
                            for (var l = 0; l < r; l++) c.words[l] = this.words[l];
                            c.length = r
                        }
                        if (0 === r);
                        else if (this.length > r)
                            for (this.length -= r, l = 0; l < this.length; l++) this.words[l] = this.words[l + r];
                        else this.words[0] = 0, this.length = 1;
                        var d = 0;
                        for (l = this.length - 1; l >= 0 && (0 !== d || l >= o); l--) {
                            var u = 0 | this.words[l];
                            this.words[l] = d << 26 - a | u >>> a, d = u & s
                        }
                        return c && 0 !== d && (c.words[c.length++] = d), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(e, t, n) {
                        return i(0 === this.negative), this.iushrn(e, t, n)
                    }, o.prototype.shln = function(e) {
                        return this.clone()
                            .ishln(e)
                    }, o.prototype.ushln = function(e) {
                        return this.clone()
                            .iushln(e)
                    }, o.prototype.shrn = function(e) {
                        return this.clone()
                            .ishrn(e)
                    }, o.prototype.ushrn = function(e) {
                        return this.clone()
                            .iushrn(e)
                    }, o.prototype.testn = function(e) {
                        i("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26,
                            o = 1 << t;
                        if (this.length <= n) return !1;
                        var a = this.words[n];
                        return !!(a & o)
                    }, o.prototype.imaskn = function(e) {
                        i("number" == typeof e && e >= 0);
                        var t = e % 26,
                            n = (e - t) / 26;
                        if (i(0 === this.negative, "imaskn works only with positive numbers"),
                            this.length <= n) return this;
                        if (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) {
                            var o = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= o
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(e) {
                        return this.clone()
                            .imaskn(e)
                    }, o.prototype.iaddn = function(e) {
                        return i("number" == typeof e), i(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                    }, o.prototype._iaddn = function(e) {
                        this.words[0] += e;
                        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                        return this.length = Math.max(this.length, t + 1), this
                    }, o.prototype.isubn = function(e) {
                        if (i("number" == typeof e), i(e < 67108864), e < 0) return this.iaddn(-e);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                        if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(e) {
                        return this.clone()
                            .iaddn(e)
                    }, o.prototype.subn = function(e) {
                        return this.clone()
                            .isubn(e)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone()
                            .iabs()
                    }, o.prototype._ishlnsubmul = function(e, t, n) {
                        var o, a = e.length + n;
                        this._expand(a);
                        var r, s = 0;
                        for (o = 0; o < e.length; o++) {
                            r = (0 | this.words[o + n]) + s;
                            var c = (0 | e.words[o]) * t;
                            r -= 67108863 & c, s = (r >> 26) - (c / 67108864 | 0), this.words[o + n] = 67108863 & r
                        }
                        for (; o < this.length - n; o++) r = (0 | this.words[o + n]) + s, s = r >> 26, this.words[o + n] = 67108863 & r;
                        if (0 === s) return this.strip();
                        for (i(s === -1), s = 0, o = 0; o < this.length; o++) r = -(0 | this.words[o]) + s, s = r >> 26, this.words[o] = 67108863 & r;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(e, t) {
                        var i = this.length - e.length,
                            n = this.clone(),
                            a = e,
                            r = 0 | a.words[a.length - 1],
                            s = this._countBits(r);
                        i = 26 - s, 0 !== i && (a = a.ushln(i), n.iushln(i), r = 0 | a.words[a.length - 1]);
                        var c, l = n.length - a.length;
                        if ("mod" !== t) {
                            c = new o(null), c.length = l + 1, c.words = new Array(c.length);
                            for (var d = 0; d < c.length; d++) c.words[d] = 0
                        }
                        var u = n.clone()
                            ._ishlnsubmul(a, 1, l);
                        0 === u.negative && (n = u, c && (c.words[l] = 1));
                        for (var p = l - 1; p >= 0; p--) {
                            var h = 67108864 * (0 | n.words[a.length + p]) + (0 | n.words[a.length + p - 1]);
                            for (h = Math.min(h / r | 0, 67108863), n._ishlnsubmul(a, h, p); 0 !== n.negative;) h--, n.negative = 0, n._ishlnsubmul(a, 1, p), n.isZero() || (n.negative ^= 1);
                            c && (c.words[p] = h)
                        }
                        return c && c.strip(), n.strip(), "div" !== t && 0 !== i && n.iushrn(i), {
                            div: c || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(e, t, n) {
                        if (i(!e.isZero()), this.isZero()) return {
                            div: new o(0),
                            mod: new o(0)
                        };
                        var a, r, s;
                        return 0 !== this.negative && 0 === e.negative ? (s = this.neg()
                            .divmod(e, t), "mod" !== t && (a = s.div.neg()), "div" !== t && (r = s.mod.neg(), n && 0 !== r.negative && r.iadd(e)), {
                                div: a,
                                mod: r
                            }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (a = s.div.neg()), {
                            div: a,
                            mod: s.mod
                        }) : 0 !== (this.negative & e.negative) ? (s = this.neg()
                            .divmod(e.neg(), t), "div" !== t && (r = s.mod.neg(), n && 0 !== r.negative && r.isub(e)), {
                                div: s.div,
                                mod: r
                            }) : e.length > this.length || this.cmp(e) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === e.length ? "div" === t ? {
                            div: this.divn(e.words[0]),
                            mod: null
                        } : "mod" === t ? {
                            div: null,
                            mod: new o(this.modn(e.words[0]))
                        } : {
                            div: this.divn(e.words[0]),
                            mod: new o(this.modn(e.words[0]))
                        } : this._wordDiv(e, t)
                    }, o.prototype.div = function(e) {
                        return this.divmod(e, "div", !1)
                            .div
                    }, o.prototype.mod = function(e) {
                        return this.divmod(e, "mod", !1)
                            .mod
                    }, o.prototype.umod = function(e) {
                        return this.divmod(e, "mod", !0)
                            .mod
                    }, o.prototype.divRound = function(e) {
                        var t = this.divmod(e);
                        if (t.mod.isZero()) return t.div;
                        var i = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                            n = e.ushrn(1),
                            o = e.andln(1),
                            a = i.cmp(n);
                        return a < 0 || 1 === o && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                    }, o.prototype.modn = function(e) {
                        i(e <= 67108863);
                        for (var t = (1 << 26) % e, n = 0, o = this.length - 1; o >= 0; o--) n = (t * n + (0 | this.words[o])) % e;
                        return n
                    }, o.prototype.idivn = function(e) {
                        i(e <= 67108863);
                        for (var t = 0, n = this.length - 1; n >= 0; n--) {
                            var o = (0 | this.words[n]) + 67108864 * t;
                            this.words[n] = o / e | 0, t = o % e
                        }
                        return this.strip()
                    }, o.prototype.divn = function(e) {
                        return this.clone()
                            .idivn(e)
                    }, o.prototype.egcd = function(e) {
                        i(0 === e.negative), i(!e.isZero());
                        var t = this,
                            n = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var a = new o(1), r = new o(0), s = new o(0), c = new o(1), l = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++l;
                        for (var d = n.clone(), u = t.clone(); !t.isZero();) {
                            for (var p = 0, h = 1; 0 === (t.words[0] & h) && p < 26; ++p, h <<= 1);
                            if (p > 0)
                                for (t.iushrn(p); p-- > 0;)(a.isOdd() || r.isOdd()) && (a.iadd(d), r.isub(u)), a.iushrn(1), r.iushrn(1);
                            for (var f = 0, b = 1; 0 === (n.words[0] & b) && f < 26; ++f, b <<= 1);
                            if (f > 0)
                                for (n.iushrn(f); f-- > 0;)(s.isOdd() || c.isOdd()) && (s.iadd(d), c.isub(u)), s.iushrn(1), c.iushrn(1);
                            t.cmp(n) >= 0 ? (t.isub(n), a.isub(s), r.isub(c)) : (n.isub(t), s.isub(a), c.isub(r))
                        }
                        return {
                            a: s,
                            b: c,
                            gcd: n.iushln(l)
                        }
                    }, o.prototype._invmp = function(e) {
                        i(0 === e.negative), i(!e.isZero());
                        var t = this,
                            n = e.clone();
                        t = 0 !== t.negative ? t.umod(e) : t.clone();
                        for (var a = new o(1), r = new o(0), s = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                            for (var c = 0, l = 1; 0 === (t.words[0] & l) && c < 26; ++c, l <<= 1);
                            if (c > 0)
                                for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(s), a.iushrn(1);
                            for (var d = 0, u = 1; 0 === (n.words[0] & u) && d < 26; ++d, u <<= 1);
                            if (d > 0)
                                for (n.iushrn(d); d-- > 0;) r.isOdd() && r.iadd(s), r.iushrn(1);
                            t.cmp(n) >= 0 ? (t.isub(n), a.isub(r)) : (n.isub(t), r.isub(a))
                        }
                        var p;
                        return p = 0 === t.cmpn(1) ? a : r, p.cmpn(0) < 0 && p.iadd(e), p
                    }, o.prototype.gcd = function(e) {
                        if (this.isZero()) return e.abs();
                        if (e.isZero()) return this.abs();
                        var t = this.clone(),
                            i = e.clone();
                        t.negative = 0, i.negative = 0;
                        for (var n = 0; t.isEven() && i.isEven(); n++) t.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; t.isEven();) t.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var o = t.cmp(i);
                            if (o < 0) {
                                var a = t;
                                t = i, i = a
                            } else if (0 === o || 0 === i.cmpn(1)) break;
                            t.isub(i)
                        }
                        return i.iushln(n)
                    }, o.prototype.invm = function(e) {
                        return this.egcd(e)
                            .a.umod(e)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(e) {
                        return this.words[0] & e
                    }, o.prototype.bincn = function(e) {
                        i("number" == typeof e);
                        var t = e % 26,
                            n = (e - t) / 26,
                            o = 1 << t;
                        if (this.length <= n) return this._expand(n + 1), this.words[n] |= o, this;
                        for (var a = o, r = n; 0 !== a && r < this.length; r++) {
                            var s = 0 | this.words[r];
                            s += a, a = s >>> 26, s &= 67108863, this.words[r] = s
                        }
                        return 0 !== a && (this.words[r] = a, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(e) {
                        var t = e < 0;
                        if (0 !== this.negative && !t) return -1;
                        if (0 === this.negative && t) return 1;
                        this.strip();
                        var n;
                        if (this.length > 1) n = 1;
                        else {
                            t && (e = -e), i(e <= 67108863, "Number is too big");
                            var o = 0 | this.words[0];
                            n = o === e ? 0 : o < e ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -n : n
                    }, o.prototype.cmp = function(e) {
                        if (0 !== this.negative && 0 === e.negative) return -1;
                        if (0 === this.negative && 0 !== e.negative) return 1;
                        var t = this.ucmp(e);
                        return 0 !== this.negative ? 0 | -t : t
                    }, o.prototype.ucmp = function(e) {
                        if (this.length > e.length) return 1;
                        if (this.length < e.length) return -1;
                        for (var t = 0, i = this.length - 1; i >= 0; i--) {
                            var n = 0 | this.words[i],
                                o = 0 | e.words[i];
                            if (n !== o) {
                                n < o ? t = -1 : n > o && (t = 1);
                                break
                            }
                        }
                        return t
                    }, o.prototype.gtn = function(e) {
                        return 1 === this.cmpn(e)
                    }, o.prototype.gt = function(e) {
                        return 1 === this.cmp(e)
                    }, o.prototype.gten = function(e) {
                        return this.cmpn(e) >= 0
                    }, o.prototype.gte = function(e) {
                        return this.cmp(e) >= 0
                    }, o.prototype.ltn = function(e) {
                        return this.cmpn(e) === -1
                    }, o.prototype.lt = function(e) {
                        return this.cmp(e) === -1
                    }, o.prototype.lten = function(e) {
                        return this.cmpn(e) <= 0
                    }, o.prototype.lte = function(e) {
                        return this.cmp(e) <= 0
                    }, o.prototype.eqn = function(e) {
                        return 0 === this.cmpn(e)
                    }, o.prototype.eq = function(e) {
                        return 0 === this.cmp(e)
                    }, o.red = function(e) {
                        return new g(e)
                    }, o.prototype.toRed = function(e) {
                        return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), e.convertTo(this)
                            ._forceRed(e)
                    }, o.prototype.fromRed = function() {
                        return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(e) {
                        return this.red = e, this
                    }, o.prototype.forceRed = function(e) {
                        return i(!this.red, "Already a number in reduction context"), this._forceRed(e)
                    }, o.prototype.redAdd = function(e) {
                        return i(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                    }, o.prototype.redIAdd = function(e) {
                        return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                    }, o.prototype.redSub = function(e) {
                        return i(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                    }, o.prototype.redISub = function(e) {
                        return i(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                    }, o.prototype.redShl = function(e) {
                        return i(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                    }, o.prototype.redMul = function(e) {
                        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                    }, o.prototype.redIMul = function(e) {
                        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                    }, o.prototype.redSqr = function() {
                        return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(e) {
                        return i(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                    };
                    var T = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };
                    h.prototype._tmp = function() {
                        var e = new o(null);
                        return e.words = new Array(Math.ceil(this.n / 13)), e
                    }, h.prototype.ireduce = function(e) {
                        var t, i = e;
                        do this.split(i, this.tmp), i = this.imulK(i), i = i.iadd(this.tmp), t = i.bitLength(); while (t > this.n);
                        var n = t < this.n ? -1 : i.ucmp(this.p);
                        return 0 === n ? (i.words[0] = 0, i.length = 1) : n > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
                    }, h.prototype.split = function(e, t) {
                        e.iushrn(this.n, 0, t)
                    }, h.prototype.imulK = function(e) {
                        return e.imul(this.k)
                    }, n(f, h), f.prototype.split = function(e, t) {
                        for (var i = 4194303, n = Math.min(e.length, 9), o = 0; o < n; o++) t.words[o] = e.words[o];
                        if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                        var a = e.words[9];
                        for (t.words[t.length++] = a & i, o = 10; o < e.length; o++) {
                            var r = 0 | e.words[o];
                            e.words[o - 10] = (r & i) << 4 | a >>> 22, a = r
                        }
                        a >>>= 22, e.words[o - 10] = a, 0 === a && e.length > 10 ? e.length -= 10 : e.length -= 9
                    }, f.prototype.imulK = function(e) {
                        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                        for (var t = 0, i = 0; i < e.length; i++) {
                            var n = 0 | e.words[i];
                            t += 977 * n, e.words[i] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                        }
                        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                    }, n(b, h), n(m, h), n(M, h), M.prototype.imulK = function(e) {
                        for (var t = 0, i = 0; i < e.length; i++) {
                            var n = 19 * (0 | e.words[i]) + t,
                                o = 67108863 & n;
                            n >>>= 26, e.words[i] = o, t = n
                        }
                        return 0 !== t && (e.words[e.length++] = t), e
                    }, o._prime = function C(e) {
                        if (T[e]) return T[e];
                        var C;
                        if ("k256" === e) C = new f;
                        else if ("p224" === e) C = new b;
                        else if ("p192" === e) C = new m;
                        else {
                            if ("p25519" !== e) throw new Error("Unknown prime " + e);
                            C = new M
                        }
                        return T[e] = C, C
                    }, g.prototype._verify1 = function(e) {
                        i(0 === e.negative, "red works only with positives"), i(e.red, "red works only with red numbers")
                    }, g.prototype._verify2 = function(e, t) {
                        i(0 === (e.negative | t.negative), "red works only with positives"), i(e.red && e.red === t.red, "red works only with red numbers")
                    }, g.prototype.imod = function(e) {
                        return this.prime ? this.prime.ireduce(e)
                            ._forceRed(this) : e.umod(this.m)
                            ._forceRed(this)
                    }, g.prototype.neg = function(e) {
                        return e.isZero() ? e.clone() : this.m.sub(e)
                            ._forceRed(this)
                    }, g.prototype.add = function(e, t) {
                        this._verify2(e, t);
                        var i = e.add(t);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, g.prototype.iadd = function(e, t) {
                        this._verify2(e, t);
                        var i = e.iadd(t);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, g.prototype.sub = function(e, t) {
                        this._verify2(e, t);
                        var i = e.sub(t);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, g.prototype.isub = function(e, t) {
                        this._verify2(e, t);
                        var i = e.isub(t);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, g.prototype.shl = function(e, t) {
                        return this._verify1(e), this.imod(e.ushln(t))
                    }, g.prototype.imul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.imul(t))
                    }, g.prototype.mul = function(e, t) {
                        return this._verify2(e, t), this.imod(e.mul(t))
                    }, g.prototype.isqr = function(e) {
                        return this.imul(e, e.clone())
                    }, g.prototype.sqr = function(e) {
                        return this.mul(e, e)
                    }, g.prototype.sqrt = function(e) {
                        if (e.isZero()) return e.clone();
                        var t = this.m.andln(3);
                        if (i(t % 2 === 1), 3 === t) {
                            var n = this.m.add(new o(1))
                                .iushrn(2);
                            return this.pow(e, n)
                        }
                        for (var a = this.m.subn(1), r = 0; !a.isZero() && 0 === a.andln(1);) r++, a.iushrn(1);
                        i(!a.isZero());
                        var s = new o(1)
                            .toRed(this),
                            c = s.redNeg(),
                            l = this.m.subn(1)
                            .iushrn(1),
                            d = this.m.bitLength();
                        for (d = new o(2 * d * d)
                            .toRed(this); 0 !== this.pow(d, l)
                            .cmp(c);) d.redIAdd(c);
                        for (var u = this.pow(d, a), p = this.pow(e, a.addn(1)
                                .iushrn(1)), h = this.pow(e, a), f = r; 0 !== h.cmp(s);) {
                            for (var b = h, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
                            i(m < f);
                            var M = this.pow(u, new o(1)
                                .iushln(f - m - 1));
                            p = p.redMul(M), u = M.redSqr(), h = h.redMul(u), f = m
                        }
                        return p
                    }, g.prototype.invm = function(e) {
                        var t = e._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t)
                            .redNeg()) : this.imod(t)
                    }, g.prototype.pow = function(e, t) {
                        if (t.isZero()) return new o(1)
                            .toRed(this);
                        if (0 === t.cmpn(1)) return e.clone();
                        var i = 4,
                            n = new Array(1 << i);
                        n[0] = new o(1)
                            .toRed(this), n[1] = e;
                        for (var a = 2; a < n.length; a++) n[a] = this.mul(n[a - 1], e);
                        var r = n[0],
                            s = 0,
                            c = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), a = t.length - 1; a >= 0; a--) {
                            for (var d = t.words[a], u = l - 1; u >= 0; u--) {
                                var p = d >> u & 1;
                                r !== n[0] && (r = this.sqr(r)), 0 !== p || 0 !== s ? (s <<= 1, s |= p, c++, (c === i || 0 === a && 0 === u) && (r = this.mul(r, n[s]), c = 0, s = 0)) : c = 0
                            }
                            l = 26
                        }
                        return r
                    }, g.prototype.convertTo = function(e) {
                        var t = e.umod(this.m);
                        return t === e ? t.clone() : t
                    }, g.prototype.convertFrom = function(e) {
                        var t = e.clone();
                        return t.red = null, t
                    }, o.mont = function(e) {
                        return new _(e)
                    }, n(_, g), _.prototype.convertTo = function(e) {
                        return this.imod(e.ushln(this.shift))
                    }, _.prototype.convertFrom = function(e) {
                        var t = this.imod(e.mul(this.rinv));
                        return t.red = null, t
                    }, _.prototype.imul = function(e, t) {
                        if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                        var i = e.imul(t),
                            n = i.maskn(this.shift)
                            .mul(this.minv)
                            .imaskn(this.shift)
                            .mul(this.m),
                            o = i.isub(n)
                            .iushrn(this.shift),
                            a = o;
                        return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)), a._forceRed(this)
                    }, _.prototype.mul = function(e, t) {
                        if (e.isZero() || t.isZero()) return new o(0)
                            ._forceRed(this);
                        var i = e.mul(t),
                            n = i.maskn(this.shift)
                            .mul(this.minv)
                            .imaskn(this.shift)
                            .mul(this.m),
                            a = i.isub(n)
                            .iushrn(this.shift),
                            r = a;
                        return a.cmp(this.m) >= 0 ? r = a.isub(this.m) : a.cmpn(0) < 0 && (r = a.iadd(this.m)), r._forceRed(this)
                    }, _.prototype.invm = function(e) {
                        var t = this.imod(e._invmp(this.m)
                            .mul(this.r2));
                        return t._forceRed(this)
                    }
                }(e, hr)
            }(sd);
            var cd = Qn;
            Qn.equal = function(e, t, i) {
                if (e != t) throw new Error(i || "Assertion failed: " + e + " != " + t)
            };
            var ld = {};
            ! function(e) {
                function t(e, t) {
                    if (Array.isArray(e)) return e.slice();
                    if (!e) return [];
                    var i = [];
                    if ("string" != typeof e) {
                        for (var n = 0; n < e.length; n++) i[n] = 0 | e[n];
                        return i
                    }
                    if ("hex" === t) {
                        e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 !== 0 && (e = "0" + e);
                        for (var n = 0; n < e.length; n += 2) i.push(parseInt(e[n] + e[n + 1], 16))
                    } else
                        for (var n = 0; n < e.length; n++) {
                            var o = e.charCodeAt(n),
                                a = o >> 8,
                                r = 255 & o;
                            a ? i.push(a, r) : i.push(r)
                        }
                    return i
                }

                function i(e) {
                    return 1 === e.length ? "0" + e : e
                }

                function n(e) {
                    for (var t = "", n = 0; n < e.length; n++) t += i(e[n].toString(16));
                    return t
                }
                var o = e;
                o.toArray = t, o.zero2 = i, o.toHex = n, o.encode = function(e, t) {
                    return "hex" === t ? n(e) : e
                }
            }(ld),
            function(e) {
                function t(e, t, i) {
                    var n = new Array(Math.max(e.bitLength(), i) + 1);
                    n.fill(0);
                    for (var o = 1 << t + 1, a = e.clone(), r = 0; r < n.length; r++) {
                        var s, c = a.andln(o - 1);
                        a.isOdd() ? (s = c > (o >> 1) - 1 ? (o >> 1) - c : c, a.isubn(s)) : s = 0, n[r] = s, a.iushrn(1)
                    }
                    return n
                }

                function i(e, t) {
                    var i = [
                        [],
                        []
                    ];
                    e = e.clone(), t = t.clone();
                    for (var n, o = 0, a = 0; e.cmpn(-o) > 0 || t.cmpn(-a) > 0;) {
                        var r = e.andln(3) + o & 3,
                            s = t.andln(3) + a & 3;
                        3 === r && (r = -1), 3 === s && (s = -1);
                        var c;
                        0 === (1 & r) ? c = 0 : (n = e.andln(7) + o & 7, c = 3 !== n && 5 !== n || 2 !== s ? r : -r), i[0].push(c);
                        var l;
                        0 === (1 & s) ? l = 0 : (n = t.andln(7) + a & 7, l = 3 !== n && 5 !== n || 2 !== r ? s : -s), i[1].push(l), 2 * o === c + 1 && (o = 1 - o), 2 * a === l + 1 && (a = 1 - a), e.iushrn(1), t.iushrn(1)
                    }
                    return i
                }

                function n(e, t, i) {
                    var n = "_" + t;
                    e.prototype[t] = function() {
                        return void 0 !== this[n] ? this[n] : this[n] = i.call(this)
                    }
                }

                function o(e) {
                    return "string" == typeof e ? r.toArray(e, "hex") : e
                }

                function a(e) {
                    return new s(e, "hex", "le")
                }
                var r = e,
                    s = sd.exports,
                    c = cd,
                    l = ld;
                r.assert = c, r.toArray = l.toArray, r.zero2 = l.zero2, r.toHex = l.toHex, r.encode = l.encode, r.getNAF = t, r.getJSF = i, r.cachedProperty = n, r.parseBytes = o, r.intFromLE = a
            }(rd);
            var dd, ud = {
                    exports: {}
                },
                pd = {},
                hd = Object.freeze({
                    __proto__: null,
                    "default": pd
                }),
                fd = i(hd);
            if (ud.exports = function(e) {
                    return dd || (dd = new Kn(null)), dd.generate(e)
                }, ud.exports.Rand = Kn, Kn.prototype.generate = function(e) {
                    return this._rand(e)
                }, Kn.prototype._rand = function(e) {
                    if (this.rand.getBytes) return this.rand.getBytes(e);
                    for (var t = new Uint8Array(e), i = 0; i < t.length; i++) t[i] = this.rand.getByte();
                    return t
                }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? Kn.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.crypto.getRandomValues(t), t
            } : self.msCrypto && self.msCrypto.getRandomValues ? Kn.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.msCrypto.getRandomValues(t), t
            } : "object" == typeof window && (Kn.prototype._rand = function() {
                throw new Error("Not implemented yet")
            });
            else try {
                var bd = fd;
                if ("function" != typeof bd.randomBytes) throw new Error("Not supported");
                Kn.prototype._rand = function(e) {
                    return bd.randomBytes(e)
                }
            } catch (md) {}
            var Md = {},
                gd = sd.exports,
                _d = rd,
                Ad = _d.getNAF,
                Od = _d.getJSF,
                vd = _d.assert,
                yd = Jn;
            Jn.prototype.point = function() {
                throw new Error("Not implemented")
            }, Jn.prototype.validate = function() {
                throw new Error("Not implemented")
            }, Jn.prototype._fixedNafMul = function(e, t) {
                vd(e.precomputed);
                var i = e._getDoubles(),
                    n = Ad(t, 1, this._bitLength),
                    o = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
                o /= 3;
                var a, r, s = [];
                for (a = 0; a < n.length; a += i.step) {
                    r = 0;
                    for (var c = a + i.step - 1; c >= a; c--) r = (r << 1) + n[c];
                    s.push(r)
                }
                for (var l = this.jpoint(null, null, null), d = this.jpoint(null, null, null), u = o; u > 0; u--) {
                    for (a = 0; a < s.length; a++) r = s[a], r === u ? d = d.mixedAdd(i.points[a]) : r === -u && (d = d.mixedAdd(i.points[a].neg()));
                    l = l.add(d)
                }
                return l.toP()
            }, Jn.prototype._wnafMul = function(e, t) {
                var i = 4,
                    n = e._getNAFPoints(i);
                i = n.wnd;
                for (var o = n.points, a = Ad(t, i, this._bitLength), r = this.jpoint(null, null, null), s = a.length - 1; s >= 0; s--) {
                    for (var c = 0; s >= 0 && 0 === a[s]; s--) c++;
                    if (s >= 0 && c++, r = r.dblp(c), s < 0) break;
                    var l = a[s];
                    vd(0 !== l), r = "affine" === e.type ? l > 0 ? r.mixedAdd(o[l - 1 >> 1]) : r.mixedAdd(o[-l - 1 >> 1].neg()) : l > 0 ? r.add(o[l - 1 >> 1]) : r.add(o[-l - 1 >> 1].neg())
                }
                return "affine" === e.type ? r.toP() : r
            }, Jn.prototype._wnafMulAdd = function(e, t, i, n, o) {
                var a, r, s, c = this._wnafT1,
                    l = this._wnafT2,
                    d = this._wnafT3,
                    u = 0;
                for (a = 0; a < n; a++) {
                    s = t[a];
                    var p = s._getNAFPoints(e);
                    c[a] = p.wnd, l[a] = p.points
                }
                for (a = n - 1; a >= 1; a -= 2) {
                    var h = a - 1,
                        f = a;
                    if (1 === c[h] && 1 === c[f]) {
                        var b = [t[h], null, null, t[f]];
                        0 === t[h].y.cmp(t[f].y) ? (b[1] = t[h].add(t[f]), b[2] = t[h].toJ()
                            .mixedAdd(t[f].neg())) : 0 === t[h].y.cmp(t[f].y.redNeg()) ? (b[1] = t[h].toJ()
                            .mixedAdd(t[f]), b[2] = t[h].add(t[f].neg())) : (b[1] = t[h].toJ()
                            .mixedAdd(t[f]), b[2] = t[h].toJ()
                            .mixedAdd(t[f].neg()));
                        var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            M = Od(i[h], i[f]);
                        for (u = Math.max(M[0].length, u), d[h] = new Array(u), d[f] = new Array(u), r = 0; r < u; r++) {
                            var g = 0 | M[0][r],
                                _ = 0 | M[1][r];
                            d[h][r] = m[3 * (g + 1) + (_ + 1)], d[f][r] = 0, l[h] = b
                        }
                    } else d[h] = Ad(i[h], c[h], this._bitLength), d[f] = Ad(i[f], c[f], this._bitLength), u = Math.max(d[h].length, u), u = Math.max(d[f].length, u)
                }
                var A = this.jpoint(null, null, null),
                    O = this._wnafT4;
                for (a = u; a >= 0; a--) {
                    for (var v = 0; a >= 0;) {
                        var y = !0;
                        for (r = 0; r < n; r++) O[r] = 0 | d[r][a], 0 !== O[r] && (y = !1);
                        if (!y) break;
                        v++, a--
                    }
                    if (a >= 0 && v++, A = A.dblp(v), a < 0) break;
                    for (r = 0; r < n; r++) {
                        var z = O[r];
                        0 !== z && (z > 0 ? s = l[r][z - 1 >> 1] : z < 0 && (s = l[r][-z - 1 >> 1].neg()), A = "affine" === s.type ? A.mixedAdd(s) : A.add(s))
                    }
                }
                for (a = 0; a < n; a++) l[a] = null;
                return o ? A : A.toP()
            }, Jn.BasePoint = Zn, Zn.prototype.eq = function() {
                throw new Error("Not implemented")
            }, Zn.prototype.validate = function() {
                return this.curve.validate(this)
            }, Jn.prototype.decodePoint = function(e, t) {
                e = _d.toArray(e, t);
                var i = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * i) {
                    6 === e[0] ? vd(e[e.length - 1] % 2 === 0) : 7 === e[0] && vd(e[e.length - 1] % 2 === 1);
                    var n = this.point(e.slice(1, 1 + i), e.slice(1 + i, 1 + 2 * i));
                    return n
                }
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === i) return this.pointFromX(e.slice(1, 1 + i), 3 === e[0]);
                throw new Error("Unknown point format")
            }, Zn.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, Zn.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                    i = this.getX()
                    .toArray("be", t);
                return e ? [this.getY()
                    .isEven() ? 2 : 3
                ].concat(i) : [4].concat(i, this.getY()
                    .toArray("be", t))
            }, Zn.prototype.encode = function(e, t) {
                return _d.encode(this._encode(t), e)
            }, Zn.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, Zn.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            }, Zn.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var i = [this], n = this, o = 0; o < t; o += e) {
                    for (var a = 0; a < e; a++) n = n.dbl();
                    i.push(n)
                }
                return {
                    step: e,
                    points: i
                }
            }, Zn.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], i = (1 << e) - 1, n = 1 === i ? null : this.dbl(), o = 1; o < i; o++) t[o] = t[o - 1].add(n);
                return {
                    wnd: e,
                    points: t
                }
            }, Zn.prototype._getBeta = function() {
                return null
            }, Zn.prototype.dblp = function(e) {
                for (var t = this, i = 0; i < e; i++) t = t.dbl();
                return t
            };
            var zd = rd,
                wd = sd.exports,
                Td = tc,
                Cd = yd,
                Id = zd.assert;
            Td($n, Cd);
            var Sd = $n;
            $n.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var t, i;
                    if (e.beta) t = new wd(e.beta, 16)
                        .toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        t = n[0].cmp(n[1]) < 0 ? n[0] : n[1], t = t.toRed(this.red)
                    }
                    if (e.lambda) i = new wd(e.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0])
                            .x.cmp(this.g.x.redMul(t)) ? i = o[0] : (i = o[1], Id(0 === this.g.mul(i)
                                .x.cmp(this.g.x.redMul(t))))
                    }
                    var a;
                    return a = e.basis ? e.basis.map(function(e) {
                        return {
                            a: new wd(e.a, 16),
                            b: new wd(e.b, 16)
                        }
                    }) : this._getEndoBasis(i), {
                        beta: t,
                        lambda: i,
                        basis: a
                    }
                }
            }, $n.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : wd.mont(e),
                    i = new wd(2)
                    .toRed(t)
                    .redInvm(),
                    n = i.redNeg(),
                    o = new wd(3)
                    .toRed(t)
                    .redNeg()
                    .redSqrt()
                    .redMul(i),
                    a = n.redAdd(o)
                    .fromRed(),
                    r = n.redSub(o)
                    .fromRed();
                return [a, r]
            }, $n.prototype._getEndoBasis = function(e) {
                for (var t, i, n, o, a, r, s, c, l, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, p = this.n.clone(), h = new wd(1), f = new wd(0), b = new wd(0), m = new wd(1), M = 0; 0 !== u.cmpn(0);) {
                    var g = p.div(u);
                    c = p.sub(g.mul(u)), l = b.sub(g.mul(h));
                    var _ = m.sub(g.mul(f));
                    if (!n && c.cmp(d) < 0) t = s.neg(), i = h, n = c.neg(), o = l;
                    else if (n && 2 === ++M) break;
                    s = c, p = u, u = c, b = h, h = l, m = f, f = _
                }
                a = c.neg(), r = l;
                var A = n.sqr()
                    .add(o.sqr()),
                    O = a.sqr()
                    .add(r.sqr());
                return O.cmp(A) >= 0 && (a = t, r = i), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), r = r.neg()), [{
                    a: n,
                    b: o
                }, {
                    a: a,
                    b: r
                }]
            }, $n.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    i = t[0],
                    n = t[1],
                    o = n.b.mul(e)
                    .divRound(this.n),
                    a = i.b.neg()
                    .mul(e)
                    .divRound(this.n),
                    r = o.mul(i.a),
                    s = a.mul(n.a),
                    c = o.mul(i.b),
                    l = a.mul(n.b),
                    d = e.sub(r)
                    .sub(s),
                    u = c.add(l)
                    .neg();
                return {
                    k1: d,
                    k2: u
                }
            }, $n.prototype.pointFromX = function(e, t) {
                e = new wd(e, 16), e.red || (e = e.toRed(this.red));
                var i = e.redSqr()
                    .redMul(e)
                    .redIAdd(e.redMul(this.a))
                    .redIAdd(this.b),
                    n = i.redSqrt();
                if (0 !== n.redSqr()
                    .redSub(i)
                    .cmp(this.zero)) throw new Error("invalid point");
                var o = n.fromRed()
                    .isOdd();
                return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
            }, $n.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    i = e.y,
                    n = this.a.redMul(t),
                    o = t.redSqr()
                    .redMul(t)
                    .redIAdd(n)
                    .redIAdd(this.b);
                return 0 === i.redSqr()
                    .redISub(o)
                    .cmpn(0)
            }, $n.prototype._endoWnafMulAdd = function(e, t, i) {
                for (var n = this._endoWnafT1, o = this._endoWnafT2, a = 0; a < e.length; a++) {
                    var r = this._endoSplit(t[a]),
                        s = e[a],
                        c = s._getBeta();
                    r.k1.negative && (r.k1.ineg(), s = s.neg(!0)), r.k2.negative && (r.k2.ineg(), c = c.neg(!0)), n[2 * a] = s, n[2 * a + 1] = c, o[2 * a] = r.k1, o[2 * a + 1] = r.k2
                }
                for (var l = this._wnafMulAdd(1, n, o, 2 * a, i), d = 0; d < 2 * a; d++) n[d] = null, o[d] = null;
                return l
            }, Td(eo, Cd.BasePoint), $n.prototype.point = function(e, t, i) {
                return new eo(this, e, t, i)
            }, $n.prototype.pointFromJSON = function(e, t) {
                return eo.fromJSON(this, e, t)
            }, eo.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var i = this.curve,
                            n = function(e) {
                                return i.point(e.x.redMul(i.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(n)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(n)
                            }
                        }
                    }
                    return t
                }
            }, eo.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, eo.fromJSON = function(e, t, i) {
                function n(t) {
                    return e.point(t[0], t[1], i)
                }
                "string" == typeof t && (t = JSON.parse(t));
                var o = e.point(t[0], t[1], i);
                if (!t[2]) return o;
                var a = t[2];
                return o.precomputed = {
                    beta: null,
                    doubles: a.doubles && {
                        step: a.doubles.step,
                        points: [o].concat(a.doubles.points.map(n))
                    },
                    naf: a.naf && {
                        wnd: a.naf.wnd,
                        points: [o].concat(a.naf.points.map(n))
                    }
                }, o
            }, eo.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed()
                    .toString(16, 2) + " y: " + this.y.fromRed()
                    .toString(16, 2) + ">"
            }, eo.prototype.isInfinity = function() {
                return this.inf
            }, eo.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg()
                    .eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x)
                    .redInvm()));
                var i = t.redSqr()
                    .redISub(this.x)
                    .redISub(e.x),
                    n = t.redMul(this.x.redSub(i))
                    .redISub(this.y);
                return this.curve.point(i, n)
            }, eo.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    i = this.x.redSqr(),
                    n = e.redInvm(),
                    o = i.redAdd(i)
                    .redIAdd(i)
                    .redIAdd(t)
                    .redMul(n),
                    a = o.redSqr()
                    .redISub(this.x.redAdd(this.x)),
                    r = o.redMul(this.x.redSub(a))
                    .redISub(this.y);
                return this.curve.point(a, r)
            }, eo.prototype.getX = function() {
                return this.x.fromRed()
            }, eo.prototype.getY = function() {
                return this.y.fromRed()
            }, eo.prototype.mul = function(e) {
                return e = new wd(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, eo.prototype.mulAdd = function(e, t, i) {
                var n = [this, t],
                    o = [e, i];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2)
            }, eo.prototype.jmulAdd = function(e, t, i) {
                var n = [this, t],
                    o = [e, i];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, !0) : this.curve._wnafMulAdd(1, n, o, 2, !0)
            }, eo.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, eo.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var i = this.precomputed,
                        n = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: i.naf && {
                            wnd: i.naf.wnd,
                            points: i.naf.points.map(n)
                        },
                        doubles: i.doubles && {
                            step: i.doubles.step,
                            points: i.doubles.points.map(n)
                        }
                    }
                }
                return t
            }, eo.prototype.toJ = function() {
                if (this.inf) return this.curve.jpoint(null, null, null);
                var e = this.curve.jpoint(this.x, this.y, this.curve.one);
                return e
            }, Td(to, Cd.BasePoint), $n.prototype.jpoint = function(e, t, i) {
                return new to(this, e, t, i)
            }, to.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    i = this.x.redMul(t),
                    n = this.y.redMul(t)
                    .redMul(e);
                return this.curve.point(i, n)
            }, to.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, to.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    i = this.z.redSqr(),
                    n = this.x.redMul(t),
                    o = e.x.redMul(i),
                    a = this.y.redMul(t.redMul(e.z)),
                    r = e.y.redMul(i.redMul(this.z)),
                    s = n.redSub(o),
                    c = a.redSub(r);
                if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var l = s.redSqr(),
                    d = l.redMul(s),
                    u = n.redMul(l),
                    p = c.redSqr()
                    .redIAdd(d)
                    .redISub(u)
                    .redISub(u),
                    h = c.redMul(u.redISub(p))
                    .redISub(a.redMul(d)),
                    f = this.z.redMul(e.z)
                    .redMul(s);
                return this.curve.jpoint(p, h, f)
            }, to.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    i = this.x,
                    n = e.x.redMul(t),
                    o = this.y,
                    a = e.y.redMul(t)
                    .redMul(this.z),
                    r = i.redSub(n),
                    s = o.redSub(a);
                if (0 === r.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = r.redSqr(),
                    l = c.redMul(r),
                    d = i.redMul(c),
                    u = s.redSqr()
                    .redIAdd(l)
                    .redISub(d)
                    .redISub(d),
                    p = s.redMul(d.redISub(u))
                    .redISub(o.redMul(l)),
                    h = this.z.redMul(r);
                return this.curve.jpoint(u, p, h)
            }, to.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                var t;
                if (this.curve.zeroA || this.curve.threeA) {
                    var i = this;
                    for (t = 0; t < e; t++) i = i.dbl();
                    return i
                }
                var n = this.curve.a,
                    o = this.curve.tinv,
                    a = this.x,
                    r = this.y,
                    s = this.z,
                    c = s.redSqr()
                    .redSqr(),
                    l = r.redAdd(r);
                for (t = 0; t < e; t++) {
                    var d = a.redSqr(),
                        u = l.redSqr(),
                        p = u.redSqr(),
                        h = d.redAdd(d)
                        .redIAdd(d)
                        .redIAdd(n.redMul(c)),
                        f = a.redMul(u),
                        b = h.redSqr()
                        .redISub(f.redAdd(f)),
                        m = f.redISub(b),
                        M = h.redMul(m);
                    M = M.redIAdd(M)
                        .redISub(p);
                    var g = l.redMul(s);
                    t + 1 < e && (c = c.redMul(p)), a = b, s = g, l = M
                }
                return this.curve.jpoint(a, l.redMul(o), s)
            }, to.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, to.prototype._zeroDbl = function() {
                var e, t, i;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        o = this.y.redSqr(),
                        a = o.redSqr(),
                        r = this.x.redAdd(o)
                        .redSqr()
                        .redISub(n)
                        .redISub(a);
                    r = r.redIAdd(r);
                    var s = n.redAdd(n)
                        .redIAdd(n),
                        c = s.redSqr()
                        .redISub(r)
                        .redISub(r),
                        l = a.redIAdd(a);
                    l = l.redIAdd(l), l = l.redIAdd(l), e = c, t = s.redMul(r.redISub(c))
                        .redISub(l), i = this.y.redAdd(this.y)
                } else {
                    var d = this.x.redSqr(),
                        u = this.y.redSqr(),
                        p = u.redSqr(),
                        h = this.x.redAdd(u)
                        .redSqr()
                        .redISub(d)
                        .redISub(p);
                    h = h.redIAdd(h);
                    var f = d.redAdd(d)
                        .redIAdd(d),
                        b = f.redSqr(),
                        m = p.redIAdd(p);
                    m = m.redIAdd(m), m = m.redIAdd(m), e = b.redISub(h)
                        .redISub(h), t = f.redMul(h.redISub(e))
                        .redISub(m), i = this.y.redMul(this.z), i = i.redIAdd(i)
                }
                return this.curve.jpoint(e, t, i)
            }, to.prototype._threeDbl = function() {
                var e, t, i;
                if (this.zOne) {
                    var n = this.x.redSqr(),
                        o = this.y.redSqr(),
                        a = o.redSqr(),
                        r = this.x.redAdd(o)
                        .redSqr()
                        .redISub(n)
                        .redISub(a);
                    r = r.redIAdd(r);
                    var s = n.redAdd(n)
                        .redIAdd(n)
                        .redIAdd(this.curve.a),
                        c = s.redSqr()
                        .redISub(r)
                        .redISub(r);
                    e = c;
                    var l = a.redIAdd(a);
                    l = l.redIAdd(l), l = l.redIAdd(l), t = s.redMul(r.redISub(c))
                        .redISub(l), i = this.y.redAdd(this.y)
                } else {
                    var d = this.z.redSqr(),
                        u = this.y.redSqr(),
                        p = this.x.redMul(u),
                        h = this.x.redSub(d)
                        .redMul(this.x.redAdd(d));
                    h = h.redAdd(h)
                        .redIAdd(h);
                    var f = p.redIAdd(p);
                    f = f.redIAdd(f);
                    var b = f.redAdd(f);
                    e = h.redSqr()
                        .redISub(b), i = this.y.redAdd(this.z)
                        .redSqr()
                        .redISub(u)
                        .redISub(d);
                    var m = u.redSqr();
                    m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m), t = h.redMul(f.redISub(e))
                        .redISub(m)
                }
                return this.curve.jpoint(e, t, i)
            }, to.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    i = this.y,
                    n = this.z,
                    o = n.redSqr()
                    .redSqr(),
                    a = t.redSqr(),
                    r = i.redSqr(),
                    s = a.redAdd(a)
                    .redIAdd(a)
                    .redIAdd(e.redMul(o)),
                    c = t.redAdd(t);
                c = c.redIAdd(c);
                var l = c.redMul(r),
                    d = s.redSqr()
                    .redISub(l.redAdd(l)),
                    u = l.redISub(d),
                    p = r.redSqr();
                p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);
                var h = s.redMul(u)
                    .redISub(p),
                    f = i.redAdd(i)
                    .redMul(n);
                return this.curve.jpoint(d, h, f)
            }, to.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl()
                    .add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    i = this.z.redSqr(),
                    n = t.redSqr(),
                    o = e.redAdd(e)
                    .redIAdd(e),
                    a = o.redSqr(),
                    r = this.x.redAdd(t)
                    .redSqr()
                    .redISub(e)
                    .redISub(n);
                r = r.redIAdd(r), r = r.redAdd(r)
                    .redIAdd(r), r = r.redISub(a);
                var s = r.redSqr(),
                    c = n.redIAdd(n);
                c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);
                var l = o.redIAdd(r)
                    .redSqr()
                    .redISub(a)
                    .redISub(s)
                    .redISub(c),
                    d = t.redMul(l);
                d = d.redIAdd(d), d = d.redIAdd(d);
                var u = this.x.redMul(s)
                    .redISub(d);
                u = u.redIAdd(u), u = u.redIAdd(u);
                var p = this.y.redMul(l.redMul(c.redISub(l))
                    .redISub(r.redMul(s)));
                p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);
                var h = this.z.redAdd(r)
                    .redSqr()
                    .redISub(i)
                    .redISub(s);
                return this.curve.jpoint(u, p, h)
            }, to.prototype.mul = function(e, t) {
                return e = new wd(e, t), this.curve._wnafMul(this, e)
            }, to.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    i = e.z.redSqr();
                if (0 !== this.x.redMul(i)
                    .redISub(e.x.redMul(t))
                    .cmpn(0)) return !1;
                var n = t.redMul(this.z),
                    o = i.redMul(e.z);
                return 0 === this.y.redMul(o)
                    .redISub(e.y.redMul(n))
                    .cmpn(0)
            }, to.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                    i = e.toRed(this.curve.red)
                    .redMul(t);
                if (0 === this.x.cmp(i)) return !0;
                for (var n = e.clone(), o = this.curve.redN.redMul(t);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (i.redIAdd(o), 0 === this.x.cmp(i)) return !0
                }
            }, to.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, to.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var Ed = sd.exports,
                Ld = tc,
                Nd = yd,
                Rd = rd;
            Ld(io, Nd);
            var qd = io;
            io.prototype.validate = function(e) {
                var t = e.normalize()
                    .x,
                    i = t.redSqr(),
                    n = i.redMul(t)
                    .redAdd(i.redMul(this.a))
                    .redAdd(t),
                    o = n.redSqrt();
                return 0 === o.redSqr()
                    .cmp(n)
            }, Ld(no, Nd.BasePoint), io.prototype.decodePoint = function(e, t) {
                return this.point(Rd.toArray(e, t), 1)
            }, io.prototype.point = function(e, t) {
                return new no(this, e, t)
            }, io.prototype.pointFromJSON = function(e) {
                return no.fromJSON(this, e)
            }, no.prototype.precompute = function() {}, no.prototype._encode = function() {
                return this.getX()
                    .toArray("be", this.curve.p.byteLength())
            }, no.fromJSON = function(e, t) {
                return new no(e, t[0], t[1] || e.one)
            }, no.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed()
                    .toString(16, 2) + " z: " + this.z.fromRed()
                    .toString(16, 2) + ">"
            }, no.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, no.prototype.dbl = function() {
                var e = this.x.redAdd(this.z),
                    t = e.redSqr(),
                    i = this.x.redSub(this.z),
                    n = i.redSqr(),
                    o = t.redSub(n),
                    a = t.redMul(n),
                    r = o.redMul(n.redAdd(this.curve.a24.redMul(o)));
                return this.curve.point(a, r)
            }, no.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, no.prototype.diffAdd = function(e, t) {
                var i = this.x.redAdd(this.z),
                    n = this.x.redSub(this.z),
                    o = e.x.redAdd(e.z),
                    a = e.x.redSub(e.z),
                    r = a.redMul(i),
                    s = o.redMul(n),
                    c = t.z.redMul(r.redAdd(s)
                        .redSqr()),
                    l = t.x.redMul(r.redISub(s)
                        .redSqr());
                return this.curve.point(c, l)
            }, no.prototype.mul = function(e) {
                for (var t = e.clone(), i = this, n = this.curve.point(null, null), o = this, a = []; 0 !== t.cmpn(0); t.iushrn(1)) a.push(t.andln(1));
                for (var r = a.length - 1; r >= 0; r--) 0 === a[r] ? (i = i.diffAdd(n, o), n = n.dbl()) : (n = i.diffAdd(n, o), i = i.dbl());
                return n
            }, no.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, no.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, no.prototype.eq = function(e) {
                return 0 === this.getX()
                    .cmp(e.getX())
            }, no.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, no.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            };
            var xd = rd,
                Bd = sd.exports,
                Dd = tc,
                Wd = yd,
                Pd = xd.assert;
            Dd(oo, Wd);
            var kd = oo;
            oo.prototype._mulA = function(e) {
                    return this.mOneA ? e.redNeg() : this.a.redMul(e)
                }, oo.prototype._mulC = function(e) {
                    return this.oneC ? e : this.c.redMul(e)
                }, oo.prototype.jpoint = function(e, t, i, n) {
                    return this.point(e, t, i, n)
                }, oo.prototype.pointFromX = function(e, t) {
                    e = new Bd(e, 16), e.red || (e = e.toRed(this.red));
                    var i = e.redSqr(),
                        n = this.c2.redSub(this.a.redMul(i)),
                        o = this.one.redSub(this.c2.redMul(this.d)
                            .redMul(i)),
                        a = n.redMul(o.redInvm()),
                        r = a.redSqrt();
                    if (0 !== r.redSqr()
                        .redSub(a)
                        .cmp(this.zero)) throw new Error("invalid point");
                    var s = r.fromRed()
                        .isOdd();
                    return (t && !s || !t && s) && (r = r.redNeg()), this.point(e, r)
                }, oo.prototype.pointFromY = function(e, t) {
                    e = new Bd(e, 16), e.red || (e = e.toRed(this.red));
                    var i = e.redSqr(),
                        n = i.redSub(this.c2),
                        o = i.redMul(this.d)
                        .redMul(this.c2)
                        .redSub(this.a),
                        a = n.redMul(o.redInvm());
                    if (0 === a.cmp(this.zero)) {
                        if (t) throw new Error("invalid point");
                        return this.point(this.zero, e)
                    }
                    var r = a.redSqrt();
                    if (0 !== r.redSqr()
                        .redSub(a)
                        .cmp(this.zero)) throw new Error("invalid point");
                    return r.fromRed()
                        .isOdd() !== t && (r = r.redNeg()), this.point(r, e)
                }, oo.prototype.validate = function(e) {
                    if (e.isInfinity()) return !0;
                    e.normalize();
                    var t = e.x.redSqr(),
                        i = e.y.redSqr(),
                        n = t.redMul(this.a)
                        .redAdd(i),
                        o = this.c2.redMul(this.one.redAdd(this.d.redMul(t)
                            .redMul(i)));
                    return 0 === n.cmp(o)
                }, Dd(ao, Wd.BasePoint), oo.prototype.pointFromJSON = function(e) {
                    return ao.fromJSON(this, e)
                }, oo.prototype.point = function(e, t, i, n) {
                    return new ao(this, e, t, i, n)
                }, ao.fromJSON = function(e, t) {
                    return new ao(e, t[0], t[1], t[2])
                }, ao.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed()
                        .toString(16, 2) + " y: " + this.y.fromRed()
                        .toString(16, 2) + " z: " + this.z.fromRed()
                        .toString(16, 2) + ">"
                }, ao.prototype.isInfinity = function() {
                    return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
                }, ao.prototype._extDbl = function() {
                    var e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        i = this.z.redSqr();
                    i = i.redIAdd(i);
                    var n = this.curve._mulA(e),
                        o = this.x.redAdd(this.y)
                        .redSqr()
                        .redISub(e)
                        .redISub(t),
                        a = n.redAdd(t),
                        r = a.redSub(i),
                        s = n.redSub(t),
                        c = o.redMul(r),
                        l = a.redMul(s),
                        d = o.redMul(s),
                        u = r.redMul(a);
                    return this.curve.point(c, l, u, d)
                }, ao.prototype._projDbl = function() {
                    var e, t, i, n, o, a, r = this.x.redAdd(this.y)
                        .redSqr(),
                        s = this.x.redSqr(),
                        c = this.y.redSqr();
                    if (this.curve.twisted) {
                        n = this.curve._mulA(s);
                        var l = n.redAdd(c);
                        this.zOne ? (e = r.redSub(s)
                            .redSub(c)
                            .redMul(l.redSub(this.curve.two)), t = l.redMul(n.redSub(c)), i = l.redSqr()
                            .redSub(l)
                            .redSub(l)) : (o = this.z.redSqr(), a = l.redSub(o)
                            .redISub(o), e = r.redSub(s)
                            .redISub(c)
                            .redMul(a), t = l.redMul(n.redSub(c)), i = l.redMul(a))
                    } else n = s.redAdd(c), o = this.curve._mulC(this.z)
                        .redSqr(), a = n.redSub(o)
                        .redSub(o), e = this.curve._mulC(r.redISub(n))
                        .redMul(a), t = this.curve._mulC(n)
                        .redMul(s.redISub(c)), i = n.redMul(a);
                    return this.curve.point(e, t, i)
                }, ao.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
                }, ao.prototype._extAdd = function(e) {
                    var t = this.y.redSub(this.x)
                        .redMul(e.y.redSub(e.x)),
                        i = this.y.redAdd(this.x)
                        .redMul(e.y.redAdd(e.x)),
                        n = this.t.redMul(this.curve.dd)
                        .redMul(e.t),
                        o = this.z.redMul(e.z.redAdd(e.z)),
                        a = i.redSub(t),
                        r = o.redSub(n),
                        s = o.redAdd(n),
                        c = i.redAdd(t),
                        l = a.redMul(r),
                        d = s.redMul(c),
                        u = a.redMul(c),
                        p = r.redMul(s);
                    return this.curve.point(l, d, p, u)
                }, ao.prototype._projAdd = function(e) {
                    var t, i, n = this.z.redMul(e.z),
                        o = n.redSqr(),
                        a = this.x.redMul(e.x),
                        r = this.y.redMul(e.y),
                        s = this.curve.d.redMul(a)
                        .redMul(r),
                        c = o.redSub(s),
                        l = o.redAdd(s),
                        d = this.x.redAdd(this.y)
                        .redMul(e.x.redAdd(e.y))
                        .redISub(a)
                        .redISub(r),
                        u = n.redMul(c)
                        .redMul(d);
                    return this.curve.twisted ? (t = n.redMul(l)
                        .redMul(r.redSub(this.curve._mulA(a))), i = c.redMul(l)) : (t = n.redMul(l)
                        .redMul(r.redSub(a)), i = this.curve._mulC(c)
                        .redMul(l)), this.curve.point(u, t, i)
                }, ao.prototype.add = function(e) {
                    return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
                }, ao.prototype.mul = function(e) {
                    return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
                }, ao.prototype.mulAdd = function(e, t, i) {
                    return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !1)
                }, ao.prototype.jmulAdd = function(e, t, i) {
                    return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !0)
                }, ao.prototype.normalize = function() {
                    if (this.zOne) return this;
                    var e = this.z.redInvm();
                    return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
                }, ao.prototype.neg = function() {
                    return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
                }, ao.prototype.getX = function() {
                    return this.normalize(), this.x.fromRed()
                }, ao.prototype.getY = function() {
                    return this.normalize(), this.y.fromRed()
                }, ao.prototype.eq = function(e) {
                    return this === e || 0 === this.getX()
                        .cmp(e.getX()) && 0 === this.getY()
                        .cmp(e.getY())
                }, ao.prototype.eqXToP = function(e) {
                    var t = e.toRed(this.curve.red)
                        .redMul(this.z);
                    if (0 === this.x.cmp(t)) return !0;
                    for (var i = e.clone(), n = this.curve.redN.redMul(this.z);;) {
                        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                        if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
                    }
                }, ao.prototype.toP = ao.prototype.normalize, ao.prototype.mixedAdd = ao.prototype.add,
                function(e) {
                    var t = e;
                    t.base = yd, t["short"] = Sd, t.mont = qd, t.edwards = kd
                }(Md);
            var Fd = {},
                Hd = {},
                Ud = {},
                Gd = cd,
                jd = tc;
            Ud.inherits = jd, Ud.toArray = so, Ud.toHex = co, Ud.htonl = lo, Ud.toHex32 = uo, Ud.zero2 = po, Ud.zero8 = ho, Ud.join32 = fo, Ud.split32 = bo, Ud.rotr32 = mo, Ud.rotl32 = Mo, Ud.sum32 = go, Ud.sum32_3 = _o, Ud.sum32_4 = Ao, Ud.sum32_5 = Oo, Ud.sum64 = vo, Ud.sum64_hi = yo, Ud.sum64_lo = zo, Ud.sum64_4_hi = wo, Ud.sum64_4_lo = To, Ud.sum64_5_hi = Co, Ud.sum64_5_lo = Io, Ud.rotr64_hi = So, Ud.rotr64_lo = Eo, Ud.shr64_hi = Lo, Ud.shr64_lo = No;
            var Yd = {},
                Xd = Ud,
                Vd = cd;
            Yd.BlockHash = Ro, Ro.prototype.update = function(e, t) {
                if (e = Xd.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                    e = this.pending;
                    var i = e.length % this._delta8;
                    this.pending = e.slice(e.length - i, e.length), 0 === this.pending.length && (this.pending = null), e = Xd.join32(e, 0, e.length - i, this.endian);
                    for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
                }
                return this
            }, Ro.prototype.digest = function(e) {
                return this.update(this._pad()), Vd(null === this.pending), this._digest(e)
            }, Ro.prototype._pad = function() {
                var e = this.pendingTotal,
                    t = this._delta8,
                    i = t - (e + this.padLength) % t,
                    n = new Array(i + this.padLength);
                n[0] = 128;
                for (var o = 1; o < i; o++) n[o] = 0;
                if (e <<= 3, "big" === this.endian) {
                    for (var a = 8; a < this.padLength; a++) n[o++] = 0;
                    n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = e >>> 24 & 255, n[o++] = e >>> 16 & 255, n[o++] = e >>> 8 & 255, n[o++] = 255 & e
                } else
                    for (n[o++] = 255 & e, n[o++] = e >>> 8 & 255, n[o++] = e >>> 16 & 255, n[o++] = e >>> 24 & 255, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, a = 8; a < this.padLength; a++) n[o++] = 0;
                return n
            };
            var Qd = {},
                Kd = {},
                Jd = Ud,
                Zd = Jd.rotr32;
            Kd.ft_1 = qo, Kd.ch32 = xo, Kd.maj32 = Bo, Kd.p32 = Do, Kd.s0_256 = Wo, Kd.s1_256 = Po, Kd.g0_256 = ko, Kd.g1_256 = Fo;
            var $d = Ud,
                eu = Yd,
                tu = Kd,
                iu = $d.rotl32,
                nu = $d.sum32,
                ou = $d.sum32_5,
                au = tu.ft_1,
                ru = eu.BlockHash,
                su = [1518500249, 1859775393, 2400959708, 3395469782];
            $d.inherits(Ho, ru);
            var cu = Ho;
            Ho.blockSize = 512, Ho.outSize = 160, Ho.hmacStrength = 80, Ho.padLength = 64, Ho.prototype._update = function(e, t) {
                for (var i = this.W, n = 0; n < 16; n++) i[n] = e[t + n];
                for (; n < i.length; n++) i[n] = iu(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
                var o = this.h[0],
                    a = this.h[1],
                    r = this.h[2],
                    s = this.h[3],
                    c = this.h[4];
                for (n = 0; n < i.length; n++) {
                    var l = ~~(n / 20),
                        d = ou(iu(o, 5), au(l, a, r, s), c, i[n], su[l]);
                    c = s, s = r, r = iu(a, 30), a = o, o = d
                }
                this.h[0] = nu(this.h[0], o), this.h[1] = nu(this.h[1], a), this.h[2] = nu(this.h[2], r), this.h[3] = nu(this.h[3], s), this.h[4] = nu(this.h[4], c)
            }, Ho.prototype._digest = function(e) {
                return "hex" === e ? $d.toHex32(this.h, "big") : $d.split32(this.h, "big")
            };
            var lu = Ud,
                du = Yd,
                uu = Kd,
                pu = cd,
                hu = lu.sum32,
                fu = lu.sum32_4,
                bu = lu.sum32_5,
                mu = uu.ch32,
                Mu = uu.maj32,
                gu = uu.s0_256,
                _u = uu.s1_256,
                Au = uu.g0_256,
                Ou = uu.g1_256,
                vu = du.BlockHash,
                yu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
            lu.inherits(Uo, vu);
            var zu = Uo;
            Uo.blockSize = 512, Uo.outSize = 256, Uo.hmacStrength = 192, Uo.padLength = 64, Uo.prototype._update = function(e, t) {
                for (var i = this.W, n = 0; n < 16; n++) i[n] = e[t + n];
                for (; n < i.length; n++) i[n] = fu(Ou(i[n - 2]), i[n - 7], Au(i[n - 15]), i[n - 16]);
                var o = this.h[0],
                    a = this.h[1],
                    r = this.h[2],
                    s = this.h[3],
                    c = this.h[4],
                    l = this.h[5],
                    d = this.h[6],
                    u = this.h[7];
                for (pu(this.k.length === i.length), n = 0; n < i.length; n++) {
                    var p = bu(u, _u(c), mu(c, l, d), this.k[n], i[n]),
                        h = hu(gu(o), Mu(o, a, r));
                    u = d, d = l, l = c, c = hu(s, p), s = r, r = a, a = o, o = hu(p, h)
                }
                this.h[0] = hu(this.h[0], o), this.h[1] = hu(this.h[1], a), this.h[2] = hu(this.h[2], r), this.h[3] = hu(this.h[3], s), this.h[4] = hu(this.h[4], c), this.h[5] = hu(this.h[5], l), this.h[6] = hu(this.h[6], d), this.h[7] = hu(this.h[7], u)
            }, Uo.prototype._digest = function(e) {
                return "hex" === e ? lu.toHex32(this.h, "big") : lu.split32(this.h, "big")
            };
            var wu = Ud,
                Tu = zu;
            wu.inherits(Go, Tu);
            var Cu = Go;
            Go.blockSize = 512, Go.outSize = 224, Go.hmacStrength = 192, Go.padLength = 64, Go.prototype._digest = function(e) {
                return "hex" === e ? wu.toHex32(this.h.slice(0, 7), "big") : wu.split32(this.h.slice(0, 7), "big")
            };
            var Iu = Ud,
                Su = Yd,
                Eu = cd,
                Lu = Iu.rotr64_hi,
                Nu = Iu.rotr64_lo,
                Ru = Iu.shr64_hi,
                qu = Iu.shr64_lo,
                xu = Iu.sum64,
                Bu = Iu.sum64_hi,
                Du = Iu.sum64_lo,
                Wu = Iu.sum64_4_hi,
                Pu = Iu.sum64_4_lo,
                ku = Iu.sum64_5_hi,
                Fu = Iu.sum64_5_lo,
                Hu = Su.BlockHash,
                Uu = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
            Iu.inherits(jo, Hu);
            var Gu = jo;
            jo.blockSize = 1024, jo.outSize = 512, jo.hmacStrength = 192, jo.padLength = 128, jo.prototype._prepareBlock = function(e, t) {
                for (var i = this.W, n = 0; n < 32; n++) i[n] = e[t + n];
                for (; n < i.length; n += 2) {
                    var o = ia(i[n - 4], i[n - 3]),
                        a = na(i[n - 4], i[n - 3]),
                        r = i[n - 14],
                        s = i[n - 13],
                        c = ea(i[n - 30], i[n - 29]),
                        l = ta(i[n - 30], i[n - 29]),
                        d = i[n - 32],
                        u = i[n - 31];
                    i[n] = Wu(o, a, r, s, c, l, d, u), i[n + 1] = Pu(o, a, r, s, c, l, d, u)
                }
            }, jo.prototype._update = function(e, t) {
                this._prepareBlock(e, t);
                var i = this.W,
                    n = this.h[0],
                    o = this.h[1],
                    a = this.h[2],
                    r = this.h[3],
                    s = this.h[4],
                    c = this.h[5],
                    l = this.h[6],
                    d = this.h[7],
                    u = this.h[8],
                    p = this.h[9],
                    h = this.h[10],
                    f = this.h[11],
                    b = this.h[12],
                    m = this.h[13],
                    M = this.h[14],
                    g = this.h[15];
                Eu(this.k.length === i.length);
                for (var _ = 0; _ < i.length; _ += 2) {
                    var A = M,
                        O = g,
                        v = Zo(u, p),
                        y = $o(u, p),
                        z = Yo(u, p, h, f, b),
                        w = Xo(u, p, h, f, b, m),
                        T = this.k[_],
                        C = this.k[_ + 1],
                        I = i[_],
                        S = i[_ + 1],
                        E = ku(A, O, v, y, z, w, T, C, I, S),
                        L = Fu(A, O, v, y, z, w, T, C, I, S);
                    A = Ko(n, o), O = Jo(n, o), v = Vo(n, o, a, r, s), y = Qo(n, o, a, r, s, c);
                    var N = Bu(A, O, v, y),
                        R = Du(A, O, v, y);
                    M = b, g = m, b = h, m = f, h = u, f = p, u = Bu(l, d, E, L), p = Du(d, d, E, L), l = s, d = c, s = a, c = r, a = n, r = o, n = Bu(E, L, N, R), o = Du(E, L, N, R)
                }
                xu(this.h, 0, n, o), xu(this.h, 2, a, r), xu(this.h, 4, s, c), xu(this.h, 6, l, d), xu(this.h, 8, u, p), xu(this.h, 10, h, f), xu(this.h, 12, b, m), xu(this.h, 14, M, g)
            }, jo.prototype._digest = function(e) {
                return "hex" === e ? Iu.toHex32(this.h, "big") : Iu.split32(this.h, "big")
            };
            var ju = Ud,
                Yu = Gu;
            ju.inherits(oa, Yu);
            var Xu = oa;
            oa.blockSize = 1024, oa.outSize = 384, oa.hmacStrength = 192, oa.padLength = 128, oa.prototype._digest = function(e) {
                return "hex" === e ? ju.toHex32(this.h.slice(0, 12), "big") : ju.split32(this.h.slice(0, 12), "big")
            }, Qd.sha1 = cu, Qd.sha224 = Cu, Qd.sha256 = zu, Qd.sha384 = Xu, Qd.sha512 = Gu;
            var Vu = {},
                Qu = Ud,
                Ku = Yd,
                Ju = Qu.rotl32,
                Zu = Qu.sum32,
                $u = Qu.sum32_3,
                ep = Qu.sum32_4,
                tp = Ku.BlockHash;
            Qu.inherits(aa, tp), Vu.ripemd160 = aa, aa.blockSize = 512, aa.outSize = 160, aa.hmacStrength = 192, aa.padLength = 64, aa.prototype._update = function(e, t) {
                for (var i = this.h[0], n = this.h[1], o = this.h[2], a = this.h[3], r = this.h[4], s = i, c = n, l = o, d = a, u = r, p = 0; p < 80; p++) {
                    var h = Zu(Ju(ep(i, ra(p, n, o, a), e[ip[p] + t], sa(p)), op[p]), r);
                    i = r, r = a, a = Ju(o, 10), o = n, n = h, h = Zu(Ju(ep(s, ra(79 - p, c, l, d), e[np[p] + t], ca(p)), ap[p]), u), s = u, u = d, d = Ju(l, 10), l = c, c = h
                }
                h = $u(this.h[1], o, d), this.h[1] = $u(this.h[2], a, u), this.h[2] = $u(this.h[3], r, s), this.h[3] = $u(this.h[4], i, c), this.h[4] = $u(this.h[0], n, l), this.h[0] = h
            }, aa.prototype._digest = function(e) {
                return "hex" === e ? Qu.toHex32(this.h, "little") : Qu.split32(this.h, "little")
            };
            var ip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                np = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                op = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                ap = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                rp = Ud,
                sp = cd,
                cp = la;
            la.prototype._init = function(e) {
                    e.length > this.blockSize && (e = (new this.Hash)
                        .update(e)
                        .digest()), sp(e.length <= this.blockSize);
                    for (var t = e.length; t < this.blockSize; t++) e.push(0);
                    for (t = 0; t < e.length; t++) e[t] ^= 54;
                    for (this.inner = (new this.Hash)
                        .update(e), t = 0; t < e.length; t++) e[t] ^= 106;
                    this.outer = (new this.Hash)
                        .update(e)
                }, la.prototype.update = function(e, t) {
                    return this.inner.update(e, t), this
                }, la.prototype.digest = function(e) {
                    return this.outer.update(this.inner.digest()), this.outer.digest(e)
                },
                function(e) {
                    var t = e;
                    t.utils = Ud, t.common = Yd, t.sha = Qd, t.ripemd = Vu, t.hmac = cp, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
                }(Hd);
            var lp, dp;
            ! function(e) {
                function t(e) {
                    "short" === e.type ? this.curve = new a["short"](e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n)
                        .isInfinity(), "Invalid curve, G*N != O")
                }

                function i(e, i) {
                    Object.defineProperty(n, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            var o = new t(i);
                            return Object.defineProperty(n, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: o
                            }), o
                        }
                    })
                }
                var n = e,
                    o = Hd,
                    a = Md,
                    r = rd,
                    s = r.assert;
                n.PresetCurve = t, i("p192", {
                    type: "short",
                    prime: "p192",
                    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                }), i("p224", {
                    type: "short",
                    prime: "p224",
                    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                }), i("p256", {
                    type: "short",
                    prime: null,
                    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                }), i("p384", {
                    type: "short",
                    prime: null,
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                    hash: o.sha384,
                    gRed: !1,
                    g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                }), i("p521", {
                    type: "short",
                    prime: null,
                    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                    hash: o.sha512,
                    gRed: !1,
                    g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                }), i("curve25519", {
                    type: "mont",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "76d06",
                    b: "1",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["9"]
                }), i("ed25519", {
                    type: "edwards",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "-1",
                    c: "1",
                    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                });
                var c;
                try {
                    c = da()
                } catch (l) {
                    c = void 0
                }
                i("secp256k1", {
                    type: "short",
                    prime: "k256",
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                    a: "0",
                    b: "7",
                    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                    h: "1",
                    hash: o.sha256,
                    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                    basis: [{
                        a: "3086d221a7d46bcde86c90e49284eb15",
                        b: "-e4437ed6010e88286f547fa90abfe4c3"
                    }, {
                        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                        b: "3086d221a7d46bcde86c90e49284eb15"
                    }],
                    gRed: !1,
                    g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", c]
                })
            }(Fd);
            var up = Hd,
                pp = ld,
                hp = cd,
                fp = ua;
            ua.prototype._init = function(e, t, i) {
                var n = e.concat(t)
                    .concat(i);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var o = 0; o < this.V.length; o++) this.K[o] = 0, this.V[o] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, ua.prototype._hmac = function() {
                return new up.hmac(this.hash, this.K)
            }, ua.prototype._update = function(e) {
                var t = this._hmac()
                    .update(this.V)
                    .update([0]);
                e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac()
                    .update(this.V)
                    .digest(), e && (this.K = this._hmac()
                        .update(this.V)
                        .update([1])
                        .update(e)
                        .digest(), this.V = this._hmac()
                        .update(this.V)
                        .digest())
            }, ua.prototype.reseed = function(e, t, i, n) {
                "string" != typeof t && (n = i, i = t, t = null), e = pp.toArray(e, t), i = pp.toArray(i, n), hp(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(i || [])), this._reseed = 1
            }, ua.prototype.generate = function(e, t, i, n) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" != typeof t && (n = i, i = t, t = null), i && (i = pp.toArray(i, n || "hex"), this._update(i));
                for (var o = []; o.length < e;) this.V = this._hmac()
                    .update(this.V)
                    .digest(), o = o.concat(this.V);
                var a = o.slice(0, e);
                return this._update(i), this._reseed++, pp.encode(a, t)
            };
            var bp = sd.exports,
                mp = rd,
                Mp = mp.assert,
                gp = pa;
            pa.fromPublic = function(e, t, i) {
                return t instanceof pa ? t : new pa(e, {
                    pub: t,
                    pubEnc: i
                })
            }, pa.fromPrivate = function(e, t, i) {
                return t instanceof pa ? t : new pa(e, {
                    priv: t,
                    privEnc: i
                })
            }, pa.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : e.validate() ? e.mul(this.ec.curve.n)
                    .isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
            }, pa.prototype.getPublic = function(e, t) {
                return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
            }, pa.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, pa.prototype._importPrivate = function(e, t) {
                this.priv = new bp(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, pa.prototype._importPublic = function(e, t) {
                return e.x || e.y ? ("mont" === this.ec.curve.type ? Mp(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || Mp(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y))) : void(this.pub = this.ec.curve.decodePoint(e, t))
            }, pa.prototype.derive = function(e) {
                return e.validate() || Mp(e.validate(), "public point not validated"), e.mul(this.priv)
                    .getX()
            }, pa.prototype.sign = function(e, t, i) {
                return this.ec.sign(e, this, t, i)
            }, pa.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, pa.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var _p = sd.exports,
                Ap = rd,
                Op = Ap.assert,
                vp = ha;
            ha.prototype._importDER = function(e, t) {
                e = Ap.toArray(e, t);
                var i = new fa;
                if (48 !== e[i.place++]) return !1;
                var n = ba(e, i);
                if (n === !1) return !1;
                if (n + i.place !== e.length) return !1;
                if (2 !== e[i.place++]) return !1;
                var o = ba(e, i);
                if (o === !1) return !1;
                var a = e.slice(i.place, o + i.place);
                if (i.place += o, 2 !== e[i.place++]) return !1;
                var r = ba(e, i);
                if (r === !1) return !1;
                if (e.length !== r + i.place) return !1;
                var s = e.slice(i.place, r + i.place);
                if (0 === a[0]) {
                    if (!(128 & a[1])) return !1;
                    a = a.slice(1)
                }
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                return this.r = new _p(a), this.s = new _p(s), this.recoveryParam = null, !0
            }, ha.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    i = this.s.toArray();
                for (128 & t[0] && (t = [0].concat(t)), 128 & i[0] && (i = [0].concat(i)), t = ma(t), i = ma(i); !(i[0] || 128 & i[1]);) i = i.slice(1);
                var n = [2];
                Ma(n, t.length), n = n.concat(t), n.push(2), Ma(n, i.length);
                var o = n.concat(i),
                    a = [48];
                return Ma(a, o.length), a = a.concat(o), Ap.encode(a, e)
            };
            var yp = sd.exports,
                zp = fp,
                wp = rd,
                Tp = Fd,
                Cp = ud.exports,
                Ip = wp.assert,
                Sp = gp,
                Ep = vp,
                Lp = ga;
            ga.prototype.keyPair = function(e) {
                return new Sp(this, e)
            }, ga.prototype.keyFromPrivate = function(e, t) {
                return Sp.fromPrivate(this, e, t)
            }, ga.prototype.keyFromPublic = function(e, t) {
                return Sp.fromPublic(this, e, t)
            }, ga.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new zp({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || Cp(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), i = this.n.byteLength(), n = this.n.sub(new yp(2));;) {
                    var o = new yp(t.generate(i));
                    if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                }
            }, ga.prototype._truncateToN = function(e, t) {
                var i = 8 * e.byteLength() - this.n.bitLength();
                return i > 0 && (e = e.ushrn(i)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, ga.prototype.sign = function(e, t, i, n) {
                "object" == typeof i && (n = i, i = null), n || (n = {}), t = this.keyFromPrivate(t, i), e = this._truncateToN(new yp(e, 16));
                for (var o = this.n.byteLength(), a = t.getPrivate()
                        .toArray("be", o), r = e.toArray("be", o), s = new zp({
                            hash: this.hash,
                            entropy: a,
                            nonce: r,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), c = this.n.sub(new yp(1)), l = 0;; l++) {
                    var d = n.k ? n.k(l) : new yp(s.generate(this.n.byteLength()));
                    if (d = this._truncateToN(d, !0), !(d.cmpn(1) <= 0 || d.cmp(c) >= 0)) {
                        var u = this.g.mul(d);
                        if (!u.isInfinity()) {
                            var p = u.getX(),
                                h = p.umod(this.n);
                            if (0 !== h.cmpn(0)) {
                                var f = d.invm(this.n)
                                    .mul(h.mul(t.getPrivate())
                                        .iadd(e));
                                if (f = f.umod(this.n), 0 !== f.cmpn(0)) {
                                    var b = (u.getY()
                                        .isOdd() ? 1 : 0) | (0 !== p.cmp(h) ? 2 : 0);
                                    return n.canonical && f.cmp(this.nh) > 0 && (f = this.n.sub(f), b ^= 1), new Ep({
                                        r: h,
                                        s: f,
                                        recoveryParam: b
                                    })
                                }
                            }
                        }
                    }
                }
            }, ga.prototype.verify = function(e, t, i, n) {
                e = this._truncateToN(new yp(e, 16)), i = this.keyFromPublic(i, n), t = new Ep(t, "hex");
                var o = t.r,
                    a = t.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
                var r, s = a.invm(this.n),
                    c = s.mul(e)
                    .umod(this.n),
                    l = s.mul(o)
                    .umod(this.n);
                return this.curve._maxwellTrick ? (r = this.g.jmulAdd(c, i.getPublic(), l), !r.isInfinity() && r.eqXToP(o)) : (r = this.g.mulAdd(c, i.getPublic(), l), !r.isInfinity() && 0 === r.getX()
                    .umod(this.n)
                    .cmp(o))
            }, ga.prototype.recoverPubKey = function(e, t, i, n) {
                Ip((3 & i) === i, "The recovery param is more than two bits"), t = new Ep(t, n);
                var o = this.n,
                    a = new yp(e),
                    r = t.r,
                    s = t.s,
                    c = 1 & i,
                    l = i >> 1;
                if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                r = l ? this.curve.pointFromX(r.add(this.curve.n), c) : this.curve.pointFromX(r, c);
                var d = t.r.invm(o),
                    u = o.sub(a)
                    .mul(d)
                    .umod(o),
                    p = s.mul(d)
                    .umod(o);
                return this.g.mulAdd(u, r, p)
            }, ga.prototype.getKeyRecoveryParam = function(e, t, i, n) {
                if (t = new Ep(t, n), null !== t.recoveryParam) return t.recoveryParam;
                for (var o = 0; o < 4; o++) {
                    var a;
                    try {
                        a = this.recoverPubKey(e, t, o)
                    } catch (e) {
                        continue
                    }
                    if (a.eq(i)) return o
                }
                throw new Error("Unable to find valid recovery factor")
            };
            var Np = rd,
                Rp = Np.assert,
                qp = Np.parseBytes,
                xp = Np.cachedProperty;
            _a.fromPublic = function(e, t) {
                return t instanceof _a ? t : new _a(e, {
                    pub: t
                })
            }, _a.fromSecret = function(e, t) {
                return t instanceof _a ? t : new _a(e, {
                    secret: t
                })
            }, _a.prototype.secret = function() {
                return this._secret
            }, xp(_a, "pubBytes", function() {
                return this.eddsa.encodePoint(this.pub())
            }), xp(_a, "pub", function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }), xp(_a, "privBytes", function() {
                var e = this.eddsa,
                    t = this.hash(),
                    i = e.encodingLength - 1,
                    n = t.slice(0, e.encodingLength);
                return n[0] &= 248, n[i] &= 127, n[i] |= 64, n
            }), xp(_a, "priv", function() {
                return this.eddsa.decodeInt(this.privBytes())
            }), xp(_a, "hash", function() {
                return this.eddsa.hash()
                    .update(this.secret())
                    .digest()
            }), xp(_a, "messagePrefix", function() {
                return this.hash()
                    .slice(this.eddsa.encodingLength)
            }), _a.prototype.sign = function(e) {
                return Rp(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
            }, _a.prototype.verify = function(e, t) {
                return this.eddsa.verify(e, t, this)
            }, _a.prototype.getSecret = function(e) {
                return Rp(this._secret, "KeyPair is public only"), Np.encode(this.secret(), e)
            }, _a.prototype.getPublic = function(e) {
                return Np.encode(this.pubBytes(), e)
            };
            var Bp = _a,
                Dp = sd.exports,
                Wp = rd,
                Pp = Wp.assert,
                kp = Wp.cachedProperty,
                Fp = Wp.parseBytes;
            kp(Aa, "S", function() {
                return this.eddsa.decodeInt(this.Sencoded())
            }), kp(Aa, "R", function() {
                return this.eddsa.decodePoint(this.Rencoded())
            }), kp(Aa, "Rencoded", function() {
                return this.eddsa.encodePoint(this.R())
            }), kp(Aa, "Sencoded", function() {
                return this.eddsa.encodeInt(this.S())
            }), Aa.prototype.toBytes = function() {
                return this.Rencoded()
                    .concat(this.Sencoded())
            }, Aa.prototype.toHex = function() {
                return Wp.encode(this.toBytes(), "hex")
                    .toUpperCase()
            };
            var Hp = Aa,
                Up = Hd,
                Gp = Fd,
                jp = rd,
                Yp = jp.assert,
                Xp = jp.parseBytes,
                Vp = Bp,
                Qp = Hp,
                Kp = Oa;
            Oa.prototype.sign = function(e, t) {
                    e = Xp(e);
                    var i = this.keyFromSecret(t),
                        n = this.hashInt(i.messagePrefix(), e),
                        o = this.g.mul(n),
                        a = this.encodePoint(o),
                        r = this.hashInt(a, i.pubBytes(), e)
                        .mul(i.priv()),
                        s = n.add(r)
                        .umod(this.curve.n);
                    return this.makeSignature({
                        R: o,
                        S: s,
                        Rencoded: a
                    })
                }, Oa.prototype.verify = function(e, t, i) {
                    e = Xp(e), t = this.makeSignature(t);
                    var n = this.keyFromPublic(i),
                        o = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                        a = this.g.mul(t.S()),
                        r = t.R()
                        .add(n.pub()
                            .mul(o));
                    return r.eq(a)
                }, Oa.prototype.hashInt = function() {
                    for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
                    return jp.intFromLE(e.digest())
                        .umod(this.curve.n)
                }, Oa.prototype.keyFromPublic = function(e) {
                    return Vp.fromPublic(this, e)
                }, Oa.prototype.keyFromSecret = function(e) {
                    return Vp.fromSecret(this, e)
                }, Oa.prototype.makeSignature = function(e) {
                    return e instanceof Qp ? e : new Qp(this, e)
                }, Oa.prototype.encodePoint = function(e) {
                    var t = e.getY()
                        .toArray("le", this.encodingLength);
                    return t[this.encodingLength - 1] |= e.getX()
                        .isOdd() ? 128 : 0, t
                }, Oa.prototype.decodePoint = function(e) {
                    e = jp.parseBytes(e);
                    var t = e.length - 1,
                        i = e.slice(0, t)
                        .concat(e[t] & -129),
                        n = 0 !== (128 & e[t]),
                        o = jp.intFromLE(i);
                    return this.curve.pointFromY(o, n)
                }, Oa.prototype.encodeInt = function(e) {
                    return e.toArray("le", this.encodingLength)
                }, Oa.prototype.decodeInt = function(e) {
                    return jp.intFromLE(e)
                }, Oa.prototype.isPoint = function(e) {
                    return e instanceof this.pointClass
                },
                function(e) {
                    var t = e;
                    t.version = ad.version, t.utils = rd, t.rand = ud.exports, t.curve = Md, t.curves = Fd, t.ec = Lp, t.eddsa = Kp
                }(Gl);
            var Jp = Gl,
                Zp = sd.exports,
                $p = function(e) {
                    return new va(e)
                },
                eh = {
                    secp256k1: {
                        name: "secp256k1",
                        byteLength: 32
                    },
                    secp224r1: {
                        name: "p224",
                        byteLength: 28
                    },
                    prime256v1: {
                        name: "p256",
                        byteLength: 32
                    },
                    prime192v1: {
                        name: "p192",
                        byteLength: 24
                    },
                    ed25519: {
                        name: "ed25519",
                        byteLength: 32
                    },
                    secp384r1: {
                        name: "p384",
                        byteLength: 48
                    },
                    secp521r1: {
                        name: "p521",
                        byteLength: 66
                    }
                };
            eh.p224 = eh.secp224r1, eh.p256 = eh.secp256r1 = eh.prime256v1, eh.p192 = eh.secp192r1 = eh.prime192v1, eh.p384 = eh.secp384r1, eh.p521 = eh.secp521r1, va.prototype.generateKeys = function(e, t) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t)
            }, va.prototype.computeSecret = function(e, t, i) {
                t = t || "utf8", p.isBuffer(e) || (e = new p(e, t));
                var n = this.curve.keyFromPublic(e)
                    .getPublic(),
                    o = n.mul(this.keys.getPrivate())
                    .getX();
                return ya(o, i, this.curveType.byteLength)
            }, va.prototype.getPublicKey = function(e, t) {
                var i = this.keys.getPublic("compressed" === t, !0);
                return "hybrid" === t && (i[i.length - 1] % 2 ? i[0] = 7 : i[0] = 6), ya(i, e)
            }, va.prototype.getPrivateKey = function(e) {
                return ya(this.keys.getPrivate(), e)
            }, va.prototype.setPublicKey = function(e, t) {
                return t = t || "utf8", p.isBuffer(e) || (e = new p(e, t)), this.keys._importPublic(e), this
            }, va.prototype.setPrivateKey = function(e, t) {
                t = t || "utf8", p.isBuffer(e) || (e = new p(e, t));
                var i = new Zp(e);
                return i = i.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(i), this
            };
            var th, ih = Math.pow(2, 30) - 1,
                nh = function(e, t) {
                    if ("number" != typeof e) throw new TypeError("Iterations not a number");
                    if (e < 0) throw new TypeError("Bad iterations");
                    if ("number" != typeof t) throw new TypeError("Key length not a number");
                    if (t < 0 || t > ih || t !== t) throw new TypeError("Bad key length")
                };
            if (hr.process && hr.process.browser) th = "utf-8";
            else if (hr.process && hr.process.version) {
                var oh = parseInt(qs.version.split(".")[0].slice(1), 10);
                th = oh >= 6 ? "utf-8" : "binary"
            } else th = "utf-8";
            var ah = th,
                rh = bl,
                sh = function(e) {
                    return (new rh)
                        .update(e)
                        .digest()
                },
                ch = Rr.Buffer,
                lh = tc,
                dh = dl,
                uh = new Array(16),
                ph = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                hh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                fh = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                bh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                mh = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                Mh = [1352829926, 1548603684, 1836072691, 2053994217, 0];
            lh(za, dh), za.prototype._update = function() {
                for (var e = uh, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
                for (var i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, a = 0 | this._d, r = 0 | this._e, s = 0 | this._a, c = 0 | this._b, l = 0 | this._c, d = 0 | this._d, u = 0 | this._e, p = 0; p < 80; p += 1) {
                    var h, f;
                    p < 16 ? (h = Ta(i, n, o, a, r, e[ph[p]], mh[0], fh[p]), f = Ea(s, c, l, d, u, e[hh[p]], Mh[0], bh[p])) : p < 32 ? (h = Ca(i, n, o, a, r, e[ph[p]], mh[1], fh[p]), f = Sa(s, c, l, d, u, e[hh[p]], Mh[1], bh[p])) : p < 48 ? (h = Ia(i, n, o, a, r, e[ph[p]], mh[2], fh[p]), f = Ia(s, c, l, d, u, e[hh[p]], Mh[2], bh[p])) : p < 64 ? (h = Sa(i, n, o, a, r, e[ph[p]], mh[3], fh[p]), f = Ca(s, c, l, d, u, e[hh[p]], Mh[3], bh[p])) : (h = Ea(i, n, o, a, r, e[ph[p]], mh[4], fh[p]), f = Ta(s, c, l, d, u, e[hh[p]], Mh[4], bh[p])), i = r, r = a, a = wa(o, 10), o = n, n = h, s = u, u = d, d = wa(l, 10), l = c, c = f
                }
                var b = this._b + o + d | 0;
                this._b = this._c + a + u | 0, this._c = this._d + r + s | 0, this._d = this._e + i + c | 0, this._e = this._a + n + l | 0, this._a = b
            }, za.prototype._digest = function() {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var e = ch.alloc ? ch.alloc(20) : new ch(20);
                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
            };
            var gh = za,
                _h = {
                    exports: {}
                },
                Ah = Nr.exports.Buffer;
            La.prototype.update = function(e, t) {
                "string" == typeof e && (t = t || "utf8", e = Ah.from(e, t));
                for (var i = this._block, n = this._blockSize, o = e.length, a = this._len, r = 0; r < o;) {
                    for (var s = a % n, c = Math.min(o - r, n - s), l = 0; l < c; l++) i[s + l] = e[r + l];
                    a += c, r += c, a % n === 0 && this._update(i)
                }
                return this._len += o, this
            }, La.prototype.digest = function(e) {
                var t = this._len % this._blockSize;
                this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var i = 8 * this._len;
                if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
                else {
                    var n = (4294967295 & i) >>> 0,
                        o = (i - n) / 4294967296;
                    this._block.writeUInt32BE(o, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var a = this._hash();
                return e ? a.toString(e) : a
            }, La.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            };
            var Oh = La,
                vh = tc,
                yh = Oh,
                zh = Nr.exports.Buffer,
                wh = [1518500249, 1859775393, -1894007588, -899497514],
                Th = new Array(80);
            vh(Na, yh), Na.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, Na.prototype._update = function(e) {
                for (var t = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, a = 0 | this._d, r = 0 | this._e, s = 0; s < 16; ++s) t[s] = e.readInt32BE(4 * s);
                for (; s < 80; ++s) t[s] = t[s - 3] ^ t[s - 8] ^ t[s - 14] ^ t[s - 16];
                for (var c = 0; c < 80; ++c) {
                    var l = ~~(c / 20),
                        d = Ra(i) + xa(l, n, o, a) + r + t[c] + wh[l] | 0;
                    r = a, a = o, o = qa(n), n = i, i = d
                }
                this._a = i + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = r + this._e | 0
            }, Na.prototype._hash = function() {
                var e = zh.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            };
            var Ch = Na,
                Ih = tc,
                Sh = Oh,
                Eh = Nr.exports.Buffer,
                Lh = [1518500249, 1859775393, -1894007588, -899497514],
                Nh = new Array(80);
            Ih(Ba, Sh), Ba.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, Ba.prototype._update = function(e) {
                for (var t = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, a = 0 | this._d, r = 0 | this._e, s = 0; s < 16; ++s) t[s] = e.readInt32BE(4 * s);
                for (; s < 80; ++s) t[s] = Da(t[s - 3] ^ t[s - 8] ^ t[s - 14] ^ t[s - 16]);
                for (var c = 0; c < 80; ++c) {
                    var l = ~~(c / 20),
                        d = Wa(i) + ka(l, n, o, a) + r + t[c] + Lh[l] | 0;
                    r = a, a = o, o = Pa(n), n = i, i = d
                }
                this._a = i + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = r + this._e | 0
            }, Ba.prototype._hash = function() {
                var e = Eh.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            };
            var Rh = Ba,
                qh = tc,
                xh = Oh,
                Bh = Nr.exports.Buffer,
                Dh = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                Wh = new Array(64);
            qh(Fa, xh), Fa.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, Fa.prototype._update = function(e) {
                for (var t = this._w, i = 0 | this._a, n = 0 | this._b, o = 0 | this._c, a = 0 | this._d, r = 0 | this._e, s = 0 | this._f, c = 0 | this._g, l = 0 | this._h, d = 0; d < 16; ++d) t[d] = e.readInt32BE(4 * d);
                for (; d < 64; ++d) t[d] = Xa(t[d - 2]) + t[d - 7] + Ya(t[d - 15]) + t[d - 16] | 0;
                for (var u = 0; u < 64; ++u) {
                    var p = l + ja(r) + Ha(r, s, c) + Dh[u] + t[u] | 0,
                        h = Ga(i) + Ua(i, n, o) | 0;
                    l = c, c = s, s = r, r = a + p | 0, a = o, o = n, n = i, i = p + h | 0
                }
                this._a = i + this._a | 0, this._b = n + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = r + this._e | 0, this._f = s + this._f | 0, this._g = c + this._g | 0, this._h = l + this._h | 0
            }, Fa.prototype._hash = function() {
                var e = Bh.allocUnsafe(32);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
            };
            var Ph = Fa,
                kh = tc,
                Fh = Ph,
                Hh = Oh,
                Uh = Nr.exports.Buffer,
                Gh = new Array(64);
            kh(Va, Fh), Va.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, Va.prototype._hash = function() {
                var e = Uh.allocUnsafe(28);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
            };
            var jh = Va,
                Yh = tc,
                Xh = Oh,
                Vh = Nr.exports.Buffer,
                Qh = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                Kh = new Array(160);
            Yh(Qa, Xh), Qa.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, Qa.prototype._update = function(e) {
                for (var t = this._w, i = 0 | this._ah, n = 0 | this._bh, o = 0 | this._ch, a = 0 | this._dh, r = 0 | this._eh, s = 0 | this._fh, c = 0 | this._gh, l = 0 | this._hh, d = 0 | this._al, u = 0 | this._bl, p = 0 | this._cl, h = 0 | this._dl, f = 0 | this._el, b = 0 | this._fl, m = 0 | this._gl, M = 0 | this._hl, g = 0; g < 32; g += 2) t[g] = e.readInt32BE(4 * g), t[g + 1] = e.readInt32BE(4 * g + 4);
                for (; g < 160; g += 2) {
                    var _ = t[g - 30],
                        A = t[g - 30 + 1],
                        O = er(_, A),
                        v = tr(A, _);
                    _ = t[g - 4], A = t[g - 4 + 1];
                    var y = ir(_, A),
                        z = nr(A, _),
                        w = t[g - 14],
                        T = t[g - 14 + 1],
                        C = t[g - 32],
                        I = t[g - 32 + 1],
                        S = v + T | 0,
                        E = O + w + or(S, v) | 0;
                    S = S + z | 0, E = E + y + or(S, z) | 0, S = S + I | 0, E = E + C + or(S, I) | 0, t[g] = E, t[g + 1] = S
                }
                for (var L = 0; L < 160; L += 2) {
                    E = t[L], S = t[L + 1];
                    var N = Ja(i, n, o),
                        R = Ja(d, u, p),
                        q = Za(i, d),
                        x = Za(d, i),
                        B = $a(r, f),
                        D = $a(f, r),
                        W = Qh[L],
                        P = Qh[L + 1],
                        k = Ka(r, s, c),
                        F = Ka(f, b, m),
                        H = M + D | 0,
                        U = l + B + or(H, M) | 0;
                    H = H + F | 0, U = U + k + or(H, F) | 0, H = H + P | 0, U = U + W + or(H, P) | 0, H = H + S | 0, U = U + E + or(H, S) | 0;
                    var G = x + R | 0,
                        j = q + N + or(G, x) | 0;
                    l = c, M = m, c = s, m = b, s = r, b = f, f = h + H | 0, r = a + U + or(f, h) | 0, a = o, h = p, o = n, p = u, n = i, u = d, d = H + G | 0, i = U + j + or(d, H) | 0
                }
                this._al = this._al + d | 0, this._bl = this._bl + u | 0, this._cl = this._cl + p | 0, this._dl = this._dl + h | 0, this._el = this._el + f | 0, this._fl = this._fl + b | 0, this._gl = this._gl + m | 0, this._hl = this._hl + M | 0, this._ah = this._ah + i + or(this._al, d) | 0, this._bh = this._bh + n + or(this._bl, u) | 0, this._ch = this._ch + o + or(this._cl, p) | 0, this._dh = this._dh + a + or(this._dl, h) | 0, this._eh = this._eh + r + or(this._el, f) | 0, this._fh = this._fh + s + or(this._fl, b) | 0, this._gh = this._gh + c + or(this._gl, m) | 0, this._hh = this._hh + l + or(this._hl, M) | 0
            }, Qa.prototype._hash = function() {
                function e(e, i, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(i, n + 4)
                }
                var t = Vh.allocUnsafe(64);
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
            };
            var Jh = Qa,
                Zh = tc,
                $h = Jh,
                ef = Oh,
                tf = Nr.exports.Buffer,
                nf = new Array(160);
            Zh(ar, $h), ar.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, ar.prototype._hash = function() {
                function e(e, i, n) {
                    t.writeInt32BE(e, n), t.writeInt32BE(i, n + 4)
                }
                var t = tf.allocUnsafe(48);
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
            };
            var of = ar, af = _h.exports = function(e) {
                e = e.toLowerCase();
                var t = af[e];
                if (!t) throw new Error(e + " is not supported (we accept pull requests)");
                return new t
            };
            af.sha = Ch, af.sha1 = Rh, af.sha224 = jh, af.sha256 = Ph, af.sha384 = of, af.sha512 = Jh;
            var rf = Nr.exports.Buffer,
                sf = function(e, t, i) {
                    if (rf.isBuffer(e)) return e;
                    if ("string" == typeof e) return rf.from(e, t);
                    if (ArrayBuffer.isView(e)) return rf.from(e.buffer);
                    throw new TypeError(i + " must be a string, a Buffer, a typed array or a DataView")
                },
                cf = sh,
                lf = gh,
                df = _h.exports,
                uf = Nr.exports.Buffer,
                pf = nh,
                hf = ah,
                ff = sf,
                bf = uf.alloc(128),
                mf = {
                    md5: 16,
                    sha1: 20,
                    sha224: 28,
                    sha256: 32,
                    sha384: 48,
                    sha512: 64,
                    rmd160: 20,
                    ripemd160: 20
                };
            rr.prototype.run = function(e, t) {
                e.copy(t, this.blocksize);
                var i = this.hash(t);
                return i.copy(this.opad, this.blocksize), this.hash(this.opad)
            };
            var Mf, gf, _f = cr,
                Af = Nr.exports.Buffer,
                Of = nh,
                vf = ah,
                yf = _f,
                zf = sf,
                wf = hr.crypto && hr.crypto.subtle,
                Tf = {
                    sha: "SHA-1",
                    "sha-1": "SHA-1",
                    sha1: "SHA-1",
                    sha256: "SHA-256",
                    "sha-256": "SHA-256",
                    sha384: "SHA-384",
                    "sha-384": "SHA-384",
                    "sha-512": "SHA-512",
                    sha512: "SHA-512"
                },
                Cf = [],
                If = function(e, t, i, n, o, a) {
                    "function" == typeof o && (a = o, o = void 0), o = o || "sha1";
                    var r = Tf[o.toLowerCase()];
                    if (!r || "function" != typeof hr.Promise) return void dr()(function() {
                        var r;
                        try {
                            r = yf(e, t, i, n, o)
                        } catch (s) {
                            return a(s)
                        }
                        a(null, r)
                    });
                    if (Of(i, n), e = zf(e, vf, "Password"), t = zf(t, vf, "Salt"), "function" != typeof a) throw new Error("No callback provided to pbkdf2");
                    pr(lr(r)
                        .then(function(a) {
                            return a ? ur(e, t, i, n, r) : yf(e, t, i, n, o)
                        }), a)
                },
                Sf = If,
                Ef = _f;
            t.Buffer = p, t.createCipher = kl, t.createCipheriv = Fl, t.createDecipher = Hl, t.createDecipheriv = Ul, t.createECDH = $p, t.pbkdf2 = Sf, t.pbkdf2Sync = Ef
        })
    })
    .call(t, function() {
        return this
    }())
}
