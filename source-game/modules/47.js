function(e, t, i) {
    "use strict";

    function n(e) {
        var t = 0,
            i = void 0,
            n = void 0,
            a = e.parentNode;
        if (Boolean(a)) {
            var r = a.childNodes,
                s = r.length;
            for (i = 0; i < s; i++)
                if (n = r[i], (0, o.isElement)(n) && (t++, n === e)) return ":nth-child(" + t + ")"
        }
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getNthChild = n;
    var o = i(48)
}
