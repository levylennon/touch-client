function(e, t) {
    function i(e, t, i) {
        for (var n = t; n <= i; n++) e[n] = !0
    }

    function n(e, t) {
        var i = e.indexOf(c, t + 1);
        return i < 0 ? e.substring(t) : e.substring(t, i + 1)
    }

    function o(e) {
        if (p && e > 255) return !0;
        var t = b[e >> 16];
        if (void 0 === t) return !1;
        var i = t[e >> 8 & 255];
        if (i === !0) return !0;
        if (void 0 === i) return !1;
        for (var n = 0; n < i.length; n++) {
            var o = i[n];
            if (e < o[0]) break;
            if (e <= o[1]) return !0
        }
        return !1
    }

    function a(e) {
        return e > d || !o(e)
    }

    function r(e) {
        return l.indexOf(e) !== -1
    }

    function s(e) {
        var t = e.length;
        if (t < 3 || e[0] !== c || e[t - 1] !== c) return e;
        var i = parseInt(e.substr(1, u), 16);
        if (i.toString(16) !== e.substr(1, t - 2)) return e;
        var n = String.fromCodePoint(i);
        return (i <= 255 ? r(n) : o(i)) ? n : e
    }
    var c = "~",
        l = c + "{}$",
        d = 65535,
        u = 6,
        p = !1,
        h = [],
        f = [],
        b = [h, f],
        m = 65532;
    h[0] = [
        [10, 10],
        [32, 126],
        [160, 255]
    ], h[1] = !0, h[2] = [
        [512, 591]
    ], h[255] = [
        [m, m]
    ], h[4] = !0, h[5] = [
        [1280, 1327]
    ], h[32] = [
        [8217, 8217],
        [8221, 8221]
    ];
    var M = 240,
        g = 246,
        _ = 249,
        A = 249;
    i(f, M, g), i(f, _, A), t.getUnsendableCharacters = function(e, t) {
        p = t && t.allPagesAllowed;
        for (var i = [], n = 0; n < e.length; n++) {
            var a = e.codePointAt(n);
            a > 65535 && n++, o(a) || i.push(String.fromCodePoint(a))
        }
        return i
    }, t.encode = function(e, t) {
        p = t && t.allPagesAllowed;
        for (var i = "", n = 0; n < e.length; n++) {
            var o = e[n];
            if (o.charCodeAt() > 255) {
                var s = e.substr(n, 2),
                    l = s.codePointAt();
                l > 65535 && n++, i += a(l) ? c + l.toString(16) + c : o
            } else i += r(o) ? c + o.charCodeAt()
                .toString(16) + c : o
        }
        return i
    }, t.decode = function(e, t) {
        p = t && t.allPagesAllowed;
        for (var i = "", a = 0; a < e.length; a++) {
            var r = e[a];
            if (r !== c) {
                var l = r.charCodeAt();
                i += o(l) ? r : "�"
            } else {
                var d = n(e, a);
                a += d.length - 1, i += s(d)
            }
        }
        return i
    }
}
