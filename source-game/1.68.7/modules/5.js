function(e, t) {
    /*! https://mths.be/codepointat v0.2.0 by @mathias */
    String.prototype.codePointAt || ! function() {
        "use strict";
        var e = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        i = t(e, e, e) && t
                } catch (n) {}
                return i
            }(),
            t = function(e) {
                if (null == this) throw TypeError();
                var t = String(this),
                    i = t.length,
                    n = e ? Number(e) : 0;
                if (n != n && (n = 0), !(n < 0 || n >= i)) {
                    var o, a = t.charCodeAt(n);
                    return a >= 55296 && a <= 56319 && i > n + 1 && (o = t.charCodeAt(n + 1), o >= 56320 && o <= 57343) ? 1024 * (a - 55296) + o - 56320 + 65536 : a
                }
            };
        e ? e(String.prototype, "codePointAt", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.codePointAt = t
    }()
}
