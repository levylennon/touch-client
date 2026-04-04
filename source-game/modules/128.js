function(e, t, i) {
    function n(e, t) {
        if ("number" == typeof e) return e;
        var i = e.length;
        return "%" === e[i - 1] ? t * e.substr(0, i - 1) / 100 : ("px" === e.substr(i - 2) && (e = e.substr(0, i - 2)), e *= 1)
    }

    function o(e, t, i) {
        return e = e.substr(1), e ? t + n(e, i) : t
    }

    function a(e, t, i) {
        var n = (t - i) / 2;
        return o(e, n, t)
    }

    function r(e, t, i) {
        switch (e[0]) {
            case "c":
                return a(e, t, i);
            case "w":
                return o(e, t, t);
            case "h":
                return o(e, t, t);
            default:
                return n(e, t)
        }
    }
    var s = i(54)
        .dimensions;
    t.buildWindowStyleFromInfo = function(e) {
        var t = 0,
            i = 0,
            n = 0,
            o = 0,
            a = s.windowFullScreenWidth || s.screenWidth,
            c = s.windowFullScreenHeight || s.screenHeight;
        if (e.isFullScreen && (a = s.screenWidth, c = s.screenHeight), e.mustAvoidToolbar && (a = s.screenExceptToolbar.width, c = s.screenExceptToolbar.height), e.width) {
            t = r(e.width, a);
            var l = e.maxWidth || a;
            t = l && l < t ? l : t
        }
        if (e.height) {
            i = r(e.height, c);
            var d = Math.min(e.maxHeight || c, c);
            i = Math.min(i, d)
        }
        if (e.minHeight) {
            var u = r(e.minHeight, c);
            i = Math.max(u, i)
        }
        if (e.minWidth) {
            var p = r(e.minWidth, c);
            t = Math.max(p, t)
        }
        var h = e.hasOwnProperty("left");
        if ((h || e.hasOwnProperty("x")) && (n = r(h ? e.left : e.x, a, t)), e.hasOwnProperty("right")) {
            var f = r(e.right, a, t);
            t ? n = a - f - t : t = a - f - n
        }
        var b = e.hasOwnProperty("top");
        if ((b || e.hasOwnProperty("y")) && (o = r(b ? e.top : e.y, c, i)), e.bottom) {
            var m = r(e.bottom, c, i);
            i ? o = c - m - i : i = c - m - o
        }
        return n = Math.min(a - t, Math.max(0, n)), o = Math.max(0, Math.min(c - i, o)), {
            x: Math.round(n),
            y: Math.round(o),
            width: Math.round(t),
            height: Math.round(i)
        }
    }
}
