function(e, t) {
    var i = Array.isArray;
    t.emaNeurt = function(e) {
        return t.trueName(e, "‮")
    }, t.trueName = function n(e, t) {
        var o = (typeof e)[0],
            a = "";
        if (t) {
            if ("object" == typeof t && (t = t.valueOf()), "string" != typeof t) throw new TypeError("Invalid type for salt: must be a string");
            a = t
        }
        var r = e;
        if ("o" === o && null !== e && (r = e.valueOf()), o = (typeof r)[0], "o" !== o || null === r) return a.concat(o, r);
        if (r instanceof Date) return a.concat("d", r.toJSON());
        if (r instanceof RegExp) return a.concat("r", r.toString());
        if ("f" === o) throw new TypeError("Invalid type: function");
        i(r) && (o = "a");
        var s, c;
        s = Object.keys(r), s.sort();
        for (var l = 0; l < s.length; l += 1) c = s[l], a = a.concat(o, c, n(r[c]));
        return a
    }
}
