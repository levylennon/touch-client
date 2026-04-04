function(e, t) {
    function i(e, t) {
        var i = e.toString(16).toUpperCase();
        if (t)
            for (; i.length < t;) i = "0" + i;
        return i
    }

    function n(e) {
        var t = i(e[0], 2),
            n = i(e[1], 2),
            o = i(e[2], 2);
        return "#" + t + n + o
    }

    function o(e) {
        return e = e.substr(1), 3 === e.length ? [parseInt(e[0] + e[0], 16) / 255, parseInt(e[1] + e[1], 16) / 255, parseInt(e[2] + e[2], 16) / 255, 1] : [parseInt(e.substr(0, 2), 16) / 255, parseInt(e.substr(2, 2), 16) / 255, parseInt(e.substr(4, 2), 16) / 255, 1]
    }

    function a(e) {
        var t = e.indexOf("("),
            i = e.indexOf(","),
            n = e.indexOf(",", i + 1),
            o = e.indexOf(",", n + 1),
            a = e.indexOf(")", o + 1);
        return [parseInt(e.substr(t + 1, i), 10) / 255, parseInt(e.substr(i + 1, n), 10) / 255, parseInt(e.substr(n + 1, o), 10) / 255, parseFloat(e.substr(o + 1, a))]
    }

    function r(e) {
        var t = (251658240 & e) >> 24,
            i = (16711680 & e) >> 16,
            n = (65280 & e) >> 8,
            o = 255 & e;
        return {
            index: t,
            color: {
                r: i,
                g: n,
                b: o
            }
        }
    }

    function s(e, t) {
        return e + (t << 24)
    }

    function c(e) {
        for (var t = [], i = 0; i < e.length; i++) t.push(s(e[i], i + 1));
        return t
    }

    function l(e) {
        if ("string" == typeof e) {
            if (0 === e.indexOf("#")) return o(e);
            if (0 === e.indexOf("rgba(")) return a(e)
        }
        return e
    }

    function d(e) {
        var t = null;
        if (e && e.length > 0) {
            t = [null, null, null, null, null, null];
            for (var i = 0; i < e.length; i++) {
                var n = r(e[i]);
                t[n.index] = n.color
            }
        }
        return t
    }

    function u(e, t, i, n) {
        var o = 0;
        return o |= (15 & e) << 24, o |= (255 & t) << 16, o |= (255 & i) << 8, o |= 255 & n
    }

    function p(e) {
        var t = d(e),
            i = [];
        return Object.keys(f)
            .forEach(function(e) {
                i.push(u(e, t[f[e]].r, t[f[e]].g, t[f[e]].b))
            }), i
    }

    function h(e) {
        var t = parseInt(e, 16);
        if (6 === e.length) return {
            r: (16711680 & t) >> 16,
            g: (65280 & t) >> 8,
            b: 255 & t
        };
        if (3 === e.length) {
            var i = (3840 & t) >> 8,
                n = (240 & t) >> 4,
                o = 15 & t;
            return {
                r: i + (i << 4),
                g: n + (n << 4),
                b: o + (o << 4)
            }
        }
        return console.warn("[hexToRgb] Invalid hex value"), null
    }
    var f = {
        1: 3,
        2: 4,
        3: 5
    };
    t.toHexaString = i,
    t.colorArrayToHexa = n,
    t.hexToColorArray = o,
    t.rgbaToColorArray = a,
    t.parseIndexedColor = r,
    t.addIndex = s,
    t.addIndexes = c,
    t.anyToColorArray = l,
    t.parseIndexedColors = d,
    t.getIndexedColor = u,
    t.getMountIndexedColor = p,
    t.hexToRgb = h
}
