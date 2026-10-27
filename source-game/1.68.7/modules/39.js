function(e, t, i) {
    function n(e, t) {
        function i(p) {
            if (void 0 === p) return JSON.stringify("<undefined>");
            if (d && p instanceof d) return JSON.stringify("[DOM Window]");
            if (l && p instanceof l) return JSON.stringify("[DOM Element (" + a(p) + ")]");
            if (c && p instanceof c) return JSON.stringify("[DOM Node (" + p.nodeName + ")]");
            if (s && p instanceof s) return JSON.stringify("[RegExp (" + p.toString() + ")]");
            if (p instanceof n) {
                try {
                    t.error = o.parse(p)
                } catch (h) {
                    "string" == typeof p.stack && (t.error = p.stack.split("\n"))
                }
                return JSON.stringify(p.name + ": " + p.message)
            }
            if (r && p instanceof r) return t.filename = p.filename, t.lineno = e.lineno, t.colno = e.colno || e.column, p.error && (t.error = i(p.error)), i(p.message);
            if (Array.isArray(p)) return u.indexOf(p) !== -1 ? JSON.stringify("[Circular reference]") : (u.push(p), "[" + p.map(i)
                .join(",") + "]");
            if (p && "object" == typeof p) {
                if (u.indexOf(p) !== -1) return JSON.stringify("[Circular reference]");
                u.push(p);
                var f = Object.keys(p);
                return "{" + f.map(function(e) {
                        return JSON.stringify(e) + ":" + i(p[e])
                    })
                    .join(",") + "}"
            }
            return JSON.stringify(p)
        }
        var n = window.Error,
            r = window.ErrorEvent,
            s = window.RegExp,
            c = window.Node,
            l = window.Element,
            d = window.Window,
            u = [];
        return i(e)
    }
    var o = i(40),
        a = i(42);
    e.exports = function(e) {
        for (var t = e.length, i = new Array(t), o = {}, a = 0; a < t; a++) {
            var r = e[a];
            "string" == typeof r ? i[a] = r : i[a] = n(e[a], o)
        }
        var s = i.join(" ");
        return 0 === Object.keys(o)
            .length && (o = null), {
                message: s,
                data: o
            }
    }
}
