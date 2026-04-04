function(e, t) {
    function i(e, t) {
        return n(e.length)(e, t)
    }

    function n(e) {
        if (e = 0 | +e, !e) throw new Error("Cannot create a interpolator with no elements");
        if (c[e]) return c[e];
        for (var t = ["var ut = 1 - t", ""], i = e; i--;) {
            for (var n = 0; n < i; n += 1) i + 1 === e ? t.push("var p" + n + " = arr[" + n + "] * ut + arr[" + (n + 1) + "] * t") : i > 1 ? t.push("p" + n + " = p" + n + " * ut + p" + (n + 1) + " * t") : t.push("return p" + n + " * ut + p" + (n + 1) + " * t");
            i > 1 && t.push("")
        }
        return t = ["return function bezier" + e + "(arr, t) {", t.map(function(e) {
                return "  " + e
            })
            .join("\n"), "}"
        ].join("\n"), Function(t)()
    }

    function o(e) {
        return e[0]
    }

    function a(e, t) {
        return e[0] + (e[1] - e[0]) * t
    }

    function r(e, t) {
        var i = 1 - t;
        return (e[0] * i + e[1] * t) * i + (e[1] * i + e[2] * t) * t
    }

    function s(e, t) {
        var i = 1 - t,
            n = e[1] * i + e[2] * t;
        return ((e[0] * i + e[1] * t) * i + n * t) * i + (n * i + (e[2] * i + e[3] * t) * t) * t
    }
    var c = {
        1: o,
        2: a,
        3: r,
        4: s
    };
    e.exports = i, e.exports.prepare = n
}
