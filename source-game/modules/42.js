function(e, t, i) {
    "use strict";

    function n(e, t, i) {
        var n = {
            Tag: f.getTag,
            NthChild: h.getNthChild,
            Attributes: function(e) {
                return (0, p.getAttributes)(e, i)
            },
            Class: d.getClassSelectors,
            ID: l.getID
        };
        return t.reduce(function(t, i) {
            return t[i] = n[i](e), t
        }, {})
    }

    function o(e, t) {
        var i = e.parentNode,
            n = i.querySelectorAll(t);
        return 1 === n.length && n[0] === e
    }

    function a(e, t) {
        return t.find(o.bind(null, e))
    }

    function r(e, t, i) {
        var n = (0, u.getCombinations)(t, 3),
            o = a(e, n);
        return Boolean(o) ? o : Boolean(i) && (n = n.map(function(e) {
            return i + e
        }), o = a(e, n), Boolean(o)) ? o : null
    }

    function s(e, t, i, a) {
        var s = void 0,
            c = n(e, t, i);
        a && a instanceof RegExp && (c.ID = a.test(c.ID) ? null : c.ID, c.Class = c.Class.filter(function(e) {
            return !a.test(e)
        }));
        var l = !0,
            d = !1,
            u = void 0;
        try {
            for (var p, h = t[Symbol.iterator](); !(l = (p = h.next())
                    .done); l = !0) {
                var f = p.value,
                    b = c.ID,
                    m = c.Tag,
                    M = c.Class,
                    g = c.Attributes,
                    _ = c.NthChild;
                switch (f) {
                    case "ID":
                        if (Boolean(b) && o(e, b)) return b;
                        break;
                    case "Tag":
                        if (Boolean(m) && o(e, m)) return m;
                        break;
                    case "Class":
                        if (Boolean(M) && M.length && (s = r(e, M, m))) return s;
                        break;
                    case "Attributes":
                        if (Boolean(g) && g.length && (s = r(e, g, m))) return s;
                        break;
                    case "NthChild":
                        if (Boolean(_)) return _
                }
            }
        } catch (A) {
            d = !0, u = A
        } finally {
            try {
                !l && h["return"] && h["return"]()
            } finally {
                if (d) throw u
            }
        }
        return "*"
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = t.selectorTypes,
            n = void 0 === i ? ["ID", "Class", "Tag", "NthChild"] : i,
            o = t.attributesToIgnore,
            a = void 0 === o ? ["id", "class", "length"] : o,
            r = t.excludeRegex,
            c = void 0 === r ? null : r,
            l = [],
            d = (0, m.getParents)(e),
            u = !0,
            p = !1,
            h = void 0;
        try {
            for (var f, M = d[Symbol.iterator](); !(u = (f = M.next())
                    .done); u = !0) {
                var g = f.value,
                    _ = s(g, n, a, c);
                Boolean(_) && l.push(_)
            }
        } catch (A) {
            p = !0, h = A
        } finally {
            try {
                !u && M["return"] && M["return"]()
            } finally {
                if (p) throw h
            }
        }
        var O = [],
            v = !0,
            y = !1,
            z = void 0;
        try {
            for (var w, T = l[Symbol.iterator](); !(v = (w = T.next())
                    .done); v = !0) {
                var C = w.value;
                O.unshift(C);
                var I = O.join(" > ");
                if ((0, b.isUnique)(e, I)) return I
            }
        } catch (A) {
            y = !0, z = A
        } finally {
            try {
                !v && T["return"] && T["return"]()
            } finally {
                if (y) throw z
            }
        }
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = c;
    var l = i(43),
        d = i(44),
        u = i(45),
        p = i(46),
        h = i(47),
        f = i(49),
        b = i(50),
        m = i(51)
}
