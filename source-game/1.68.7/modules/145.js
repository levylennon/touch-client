function(e, t, i) {
    (function(e, n) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        "use strict";

        function o() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1)
                    .byteLength
            } catch (t) {
                return !1
            }
        }

        function a() {
            return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function r(t, i) {
            if (a() < i) throw new RangeError("Invalid typed array length");
            return e.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(i), t.__proto__ = e.prototype) : (null === t && (t = new e(i)), t.length = i), t
        }

        function e(t, i, n) {
            if (!(e.TYPED_ARRAY_SUPPORT || this instanceof e)) return new e(t, i, n);
            if ("number" == typeof t) {
                if ("string" == typeof i) throw new Error("If encoding is specified then the first argument must be a string");
                return d(this, t)
            }
            return s(this, t, i, n)
        }

        function s(e, t, i, n) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? h(e, t, i, n) : "string" == typeof t ? u(e, t, i) : f(e, t)
        }

        function c(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(e, t, i, n) {
            return c(t), t <= 0 ? r(e, t) : void 0 !== i ? "string" == typeof n ? r(e, t)
                .fill(i, n) : r(e, t)
                .fill(i) : r(e, t)
        }

        function d(t, i) {
            if (c(i), t = r(t, i < 0 ? 0 : 0 | b(i)), !e.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < i; ++n) t[n] = 0;
            return t
        }

        function u(t, i, n) {
            if ("string" == typeof n && "" !== n || (n = "utf8"), !e.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var o = 0 | M(i, n);
            t = r(t, o);
            var a = t.write(i, n);
            return a !== o && (t = t.slice(0, a)), t
        }

        function p(e, t) {
            var i = t.length < 0 ? 0 : 0 | b(t.length);
            e = r(e, i);
            for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
            return e
        }

        function h(t, i, n, o) {
            if (i.byteLength, n < 0 || i.byteLength < n) throw new RangeError("'offset' is out of bounds");
            if (i.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
            return i = void 0 === n && void 0 === o ? new Uint8Array(i) : void 0 === o ? new Uint8Array(i, n) : new Uint8Array(i, n, o), e.TYPED_ARRAY_SUPPORT ? (t = i, t.__proto__ = e.prototype) : t = p(t, i), t
        }

        function f(t, i) {
            if (e.isBuffer(i)) {
                var n = 0 | b(i.length);
                return t = r(t, n), 0 === t.length ? t : (i.copy(t, 0, 0, n), t)
            }
            if (i) {
                if ("undefined" != typeof ArrayBuffer && i.buffer instanceof ArrayBuffer || "length" in i) return "number" != typeof i.length || K(i.length) ? r(t, 0) : p(t, i);
                if ("Buffer" === i.type && $(i.data)) return p(t, i.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function b(e) {
            if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a()
                .toString(16) + " bytes");
            return 0 | e
        }

        function m(t) {
            return +t != t && (t = 0), e.alloc(+t)
        }

        function M(t, i) {
            if (e.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var o = !1;;) switch (i) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return j(t)
                        .length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return V(t)
                        .length;
                default:
                    if (o) return j(t)
                        .length;
                    i = ("" + i)
                        .toLowerCase(), o = !0
            }
        }

        function g(e, t, i) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
            if (i >>>= 0, t >>>= 0, i <= t) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return R(this, t, i);
                case "utf8":
                case "utf-8":
                    return S(this, t, i);
                case "ascii":
                    return L(this, t, i);
                case "latin1":
                case "binary":
                    return N(this, t, i);
                case "base64":
                    return I(this, t, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return q(this, t, i);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "")
                        .toLowerCase(), n = !0
            }
        }

        function _(e, t, i) {
            var n = e[t];
            e[t] = e[i], e[i] = n
        }

        function A(t, i, n, o, a) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (o = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (a) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!a) return -1;
                n = 0
            }
            if ("string" == typeof i && (i = e.from(i, o)), e.isBuffer(i)) return 0 === i.length ? -1 : O(t, i, n, o, a);
            if ("number" == typeof i) return i = 255 & i, e.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(t, i, n) : Uint8Array.prototype.lastIndexOf.call(t, i, n) : O(t, [i], n, o, a);
            throw new TypeError("val must be string, number or Buffer")
        }

        function O(e, t, i, n, o) {
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

        function v(e, t, i, n) {
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

        function y(e, t, i, n) {
            return Q(j(t, e.length - i), e, i, n)
        }

        function z(e, t, i, n) {
            return Q(Y(t), e, i, n)
        }

        function w(e, t, i, n) {
            return z(e, t, i, n)
        }

        function T(e, t, i, n) {
            return Q(V(t), e, i, n)
        }

        function C(e, t, i, n) {
            return Q(X(t, e.length - i), e, i, n)
        }

        function I(e, t, i) {
            return 0 === t && i === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, i))
        }

        function S(e, t, i) {
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
            return E(n)
        }

        function E(e) {
            var t = e.length;
            if (t <= ee) return String.fromCharCode.apply(String, e);
            for (var i = "", n = 0; n < t;) i += String.fromCharCode.apply(String, e.slice(n, n += ee));
            return i
        }

        function L(e, t, i) {
            var n = "";
            i = Math.min(e.length, i);
            for (var o = t; o < i; ++o) n += String.fromCharCode(127 & e[o]);
            return n
        }

        function N(e, t, i) {
            var n = "";
            i = Math.min(e.length, i);
            for (var o = t; o < i; ++o) n += String.fromCharCode(e[o]);
            return n
        }

        function R(e, t, i) {
            var n = e.length;
            (!t || t < 0) && (t = 0), (!i || i < 0 || i > n) && (i = n);
            for (var o = "", a = t; a < i; ++a) o += G(e[a]);
            return o
        }

        function q(e, t, i) {
            for (var n = e.slice(t, i), o = "", a = 0; a < n.length; a += 2) o += String.fromCharCode(n[a] + 256 * n[a + 1]);
            return o
        }

        function x(e, t, i) {
            if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > i) throw new RangeError("Trying to access beyond buffer length")
        }

        function B(t, i, n, o, a, r) {
            if (!e.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (i > a || i < r) throw new RangeError('"value" argument is out of bounds');
            if (n + o > t.length) throw new RangeError("Index out of range")
        }

        function D(e, t, i, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, a = Math.min(e.length - i, 2); o < a; ++o) e[i + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
        }

        function W(e, t, i, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, a = Math.min(e.length - i, 4); o < a; ++o) e[i + o] = t >>> 8 * (n ? o : 3 - o) & 255
        }

        function P(e, t, i, n, o, a) {
            if (i + n > e.length) throw new RangeError("Index out of range");
            if (i < 0) throw new RangeError("Index out of range")
        }

        function k(e, t, i, n, o) {
            return o || P(e, t, i, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, i, n, 23, 4), i + 4
        }

        function F(e, t, i, n, o) {
            return o || P(e, t, i, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, i, n, 52, 8), i + 8
        }

        function H(e) {
            if (e = U(e)
                .replace(te, ""), e.length < 2) return "";
            for (; e.length % 4 !== 0;) e += "=";
            return e
        }

        function U(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }

        function G(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function j(e, t) {
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

        function Y(e) {
            for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
            return t
        }

        function X(e, t) {
            for (var i, n, o, a = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) i = e.charCodeAt(r), n = i >> 8, o = i % 256, a.push(o), a.push(n);
            return a
        }

        function V(e) {
            return J.toByteArray(H(e))
        }

        function Q(e, t, i, n) {
            for (var o = 0; o < n && !(o + i >= t.length || o >= e.length); ++o) t[o + i] = e[o];
            return o
        }

        function K(e) {
            return e !== e
        }
        var J = i(146),
            Z = i(147),
            $ = i(148);
        t.Buffer = e, t.SlowBuffer = m, t.INSPECT_MAX_BYTES = 50, e.TYPED_ARRAY_SUPPORT = void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : o(), t.kMaxLength = a(), e.poolSize = 8192, e._augment = function(t) {
            return t.__proto__ = e.prototype, t
        }, e.from = function(e, t, i) {
            return s(null, e, t, i)
        }, e.TYPED_ARRAY_SUPPORT && (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
            value: null,
            configurable: !0
        })), e.alloc = function(e, t, i) {
            return l(null, e, t, i)
        }, e.allocUnsafe = function(e) {
            return d(null, e)
        }, e.allocUnsafeSlow = function(e) {
            return d(null, e)
        }, e.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, e.compare = function(t, i) {
            if (!e.isBuffer(t) || !e.isBuffer(i)) throw new TypeError("Arguments must be Buffers");
            if (t === i) return 0;
            for (var n = t.length, o = i.length, a = 0, r = Math.min(n, o); a < r; ++a)
                if (t[a] !== i[a]) {
                    n = t[a], o = i[a];
                    break
                } return n < o ? -1 : o < n ? 1 : 0
        }, e.isEncoding = function(e) {
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
        }, e.concat = function(t, i) {
            if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return e.alloc(0);
            var n;
            if (void 0 === i)
                for (i = 0, n = 0; n < t.length; ++n) i += t[n].length;
            var o = e.allocUnsafe(i),
                a = 0;
            for (n = 0; n < t.length; ++n) {
                var r = t[n];
                if (!e.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
                r.copy(o, a), a += r.length
            }
            return o
        }, e.byteLength = M, e.prototype._isBuffer = !0, e.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) _(this, t, t + 1);
            return this
        }, e.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) _(this, t, t + 3), _(this, t + 1, t + 2);
            return this
        }, e.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
            return this
        }, e.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : g.apply(this, arguments)
        }, e.prototype.equals = function(t) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === e.compare(this, t)
        }, e.prototype.inspect = function() {
            var e = "",
                i = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, i)
                .match(/.{2}/g)
                .join(" "), this.length > i && (e += " ... ")), "<Buffer " + e + ">"
        }, e.prototype.compare = function(t, i, n, o, a) {
            if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === i && (i = 0), void 0 === n && (n = t ? t.length : 0), void 0 === o && (o = 0), void 0 === a && (a = this.length), i < 0 || n > t.length || o < 0 || a > this.length) throw new RangeError("out of range index");
            if (o >= a && i >= n) return 0;
            if (o >= a) return -1;
            if (i >= n) return 1;
            if (i >>>= 0, n >>>= 0, o >>>= 0, a >>>= 0, this === t) return 0;
            for (var r = a - o, s = n - i, c = Math.min(r, s), l = this.slice(o, a), d = t.slice(i, n), u = 0; u < c; ++u)
                if (l[u] !== d[u]) {
                    r = l[u], s = d[u];
                    break
                } return r < s ? -1 : s < r ? 1 : 0
        }, e.prototype.includes = function(e, t, i) {
            return this.indexOf(e, t, i) !== -1
        }, e.prototype.indexOf = function(e, t, i) {
            return A(this, e, t, i, !0)
        }, e.prototype.lastIndexOf = function(e, t, i) {
            return A(this, e, t, i, !1)
        }, e.prototype.write = function(e, t, i, n) {
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
                    return v(this, e, t, i);
                case "utf8":
                case "utf-8":
                    return y(this, e, t, i);
                case "ascii":
                    return z(this, e, t, i);
                case "latin1":
                case "binary":
                    return w(this, e, t, i);
                case "base64":
                    return T(this, e, t, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, e, t, i);
                default:
                    if (a) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n)
                        .toLowerCase(), a = !0
            }
        }, e.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var ee = 4096;
        e.prototype.slice = function(t, i) {
            var n = this.length;
            t = ~~t, i = void 0 === i ? n : ~~i, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), i < 0 ? (i += n, i < 0 && (i = 0)) : i > n && (i = n), i < t && (i = t);
            var o;
            if (e.TYPED_ARRAY_SUPPORT) o = this.subarray(t, i), o.__proto__ = e.prototype;
            else {
                var a = i - t;
                o = new e(a, (void 0));
                for (var r = 0; r < a; ++r) o[r] = this[r + t]
            }
            return o
        }, e.prototype.readUIntLE = function(e, t, i) {
            e = 0 | e, t = 0 | t, i || x(e, t, this.length);
            for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256);) n += this[e + a] * o;
            return n
        }, e.prototype.readUIntBE = function(e, t, i) {
            e = 0 | e, t = 0 | t, i || x(e, t, this.length);
            for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
            return n
        }, e.prototype.readUInt8 = function(e, t) {
            return t || x(e, 1, this.length), this[e]
        }, e.prototype.readUInt16LE = function(e, t) {
            return t || x(e, 2, this.length), this[e] | this[e + 1] << 8
        }, e.prototype.readUInt16BE = function(e, t) {
            return t || x(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, e.prototype.readUInt32LE = function(e, t) {
            return t || x(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, e.prototype.readUInt32BE = function(e, t) {
            return t || x(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, e.prototype.readIntLE = function(e, t, i) {
            e = 0 | e, t = 0 | t, i || x(e, t, this.length);
            for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256);) n += this[e + a] * o;
            return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n
        }, e.prototype.readIntBE = function(e, t, i) {
            e = 0 | e, t = 0 | t, i || x(e, t, this.length);
            for (var n = t, o = 1, a = this[e + --n]; n > 0 && (o *= 256);) a += this[e + --n] * o;
            return o *= 128, a >= o && (a -= Math.pow(2, 8 * t)), a
        }, e.prototype.readInt8 = function(e, t) {
            return t || x(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
        }, e.prototype.readInt16LE = function(e, t) {
            t || x(e, 2, this.length);
            var i = this[e] | this[e + 1] << 8;
            return 32768 & i ? 4294901760 | i : i
        }, e.prototype.readInt16BE = function(e, t) {
            t || x(e, 2, this.length);
            var i = this[e + 1] | this[e] << 8;
            return 32768 & i ? 4294901760 | i : i
        }, e.prototype.readInt32LE = function(e, t) {
            return t || x(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, e.prototype.readInt32BE = function(e, t) {
            return t || x(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, e.prototype.readFloatLE = function(e, t) {
            return t || x(e, 4, this.length), Z.read(this, e, !0, 23, 4)
        }, e.prototype.readFloatBE = function(e, t) {
            return t || x(e, 4, this.length), Z.read(this, e, !1, 23, 4)
        }, e.prototype.readDoubleLE = function(e, t) {
            return t || x(e, 8, this.length), Z.read(this, e, !0, 52, 8)
        }, e.prototype.readDoubleBE = function(e, t) {
            return t || x(e, 8, this.length), Z.read(this, e, !1, 52, 8)
        }, e.prototype.writeUIntLE = function(e, t, i, n) {
            if (e = +e, t = 0 | t, i = 0 | i, !n) {
                var o = Math.pow(2, 8 * i) - 1;
                B(this, e, t, i, o, 0)
            }
            var a = 1,
                r = 0;
            for (this[t] = 255 & e; ++r < i && (a *= 256);) this[t + r] = e / a & 255;
            return t + i
        }, e.prototype.writeUIntBE = function(e, t, i, n) {
            if (e = +e, t = 0 | t, i = 0 | i, !n) {
                var o = Math.pow(2, 8 * i) - 1;
                B(this, e, t, i, o, 0)
            }
            var a = i - 1,
                r = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) this[t + a] = e / r & 255;
            return t + i
        }, e.prototype.writeUInt8 = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[i] = 255 & t, i + 1
        }, e.prototype.writeUInt16LE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8) : D(this, t, i, !0), i + 2
        }, e.prototype.writeUInt16BE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 8, this[i + 1] = 255 & t) : D(this, t, i, !1), i + 2
        }, e.prototype.writeUInt32LE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[i + 3] = t >>> 24, this[i + 2] = t >>> 16, this[i + 1] = t >>> 8, this[i] = 255 & t) : W(this, t, i, !0), i + 4
        }, e.prototype.writeUInt32BE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = 255 & t) : W(this, t, i, !1), i + 4
        }, e.prototype.writeIntLE = function(e, t, i, n) {
            if (e = +e, t = 0 | t, !n) {
                var o = Math.pow(2, 8 * i - 1);
                B(this, e, t, i, o - 1, -o)
            }
            var a = 0,
                r = 1,
                s = 0;
            for (this[t] = 255 & e; ++a < i && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
            return t + i
        }, e.prototype.writeIntBE = function(e, t, i, n) {
            if (e = +e, t = 0 | t, !n) {
                var o = Math.pow(2, 8 * i - 1);
                B(this, e, t, i, o - 1, -o)
            }
            var a = i - 1,
                r = 1,
                s = 0;
            for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / r >> 0) - s & 255;
            return t + i
        }, e.prototype.writeInt8 = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[i] = 255 & t, i + 1
        }, e.prototype.writeInt16LE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8) : D(this, t, i, !0), i + 2
        }, e.prototype.writeInt16BE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 8, this[i + 1] = 255 & t) : D(this, t, i, !1), i + 2
        }, e.prototype.writeInt32LE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[i] = 255 & t, this[i + 1] = t >>> 8, this[i + 2] = t >>> 16, this[i + 3] = t >>> 24) : W(this, t, i, !0), i + 4
        }, e.prototype.writeInt32BE = function(t, i, n) {
            return t = +t, i = 0 | i, n || B(this, t, i, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = 255 & t) : W(this, t, i, !1), i + 4
        }, e.prototype.writeFloatLE = function(e, t, i) {
            return k(this, e, t, !0, i)
        }, e.prototype.writeFloatBE = function(e, t, i) {
            return k(this, e, t, !1, i)
        }, e.prototype.writeDoubleLE = function(e, t, i) {
            return F(this, e, t, !0, i)
        }, e.prototype.writeDoubleBE = function(e, t, i) {
            return F(this, e, t, !1, i)
        }, e.prototype.copy = function(t, i, n, o) {
            if (n || (n = 0), o || 0 === o || (o = this.length), i >= t.length && (i = t.length), i || (i = 0), o > 0 && o < n && (o = n), o === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (i < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (o < 0) throw new RangeError("sourceEnd out of bounds");
            o > this.length && (o = this.length), t.length - i < o - n && (o = t.length - i + n);
            var a, r = o - n;
            if (this === t && n < i && i < o)
                for (a = r - 1; a >= 0; --a) t[a + i] = this[a + n];
            else if (r < 1e3 || !e.TYPED_ARRAY_SUPPORT)
                for (a = 0; a < r; ++a) t[a + i] = this[a + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + r), i);
            return r
        }, e.prototype.fill = function(t, i, n, o) {
            if ("string" == typeof t) {
                if ("string" == typeof i ? (o = i, i = 0, n = this.length) : "string" == typeof n && (o = n, n = this.length), 1 === t.length) {
                    var a = t.charCodeAt(0);
                    a < 256 && (t = a)
                }
                if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
                if ("string" == typeof o && !e.isEncoding(o)) throw new TypeError("Unknown encoding: " + o)
            } else "number" == typeof t && (t = 255 & t);
            if (i < 0 || this.length < i || this.length < n) throw new RangeError("Out of range index");
            if (n <= i) return this;
            i >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
            var r;
            if ("number" == typeof t)
                for (r = i; r < n; ++r) this[r] = t;
            else {
                var s = e.isBuffer(t) ? t : j(new e(t, o)
                        .toString()),
                    c = s.length;
                for (r = 0; r < n - i; ++r) this[r + i] = s[r % c]
            }
            return this
        };
        var te = /[^+\/0-9A-Za-z-_]/g
    })
    .call(t, i(145)
        .Buffer,
        function() {
            return this
        }())
}
