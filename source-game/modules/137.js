function(e, t) {
    "use strict";
    var i = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, o) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e)
            .map(function(o) {
                var a = encodeURIComponent(i(o)) + n;
                return Array.isArray(e[o]) ? e[o].map(function(e) {
                        return a + encodeURIComponent(i(e))
                    })
                    .join(t) : a + encodeURIComponent(i(e[o]))
            })
            .join(t) : o ? encodeURIComponent(i(o)) + n + encodeURIComponent(i(e)) : ""
    }
}
