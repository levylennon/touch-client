function(e, t, i) {
    function n() {
        this.setEnable(!0)
    }

    function o() {
        this.setEnable(!1)
    }

    function a() {
        this.isEnable() && (this.emit("tapstart"), this.emit("tapend"), this.emit("tap"))
    }

    function r(e, t) {
        function i() {
            var t = b.indexOf(e);
            return t !== -1 && (b.splice(t, 1), window.clearTimeout(_), clearInterval(v), c.removeListener("dom.touchmove", m), c.removeListener("dom.touchend", g), !0)
        }

        function r(t) {
            i() && e.emit("tapend", t)
        }

        function u(t) {
            v = setInterval(function() {
                e.emit("tap")
            }, t)
        }

        function m(t) {
            var i = l(t);
            (i.x < O.left || i.x > O.left + O.width || i.y < O.top || i.y > O.top + O.height) && r(i), e.emit("tapmove", i)
        }

        function M(t) {
            v = null, A = l(t), !w || A.touchCount > 1 || (b.push(e), O = p(e.rootElement), e.emit("tapstart", A, O), window.clearTimeout(_), _ = window.setTimeout(function() {
                T ? u(T) : e.emit("longtap", A) && s()
            }, h), c.on("dom.touchmove", m), c.on("dom.touchend", g), d.recordActivity())
        }

        function g(t) {
            if (i()) {
                var n = l(t);
                if (e.emit("tapend", n), !v) {
                    var o = Date.now();
                    !T && z && y >= o - z ? e.emit("doubletap", n) : e.emit("tap", n) && s(), z = o
                }
            }
        }
        if (!e._tapBehavior) {
            t = t || {}, e._tapBehavior = !0, e.allowDomEvents();
            var _, A, O, v, y = t.doubletapTimeout || f,
                z = 0,
                w = !0,
                T = t.repeatDelay;
            e.enable = n, e.disable = o, e.tap = a, e.cancelTap = r, e.on("dom.touchstart", M), e.setEnable = function(t) {
                "boolean" != typeof t && console.error(new Error("tapBehavior: setEnable has been called with an undefined param")), w = t, e.emit("enable", t)
            }, e.isEnable = function() {
                return w
            }
        }
    }

    function s() {
        for (var e = b.length - 1; e >= 0; e--) b[e].cancelTap()
    }
    var c, l = i(23)
        .getPosition,
        d = i(64),
        u = i(65),
        p = i(66),
        h = 400,
        f = 200,
        b = [];
    e.exports = r, r.initialize = function(e) {
        c = e, u.on("handleTaken", s)
    }
}
