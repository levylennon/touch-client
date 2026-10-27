function(e, t) {
    // LangModule
    function i(e, t, i, n, o) {
        for (var r = "", s = 1, c = Object.keys(i)
                .length; s < c; s += 1) {
            var l = Object.keys(i)[s],
                d = i[l];
            null !== d && void 0 !== d || (d = "null"), r += "arg" + s + ': "' + d.toString() + '" '
        }
        var u = e + ' for base: "' + t + '"';
        u += " with args: " + r + "and modifier: " + n, o && (u += " from caller: " + o), a.warning(new Error(u))
    }

    function n(e, t, n, o, a) {
        var r = void 0 === n ? t[1] : n,
            s = "",
            c = !0,
            l = 0;
        if (!e) return s;
        for (var d = 0; d < e.length; d++) {
            var u = e[d];
            if ("%" === u || "#" === u) {
                var p = parseInt(e[d + 1], 10);
                isNaN(p) || (l = Math.max(l, p))
            }
        }
        for (var h = Array.prototype.slice.call(t), f = h.slice(l + 1), b = 0, m = e.length; b < m; b++) {
            var M = e[b];
            if ("%" === M || "#" === M) {
                var g = parseInt(e[b + 1], 10);
                if (!isNaN(g)) {
                    var _ = t[g];
                    void 0 === n && (r = _), void 0 !== _ && null !== _ ? s += _ : c && (!a || a && !a.isPreview) && i("arg " + g.toString() + " is null/undefined", e, t, n, o), b++;
                    continue
                }
            }
            if ("{" === M || "(" === M) {
                var A = e.indexOf("{" === M ? "}" : ")", b);
                if (A !== -1 && "~" === e[b + 1]) {
                    var O, v = !1;
                    switch (1 === f.length ? O = f[0] : (O = f.shift(), void 0 === O && (O = r)), e[b + 2]) {
                        case "z":
                            v = 0 === r || "0" === r;
                            break;
                        case "p":
                            v = r > 1;
                            break;
                        case "s":
                            v = 1 === r || "1" === r;
                            break;
                        case "m":
                            v = 0 === O || "0" === O;
                            break;
                        case "f":
                            v = 0 !== O && "0" !== O;
                            break;
                        case "1":
                            "~" === e[b + 3] && "2" === e[b + 4] && (v = void 0 !== t[1] && null !== t[1] && void 0 !== t[2] && null !== t[2], b += 2);
                            break;
                        default:
                            i("Found unknown marker", e, t, n, o)
                    }
                    v ? s += e.substring(b + 3, A) : c = !1, b = A;
                    continue
                }
            }
            s += M
        }
        return s
    }

    function o(e, t) {
        return u ? l + "[" + e + "]" : void 0 === t[1] ? e : n(e, t)
    }
    var a = null,
        r = null,
        s = null,
        c = null,
        l = "en",
        d = "en",
        u = !1;
    t.initialize = function(e, t, i, n) {
        return a = t, r = i, s && l === e.language && u === e.chaseText ? n() : (e.language && (l = e.language), u = Boolean(e.chaseText), d = e.failoverLanguage || d, void r.initializeDictionariesAndDiskCache(l, d, function(e, t, i) {
            return e ? n(e) : (s = t, c = i, void n())
        }))
    }, t.getText = function(e) {
        var i = s && s[e];
        return i ? o(i, arguments) : (a.error("getText: no getText was found for", e, "in", l), t.getTextFailover.apply(null, arguments))
    }, t.getTextFailover = function(e) {
        var t = c && c[e];
        return t ? o(t, arguments) : (a.error("getTextFailover: no failover getText was found for", e, "in", d), l + "[?" + e + "]")
    }, t.hasText = function(e) {
        return Boolean(s && s[e] || c && c[e])
    }, t.processText = function(e) {
        return n(e, arguments)
    }, t.processTextWithCallerInfo = function(e, t, i, o) {
        if (!e) return a.error(new Error("text is missing for " + i)), "";
        var r = t;
        r || (a.error(new Error('params is missing for "' + e + '"')), r = []);
        var s = [null].concat(r);
        return n(e, s, null, i, o)
    }, t.processTextWithModifier = function(e, t) {
        return n(e, Array.prototype.slice.call(arguments, 1), t)
    }
}
