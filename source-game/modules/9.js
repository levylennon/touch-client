function(e, t, i) {
    "use strict";
    var n = i(8),
        o = i(10);
    t.isVersionSatisfies = function(e, t) {
        var i = o.valid(e);
        return i || (i = o.valid(o.coerce(e))) ? o.satisfies(i, t) : (console.error("Could not validate version", e), !1)
    }, t.isItThatModel = function(e, i, o, a) {
        var r = e.toLowerCase(),
            s = new n(o),
            c = s.getOS(),
            l = c.name || "",
            d = l.toLowerCase() === r;
        if (d) return t.isVersionSatisfies(c.version, i);
        var u = a && a.platform && a.platform || "",
            p = u.toLowerCase() === r;
        return !!p && t.isVersionSatisfies(a.version, i)
    }
}
