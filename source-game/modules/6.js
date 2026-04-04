function(e, t) {
    /*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
    String.fromCodePoint || ! function() {
        var e = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        i = t(e, e, e) && t
                } catch (n) {}
                return i
            }(),
            t = String.fromCharCode,
            i = Math.floor,
            n = function(e) {
                var n, o, a = 16384,
                    r = [],
                    s = -1,
                    c = arguments.length;
                if (!c) return "";
                for (var l = ""; ++s < c;) {
                    var d = Number(arguments[s]);
                    if (!isFinite(d) || d < 0 || d > 1114111 || i(d) != d) throw RangeError("Invalid code point: " + d);
                    d <= 65535 ? r.push(d) : (d -= 65536, n = (d >> 10) + 55296, o = d % 1024 + 56320, r.push(n, o)), (s + 1 == c || r.length > a) && (l += t.apply(null, r), r.length = 0)
                }
                return l
            };
        e ? e(String, "fromCodePoint", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.fromCodePoint = n
    }()
}
